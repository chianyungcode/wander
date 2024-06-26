# Category API Spec

Full documentation for category API specification

| Endpoint              | HTTP     | Description           |
| --------------------- | -------- | --------------------- |
| `/api/categories`     | `GET`    | Get all category      |
| `/api/categories/:id` | `GET`    | Get specific category |
| `/api/categories`     | `POST`   | Create new category   |
| `/api/categories`     | `DELETE` | Delete all category   |
| `/api/categories/:id` | `DELETE` | Delete category by id |
| `/api/categories/:id` | `PUT`    | Update category by id |

## Create Category

Endpoint:

```http request
POST /api/categories
```

### Request body

```json
{
  "name": "Surfing",
  "description": "Aktivitas menyenangkan di pantai dengan menunggangi ombak"
}
```

### Response body (Success)

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "40739dc7-726e-4b8a-babe-6a0e51f36ce6",
    "name": "Surfing",
    "description": "Aktivitas menyenangkan di pantai dengan menunggangi ombak",
    "createdAt": "2022-12-31T23:59:59Z",
    "updatedAt": "2022-12-31T23:59:59Z",
    "destinations": []
  }
}
```

### Response body (failed)

```json
{
  "errors": "name is required"
}
```

## Get Category

Endpoint:

```http request
GET /api/categories/:id
```

### Response body (Success)

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "40739dc7-726e-4b8a-babe-6a0e51f36ce6",
    "name": "Surfing",
    "description": "Aktivitas menyenangkan di pantai dengan menunggangi ombak",
    "createdAt": "2022-12-31T23:59:59Z",
    "updatedAt": "2022-12-31T23:59:59Z",
    "destinations": []
  }
}
```

### Response body (failed)

```json
{
  "errors": "data not found"
}
```

## Get All Category

Endpoint:

```http request
GET /api/categories
```

### Response body (Success)

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": "40739dc7-726e-4b8a-babe-6a0e51f36ce6",
      "name": "Surfing",
      "description": "Aktivitas menyenangkan di pantai dengan menunggangi ombak",
      "createdAt": "2022-12-31T23:59:59Z",
      "updatedAt": "2022-12-31T23:59:59Z",
      "destinations": []
    },
    {
      "id": "50739dc7-726e-4b8a-babe-6a0e51f36ce6",
      "name": "Diving",
      "description": "Menyelam di dasar laut untuk menikmati keindahan bawah air",
      "createdAt": "2022-12-31T23:59:59Z",
      "updatedAt": "2022-12-31T23:59:59Z",
      "destinations": []
    }
  ]
}
```

### Response body (failed)

```json
{
  "errors": "failed to get data"
}
```

## Delete category by id

Endpoint:

```http request
DELETE /api/categories/:id
```

### Response body (Success)

```json
{
  "message": "Category deleted"
}
```

### Response body (failed)

```json
{
  "errors": "Failed to delete category"
}
```

## Delete all category

Endpoint:

```http request
DELETE /api/categories
```

### Response body (Success)

```json
{
  "message": "Categories deleted"
}
```

### Response body (Failed)

```json
{
  "message": "Failed to delete all category"
}
```

## Update category by id

Endpoint:

```http request
PUT /api/categories/:id
```

### Response body (Success)

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "40739dc7-726e-4b8a-babe-6a0e51f36ce6",
    "name": "Surfing",
    "description": "Aktivitas menyenangkan di pantai dengan menunggangi ombak",
    "createdAt": "2022-12-31T23:59:59Z",
    "updatedAt": "2022-12-31T23:59:59Z",
    "destinations": []
  }
}
```

### Response body (failed)

```json
{
  "errors": "Failed to update category"
}
```
