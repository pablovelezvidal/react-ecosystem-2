import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompletedTodos selector", () => {
  it("Returns only completed todos", () => {
    const fakeTodos = [
      { text: "hola mundo", isCompleted: false },
      { text: "hola marte", isCompleted: true },
    ];

    const expected = [{ text: "hola marte", isCompleted: true }];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
