import {
  dateFormat,
  moneyFormat,
  numberFormat,
  phoneFormat,
  identityFormat,
  emailFormat,
} from "../src/index.js";

describe("测试", () => {
  it("测试dateFormat", () => {
    expect(dateFormat("2022/01/02")).toBe("2022-01-02");
  });

  it("测试moneyFormat", () => {
    expect(moneyFormat("10000")).toBe("10,000.00");
  });

  it("测试numberFormat", () => {
    expect(numberFormat("10000")).toBe("10,000");
  });

  it("测试phoneFormat", () => {
    expect(phoneFormat("17612341234")).toBe("176****1234");
  });

  it("测试identityFormat", () => {
    expect(identityFormat("330921199110253510")).toBe("330***********3510");
  });

  it("测试emailFormat", () => {
    expect(emailFormat("1234abcdefg@163.com")).toBe("123****@163.com");
  });
});
