const {printTestLogs}  = require('./runner/index.js')
function runTests(){
   require('./tests')
   printTestLogs()
}

runTests()
