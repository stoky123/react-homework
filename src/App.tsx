import NavigationMenu from "./components/NavigationMenu";
import NavItemCreateAccountForm from "./components/NavItemCreateAccountForm";
import NavItemListAccounts from "./components/NavItemListAccounts";
import NavItemTransfer from "./components/NavItemTransfer";
import NavItemWithdraw from "./components/NavItemWithdraw";
import NavItemDeposit from "./components/NavItemDeposit";
import { Account } from "./models/Account";
import { useState } from "react";
import "./App.css";

type AccountState = {
  [id: string]: Account;
};

function App() {
  const [view, setView] = useState<
    "home" | "create" | "list" | "transfer" | "withdraw" | "deposit"
  >("home");

  const [accounts, setAccounts] = useState<AccountState>({});

  function renderView() {
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
