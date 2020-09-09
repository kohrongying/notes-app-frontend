import fetch from 'jest-fetch-mock';
import CollectionApi, {
  CollectionPostRequestInterface,
  CollectionPutRequestInterface  
} from "./collection";
import { defaultOptions, baseUrl } from "./base";

const collections = [
  { 
    objectId: '123',
    userId: '123',
    name: 'col1'
  }
]

describe('get Collections', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  
  it('makes a get request', async () => {
    fetch.mockResponseOnce(JSON.stringify(collections))
    const userId = '123'
    await CollectionApi.getCollections(userId)
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch).toHaveBeenCalledWith(
      `${baseUrl}/classes/Collection?where=${encodeURI(JSON.stringify({ userId }))}`, 
      defaultOptions
    )
  })

  it('returns collections', async () => {
    fetch.mockResponseOnce(JSON.stringify({ results: collections }))
    const userId = '123'
    const res = await CollectionApi.getCollections(userId)
    expect(res).toEqual(collections)
  })
})

describe('create Collection', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('makes a post request', async () => {
    const body: CollectionPostRequestInterface = {
      name: 'testName',
      userId: 'test'
    }
    fetch.mockResponseOnce(JSON.stringify({
      objectId: 'abc',
      createdAt: '2020-09-09T10:15:12.948Z'
    }))
    await CollectionApi.createCollection(body)
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(`${baseUrl}/classes/Collection`)
    expect(fetch.mock.calls[0][1]).toMatchObject({ body: JSON.stringify(body)})
    expect(fetch.mock.calls[0][1]).toMatchObject({ method: 'POST' })
  })
})

describe('update Collection', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('makes a put request', async () => {
    const body: CollectionPutRequestInterface = {
      name: 'newName',
    }
    fetch.mockResponseOnce(JSON.stringify({
      updatedAt: '2020-09-09T10:15:12.948Z'
    }))
    const objectId = 'cXjjyzFag8'
    await CollectionApi.updateCollection(objectId, body)
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(`${baseUrl}/classes/Collection/${objectId}`)
    expect(fetch.mock.calls[0][1]).toMatchObject({ body: JSON.stringify(body) })
    expect(fetch.mock.calls[0][1]).toMatchObject({ method: 'PUT' })
  })

  it('fails when using a Post Request Interface', async () => {
    const body: CollectionPostRequestInterface = {
      name: 'testName',
      userId: 'test'
    }
  })
})

describe('delete Collection', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('makes a delete request', async () => {
    fetch.mockResponseOnce(JSON.stringify({}))
    const objectId = 'cXjjyzFag8'
    await CollectionApi.deleteCollection(objectId)
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(`${baseUrl}/classes/Collection/${objectId}`)
    expect(fetch.mock.calls[0][1]).toMatchObject({ method: 'DELETE' })
  })
})