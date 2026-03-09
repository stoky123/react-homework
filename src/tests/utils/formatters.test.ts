import { formatAccountNumber } from "../../utils/formatters";

describe("testing account number formatting", () => {
  test("account number length < 4", () => {
    expect(formatAccountNumber("123")).toBe("123");
  });

  test("account number length > 4 and < 11", () => {
    expect(formatAccountNumber("1231234567")).toBe("123-1234567");
    expect(formatAccountNumber("1231")).toBe("123-1");
  });

  test("account number length > 11", () => {
    expect(formatAccountNumber("12312345671")).toBe("123-1234567-1");
  });
});
