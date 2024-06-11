# Destination API Spec

Full documentation for destination API spesification

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
    "message" : "success",
    "data" :
    {
        "id" : "MJB5VOPOZG2UXYGWKP7JO"
        "name" : "Wisata Snorking Gili",
        "description" : "menjadi lebih menyatu alam",
        "ticketPrice" : 300000,
        "openHours" : "09.00",
        "closeHours" : "17.00",
        "categoryId" : "ZIGSW1QWFFKBRNSWXYCGQ",
        "ownerId" : "HGCCSRB37PPH018USLCII",
        "locationId" : "8RZQHBHACBSEAVJAIMGDP"
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
    "message" : "success",
    "data" :
    {
        "id" : "MJB5VOPOZG2UXYGWKP7JO"
        "name" : "Wisata Snorking Gili",
        "description" : "menjadi lebih menyatu alam",
        "ticketPrice" : 300000,
        "openHours" : "09.00",
        "closeHours" : "17.00",
        "categoryId" : "ZIGSW1QWFFKBRNSWXYCGQ",
        "ownerId" : "HGCCSRB37PPH018USLCII",
        "locationId" : "8RZQHBHACBSEAVJAIMGDP"
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
      "id": "MJB5VOPOZG2UXYGWKP7JO",
      "name": "Wisata Snorking Gili",
      "description": "menjadi lebih menyatu alam",
      "ticketPrice": 300000,
      "openHours": "09.00",
      "closeHours": "17.00",
      "categoryId": "ZIGSW1QWFFKBRNSWXYCGQ",
      "ownerId": "HGCCSRB37PPH018USLCII",
      "locationId": "8RZQHBHACBSEAVJAIMGDP"
    },
    {
      "id": "MJB5VOPOZG2UXYGWKP7JO",
      "name": "Wisata Snorking Gili",
      "description": "menjadi lebih menyatu alam",
      "ticketPrice": 300000,
      "openHours": "09.00",
      "closeHours": "17.00",
      "categoryId": "ZIGSW1QWFFKBRNSWXYCGQ",
      "ownerId": "HGCCSRB37PPH018USLCII",
      "locationId": "8RZQHBHACBSEAVJAIMGDP"
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

```json
PUT /api/destinations/:id
```

### Response Body (Success)

```json
{
    "code": "200",
    "message" : "success",
    "data" :
    {
        "id" : "MJB5VOPOZG2UXYGWKP7JO"
        "name" : "Wisata Snorking Gili",
        "description" : "menjadi lebih menyatu alam",
        "ticketPrice" : 300000,
        "openHours" : "09.00",
        "closeHours" : "17.00",
        "categoryId" : "ZIGSW1QWFFKBRNSWXYCGQ",
        "ownerId" : "HGCCSRB37PPH018USLCII",
        "locationId" : "8RZQHBHACBSEAVJAIMGDP"
    }
}
```
