# Password Reset Flow

This project is a simple user authentication system built using React for the frontend and a Node.js backend with Express. It allows users to register, login, request password resets, and reset their passwords.

## Features

- User registration with username, email, and password
- User login with email and password
- Password reset request via email
- Password reset with token verification

## Technologies Used

- React.js
- React Router DOM
- Axios for making HTTP requests
- Express.js for the backend
- MongoDB for data storage
- JWT for authentication
- Nodemailer for sending password reset emails
- React Toastify for notification messages

## Setup Instructions

### Frontend

1. Clone the repository:
   
   git clone 

2. Install dependencies:
   
   npm install

3. Start the frontend server:

   npm start

### Backend

1. Navigate to the backend directory

2. Create a `.env` file based on the provided `.env.example` and  configure your MongoDB connection URI, JWT secret, and email configuration for password reset emails.

3. Install dependencies:
   
   npm install

## Usage

- Open your web browser and navigate to `http://localhost:5173` to access the application.
- Register a new user account or login with an existing one.
- If you forget your password, click on the "Forgot Password?" link on the login page to request a password reset email.
- Follow the instructions in the email to reset your password.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bug fixes, feature requests, or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

