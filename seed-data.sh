appId=$1

userId=$(curl --silent --request POST \
  --url http://localhost:1337/parse/users \
  --header 'content-type: application/json' \
  --header "x-parse-application-id: $appId" \
  --data '{
	"username": "cooldude2",
	"password": "password"
}' | jq -r '.objectId')
echo "userId is ${userId}"

collectionJson=$(jq -n --arg userId "$userId" '{ 
  name: "Recipes", 
  user: {
		"__type": "Pointer",
		"className": "_User",
		"objectId": $userId
	}
}')

collectionId=$(curl --silent --request POST \
  --url http://localhost:1337/parse/classes/Collection \
  --header 'content-type: application/json' \
  --header "x-parse-application-id: $appId" \
  --data "$collectionJson" | jq -r '.objectId')


docJson=$(jq -n --arg collectionId "$collectionId" '{ 
  name: "Cookies", 
  collection: {
		"__type": "Pointer",
		"className": "Collection",
		"objectId": $collectionId
	}
}')

docId=$(curl --silent --request POST \
  --url http://localhost:1337/parse/classes/Document \
  --header 'content-type: application/json' \
  --header "x-parse-application-id: $appId" \
  --data "$docJson" | jq -r '.objectId')

echo "Seeded data."