# Blog Application API

A simple **REST API** for managing blog posts and authors using **Node.js, Express, MongoDB, and Mongoose**.

## Features
- Create authors and blog posts.
- Fetch all blog posts with author details.
- Retrieve a single blog post by ID.
- Delete blog posts.
- Implements Mongoose validation and error handling.

## Prerequisites
- **Node.js** installed
- **MongoDB** installed and running

## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/your-repo/blog-api.git
cd blog-api
```

### 2. Install dependencies
```sh
npm install
```

### 3. Start MongoDB
```sh
net start MongoDB
```

### 4. Set up environment variables
Create a `.env` file in the root directory and add:
```env
MONGO_URI=mongodb://localhost:27017/blogDB
PORT=5000
```

### 5. Start the server
```sh
npm run dev
```
The server will run at `http://localhost:5000`

## API Endpoints

### **Authors**
- **Create Author**
  ```http
  POST /authors
  ```
  **Body:**
  ```json
  {
    "name": "Jay Patel",
    "email": "jay@gmail.com"
  }
  ```

### **Blog Posts**
- **Create Blog Post**
  ```http
  POST /blogposts
  ```
  **Body:**
  ```json
  {
    "title": "My First Blog",
    "content": "This is my first blog post.",
    "author": "authorId"
  }
  ```

- **Get All Blog Posts**
  ```http
  GET /blogposts
  ```

- **Get Blog Post by ID**
  ```http
  GET /blogposts/:id
  ```

- **Delete Blog Post by ID**
  ```http
  DELETE /blogposts/:id
  ```
  
## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- Postman (for testing API)

