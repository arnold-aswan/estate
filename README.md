# Swan Estates Listings Web Application

Welcome to Swan Estates, a Listings web application! This project is built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and utilizes Tailwind CSS for styling. The application allows users to create, view, update, and delete real estate listings.

# Screenshots

![Screenshot from 2024-04-29 11-45-02](https://github.com/arnold-aswan/estate/assets/135007872/1deb4f2f-264e-400f-a6cb-59bc03e5ebae)
![Screenshot from 2024-04-29 11-45-40](https://github.com/arnold-aswan/estate/assets/135007872/6a48fc59-646b-42de-9232-13f7f151e3b0)

# Features

1. User Authentication: Users can sign up and log in securely.
2. Create Listings: Authenticated users can create new real estate listings.
3. View Listings: All users can browse through available real estate listings.
4. Update and Delete Listings: Listing owners can update or delete their own listings.
5. Responsive Design: The application is designed to be responsive and work seamlessly on different devices.
6. Contact Landlord for more information about a listing.

# Technologies Used

1. MongoDB: NoSQL database used to store listing data.
2. Express.js: Backend web framework used to handle HTTP requests and routes.
3. React.js (Vite): Frontend library used to build the user interface.
4. Node.js: JavaScript runtime used for the server environment.
5. Tailwind CSS: Utility-first CSS framework used for styling.
6. JWT (JSON Web Tokens): Used for secure user authentication.
   Getting Started
7. Firebase: For google signup/signin authentication and storing listing images.

# Project Setup $ Installation.

## Getting Started.

To get a local copy of this project up and running on your machine, follow these steps:

## Prerequisites.

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

## Installation

Clone this repository to your local machine:

```
git clone https://github.com/estate.git
```

Navigate to the project directory:

```
cd estate
```

Install backend dependencies:

```
npm install
```

Install frontend dependencies:

```
cd client
npm install
```

## Configuration

1. Backend Configuration:

- Create a `.env` file in the root directory.
- Define environment variables for `MongoDB URI` and `JWT secret` key:

```
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
```

2. Frontend Configuration:
   Create a `.env` file in the client directory.
   Define a firebase API Key:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

3. Running the Application

- Start the backend server:

```
 cd ..
 npm start
```

- Start the frontend development server:

```
cd client
npm start
```

Access the application in your web browser at http://localhost:3000.

# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request.

# Author & License

[Arnold Aswani](https://github.com/arnold-aswan)

Licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for more details.
