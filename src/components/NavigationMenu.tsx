import React from "react";
import type { View } from "../App";

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

function NavigationMenu({ setView }: Props) {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li
            key={item.label}
            onClick={() => {
              setView(item.view as View);
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationMenu;
