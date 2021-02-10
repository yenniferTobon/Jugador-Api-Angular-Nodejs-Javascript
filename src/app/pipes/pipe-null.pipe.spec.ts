import { PipeNullPipe } from './pipe-null.pipe';

describe('PipeNullPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeNullPipe();
    expect(pipe).toBeTruthy();
  });
});
