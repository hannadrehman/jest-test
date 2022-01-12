const assertions = require('./assertions');

const color = {
  reset: "\x1b[0m",

  fgRed: "\x1b[31m",
  fgGreen: "\x1b[32m",
  fgYellow: "\x1b[33m",

  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
};

function log(c, m) {
  console.log(c, m, color.reset);
}



function throwError(original,expected, {positive=true}={}){
  if(positive){
  throw new Error(`Fail : expected  ${JSON.stringify(expected,null,2)}, recieved ${JSON.stringify(original,null,2)}`)
  }
  throw new Error(`Fail: expected ${JSON.stringify(original,null,2)} not equal to ${JSON.stringify(expected,null,2)}`)
}

function positiveAsserts(recieved){
  return Object.entries(assertions).reduce((accum, [key, value]) => {
    return {
      ...accum,
      [key]: (expected) => {
	    const result = value(recieved, expected)
	    if(!result){
        //hack for truthy because second arg is not given;
        const expectedValue = expected || (key === 'toBeTruthy' ? true : '')
        throwError(recieved,expectedValue)
	     }
      },
    };
  }, {});

}

function negativeAsserts(recieved){
   return Object.entries(assertions).reduce((accum, [key, value]) => {
    return {
      ...accum,
      [key]: (expected) => {
	    const result = value(recieved, expected)
	    if(result){
        throwError(recieved,expected ,{positive:false})
	     }
      },
    };
  }, {});

}

module.exports = {
  color,log,throwError,positiveAsserts,negativeAsserts
}


