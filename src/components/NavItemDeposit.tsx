import { useState } from "react";
import { Account } from "../models/Account";

type Props = {
  accounts: { [id: string]: Account };
};

function NavItemDeposit({ accounts }: Props) {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState(0);

  function deposit() {
    accounts[account].deposit(amount);
    setAccount("");
    setAmount(0);
  }

  return (
    <>
      <input
        value={account}
        onChange={(e) => {
          setAccount(e.target.value);
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
      <button onClick={deposit}>Deposit</button>
    </>
  );
}

export default NavItemDeposit;
