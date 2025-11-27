# Web Service Design - Practice 2
*Practice 2 of JBNU Web Service Design class
PASSELEGUE Anne Sarah - 202298367*

## Endpoints
**GET (2)**

GET /users - Get all users (200)
GET /users/:id - Get user by ID (200 or 404)

**POST (2)**

POST /users - Create user (201 or 400)
POST /products - Create product (201)

**PUT (2)**

PUT /users/:id - Update user (200)
PUT /products/:id - Update product (200)

**PATCH (2)**

PATCH /users/:id - Partially update user (200)
PATCH /products/:id - Partially update product (200)

**DELETE (2)**

DELETE /users/:id - Delete user (204)
DELETE /products/:id - Delete product (204)

**Middleware**

Request Logger: Logs all requests to console
404 Handler: Returns error for unknown routes
500 Handler: Catches server errors

**Response Format**
All responses follow this format:
``` json
json{
  "status": "success",
  "data": { ... }
}
``` 
Or for errors:
``` json
json{
  "status": "error",
  "message": "..."
}
```

**HTTP Status Codes Used**

200 - OK
201 - Created
204 - No Content (DELETE operations)
400 - Bad Request
404 - Not Found
500 - Server Error (test with GET /error)
