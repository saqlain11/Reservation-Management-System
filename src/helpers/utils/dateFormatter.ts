const dateFormatter = (date: string): string => {
  const formattedtDate = new Date(date).toLocaleString("en-GB");
  return formattedtDate;
};
export { dateFormatter };
