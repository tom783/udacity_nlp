import { checkScore } from "../src/client/js/formHandler";

describe("test score function", () => {
  test("test", () => {
    const score = "P+" || "P";
    expect(checkScore(score)).toBe("긍정적");
  });
  test("test", () => {
    const score = "N+" || "N";
    expect(checkScore(score)).toBe("부정적");
  });
  test("test", () => {
    const score = "NEU";
    expect(checkScore(score)).toBe("중립");
  });
  test("test", () => {
    const score = "NONE";
    expect(checkScore(score)).toBe("미확인");
  });
});
