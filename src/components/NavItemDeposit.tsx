import { useState } from "react";
import { Account } from "../models/Account";
import { formatAccountNumber } from "../utils/formatters";

type Props = {
  accounts: { [id: string]: Account };
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
      <input
        value={accountNumber}
        onChange={(e) => {
          setAccountNumber(formatAccountNumber(e.target.value));
        }}
        placeholder="000-0000000-00"
        maxLength={14}
      />

      <input
        value={amount || ""}
        onChange={(e) => {
          setAmount(e.target.valueAsNumber);
        }}
        type="number"
        placeholder="0"
      />

      <button type="submit">Deposit</button>
    </form>
  );
}

export default NavItemDeposit;
