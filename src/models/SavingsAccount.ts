import { Account, type AccountType } from "./Account";

export class SavingsAccount extends Account {
  public interestRate: number;

  constructor(
    accountNumber: string,
    userName: string,
    balance: number,
    interestRate: number,
  ) {
    super(accountNumber, userName, balance);
    this.interestRate = interestRate;
  }

  withdraw(amount: number): boolean {
    if (this.balance - amount < 0) {
      return false;
    }

    this.balance -= amount;
    return true;
  }

  getType(): AccountType {
    return "savings";
  }
}
