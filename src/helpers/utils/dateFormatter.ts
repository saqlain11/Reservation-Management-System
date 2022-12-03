const dateFormatter = (date: string): string => {
  const formattedtDate = new Date(date).toLocaleDateString("en-GB");
  return formattedtDate;
};
export { dateFormatter };
