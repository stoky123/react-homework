import { useState } from "react";
import { formatAccountNumber } from "../utils/formatters";
import type { AccountState } from "../App";

type Props = {
  accounts: AccountState;
};

function NavItemTransfer({ accounts }: Props) {
  const [fromAccountNumber, setFromAccountNumber] = useState("");
  const [toAccountNumber, setToAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);

  function transfer() {
    if (!validateTransferRequest()) {
      alert("Please fill out the fields correctly.");
      return;
    }

    if (!accounts[fromAccountNumber].withdraw(amount)) {
      alert("Not enough balance to deposit.");
      return;
    }

    accounts[toAccountNumber].deposit(amount);
    resetForm();
  }

  function validateTransferRequest() {
    return (
      accounts[fromAccountNumber] &&
      accounts[toAccountNumber] &&
      amount > 0 &&
      fromAccountNumber !== toAccountNumber
    );
  }

  function resetForm() {
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
      <input
        value={fromAccountNumber}
        onChange={(e) => {
          setFromAccountNumber(formatAccountNumber(e.target.value));
        }}
        placeholder="000-0000000-00"
        maxLength={14}
      />

      <span>Receiver account number</span>
      <input
        value={toAccountNumber}
        onChange={(e) => {
          setToAccountNumber(formatAccountNumber(e.target.value));
        }}
        placeholder="000-0000000-00"
        maxLength={14}
      />

      <span>Amount (€)</span>
      <input
        value={amount || ""}
        onChange={(e) => {
          setAmount(Number(e.target.valueAsNumber.toFixed(2)));
        }}
        type="number"
        placeholder="0"
      />

      <button type="submit">Transfer</button>
    </form>
  );
}

export default NavItemTransfer;
