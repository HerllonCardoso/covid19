export const formatNumber = (number, country = "PT-BR") => {
  if (isNaN(number)) return "";

  return new Intl.NumberFormat(country).format(number);
};
