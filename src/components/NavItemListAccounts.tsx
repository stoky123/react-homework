import type { Account } from "../models/Account";
import { SavingsAccount } from "../models/SavingsAccount";

type Props = {
  accounts: { [id: string]: Account };
};

function NavItemListAccounts({ accounts }: Props) {
  return (
    <ul>
      {Object.values(accounts).map((account) => (
        <li key={account.accountNumber}>
          Account Number: {account.accountNumber}
          Balance: €{account.balance}
          User Name: {account.userName}
          {account instanceof SavingsAccount && (
            <>Interest Rate: {account.interestRate}%</>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavItemListAccounts;
