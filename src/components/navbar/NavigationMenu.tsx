import React from "react";
import type { View } from "../../App";
import "./NavigationMenu.css";

const navItems: NavItem[] = [
  {
    label: "Create Account",
    view: "create",
  },
  {
    label: "List Accounts",
    view: "list",
  },
  {
    label: "Transfer",
    view: "transfer",
  },
  {
    label: "Withdraw",
    view: "withdraw",
  },
  {
    label: "Deposit",
    view: "deposit",
  },
];

type Props = {
  setView: React.Dispatch<React.SetStateAction<View>>;
};

type NavItem = {
  label: string;
  view: string;
};

let activeView: string = "";

function NavigationMenu({ setView }: Props) {
  return (
    <nav className="mini-bank-navbar">
      <ul className="mini-bank-navbar-list">
        {navItems.map((item) => (
          <li
            key={item.label}
            className={
              activeView === item.view
                ? "mini-bank-navbar-list-item mini-bank-active-view-button"
                : "mini-bank-navbar-list-item"
            }
            onClick={() => {
              activeView = item.view;
              setView(item.view as View);
            }}
          >
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationMenu;
