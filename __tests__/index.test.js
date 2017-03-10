const processes = require('../src/processes')
const zazuFkill = require('../src/index')

describe('zazu-fkill', () => {
  beforeEach(() => {
    processes.find = jest.fn()
  })

  test('calls the processes.find', () => {
    zazuFkill()('zazu')

    expect(processes.find).toBeCalledWith('zazu')
  })
})
