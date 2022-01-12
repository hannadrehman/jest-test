function isEqual(a,b){
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
    return a === b;
  if (a.prototype !== b.prototype) return false;
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  if(typeof a !== typeof b) return false // check for {} and number
  return keys.every(k => isEqual(a[k], b[k]));
}

 function toBe(original,expected){
  if(original == expected){
    return true
  }
}

function toBeTruthy(original){
  if(Boolean(original)){
    return true
  }
}

function toEqual(original,expected){
  if(isEqual(original,expected)){
    return true
  }
}

module.exports = {
  toBe,toEqual,toBeTruthy,toEqual
}

