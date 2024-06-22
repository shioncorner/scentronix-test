import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { findServer } from '../src/server';

const servers = [
  { url: 'https://does-not-work.perfume.new', priority: 1 },
  { url: 'https://gitlab.com', priority: 4 },
  { url: 'http://app.scnt.me', priority: 3 },
  { url: 'https://offline.scentronix.com', priority: 2 },
];

describe('findServer', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should resolve with the online server with the lowest priority', async () => {
    mock.onGet('https://does-not-work.perfume.new').timeout();
    mock.onGet('https://gitlab.com').reply(200);
    mock.onGet('http://app.scnt.me').reply(200);
    mock.onGet('https://offline.scentronix.com').reply(500);

    const result = await findServer(servers);
    expect(result).toEqual({ url: 'http://app.scnt.me', priority: 3 });
  });

  it('should reject if all servers are offline', async () => {
    mock.onGet('https://does-not-work.perfume.new').timeout();
    mock.onGet('https://gitlab.com').timeout();
    mock.onGet('http://app.scnt.me').timeout();
    mock.onGet('https://offline.scentronix.com').timeout();

    await expect(findServer(servers)).rejects.toThrow('No servers are online');
  });
});
