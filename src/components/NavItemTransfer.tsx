import { useState } from "react";
import { formatAccountNumber } from "../utils/formatters";
import type { AccountState } from "../App";

type Props = {
  accounts: AccountState;
};

function NavItemTransfer({ accounts }: Props) {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState(0);

  function transfer() {
    if (!validateTransferRequest()) {
      alert("Please fill out the fields correctly.");
      return;
    }

    accounts[toAccount].deposit(amount);
    resetForm();
  }

  function validateTransferRequest() {
    return (
      accounts[fromAccount] &&
      accounts[toAccount] &&
      amount > 0 &&
      fromAccount !== toAccount &&
      accounts[fromAccount].withdraw(amount)
    );
  }

  function resetForm() {
    setFromAccount("");
    setToAccount("");
    setAmount(0);
  }

  return (
    <>
      <input
        value={fromAccount}
        onChange={(e) => {
          setFromAccount(formatAccountNumber(e.target.value));
        }}
        placeholder="000-0000000-00"
        maxLength={14}
      />

      <input
        value={toAccount}
        onChange={(e) => {
          setToAccount(formatAccountNumber(e.target.value));
        }}
        placeholder="000-0000000-00"
        maxLength={14}
      />

      <input
        value={amount || ""}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
        type="number"
        placeholder="0"
      />

      <button onClick={transfer}>Transfer</button>
    </>
  );
}

export default NavItemTransfer;
