const fizzbuzz = require("./fizzBuzz")


describe("fizzbuzz", () => {

      test("must show Error when fizzBuzz doesn´t receive a number", () => {
        const expected = "Error: parameter must be a number";
        const result = fizzbuzz("16");
        expect(expected).toBe(result);
    })

    test("must show 0 when receives 0", () => {
        const expected = 0;
        const result = fizzbuzz(0);
        expect(expected).toBe(result);
    })

    test("must show fizz when receives receives a multiple of 3", () => {
        const expected = "fizz";
        const result = fizzbuzz(6);
        expect(expected).toBe(result);
    })

    test("must show buzz when receives a multiple of 5", () => {
        const expected = "buzz";
        const result = fizzbuzz(10);
        expect(expected).toBe(result);
    })

    test("must show fizzbuzz when receives a multiple of both, 3 and 5", () => {
        const expected = "fizzbuzz";
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    })
})
