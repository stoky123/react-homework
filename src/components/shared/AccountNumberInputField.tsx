import { formatAccountNumber } from "../../utils/formatters";

type Props = {
  accountNumberState: string;
  accountNumberStateSetter: (
    formattedAccountNumber: React.SetStateAction<string>,
  ) => void;
  name: string;
};

function AccountNumberInputField({
  accountNumberState,
  accountNumberStateSetter,
  name,
}: Props) {
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    accountNumberStateSetter(formatAccountNumber(event.target.value));
  }

  return (
    <input
      name={name}
      value={accountNumberState}
      onChange={handleChange}
      placeholder="000-0000000-00"
      maxLength={14}
    />
  );
}

export default AccountNumberInputField;
