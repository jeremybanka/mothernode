import { TWO } from "~/index"

describe(`two plus two`, () => (
  it(`is a number`, () => expect(typeof TWO).toBe(`number`)),
  it(`equals four`, () => expect(TWO + TWO).toBe(4))
))
