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
var x = {
  "routes": [
    {
      "path": "",
      "method": "GET",
      "returnType: "",
      "description": "",
      "notes": [""],
      "status": ["star"],
      "variables":{
        "query":{ "name":"type" },
        "post":{ "name":"type" },
        "params":{ "name":"type" }
      },
      "sample": [
        {
          "path": "",
          "query": {},
          "params": {},
          "request": {},
          "headers": {}
          "post": {},
          "test": {
            "timeout": 2000,
            "statusCode": 200,
            "body": [],
            "only": false,
            "skip": false,
            "title": ""
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
      "headers": {}
    }
  ],
  "name":""//save-reference
}
```