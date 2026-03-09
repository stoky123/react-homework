import type { AccountState } from "../../../App";
import AccountListItem from "./AccountListItem";
import "./AccountListView.css";

type Props = {
  accounts: AccountState;
};

function AccountListView({ accounts }: Props) {
  if (!Object.keys(accounts).length) {
    return <p className="account-list-no-accounts">No accounts created yet.</p>;
  }

  return (
    <ul className="account-list">
      {Object.values(accounts)
        .sort((a, b) => a.accountNumber.localeCompare(b.accountNumber))
        .map((account) => (
          <AccountListItem key={account.accountNumber} account={account} />
        ))}
    </ul>
  );
}

export default AccountListView;
