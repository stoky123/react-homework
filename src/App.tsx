import NavigationMenu from "./components/navbar/NavigationMenu";
import CreateAccountView from "./components/views/create/CreateAccountView";
import AccountListView from "./components/views/list/AccountListView";
import TransferView from "./components/views/transfer/TransferView";
import WithdrawView from "./components/views/withdraw/WithdrawView";
import DepositView from "./components/views/deposit/DepositView";
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
          <CreateAccountView accounts={accounts} setAccounts={setAccounts} />
        );
      case "list":
        return <AccountListView accounts={accounts} />;
      case "transfer":
        return <TransferView accounts={accounts} />;
      case "withdraw":
        return <WithdrawView accounts={accounts} />;
      case "deposit":
        return <DepositView accounts={accounts} />;
      default:
        return <></>;
    }
  }

  return (
    <>
      <NavigationMenu setView={setView} activeView={view} />
      {renderView()}
    </>
  );
}

export default App;
