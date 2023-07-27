Project Description:

Node.js API with MongoDB and JWT authentication for user registration, login, and CRUD operations on posts. Secure and efficient user management.

SAMPLE RESTAPİ

This is a Node.js project that provides an API for user registration, login, and CRUD operations using MongoDB as the database. It includes authentication using JSON Web Tokens (JWT) to protect certain endpoints from unauthorized access.

Installation

To run the project locally, follow these steps:

1-Clone the repository to your local machine.
2-Install the required dependencies using npm: --> npm install

Create a .env file in the root directory and set the following environment variables:

MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret_key>

Start the application: --> npm start

API Endpoints
Authentication

POST /api/register

Description: Register a new user.

Request body: JSON object with username, email, and password.

Response: JSON object containing message and data.
POST /api/login

Description: Login an existing user and receive a JWT token for authentication.
Request body: JSON object with email and password.
Response: JSON object containing message and token.
Protected Routes
To access the protected routes, the client needs to include the received JWT token in the Authorization header as Bearer <token>.

GET /api/getpost

Description: Retrieve all posts.
Response: JSON object containing an array of posts.
GET /api/getpost/:id

Description: Retrieve a specific post by ID.
Response: JSON object containing the post data.
POST /api/postcreate

Description: Create a new post.
Request body: JSON object with title and content.
Response: JSON object containing message and data.
PUT /api/update/:id

Description: Update an existing post by ID.
Request body: JSON object with title and content.
Response: JSON object containing message and data.
DELETE /api/deletePost/:id

Description: Delete a post by ID.
Response: JSON object containing message and data.
Authentication Middleware
Description: The authentication middleware ensures that only authenticated users can access certain endpoints (postcreate, update, deletePost).
Implementation: The middleware checks the presence and validity of the JWT token in the Authorization header. If valid, it allows the request to proceed; otherwise, it returns a 401 Unauthorized error.
Testing
To test the API endpoints, you can use a tool like Postman. Ensure that you register/login first to obtain the JWT token for accessing the protected routes.

Technologies Used
Node.js
MongoDB
Express.js
JSON Web Tokens (JWT)
Contributing
If you would like to contribute to this project, please follow the guidelines in the CONTRIBUTING.md file.


Please make sure to replace <your_mongodb_uri> and <your_jwt_secret_key> with the actual MongoDB connection URI and your chosen JWT secret key, respectively.

Feel free to customize the README.md file further to include additional details, installation instructions, project structure, and any other relevant information about your project. Happy coding!
