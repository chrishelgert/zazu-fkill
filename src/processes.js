const pslist = require('ps-list')

module.exports.find = input => (
  pslist()
    .then(processes =>
      processes
        .filter(process => process.name.toLowerCase().indexOf(input ? input.toLowerCase() : '') !== -1)
        .map(process => ({
          title: process.name,
          subtitle: process.cmd,
          value: process.pid,
        }))
    )
)
