import fetch from "./base"

export interface CollectionPostRequestInterface {
  name: string;
  user: { __type: string, className: string, objectId: string };
}

export interface CollectionPutRequestInterface {
  name: string;
}

const CollectionApi = {
  getCollections: async (userId: string) => {
    const query = {
      user: {
        __type: 'Pointer',
        className: '_User',
        objectId: userId
      }
    }
    const encodedQuery = encodeURI(JSON.stringify(query))
    const response = await fetch('classes/Collection?where=' + encodedQuery, {})
      .then(r => r.json());
    return response.results;
  },

  createCollection: async (name: string, userId: string) => {
    const body: CollectionPostRequestInterface = {
      name,
      user: {
        __type: 'Pointer',
        className: '_User',
        objectId: userId
      }
    }
    const response = await fetch('classes/Collection', {
      body: JSON.stringify(body),
      method: 'POST'
    })
      .then(r => r.json())
    return response
  },

  updateCollection: async (objectId: string, body: CollectionPutRequestInterface) => {
    const response = await fetch(`classes/Collection/${objectId}`, {
      body: JSON.stringify(body),
      method: 'PUT'
    })
      .then(r => r.json())
    return response
  },

  deleteCollection: async (objectId: string) => {
    const response = await fetch(`classes/Collection/${objectId}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
    return response
  },
}

export default CollectionApi;