import type { Account } from "../models/Account";

type Props = {
  accounts: { [id: string]: Account };
};

function NavItemListAccounts({ accounts }: Props) {
  return (
    <ul>
      {Object.values(accounts).map((account) => (
        <li key={account.accountNumber}>
          Account Number: {account.accountNumber}
          Balance: {account.balance}
          User Name: {account.userName}
        </li>
      ))}
    </ul>
  );
}

export default NavItemListAccounts;
