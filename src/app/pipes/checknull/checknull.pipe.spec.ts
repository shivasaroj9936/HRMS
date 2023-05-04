import { ChecknullPipe } from './checknull.pipe';

describe('ChecknullPipe', () => {
  it('create an instance', () => {
    const pipe = new ChecknullPipe();
    expect(pipe).toBeTruthy();
  });
});
