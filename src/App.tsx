import NavigationMenu from "./components/navbar/NavigationMenu";
import NavItemCreateAccountForm from "./components/views/create/NavItemCreateAccountForm";
import NavItemListAccounts from "./components/views/list/NavItemListAccounts";
import NavItemTransfer from "./components/views/transfer/NavItemTransfer";
import NavItemWithdraw from "./components/views/withdraw/NavItemWithdraw";
import NavItemDeposit from "./components/views/deposit/NavItemDeposit";
import { Account } from "./models/Account";
import { useState, type JSX } from "react";
import "./App.css";

export type AccountState = {
  [id: string]: Account;
};

export type View =
  | "create"
  | "home"
  | "list"
  | "transfer"
  | "withdraw"
  | "deposit";

function App() {
  const [view, setView] = useState<View>("home");
  const [accounts, setAccounts] = useState<AccountState>({});

  function renderView(): JSX.Element {
    switch (view) {
      case "create":
        return (
          <NavItemCreateAccountForm
            accounts={accounts}
            setAccounts={setAccounts}
          />
        );
      case "list":
        return <NavItemListAccounts accounts={accounts} />;
      case "transfer":
        return <NavItemTransfer accounts={accounts} />;
      case "withdraw":
        return <NavItemWithdraw accounts={accounts} />;
      case "deposit":
        return <NavItemDeposit accounts={accounts} />;
      default:
        return <></>;
    }
  }

  return (
    <>
      <NavigationMenu setView={setView} />
      {renderView()}
    </>
  );
}

export default App;
