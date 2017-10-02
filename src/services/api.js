const baseURL = 'http://localhost:3001'

export async function getJsonResponse (response) {
  const json = await response.json()

  if (response.ok) return json

  console.error('Failed to fetch', json) // eslint-disable-line no-console
  throw new Error(`Failed to fetch: ${response.body}`)
}

export async function restGet (uri, headers = {}) {
  const authorizationHeaders = {}

  return fetch(`${baseURL}${uri}`, {
    mode: 'cors',
    headers: {
      ...headers,
      ...authorizationHeaders,
      'content-type': 'application/json'
    }
  })
    .then(getJsonResponse)
}

export async function restPost (uri, body, headers = {}) {
  const authorizationHeaders = {}

  return fetch(`${baseURL}${uri}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      ...headers,
      ...authorizationHeaders,
      'content-type': 'application/json'
    },
    body: JSON.stringify(body) }
  )
    .then(getJsonResponse)
}