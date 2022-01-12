const { describe, it, expect } = require("./runner/index.js");

describe('passing test cases',()=>{
  describe(' truthfull cases for primitives',()=>{
    it('should assert true for basic numbers',()=>{
      expect(2).toBe(2)
      expect(-2).toBe(-2)
      expect(2).toEqual(2)
      expect(2).toBeTruthy()
    })

    it('should assert true for strings',()=>{
      expect(' ').toBe(' ')
      expect('').toBe('')
      expect('hell').toBe('hell')
      expect(' ').toEqual(' ')
      expect('').toEqual('')
      expect('hell').toEqual('hell')
      expect('helo').toBeTruthy()
    })

    it('should assert true for booleans',()=>{
      expect(true).toBe(true)
      expect(false).toBe(false)
      expect(true).toEqual(true)
      expect(false).toEqual(false)
      expect(true).toBeTruthy()
    })

    it('should assert true for negative asserts',()=>{
      expect(2).not.toBe(3)
      expect('hell').not.toBe('hello')
      expect(true).not.toBe(false)
      expect('').not.toBeTruthy()
      expect(0).not.toBeTruthy()
      expect(false).not.toBeTruthy()
      expect(null).not.toBeTruthy()
      expect(undefined).not.toBeTruthy()
    })
  })

  describe(' truthfull cases for Objects',()=>{
    it('should assert true for empty objects',()=>{
      expect({}).toEqual({})
    })

    it('should assert true for basic objects',()=>{
      expect({a:1}).toEqual({a:1})
    })

    it('should assert true for basic objects with different order of keys',()=>{
      expect({a:1,b:2}).toEqual({b:2,a:1})
    })

    it('should assert true for objects with nested objects',()=>{
      expect({root:true,nested:{level:1,root:false}}).toEqual({root:true,nested:{level:1,root:false}})
    })

    it('should assert true for objects with deep nested objects',()=>{
      expect({root:true,nested:{level:1,root:false, children: {level:2,root:false}}}).toEqual({root:true,nested:{level:1,root:false, children: {level:2,root:false}}})
    })

    it('should assert nested objects with nested arrays',()=>{
      expect({root:true,children:[1,2,3]}).toEqual({children:[1,2,3],root:true})
    })

    it('should assert nested objects with nested array of objects',()=>{
      expect({root:true,children:[{child:1,level:2},{child:2,level:3}]}).toEqual({children:[{child:1,level:2},{child:2,level:3}],root:true})
    })

    it('should assert true for negative asserts on objects',()=>{
      expect({}).not.toEqual(3)
      expect({level:1}).not.toEqual({level:2})
      expect({level:1,children:[1,2,3]}).not.toEqual({level:1,children:[1,3,2]})
    })

  })

  describe(' truthfull cases for Arrays',()=>{
    it('should assert true for empty array',()=>{
      expect([]).toEqual([])
    })

    it('should assert true for basic array',()=>{
      expect([1,2,3]).toEqual([1,2,3])
    })

    it('should assert true for array of objects',()=>{
      expect([{a:1},{a:2},{a:3}]).toEqual([{a:1},{a:2},{a:3}])
    })

    it('should assert true for array of objects where objects are in any order',()=>{
      expect([{a:1,b:2}]).toEqual([{b:2,a:1}])
    })

    it('should assert true for negative asserts',()=>{
      expect([1]).not.toEqual([2])
      expect({level:1}).not.toEqual({level:2})
      expect({level:1,children:[1,2,3]}).not.toEqual({level:1,children:[1,3,2]})
    })

  })
})

describe('failing test cases',()=>{
  describe(' failing cases for primitives',()=>{
    it('should assert false for basic numbers with toBe',()=>{
      expect(2).toBe(3)
    })
    it('should assert false for basic numbers with toEqual',()=>{
      expect(2).toEqual(3)
    })
    it('should assert false for 0 to be truthy',()=>{
      expect(0).toBeTruthy(3)
    })

    it('should fail in basic string match',()=>{
      expect('test').toBe('hello')
    })

    it('should fail if empty string is tested to  be truthy',()=>{
      expect('').toBeTruthy();
    })

    it('should fail string match with toEqual',()=>{
      expect('hello').toEqual('hannad')
    })

    it('should fail if true is expected to be false',()=>{
      expect(true).toBe(false)
    })

    it('should fail if false is expected to be true',()=>{
      expect(false).toBe(true)
    })

    it('should fail if true is expected to equal false',()=>{
      expect(true).toEqual(false)
    })

    it('should fail if false is expected to equal true',()=>{
      expect(false).toEqual(true)
    })

    it('should fail test when tested with not and true condition for numbers',()=>{
       expect(2).not.toBe(2)
    })

    it('should fail test when tested with not and true condition for string',()=>{
       expect('hannad').not.toBe('hannad')
    })

    it('should fail test when tested with not and true condition for booleans',()=>{
       expect(true).not.toBe(true)
    })
  })

  describe(' failing cases for Objects',()=>{
    it('should assert false for empty object',()=>{
      expect({a:1}).toEqual({})
    })

    it('should assert false for basic objects',()=>{
      expect({a:1}).toEqual({b:1})
    })

    it('should assert false nested objects with nested arrays but different arrays',()=>{
      expect({root:true,children:[1,2,3]}).toEqual({children:[1,2,4],root:true})
    })

    it('should assert false for negative asserts on objects',()=>{
      expect({}).not.toEqual({})
    })

    it('should assert false for negative asserts on objects with same keys',()=>{
      expect({a:1}).not.toEqual({a:1})
    })
  })

  describe(' failing cases for Arrays',()=>{
    it('should assert false for empty array',()=>{
      expect([]).toEqual([1])
    })

    it('should assert false for non equal array',()=>{
      expect([1,2,3]).toEqual([2,1,3])
    })

    it('should assert false for array of objects',()=>{
      expect([{a:1},{a:2},{a:3}]).toEqual([{a:1},{a:2},{a:4}])
    })

    it('should assert false for negative asserts',()=>{
      expect([1]).not.toEqual([1])
    })

  })
})



