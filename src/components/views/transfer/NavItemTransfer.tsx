import { useState } from "react";
import AccountNumberInputField from "../../shared/AccountNumberInputField";
import type { AccountState } from "../../../App";

type Props = {
  accounts: AccountState;
};

function NavItemTransfer({ accounts }: Props) {
  const [fromAccountNumber, setFromAccountNumber] = useState("");
  const [toAccountNumber, setToAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);

  function transfer(): void {
    const errorMessage = getTransferRequestErrorMessage();
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    if (!accounts[fromAccountNumber].withdraw(amount)) {
      alert("Not enough balance to transfer.");
      return;
    }

    accounts[toAccountNumber].deposit(amount);
    resetForm();
  }

  function getTransferRequestErrorMessage(): string {
    if (!accounts[fromAccountNumber]) return "Sender account does not exist.";
    if (!accounts[toAccountNumber]) return "Receiver account does not exist.";
    if (amount <= 0) return "Transfer amount should be greater than 0.";
    if (fromAccountNumber === toAccountNumber)
      return "Sender and receiver accounts can't be the same.";

    return "";
  }

  function resetForm(): void {
    setFromAccountNumber("");
    setToAccountNumber("");
    setAmount(0);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        transfer();
      }}
    >
      <span>Sender account number</span>
      <AccountNumberInputField
        name="transfer-from-account"
        accountNumberState={fromAccountNumber}
        accountNumberStateSetter={setFromAccountNumber}
      />

      <span>Receiver account number</span>
      <AccountNumberInputField
        name="transfer-to-account"
        accountNumberState={toAccountNumber}
        accountNumberStateSetter={setToAccountNumber}
      />

      <span>Amount (€)</span>
      <input
        name="transfer-amount"
        value={amount}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
        type="number"
      />

      <button type="submit">Transfer</button>
    </form>
  );
}

export default NavItemTransfer;
