# createcsvfile
creating csv file data

in the post request you pass the headrer and data through postman in json format 
like bellow 
```
{"data" : [
  {
    "name": "John",
    "surname": "Snow",
    "age": 26,
    "gender": "M"
  }, {
    "name": "Clair",
    "surname": "White",
    "age": 33,
    "gender": "F"
  }
],
"header": [
    {"id": "name", "title": "Name"},
    {"id": "surname", "title": "Surname"},
    {"id": "age", "title": "Age"},
    {"id": "gender", "title": "Gender"}
  ]

```
