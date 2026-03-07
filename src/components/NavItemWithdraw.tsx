import { useState } from "react";
import { Account } from "../models/Account";
import { formatAccountNumber } from "../utils/formatters";

type Props = {
  accounts: { [id: string]: Account };
};

function NavItemWithdraw({ accounts }: Props) {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState(0);

  function withdraw() {
    if (!validateWithdrawRequest()) {
      alert("Please fill out the fields correctly.");
    }

    resetForm();
  }

  function validateWithdrawRequest() {
    return accounts[account] && accounts[account].withdraw(amount);
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

      <button onClick={withdraw}>Withdraw</button>
    </>
  );
}

export default NavItemWithdraw;
