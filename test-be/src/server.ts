import axios from 'axios';

interface Server {
  url: string;
  priority: number;
}

export const findServer = async (servers: Server[]): Promise<Server> => {
  const requests = servers.map((server) =>
    axios
      .get(server.url, { timeout: 5000 })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return server;
        }

        throw new Error('Server is offline');
      })
      .catch(() => null),
  );

  const responses = await Promise.all(requests);
  const onlineServers = responses.filter((server) => server !== null) as Server[];

  if (onlineServers.length === 0) {
    return Promise.reject(new Error('No servers are online'));
  }

  onlineServers.sort((a, b) => a.priority - b.priority);

  return onlineServers[0];
};
