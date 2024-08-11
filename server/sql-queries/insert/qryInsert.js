const qryInsert = (table, valuesObj) => {
  const fields = Object.keys(valuesObj);
  let query = `INSERT INTO ${table} (`;
  let i = 1;

  fields.forEach((field) => {
    if (i === fields.length) {
      query += `${field}`;
    } else {
      query += `${field}, `;
    }
    i += 1;
  });

  const valuesQry = Object.values(valuesObj);
  query += ') VALUES (';
  let j = 1;

  valuesQry.forEach((value) => {
    if (j === valuesQry.length) {
      if (value === 'now()') {
        query += 'now()';
      } else if (value === 'now(6)') {
        query += 'now(6)';
      } else if (value === 'null' || value === null) {
        query += 'null';
      } else {
        query += '?';
      }
    } else if (value === 'now()') {
      query += 'now(), ';
    } else if (value === 'null' || value === null) {
      query += 'null, ';
    } else {
      query += '?, ';
    }
    j += 1;
  });

  query += ');';
  query = query.replace(/[^\x20-\x7E]/g, '');
  const values = [];

  valuesQry.forEach((value) => {
    if (value !== 'now()' && value !== 'null' && value !== null) {
      values.push(value);
    }
  });

  return { query, values };
};

export default qryInsert;
