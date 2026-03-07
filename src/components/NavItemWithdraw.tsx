import { useState } from "react";
import { Account } from "../models/Account";

type Props = {
  accounts: { [id: string]: Account };
};

function NavItemWithdraw({ accounts }: Props) {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState(0);

  function withdraw() {
    if (accounts[account].withdraw(amount)) {
      setAccount("");
      setAmount(0);

      return true;
    }

    alert("Not enough balance to withdraw");

    return false;
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
      <button onClick={withdraw}>Withdraw</button>
    </>
  );
}

export default NavItemWithdraw;
