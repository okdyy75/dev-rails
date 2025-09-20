const BASE_URL = process.env.NEXT_PUBLIC_APP_URL;

async function request(url: string, options: RequestInit = {}): Promise<Response> {
  return fetch(`${BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
}

export async function get(url: string): Promise<Response> {
  return request(url, { method: 'GET' });
}

export async function post(url: string, data?: object): Promise<Response> {
  const options: RequestInit = { method: 'POST' };
  if (data) {
    options.body = JSON.stringify(data);
  }
  return request(url, options);
}

export async function put(url: string, data?: object): Promise<Response> {
  const options: RequestInit = { method: 'PUT' };
  if (data) {
    options.body = JSON.stringify(data);
  }
  return request(url, options);
}

export async function del(url: string): Promise<Response> {
  return request(url, { method: 'DELETE' });
}
