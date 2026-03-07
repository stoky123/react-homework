export type AccountType = "normal" | "savings";

export abstract class Account {
  public accountNumber: string;
  public userName: string;
  public balance: number;

  constructor(accountNumber: string, userName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.userName = userName;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  abstract withdraw(amount: number): boolean;
}
