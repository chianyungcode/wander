# Location API Documentation

Full documentation for location API spesification

- Production : <https://wander-api.chianyung.dev/api/locations>
- Local : <http://localhost:3000/api/locations>

| Endpoint             | HTTP     | Description             |
| -------------------- | -------- | ----------------------- |
| `/api/locations`     | `GET`    | Get all location        |
| `/api/locations/:id` | `GET`    | Get specific location   |
| `/api/locations`     | `POST`   | Create new location     |
| `/api/locations`     | `DELETE` | Delete all destinations |
| `/api/locations/:id` | `GET`    | Delete location by id   |
| `/api/locations/:id` | `PUT`    | Update location by id   |

## Authentication Header

| Parameter   | Description | Type   | Required |
| ----------- | ----------- | ------ | -------- |
| `X-API-KEY` | API key     | string | `Yes`    |

## Create Location

Endpoint :

```http request
POST /api/locations
```

### Request Body

```json
{
  "city": "Jimbaran",
  "province": "Bali",
  "country": "Indonesia"
}
```

### Response Body (Success)

```json
{
    "code": "200",
    "message" : "success",
    "data" :
    {
        "id" : "MJB5VOPOZG2UXYGWKP7JO"
        "city" : "Jimbaran",
        "province" : "Bali",
        "country" : "Indonesia"
        "createdAt": "2024-06-11T08:38:47.631Z",
        "updatedAt": "2024-06-11T08:38:47.631Z"
    }
}
```

### Response Body (Failed)

```json
{
  "errors": "name is required"
}
```

## Get Destination

Endpoint :

```http request
GET /api/locations/:id
```

### Response Body (Success)

```json
{
    "code": "200",
    "message" : "success",
    "data" :
    {
        "id" : "MJB5VOPOZG2UXYGWKP7JO"
        "city" : "Jimbaran",
        "province" : "Bali",
        "country" : "Indonesia",
        "createdAt": "2024-06-11T08:38:47.631Z",
        "updatedAt": "2024-06-11T08:38:47.631Z"
    }
}
```

### Response Body (Failed)

```json
{
  "errors": "data not found"
}
```

## Get All Destination

Endpoint :

```http request
GET /api/locations
```

### Response Body (Success)

```json
{
  "code": "200",
  "message": "success",
  "data": [
    {
        "id" : "MJB5VOPOZG2UXYGWKP7JO"
        "city" : "Jimbaran",
        "province" : "Bali",
        "country" : "Indonesia"
        "createdAt": "2024-06-11T08:38:47.631Z",
        "updatedAt": "2024-06-11T08:38:47.631Z"
    },
    {
        "id" : "MJB5VOPOZG2UXYGWUDH134"
        "city" : "Kuta",
        "province" : "Bali",
        "country" : "Indonesia",
        "createdAt": "2024-06-11T08:38:47.631Z",
        "updatedAt": "2024-06-11T08:38:47.631Z"
    }
  ]
}
```

### Response Body (Failed)

```json
{
  "errors": "failed to get data"
}
```

## Delete destination by id

Endpoint :

```http request
DELETE /api/locations/:id
```

### Response Body (Success)

```json
{
  "messsage": "Location deleted"
}
```

### Response Body (Failed)

```json
{
  "errors": "Failed to delete location"
}
```

## Delete all destination

Endpoint :

```http request
DELETE /api/locations
```

### Response Body (Success)

```json
{
  "messsage": "Locations deleted"
}
```

## Update destination by id

Endpoint :

```json
PUT /api/locations/:id
```

### Response Body (Success)

```json
{
    "code": "200",
    "message" : "success",
    "data" :
    {
        "id" : "MJB5VOPOZG2UXYGWKP7JO"
        "city" : "Jimbaran",
        "province" : "Bali",
        "country" : "Indonesia"
        "createdAt": "2024-06-11T08:38:47.631Z",
        "updatedAt": "2024-06-13T14:43:47.631Z"
    }
}
```
