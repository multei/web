expect.extend({
  toBeHexColor(received) {
    const hexadecimal = /^#[a-f0-9]{6}$/i
    const pass = hexadecimal.test(received)
    if (pass) {
      return {
        message: () => `expected ${received} to be an hexadecimal triplet`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected ${received} not to be an hexadecimal triplet`,
        pass: false,
      }
    }
  },
})
