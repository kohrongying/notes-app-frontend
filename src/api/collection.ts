import fetch from "./base"

const CollectionApi = {
  getUserCollections: async (userId: string) => {
    const query = encodeURI(JSON.stringify({ userId }))
    const response = await fetch('classes/Collection?where=' + query, {})
      .then(r => r.json());
    return response.results;
  }
}

export default CollectionApi;