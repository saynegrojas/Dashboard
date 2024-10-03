export const formatDOB = (isoDate) => {
  const date = new Date(isoDate); // Convert to Date object
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date); // Format the date
};
