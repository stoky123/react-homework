import type { AccountState } from "../App";
import AccountListItem from "./AccountListItem";

type Props = {
  accounts: AccountState;
};

function NavItemListAccounts({ accounts }: Props) {
  if (!Object.keys(accounts).length) {
    return <p>No accounts created yet.</p>;
  }

  return (
    <ul>
      {Object.values(accounts)
        .sort((a, b) => a.accountNumber.localeCompare(b.accountNumber))
        .map((account) => (
          <AccountListItem key={account.accountNumber} account={account} />
        ))}
    </ul>
  );
}

export default NavItemListAccounts;
