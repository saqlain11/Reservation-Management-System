const dateFormatter = (date: string): string => {
  const formattedtDate = new Date(date).toUTCString();
  return formattedtDate;
};
export { dateFormatter };
