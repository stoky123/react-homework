export type AccountType = "normal" | "savings";

export abstract class Account {
  public readonly accountNumber: string;
  public readonly userName: string;
  protected balance: number;

  constructor(accountNumber: string, userName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.userName = userName;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  abstract withdraw(amount: number): boolean;

  abstract getType(): AccountType;

  get balanceAmount(): number {
    return this.balance;
  }
}
