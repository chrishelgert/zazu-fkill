const pslist = require('ps-list')

module.exports.find = (input = '') => {
  const force = input.match(/\s(-f|--force)$/) !== null
  const cleanedInput = input.replace(' -f', '').replace(' --force', '')

  return pslist()
    .then(processes =>
      processes
        .filter(process => process.name.toLowerCase().indexOf(cleanedInput.toLowerCase()) !== -1)
        .map(process => ({
          title: process.name,
          subtitle: process.cmd,
          value: {
            id: process.pid,
            name: process.name,
            force,
          },
        }))
    )
}
