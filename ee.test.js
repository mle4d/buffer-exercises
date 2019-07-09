const eventEmitter = require('events');
describe('EventEmitter', () => {
  it('e m i t s', done => {
    const ee = new eventEmitter();

    ee.on('who done it', () => {
      done();
    });
    ee.emit('who done it');
  });

  it('emits and listens to events with data', () => {
    const dog = new eventEmitter();

    dog.on('this be a dog here', dog => {
      expect(dog).toEqual({
        name: 'dog',
        age: 'dog',
        weight: 'dog'
      });
    });
    dog.emit('this be a dog here');
  });
});

