{
    local this = self,
    testcases: [],
    tests: [],

    describe(description, tests):: this {
      testcases: this.testcases + [{
        name: description,
        tests: tests,
      }],
    },

    it(name, test):: this {
      tests: this.tests + [{
        name: name,
        result: test,
      }],
    },


    local fail = 'JSONNUNIT--failed',
    local pass = 'JSONNUNIT--passed',

    local objectHasAllFields(object, fields) =
      local results = {
        [field]: true
        for field in std.objectFieldsAll(object) if std.objectHasAll(object, field)
      };
      if std.length(results) == std.length(fields) then true else false,

    local objectHasAnyFields(object, fields) =  
      local results = {
        [field]: false
        for field in std.objectFieldsAll(object) if std.objectHasAll(object, field)
      };
      if std.length(results) >= 0 then true else false,

    local objectIsOneOf(object, options) =
      local results = {
        [option]: true,
        for option in options if object == option
      };
      if std.length(results) > 0 then true else false,

    local test(object, options) =
      if std.isString(object) || std.isNumber(object) then
        local results = {
          [option]: true,
          for option in options if std.length(std.findSubstr(option, object))
        };
        results
      else 
        local a = "c";
      
      a,

    local objectContainsOneOf(object, options) =
      if std.isString(object) || std.isNumber(object) then
        local results = {
          [option]: true,
          for option in options if std.length(std.findSubstr(option, object))
        };
        if std.length(results) > 0 then true else false
      else
        if std.isArray(object) then
          local results = {
            [option]: true,
            for value in object
            for option in options if option == value
          };
          if std.length(results) > 0 then true else false
        else 
          if std.isObject(object) then
            local results = {
              [option]: true,
              for value in std.ObjectValuesAll(object)
              for option in options if option == value
            };
            if std.length(results) > 0 then true else false,


    local toExpectations(actual, pass, fail) =  {
        be+: {
          empty: if std.length(actual) == 0 then pass else fail,
          "null"+: if actual == null then pass else fail,
          "true": if actual == true then pass else fail,
          "false": if actual == false then pass else fail,
          an+: {
            array: if std.isArray(actual) then pass else fail
          },
          a+: {
            string: if std.isString(actual) then pass else fail,
            boolean: if std.isBoolean(actual) then pass else fail,
            "function": if std.isFunction(actual) then pass else fail,
            number: if std.isNumber(actual) then pass else fail,
          },
          oneOf(options): if objectIsOneOf(actual, options) then pass else fail,
        },
        contain+: {
          oneOf(options): if objectContainsOneOf(actual, options) then pass else fail,
        },
        equal(value): if actual == value then pass else fail,
        have+: {
          all+: {
            keys(keys): if objectHasAllFields(actual, keys) then pass else fail,
          },
          any+: {
            keys(keys): if objectHasAnyFields(actual, keys) then pass else fail,
          },
          key(key): if std.objectHasAll(actual, key) then pass else fail,
          lengthOf(amount): self.length.of(amount),
          lengthAbove(amount): self.length.above(amount),
          lengthBelow(amount): self.length.below(amount),
          length+: {
            of(amount): if std.length(actual) == amount then pass else fail,
            above(amount): if std.length(actual) > amount then pass else fail,
            below(amount): if std.length(actual) < amount then pass else fail,
            at+: {
              least(amount): if std.length(actual) >= amount then pass else fail,
              most(amount): if std.length(actual) <= amount then pass else fail,
            },
            within(amount1, amount2): if std.length(actual) >= amount1 && std.length(actual) <= amount2 then pass else fail,
          },
          property(property): if std.objectHasAll(actual, property) then pass else fail,
          string(string): if std.length(std.findSubstr(string, actual)) > 0 then pass else fail, 
        },

    },

    // Version 2.0 syntax
    expect(actual):: {
      to: toExpectations(actual, pass, fail) + {
        not: toExpectations(actual, fail, pass),
      },
    },
}
