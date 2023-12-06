import { CharacterCounterPipe } from './character-counter.pipe';

describe('CharacterCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new CharacterCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
