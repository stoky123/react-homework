export type AccountType = "normal" | "savings";

export abstract class Account {
  public accountNumber: number;
  public userName: string;
  public balance: number;

  constructor(accountNumber: number, userName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.userName = userName;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  abstract withdraw(amount: number): boolean;
}
