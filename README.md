# RJON
Pronounced (like a pirate) : ARRRrrrrrrrrrrJohn

## Route Javascript Object Notation
A superb conduit to building, testing, and reviewing API end-points

USE THE APP : [rjon app](https://ackerapple.github.io/rjon/)


> The need for this app has come before properly documenting it. More documentation coming soon

### Coming Soon

- Documentation
  - Github gh-pages HTTPS to HTTP error control
- Functionality
  - Ability to download rjon app
  - Hosts:
    - edit
      - description
      - status

## RJON Map
Below is a map of standarized RJON

```javascript
{
  "routes": [
    {
      "path": "",
      "method": "GET",
      "returnType": "",//expected type of response
      "description": "",
      "notes": [""],
      "status": ["star"],//keyword descriptors. Often matches status icon. star=⭐
      "variables":{
        "query":{ "name":"type" },//url variable details
        "post":{ "name":"type" },//post variable details
        "params":{ "name":"type" }//path variable details
      },
      "sample": [
        {
          "path": "",//sample path substitution
          "query": {},//url variables
          "params": {},//path variables
          "request": {},//request body sample
          "headers": {}
          "post": {},//form post variables
          "test": {//object or boolean
            "timeout": 2000,
            "statusCode": 200,
            "body": [],
            "only": false,//skip others bulk tests
            "skip": false,//skip during bulk tests
            "title": ""//extra details
          }
        }
      ]
    }
  ],
  "hosts": [
    {
      "protocol": "https",
      "hostname": "localhost",
      "port": 8080,
      "description": "",
      "notes": [""],
      "headers": {}//global headers meant for all requests
    }
  ],
  "name":""//save-reference
}
```