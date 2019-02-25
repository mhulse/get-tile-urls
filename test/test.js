// https://alisdair.mcdiarmid.org/simple-nodejs-tests-with-assert-and-mocha/
// https://nodejs.org/api/all.html#assert_assert
const assert = require('assert');

const gtus = require('../index');
const data = require('./data');

describe('get-tile-url', function() {

  describe('module.exports', function() {

    data.forEach((test) => {

      it('should return an array of strings (loop)', function() {

        assert.deepEqual(
          gtus(test.input),
          test.output
        );

      });

    });

    it('should return an array of arrays', function() {

      assert.deepEqual(
        gtus(data[0].input, data[1].input),
        [ data[0].output, data[1].output ]
      )

    })

  });

});
