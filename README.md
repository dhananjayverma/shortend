# URL Shortener Service

This is a URL Shortener service built using Node.js, Express.js, and MongoDB. The service allows users to submit lengthy URLs and receive shortened versions in return. The shortened URLs can be used to redirect users to the original long URLs. The project also includes user registration and login functionalities to secure access to the service.

## Features

- **URL Shortening**: Submit a long URL through a POST request and receive a shortened URL.
- **Redirection**: Access the original URL by visiting the shortened URL.
- **User Registration**: Register users with a username and password.
- **User Login**: Authenticate users with their credentials.
- **Security**: Implement basic JWT-based authentication.
- **Rate Limiting**: Protect the API with rate limiting to prevent abuse.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Variables**: `dotenv` for managing environment variables
- **Logging**: `morgan` for request logging

## API Endpoints

### 1. User Registration

- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "username": "yourUsername",
    "password": "yourPassword"
  }


### User Login
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Body**:
  - **Content-Type**: `application/json`
  - **Example**:

    ```json
    {
      "username": "yourUsername",
      "password": "yourPassword"
    }
    ```


### Shorten URL
- **URL**: `/api/url/shorten`
- **Method**: `POST`
- **Headers**:
  - **Authorization**: `Bearer <yourJWTToken>`
- **Body**:
  - **Content-Type**: `application/json`
  - **Example**:

    ```json
    {
      "originalUrl": "https://www.example.com"
    }
    ```



### Redirect to Original URL
- **URL**: `/api/url/:shortUrl`
- **Method**: `GET`
- **Example**: `/api/url/abc123`
- **Behavior**: Redirects to the original URL associated with the short URL.


### Testing the API
- Use **Postman** or **curl** to test the API endpoints.
- Ensure that JWT tokens are provided in the **Authorization** header for protected routes.

### Error Handling
- **404 Not Found**: Returned if a short URL is not found.
- **400 Bad Request**: Returned for malformed requests.

### Future Improvements
- Add support for **custom short URLs**.
- Implement **analytics** to track the number of visits to each shortened URL.
- Improve **security** with a more robust authentication and authorization mechanism.
