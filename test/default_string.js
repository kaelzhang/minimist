var test = require('tape');
var parse = require('../');

test('boolean groups, with default', function (t) {
  var argv = parse([ '-x', '-z', 'one', 'two', 'three' ], {
      boolean: ['x','y','z'],
      string: ['y'],
      default: {
        y: undefined
      }
  });

  t.deepEqual(argv, {
      x : true,
      y : undefined,
      z : true,
      _ : [ 'one', 'two', 'three' ]
  });

  t.end();
});
