import { score } from "../src/client/js/formHandler";

describe("test score function", () => {
  test("test", () => {
    const score_tag = "P+" || "P";
    expect(score(score_tag)).toBe("긍정적");
  });
  test("test", () => {
    const score_tag = "N+" || "N";
    expect(score(score_tag)).toBe("부정적");
  });
  test("test", () => {
    const score_tag = "NEU";
    expect(score(score_tag)).toBe("중립");
  });
  test("test", () => {
    const score_tag = "NONE";
    expect(score(score_tag)).toBe("미확인");
  });
});
