import { getOutputString } from './app';

describe('app', () => {
  it('should return hello world', () => {
    const result = getOutputString();

    expect(result).toEqual('Hello World');
  });
});
