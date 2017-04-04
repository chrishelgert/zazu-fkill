jest.mock('fkill')

const fkill = require('fkill')
const kill = require('../src/kill')

describe('kill', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  test('calls the fkill-function', () => {
    fkill.mockImplementation(() => new Promise(resolve => resolve()))

    return kill()({ id: 111, name: 'zazu', force: false }).then((result) => {
      expect(fkill).toBeCalledWith(111, { force: false })
      expect(result).toBe('killed process "zazu"')
    })
  })

  test('returns error-message', () => {
    fkill.mockImplementation(() => new Promise((resolve, reject) => reject(new Error())))

    return kill()({ id: 111, name: 'zazu', force: true }).then((result) => {
      expect(fkill).toBeCalledWith(111, { force: true })
      expect(result).toBe('failed to kill process "zazu"')
    })
  })
})
