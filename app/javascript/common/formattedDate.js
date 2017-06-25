const formattedDate = date => {
  const formatted = new Date(date);
  return formatted.toDateString();
};

export default formattedDate;
