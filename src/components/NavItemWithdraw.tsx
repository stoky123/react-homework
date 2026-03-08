import { useState } from "react";
import { formatAccountNumber } from "../utils/formatters";
import type { AccountState } from "../App";

type Props = {
  accounts: AccountState;
};

function NavItemWithdraw({ accounts }: Props) {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);

  function withdraw() {
    if (!validateWithdrawRequest()) {
      alert("Please fill out the fields correctly.");
    }

    if (!accounts[accountNumber].withdraw(amount)) {
      alert("Not enough balance to withdraw.");
    }

    resetForm();
  }

  function validateWithdrawRequest() {
    return Boolean(accounts[accountNumber]);
  }

  function resetForm() {
    setAccountNumber("");
    setAmount(0);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        withdraw();
      }}
    >
      <span>Account number</span>
      <input
        name="withdraw-account-number"
        value={accountNumber}
        onChange={(e) => {
          setAccountNumber(formatAccountNumber(e.target.value));
        }}
        placeholder="000-0000000-00"
        maxLength={14}
      />

      <span>Amount (€)</span>
      <input
        name="withdraw-amount"
        value={amount || ""}
        onChange={(e) => {
          setAmount(Number(e.target.valueAsNumber.toFixed(2)));
        }}
        type="number"
        placeholder="0"
      />

      <button type="submit">Withdraw</button>
    </form>
  );
}

export default NavItemWithdraw;
