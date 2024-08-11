const parseColumn = (column) => {
  if (!column) return `*`;
  return column instanceof Array && column.length > 0 ? column.join(',') : column;
};

const parseSort = (sort) => {
  if (!sort) return ``;
  return sort instanceof Array && sort.length > 0
    ? `ORDER BY ${sort.join(',')}`
    : `ORDER BY ${sort}`;
};

const parseTable = (table) => {
  if (!table) return ``;
  return table instanceof Array && table.length > 0 ? table.join(' JOIN ') : table;
};

const parseGroup = (group) => {
  if (!group) return ``;
  return group instanceof Array && group.length > 0
    ? `GROUP BY ${group.join(' AND ')}`
    : `GROUP BY ${group}`;
};

const parseWhere = (where) => {
  let whereString = ``;
  const replacements = [];
  if (!where) return [``, []];
  where.forEach((opt) => {
    const [field, operand, value] = opt;
    whereString += ` AND ${field} ${value instanceof Array ? `IN (?)` : `${operand} ?`} `;
    replacements.push(value);
  });
  return [whereString, replacements];
};

/**
 * Select Query Builder
 * @param {*} options - List of Params:
 * * table - can be array (multiple tables) or string. Ex. ['table1', 'table2'] || table1
 * * column - can be array(multiple coluimns) or default '*'.
 * * where - array. 0 = field, 1 = operand, 2 = value can be array if multiple values per field.
 * * sort - can be array (multiple sort) or string. Ex. ['field asc', 'field desc'] || field asc
 * * group - can be array (multiple group) or string. Ex. ['field', 'field'] || field
 * * limit - int
 * * offset - int
 * @returns [query, replacements]
 * * query = raw SQL Query
 * * replacements = list of the values
 */
const qryGet = (
  options = { table: [], column: '*', where: [], sort: [], group: [], limit: null, offset: null },
) => {
  const columnString = parseColumn(options?.column);
  const sortString = parseSort(options?.sort);
  const tableString = parseTable(options?.table);
  const groupString = parseGroup(options?.group);
  const [whereString, replacements] = parseWhere(options?.where);

  const query = `
    SELECT
    ${columnString}
    FROM
    ${tableString}
    WHERE true
    ${whereString}
    ${groupString}
    ${sortString}
    ${options.limit ? `LIMIT ${options.limit}` : ``}
    ${options.offset ? `OFFSET ${options.offset}` : ``}
    `.replace(/[^\x20-\x7E]/g, '');
  return [query, replacements];
};

export default qryGet;
