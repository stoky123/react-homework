import { useState } from "react";
import { Account } from "../models/Account";
import { formatAccountNumber } from "../utils/formatters";

type Props = {
  accounts: { [id: string]: Account };
};

function NavItemDeposit({ accounts }: Props) {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState(0);

  function deposit() {
    if (!validateDepositRequest()) {
      alert("Account number or amount is invalid.");
      return;
    }

    accounts[account].deposit(amount);
    resetForm();
  }

  function validateDepositRequest(): boolean {
    return accounts[account] && amount > 0;
  }

  function resetForm() {
    setAccount("");
    setAmount(0);
  }

  return (
    <>
      <input
        value={account}
        onChange={(e) => {
          setAccount(formatAccountNumber(e.target.value));
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

      <button onClick={deposit}>Deposit</button>
    </>
  );
}

export default NavItemDeposit;
