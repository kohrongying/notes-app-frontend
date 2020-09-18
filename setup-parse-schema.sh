appId=$1
masterKey=$2

curl -v --request POST \
  --url http://localhost:1337/parse/schemas/Collection \
  --header 'content-type: application/json' \
  --header "x-parse-application-id: $appId" \
  --header "x-parse-master-key: $masterKey" \
  --data '{
	"className": "Collection",
	"fields": {
		"name": { "type": "String" },
		"user": { "type": "Pointer", "targetClass": "_User" }
	}
}' > /dev/null 2>&1

curl --request POST \
  --url http://localhost:1337/parse/schemas/Document \
  --header 'content-type: application/json' \
  --header "x-parse-application-id: $appId" \
  --header "x-parse-master-key: $masterKey" \
  --data '{
	"className": "Document",
	"fields": {
		"name": { "type": "String" },
		"collection": { "type": "Pointer", "targetClass": "Collection" },
		"content": { "type": "String" }
	}
}' > /dev/null 2>&1

curl --request POST \
  --url http://localhost:1337/parse/schemas/Link \
  --header 'content-type: application/json' \
  --header "x-parse-application-id: $appId" \
  --header "x-parse-master-key: $masterKey" \
  --data '{
	"className": "Link",
	"fields": {
		"url": { "type": "String" },
		"document": { "type": "Pointer", "targetClass": "Document" }
	}
}' > /dev/null 2>&1

echo "Schemas for Collection, Doc, Link are created."