import { SavingsAccount } from "../../models/SavingsAccount";

describe("creating", () => {
  test("after creating balance is 0", () => {
    const account = new SavingsAccount("123-1234567-12", "Test Name", 0, 0);

    expect(account.balanceAmount).toBe(0);
  });
});

describe("withdraw", () => {
  test("withdraw can't go under 0", () => {
    const account = new SavingsAccount("123-1234567-12", "Test Name", 0, 0);

    const didWithDrawHappen = account.withdraw(1);

    expect(account.balanceAmount).toBe(0);
    expect(didWithDrawHappen).toBe(false);
  });
});
