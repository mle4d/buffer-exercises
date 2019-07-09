describe('buffers', () => {
  it('buffer to 10', () => {
    const buf = Buffer.alloc(10);
    expect(buf).toHaveLength(10);
  });
});

describe('buffering', () => {
  it('buffasfuck', () => {
    const buf = Buffer.from('oh hai');

    expect(buf).toHaveLength(6);
    expect(buf.toString()).toEqual('oh hai');

    const buffy = buf.map(() => 104);
    expect(buffy.toString()).toEqual('hhhhhh');
  });
});

