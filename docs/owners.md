# Owner API Documentation

Full documentation for owner API specifation

| Endpoint          | HTTP     | Description        |
| ----------------- | -------- | ------------------ |
| `/api/owners`     | `GET`    | Get all owner      |
| `/api/owners/:id` | `GET`    | Get specific owner |
| `/api/owners`     | `POST`   | Create new owner   |
| `/api/owners`     | `DELETE` | Delete all owner   |
| `/api/owners/:id` | `DELETE` | Delete owner by id |
| `/api/owners/:id` | `PUT`    | Update owner by id |

## Authentication Header

| Parameter   | Description | Type   | Required |
| ----------- | ----------- | ------ | -------- |
| `X-API-KEY` | API key     | string | `Yes`    |

## Create owner

Endpoint :

```http request
POST /api/owners
```

### Request body

```json
{
  "name": "PT. Sinarwangi Melati",
  "email": "partner@sinarwangimelati.com",
  "phone": "+62021931331",
  "address": "Jl. T.B Simatupang No 13 Jakarta Selatan.",
  "city": "DKI Jakarta",
  "country": "Indonesia",
  "postalCode": "41422"
}
```

### Response body (Success)

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "40739dc7-726e-4b8a-babe-6a0e51f36ce6",
    "name": "PT. Sinarwangi Melati",
    "email": "partner@sinarwangimelati.com",
    "phone": "+62021931331",
    "address": "Jl. T.B Simatupang No 13 Jakarta Selatan.",
    "city": "DKI Jakarta",
    "country": "Indonesia",
    "postalCode": "41422",
    "createdAt": "2022-12-31T23:59:59Z",
    "updatedAt": "2022-12-31T23:59:59Z",
    "destinations": []
  }
}
```

### Response body (Failed)

```json
{
  "errors": "name is required"
}
```

## Get Owner

Endpoint:

```http request
GET /api/owners/:id
```

### Response body (Success)

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "40739dc7-726e-4b8a-babe-6a0e51f36ce6",
    "name": "PT. Sinarwangi Melati",
    "email": "partner@sinarwangimelati.com",
    "phone": "+62021931331",
    "address": "Jl. T.B Simatupang No 13 Jakarta Selatan.",
    "city": "DKI Jakarta",
    "country": "Indonesia",
    "postalCode": "41422",
    "createdAt": "2022-12-31T23:59:59Z",
    "updatedAt": "2022-12-31T23:59:59Z",
    "destinations": []
  }
}
```

### Response body (Failed)

```json
{
  "errors": "data not found"
}
```

## Get Owners

Endpoint:

```http request
GET /api/owners
```

### Response body (Success)

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": "40739dc7-726e-4b8a-babe-6a0e51f36ce6",
      "name": "PT. Sinarwangi Melati",
      "email": "partner@sinarwangimelati.com",
      "phone": "+62021931331",
      "address": "Jl. T.B Simatupang No 13 Jakarta Selatan.",
      "city": "DKI Jakarta",
      "country": "Indonesia",
      "postalCode": "41422",
      "createdAt": "2022-12-31T23:59:59Z",
      "updatedAt": "2022-12-31T23:59:59Z",
      "destinations": []
    },
    {
      "id": "40739dc7-726e-4b8a-babe-6a0e51f36ce6",
      "name": "PT. Sinarwangi Melati",
      "email": "partner@sinarwangimelati.com",
      "phone": "+62021931331",
      "address": "Jl. T.B Simatupang No 13 Jakarta Selatan.",
      "city": "DKI Jakarta",
      "country": "Indonesia",
      "postalCode": "41422",
      "createdAt": "2022-12-31T23:59:59Z",
      "updatedAt": "2022-12-31T23:59:59Z",
      "destinations": []
    }
  ]
}
```

### Response body (Failed)

```json
{
  "errors": "failed to get data"
}
```

## Delete Owner

Endpoint:

```http request
DELETE /api/owners/:id
```

### Response body (Success)

```json
{
  "message": "Category deleted"
}
```

### Response body (Failed)

```json
{
  "errors": "ID not found"
}
```

## Delete Owners

Endpoint:

```http request
DELETE /api/owners
```

### Response body (Success)

```json
{
  "message": "All owner data deleted"
}
```

### Response body (Failed)

```json
{
  "message": "Failed to delete data"
}
```

## Update Owner

Endpoint:

```http request
PUT /api/owners/:id
```

### Request body

```json
{
  "name": "PT. Sinarwangi Melati",
  "email": "partner@sinarwangimelati.com",
  "phone": "+6204774121221",
  "address": "Jl. T.B Simatupang No 13 Jakarta Selatan.",
  "city": "DKI Jakarta",
  "country": "Indonesia",
  "postalCode": "41422"
}
```

### Response body (Success)

```json
"code": 200,
  "message": "success",
  "data": {
    "id": "40739dc7-726e-4b8a-babe-6a0e51f36ce6",
    "name": "PT. Sinarwangi Melati",
    "email": "partner@sinarwangimelati.com",
    "phone": "+6204774121221",
    "address": "Jl. T.B Simatupang No 13 Jakarta Selatan.",
    "city": "DKI Jakarta",
    "country": "Indonesia",
    "postalCode": "41422",
    "createdAt": "2022-12-31T23:59:59Z",
    "updatedAt": "2022-12-31T23:59:59Z",
    "destinations": []
  }
```

### Response body (Failed)

```json
{
  "errors": "Failed to update data"
}
```
