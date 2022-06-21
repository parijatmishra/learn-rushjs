import { greet } from "./main";

test("Should return greeting with specified name", () => {
  expect(greet("foo")).toBe("Hello, foo!");
});

test("Should return greeting with default name", () => {
  expect(greet()).toBe("Hello, stranger!");
});

test("Should return greeting with default name", () => {
  expect(greet("")).toBe("Hello, stranger!");
});
