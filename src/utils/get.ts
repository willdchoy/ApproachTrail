export async function get<T>(url: string): Promise<T> {
  const baseUrl = "https://swapi.dev/api/";
  const response = await fetch(`${baseUrl}${url}`);

  if (!response.ok) {
    throw new Error(`Network response was not ok! - ${url}`);
  }

  return (await response.json()) as Promise<T>;
}
