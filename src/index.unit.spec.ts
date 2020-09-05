import { HelloWorld } from './index';

describe('Ensure jest runs', function () {
    test('when calling HelloWorld, should print "Hello World!"', () => {
        expect(HelloWorld()).toEqual('Hello World!');
    });
});
