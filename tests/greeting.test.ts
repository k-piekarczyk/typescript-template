import { createGreeting } from "../src/greeting";

describe("Testing the greeting file", () => {
  test("should create a correct greeting", () => {
    expect(createGreeting("a")).toEqual("Hello a!");
  });
});
