const fkill = require('fkill')

module.exports = () => value => (
  fkill(value)
    // eslint-disable-next-line no-console
    .then(() => console.log(`killed process ${value}`))
)
