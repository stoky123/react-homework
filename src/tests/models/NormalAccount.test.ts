import { NormalAccount } from "../../models/NormalAccount";

describe("creating", () => {
  test("creating adds 10 to the balance", () => {
    const account = new NormalAccount("123-1234567-12", "Test Name", 0);

    expect(account.balanceAmount).toBe(10);
  });
});

describe("deposit", () => {
  test("deposit adds to the balance", () => {
    const account = new NormalAccount("123-1234567-12", "Test Name", 0);

    account.deposit(500);

    expect(account.balanceAmount).toBe(510);
  });
});

describe("withdraw", () => {
  (test("withdraw removes from the balance", () => {
    const account = new NormalAccount("123-1234567-12", "Test Name", 0);

    const didWithDrawHappen = account.withdraw(500);

    expect(account.balanceAmount).toBe(-490);
    expect(didWithDrawHappen).toBe(true);
  }),
    test("withdraw can't go under -500", () => {
      const account = new NormalAccount("123-1234567-12", "Test Name", 0);

      const didWithDrawHappen = account.withdraw(511);

      expect(account.balanceAmount).toBe(10);
      expect(didWithDrawHappen).toBe(false);
    }));
});
