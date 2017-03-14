jest.mock('ps-list')

const processes = require('../src/processes')
const pslist = require('ps-list')

const mockedResult = [
  {
    name: 'node',
    cmd: 'node index.js',
    pid: 111,
  },
  {
    name: 'Zazu',
    cmd: 'zazu',
    pid: 222,
  },
  {
    name: 'Atom',
    cmd: 'atom',
    pid: 333,
  },
]

describe('processes', () => {
  describe('find', () => {
    beforeEach(() => {
      pslist.mockImplementation(() => new Promise(resolve => resolve(mockedResult)))
    })

    test('lists processes', () => (
      processes.find()
        .then((result) => {
          expect(result).toMatchSnapshot()
        })
    ))

    test('filters processes with given input', () => (
      processes.find('ZazU')
        .then((result) => {
          expect(result).toMatchSnapshot()
        })
    ))

    test('adds force to the result with -f', () => (
      processes.find('ZazU --force')
        .then((result) => {
          expect(result).toMatchSnapshot()
        })
    ))

    test('adds force to the result with --force', () => (
      processes.find('ZazU --force')
        .then((result) => {
          expect(result).toMatchSnapshot()
        })
    ))
  })
})
