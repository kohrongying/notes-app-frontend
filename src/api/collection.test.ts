import fetch from 'jest-fetch-mock';
import CollectionApi from "./collection";
import { defaultOptions, baseUrl } from "./base";

const collections = [
  { 
    objectId: '123',
    userId: '123',
    name: 'col1'
  }
]

describe('getCollections', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  
  it('makes a get request', async () => {
    fetch.mockResponseOnce(JSON.stringify(collections))
    const userId = '123'
    await CollectionApi.getUserCollections(userId)
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch).toHaveBeenCalledWith(
      `${baseUrl}/classes/Collection?where=${encodeURI(JSON.stringify({ userId }))}`, 
      defaultOptions
    )
  })

  it('returns collections', async () => {
    fetch.mockResponseOnce(JSON.stringify({ results: collections }))
    const userId = '123'
    const res = await CollectionApi.getUserCollections(userId)
    expect(res).toEqual(collections)
  })
})