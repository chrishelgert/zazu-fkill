const processes = require('./processes')

module.exports = () => input => processes.find(input)
