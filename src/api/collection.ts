import fetch from "./base"

export interface CollectionPostRequestInterface {
  name: string;
  userId: string;
}

export interface CollectionPutRequestInterface {
  name: string;
}

const CollectionApi = {
  getCollections: async (userId: string) => {
    const query = encodeURI(JSON.stringify({ userId }))
    const response = await fetch('classes/Collection?where=' + query, {})
      .then(r => r.json());
    return response.results;
  },

  createCollection: async (body: CollectionPostRequestInterface) => {
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