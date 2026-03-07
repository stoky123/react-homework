import { useState } from "react";
import { NormalAccount } from "../models/NormalAccount";
import { SavingsAccount } from "../models/SavingsAccount";
import type { Account, AccountType } from "../models/Account";
import { formatAccountNumber } from "../utils/formatters";

type Props = {
  accounts: { [id: string]: Account };
  setAccounts: React.Dispatch<React.SetStateAction<{ [id: string]: Account }>>;
};

function NavItemCreateAccountForm({ accounts, setAccounts }: Props) {
  const [accountType, setAccountType] = useState<AccountType>("normal");
  const [accountNumber, setAccountNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [balance, setBalance] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  function createAccount() {
    if (!validateAccountCreation()) {
      alert("Please fill out the fields correctly!");
      return;
    }

    setAccounts((prev) => ({ ...prev, [accountNumber]: buildAccount() }));
    resetForm();
  }

  function buildAccount(): Account {
    let newAccount: Account;
    if (accountType === "normal") {
      newAccount = new NormalAccount(accountNumber, userName, balance);
    } else {
      newAccount = new SavingsAccount(
        accountNumber,
        userName,
        balance,
        interestRate,
      );
    }

    return newAccount;
  }

  function validateAccountCreation() {
    return (
      !accounts[accountNumber] &&
      accountNumber.length == 14 &&
      userName &&
      (accountType === "normal"
        ? balance >= -510
        : balance >= 0 && interestRate >= 0)
    );
  }

  function resetForm() {
    setAccountType("normal");
    setAccountNumber("");
    setUserName("");
    setBalance(0);
    setInterestRate(0);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createAccount();
      }}
    >
      <select
        value={accountType}
        onChange={(event) => setAccountType(event.target.value as AccountType)}
      >
        <option value="normal">Normal Account</option>
        <option value="savings">Savings Account</option>
      </select>

      <input
        value={accountNumber}
        onChange={(e) => {
          setAccountNumber(formatAccountNumber(e.target.value));
        }}
        placeholder="000-0000000-00"
        maxLength={14}
      />

      <input
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="User Name"
      />

      <input
        value={balance || ""}
        onChange={(e) => {
          setBalance(Number(e.target.value));
        }}
        type="number"
        placeholder="0"
      />

      {accountType === "savings" && (
        <input
          value={interestRate || ""}
          onChange={(e) => {
            setInterestRate(Number(e.target.value));
          }}
          type="number"
          placeholder="0"
        />
      )}

      <button type="submit">Create</button>
    </form>
  );
}

export default NavItemCreateAccountForm;
