import { useState } from "react";
import AccountNumberInputField from "../../shared/AccountNumberInputField";
import type { AccountState } from "../../../App";

type Props = {
  accounts: AccountState;
};

function NavItemWithdraw({ accounts }: Props) {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);

  function withdraw() {
    const errorMessage = getWithdrawRequestErrorMessage();
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    if (!accounts[accountNumber].withdraw(amount)) {
      alert("Not enough balance to withdraw.");
      return;
    }

    resetForm();
  }

  function getWithdrawRequestErrorMessage(): string {
    if (!Boolean(accounts[accountNumber]))
      return "Account with this account number does not exist.";

    return "";
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
      <AccountNumberInputField
        name="withdraw-account-number"
        accountNumberState={accountNumber}
        accountNumberStateSetter={setAccountNumber}
      />

      <span>Amount (€)</span>
      <input
        name="withdraw-amount"
        value={amount}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
        type="number"
      />

      <button type="submit">Withdraw</button>
    </form>
  );
}

export default NavItemWithdraw;
