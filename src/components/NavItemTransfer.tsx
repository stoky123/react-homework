import { useState } from "react";
import { Account } from "../models/Account";

type Props = {
  accounts: { [id: string]: Account };
};

function NavItemTransfer({ accounts }: Props) {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState(0);

  function transfer() {
    if (accounts[fromAccount].withdraw(amount)) {
      accounts[toAccount].deposit(amount);

      setFromAccount("");
      setToAccount("");
      setAmount(0);

      return true;
    }

    alert("Not enough balance to transfer");

    return false;
  }

  return (
    <>
      <input
        value={fromAccount}
        onChange={(e) => {
          setFromAccount(e.target.value);
        }}
        placeholder="Account number"
      />
      <input
        value={toAccount}
        onChange={(e) => {
          setToAccount(e.target.value);
        }}
        placeholder="Account number"
      />
      <input
        value={amount || ""}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
        placeholder="Amount"
      />
      <button onClick={transfer}>Transfer</button>
    </>
  );
}

export default NavItemTransfer;
