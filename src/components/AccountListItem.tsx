import type { Account } from "../models/Account";
import { SavingsAccount } from "../models/SavingsAccount";

type Props = {
  account: Account;
};

function AccountListItem({ account }: Props) {
  return (
    <li>
      <div>Account Type: {account.getType()}</div>
      <div>Account Number: {account.accountNumber}</div>
      <div>Balance: €{account.balance}</div>
      <div>User Name: {account.userName}</div>
      {account instanceof SavingsAccount && (
        <div>Interest Rate: {account.interestRate}%</div>
      )}
    </li>
  );
}

export default AccountListItem;
