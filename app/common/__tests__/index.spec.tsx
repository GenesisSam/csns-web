const s = (a:number, b:number) => {
  return a +b;
}

describe("Test ", () => {
  it("should something", () => {
    expect(s(1,2)).toEqual(3);
  });
});