import { useState } from "react";
import { formatAccountNumber } from "../utils/formatters";
import type { AccountState } from "../App";

type Props = {
  accounts: AccountState;
};

function NavItemDeposit({ accounts }: Props) {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);

  function deposit() {
    if (!validateDepositRequest()) {
      alert("Account number or amount is invalid.");
      return;
    }

    accounts[accountNumber].deposit(amount);
    resetForm();
  }

  function validateDepositRequest(): boolean {
    return accounts[accountNumber] && amount > 0;
  }

  function resetForm() {
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
      <input
        name="deposit-account-number"
        value={accountNumber}
        onChange={(e) => {
          setAccountNumber(formatAccountNumber(e.target.value));
        }}
        placeholder="000-0000000-00"
        maxLength={14}
      />

      <span>Amount (€)</span>
      <input
        name="deposit-amount"
        value={amount || ""}
        onChange={(e) => {
          setAmount(Number(e.target.valueAsNumber.toFixed(2)));
        }}
        type="number"
        placeholder="0"
      />

      <button type="submit">Deposit</button>
    </form>
  );
}

export default NavItemDeposit;
