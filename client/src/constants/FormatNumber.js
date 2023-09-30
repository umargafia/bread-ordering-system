function formatNumberWithCommas(number) {
  // Convert the number to a string and split it into integer and decimal parts
  const [integerPart, decimalPart] = number.toString().split('.');

  // Add commas to the integer part
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  );

  // Combine the formatted integer part and the decimal part (if any)
  const formattedNumber = decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;

  return formattedNumber;
}

export default formatNumberWithCommas;
