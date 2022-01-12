const {color,log,positiveAsserts,negativeAsserts} =require('./utils');

const failedIts = [];
const passedIts = [];

function describe(description, cb) {
  try {
    log(color.fgYellow, ` ${description}`);
    cb();
    passedDescribes.push(description);
  } catch (e) {}
}

function it(description, cb) {
  try {
    cb();
    console.log(color.fgGreen, "   ✓", description);
    passedIts.push(description);
  } catch (e) {
    console.log(color.fgRed, "   ✗", description);
    console.log("      ", e.message);
    failedIts.push(description);
  }
}

function expect(recieved) {
  return {
    ...positiveAsserts(recieved),
    not: {
    ...negativeAsserts(recieved)
    }
  };
}

function printTestLogs() {
  console.log();
  console.log();
  console.log(`Tests:  ${passedIts.length} Passed, ${
    failedIts.length
  } Failed, ${passedIts.length + failedIts.length} total
`);
}

module.exports = {describe,it,expect,printTestLogs}
