export async function get<T>(url: string): Promise<T> {
  const baseUrl = "http://localhost:3000";
  const response = await fetch(`${baseUrl}${url}`);

  if (!response.ok) {
    throw new Error(`Network response was not ok! - ${url}`);
  }

  return (await response.json()) as Promise<T>;
}

// add payload parm, figure out typing
export async function post<T>(url: string): Promise<T> {
  const baseUrl = "http://localhost:3000";
  const response = await fetch(`${baseUrl}${url}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok! - ${url}`);
  }

  return (await response.json()) as Promise<T>;
}
