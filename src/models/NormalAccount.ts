import { Account } from "./Account";

export class NormalAccount extends Account {
  private minBalance = -500;

  constructor(accountNumber: string, userName: string, balance: number) {
    super(accountNumber, userName, balance + 10);
  }

  withdraw(amount: number): boolean {
    if (this.balance - amount < this.minBalance) {
      return false;
    }

    this.balance -= amount;
    return true;
  }
}
