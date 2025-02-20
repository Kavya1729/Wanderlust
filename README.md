# Airbnb Clone Backend

This is the backend of an Airbnb clone application built using Node.js, Express, and MongoDB. It includes essential features like user authentication, hotel management, review and rating system, and CRUD operations for managing users, hotels, and reviews. The project is designed to simulate the functionality of an Airbnb-like platform without the frontend.

## **Features**

### **User Authentication and Authorization**
- User Signup and Login (JWT Authentication)
- Password Encryption (using bcrypt)
- User role management (Admin and User)

### **Hotel Management**
- Add, Update, and Delete hotels
- Attach hotel address to each listing

### **Review & Rating System**
- Users can leave reviews and ratings for hotels
- View average rating for each hotel

### **CRUD Operations**
- CRUD for users, hotels, and reviews

### **Security**
- Secure password storage (bcrypt)
- JWT-based user authentication

## **Tech Stack**

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Password Encryption**: bcrypt
- **Environment Variables**: dotenv
- **Request Parsing**: body-parser
