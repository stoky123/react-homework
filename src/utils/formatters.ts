export function formatAccountNumber(accountNumber: string): string {
  const digits = accountNumber.replace(/\D/g, "");

  if (digits.length <= 3) {
    return digits;
  } else if (digits.length <= 10) {
    return digits.slice(0, 3) + "-" + digits.slice(3);
  } else {
    return (
      digits.slice(0, 3) + "-" + digits.slice(3, 10) + "-" + digits.slice(10)
    );
  }
}
