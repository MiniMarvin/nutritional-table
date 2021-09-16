const { expect } = require('@jest/globals')
const handler = require('../src/handler')

test("hello-world", async () => {
  const ans = await handler.hello(null)
  expect(ans.statusCode).toBe(200)
})