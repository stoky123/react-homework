export function formatAccountNumber(accountNumber: string) {
  const digits = accountNumber.replace(/\D/g, "");

  let formattedAccountNumber = "";

  if (digits.length <= 3) {
    formattedAccountNumber = digits;
  } else if (digits.length <= 10) {
    formattedAccountNumber = digits.slice(0, 3) + "-" + digits.slice(3);
  } else {
    formattedAccountNumber =
      digits.slice(0, 3) + "-" + digits.slice(3, 10) + "-" + digits.slice(10);
  }

  return formattedAccountNumber;
}
