import { useState } from "react";
import AccountNumberInputField from "../../shared/AccountNumberInputField";
import type { AccountState } from "../../../App";

type Props = {
  accounts: AccountState;
};

function DepositView({ accounts }: Props) {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);

  function deposit(): void {
    const errorMessage = getDepositRequestErrorMessage();
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    accounts[accountNumber].deposit(amount);
    resetForm();
  }

  function getDepositRequestErrorMessage(): string {
    if (!accounts[accountNumber]) return "Account does not exits.";
    if (amount <= 0) return "Deposit amount should be greater than 0.";

    return "";
  }

  function resetForm(): void {
    setAccountNumber("");
    setAmount(0);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        deposit();
      }}
    >
      <span>Account number</span>
      <AccountNumberInputField
        name="deposit-account-number"
        accountNumberState={accountNumber}
        accountNumberStateSetter={setAccountNumber}
      />

      <span>Amount (€)</span>
      <input
        name="deposit-amount"
        value={amount}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
        type="number"
      />

      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositView;
