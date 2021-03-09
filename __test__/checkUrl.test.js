import { checkUrl } from "../src/client/js/urlChecker.js";

describe("url test", () => {
  test("test", () => {
    const input = "https://www.google.com";
    expect(checkUrl(input)).toBe(true);
  });
  test("test", () => {
    const input = "http://www.google.com";
    expect(checkUrl(input)).toBe(true);
  });
});

describe("url test2", () => {
  test("test", () => {
    const input = "www.google.com";
    expect(checkUrl(input)).toBe(false);
  });
  test("test", () => {
    const input = "google.com";
    expect(checkUrl(input)).toBe(false);
  });
  test("should return false", () => {
    const input = "google . co . kr";
    expect(checkUrl(input)).toBe(false);
  });
});
