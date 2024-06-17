# Destination API Spec

Full documentation for destination API spesification

- Production : [https://wander-api.chianyung.dev/api/destinations](https://wander-api.chianyung.dev/api/destinations)
- Local : [http://localhost:3000/api/destinations](http://localhost:3000/api/destinations)

| Endpoint                | HTTP     | Description               |
| ----------------------- | -------- | ------------------------- |
| `/api/destinations`     | `GET`    | Get all destinations      |
| `/api/destinations/:id` | `GET`    | Get specific destinations |
| `/api/destinations`     | `POST`   | Create new destinations   |
| `/api/destinations`     | `DELETE` | Delete all destinations   |
| `/api/destinations/:id` | `GET`    | Delete destination by id  |
| `/api/destinations/:id` | `PUT`    | Update destination by id  |

## Create Destination

Endpoint :

```http request
POST /api/destinations
```

### Request Body

```json
{
  "name": "Wisata Snorking Gili",
  "description": "menjadi lebih menyatu alam",
  "street": "Jl Gili no 4",
  "city": "Gili Trawangan",
  "province": "East Nusa Tenggara",
  "country": "Indonesia",
  "postalCode": "41441",
  "ticketPrice": 300000,
  "openHours": "09.00",
  "closeHours": "17.00",
  "categoryId": "ZIGSW1QWFFKBRNSWXYCGQ",
  "ownerId": "HGCCSRB37PPH018USLCII",
  "locationId": "8RZQHBHACBSEAVJAIMGDP"
}
```

### Response Body (Success)

```json
{
  "code": "200",
  "message": "success",
  "data": {
    "id": "MJB5VOPOZG2UXYGWKP7JO",
    "name": "Wisata Snorking Gili",
    "description": "menjadi lebih menyatu alam",
    "street": "Jl Gili no 4",
    "city": "Gili Trawangan",
    "province": "East Nusa Tenggara",
    "country": "Indonesia",
    "postalCode": "41441",
    "ticketPrice": 300000,
    "openHours": "09.00",
    "closeHours": "17.00",
    "categoryId": "ZIGSW1QWFFKBRNSWXYCGQ",
    "ownerId": "HGCCSRB37PPH018USLCII",
    "locationId": "8RZQHBHACBSEAVJAIMGDP",
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
GET /api/destinations/:id
```

### Response Body (Success)

```json
{
  "code": "200",
  "message": "success",
  "data": {
    "id": "MJB5VOPOZG2UXYGWKP7JO",
    "name": "Wisata Snorking Gili",
    "description": "menjadi lebih menyatu alam",
    "street": "Jl Gili no 4",
    "city": "Gili Trawangan",
    "province": "East Nusa Tenggara",
    "country": "Indonesia",
    "postalCode": "41441",
    "ticketPrice": 300000,
    "openHours": "09.00",
    "closeHours": "17.00",
    "categoryId": "ZIGSW1QWFFKBRNSWXYCGQ",
    "ownerId": "HGCCSRB37PPH018USLCII",
    "locationId": "8RZQHBHACBSEAVJAIMGDP",
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
GET /api/destinations
```

### Response Body (Success)

```json
{
  "code": "200",
  "message": "success",
  "data": [
    {
        "id" : "MJB5VOPOZG2UXYGWKP7JO",
        "name" : "Wisata Snorking Gili",
        "description" : "menjadi lebih menyatu alam",
        "street" : "Jl Gili no 4",
        "city" : "Gili Trawangan",
        "province" : "East Nusa Tenggara",
        "country" : "Indonesia",
        "postalCode" : "41441",
        "ticketPrice" : 300000,
        "openHours" : "09.00",
        "closeHours" : "17.00",
        "categoryId" : "ZIGSW1QWFFKBRNSWXYCGQ",
        "ownerId" : "HGCCSRB37PPH018USLCII",
        "locationId" : "8RZQHBHACBSEAVJAIMGDP",
        "createdAt": "2024-06-11T08:38:47.631Z",
        "updatedAt": "2024-06-11T08:38:47.631Z"
    },
    {
        "id" : "MJB5VOPOZCCSXYGWKP7DS",
        "name" : "Wisata Snorking Gili",
        "description" : "menjadi lebih menyatu alam",
        "street" : "Jl Gili no 4",
        "city" : "Gili Trawangan",
        "province" : "East Nusa Tenggara",
        "country" : "Indonesia",
        "postalCode" : "41441",
        "ticketPrice" : 300000,
        "openHours" : "09.00",
        "closeHours" : "17.00",
        "categoryId" : "ZIGSW1QWFFKBRNSWXYCGQ",
        "ownerId" : "HGCCSRB37PPH018USLCII",
        "locationId" : "8RZQHBHACBSEAVJAIMGDP",
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
DELETE /api/destinations/:id
```

### Response Body (Success)

```json
{
  "messsage": "Destination deleted"
}
```

## Delete all destination

Endpoint :

```http request
DELETE /api/destinations
```

### Response Body (Success)

```json
{
  "messsage": "Destinations deleted"
}
```

## Update destination by id

Endpoint :

```http request
PUT /api/destinations/:id
```

### Response Body (Success)

```json
{
  "code": "200",
  "message": "success",
  "data": {
    "id": "MJB5VOPOZG2UXYGWKP7JO",
    "name": "Wisata Snorking Gili",
    "description": "menjadi lebih menyatu alam",
    "street": "Jl Gili no 4",
    "city": "Gili Trawangan",
    "province": "East Nusa Tenggara",
    "country": "Indonesia",
    "postalCode": "41441",
    "ticketPrice": 300000,
    "openHours": "09.00",
    "closeHours": "17.00",
    "categoryId": "ZIGSW1QWFFKBRNSWXYCGQ",
    "ownerId": "HGCCSRB37PPH018USLCII",
    "locationId": "8RZQHBHACBSEAVJAIMGDP",
    "createdAt": "2024-06-11T08:38:47.631Z",
    "updatedAt": "2024-06-13T10:38:47.631Z"
  }
}
```
