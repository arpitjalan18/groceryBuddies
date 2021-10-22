

```json
"user": {
  "user_id": "string",
  "email": "string",
  "first_name": "string",
  "last_name": "string", 
  "group_id": "string",
  "image": "s3 bucket link?"
}

"group": {
  "group_id": "string",
  "group_name": "string",
  "items_list": ["items (item objects)"],
  "user_list": ["user_ids (strings)"],
}

"item": {
  "name": "string",
  "notes": "string",
  "id": "string",
  "user_list": [{
    "user_id": "string",
    "amount_wanted": "int",
    "units": "string",
  }]
}
```

