import React from "react";

type Props = {
  setView: React.Dispatch<
    React.SetStateAction<
      "create" | "home" | "list" | "transfer" | "withdraw" | "deposit"
    >
  >;
};

type NavItem = {
  label: string;
  action: () => void;
};

function NavigationMenu({ setView }: Props) {
  const navItems: NavItem[] = [
    {
      label: "Create Account",
      action: () => {
        setView("create");
      },
    },
    {
      label: "List Accounts",
      action: () => {
        setView("list");
      },
    },
    {
      label: "Transfer",
      action: () => {
        setView("transfer");
      },
    },
    {
      label: "Withdraw",
      action: () => {
        setView("withdraw");
      },
    },
    { label: "Deposit", action: () => {} },
  ];

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.label} onClick={item.action}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationMenu;
