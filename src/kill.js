const fkill = require('fkill')

module.exports = () => value => (
  new Promise((resolve) => {
    // eslint-disable-next-line no-console
    fkill(value.id, { force: value.force })
      .then(() => resolve(`killed process "${value.name}"`))
      .catch(() => resolve(`failed to kill process "${value.name}"`))
  })
)
