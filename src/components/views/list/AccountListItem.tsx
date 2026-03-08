import type { Account } from "../../../models/Account";
import { SavingsAccount } from "../../../models/SavingsAccount";
import "./AccountListItem.css";

type Props = {
  account: Account;
};

function AccountListItem({ account }: Props) {
  return (
    <li className="account-list-item">
      <div className="account-list-item-info">
        <div>Account Type:</div>
        <div>{account.getType()}</div>
      </div>

      <div className="account-list-item-info">
        <div>Account Number:</div>
        <div>{account.accountNumber}</div>
      </div>

      <div className="account-list-item-info">
        <div>Balance:</div>
        <div>€{account.balanceAmount}</div>
      </div>

      <div className="account-list-item-info">
        <div>User Name:</div>
        <div>{account.userName}</div>
      </div>

      {account instanceof SavingsAccount && (
        <>
          <div className="account-list-item-info">
            <div>Interest Rate:</div>
            <div>{account.interestRate}%</div>
          </div>
        </>
      )}
    </li>
  );
}

export default AccountListItem;
