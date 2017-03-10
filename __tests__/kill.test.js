jest.mock('fkill')

const fkill = require('fkill')
const kill = require('../src/kill')

describe('kill', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.log = jest.fn()
    fkill.mockImplementation(() => new Promise(resolve => resolve()))
  })

  test('calls the fkill-function', () => (
    kill()(111).then(() => {
      expect(fkill).toBeCalledWith(111)
      // eslint-disable-next-line no-console
      expect(console.log).toBeCalledWith('killed process 111')
    })
  ))
})
