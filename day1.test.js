const day1 = require("./day1")
const day1pt2 = require("./day1part2")

test('check sum of number in day1pt1',() => {
    const result = day1();
    expect(result[0] + result[1] ).toBe(2020)
    expect(result[0] * result[1]).toBe(result[2])
})

test('check sum of number in day1 part 2',() => {
    const result = day1pt2();
    expect(result[0] + result[1] + result[2]).toBe(2020)
    expect(result[0] * result[1] * result[2]).toBe(result[3])
})