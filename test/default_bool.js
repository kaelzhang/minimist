var test = require('tape');
var parse = require('../');

test('boolean default true', function (t) {
    var argv = parse([], {
        boolean: 'sometrue',
        default: { sometrue: true }
    });
    t.equal(argv.sometrue, true);
    t.end();
});

test('boolean default false', function (t) {
    var argv = parse([], {
        boolean: 'somefalse',
        default: { somefalse: false }
    });
    t.equal(argv.somefalse, false);
    t.end();
});

test('boolean default to null', function (t) {
    var argv = parse([], {
        boolean: 'maybe',
        default: { maybe: null }
    });
    t.equal(argv.maybe, null);
    var argv = parse(['--maybe'], {
        boolean: 'maybe',
        default: { maybe: null }
    });
    t.equal(argv.maybe, true);
    t.end();

})

test('boolean groups, with default', function (t) {
  const defaults = Object.create(null)
  defaults.y = undefined

  var argv = parse([ '-x', '-z', 'one', 'two', 'three' ], {
      boolean: ['x','y','z'],
      default: defaults
  });

  t.deepEqual(argv, {
      x : true,
      y : undefined,
      z : true,
      _ : [ 'one', 'two', 'three' ]
  });

  t.end();
});
