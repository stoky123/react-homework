import NavigationMenu from "./components/NavigationMenu";
import NavItemCreateAccountForm from "./components/NavItemCreateAccountForm";
import { Account } from "./models/Account";
import { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState<
    "home" | "create" | "list" | "withdraw" | "deposit"
  >("home");

  const [accounts, setAccounts] = useState<Account[]>([]);

  function renderView() {
    switch (view) {
      case "create":
        return (
          <NavItemCreateAccountForm
            accounts={accounts}
            setAccounts={setAccounts}
          />
        );
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
