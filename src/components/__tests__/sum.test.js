import { sum } from "../sum"

test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(5, 4);

    // Asertion
    expect(result).toBe(9);
});