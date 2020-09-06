
const baseUrl:String = 'http://localhost:1337/parse'

const defaultOptions = {
  headers: {
    'X-Parse-Application-Id': 'abc',
    'Content-Type': 'application/json'
  }
}
const fetchBase = (url: String, options: Object) => {
  return fetch(`${baseUrl}/${url}`, {
    ...defaultOptions, ...options
  })
}
export default fetchBase;