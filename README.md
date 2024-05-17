# Style Way: Dress Color Suggestion App

Welcome to the Style Way app! This project is a React application that provides personalized dress color suggestions based on user preferences, occasions, and weather conditions. Users can register, log in, and manage their accounts to receive tailored color suggestions.

## Features

- **User Registration & Login:** Secure user authentication to access personalized features.
- **Color Suggestions:** Get dress color suggestions for various occasions.
- **Color Shades:** Explore different shades of a color.
- **Complementary Colors:** Discover complementary colors for better outfit combinations.
- **User Preferences:** Save and manage user preferences such as skin tone and location.


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


## Usage

### User Authentication
- **Register:** Create a new account to access the app's features.
- **Login:** Log into your account to get personalized suggestions.

### Dashboard
- **Get Dress Suggestions:** Select an occasion to get color suggestions for your outfit.
- **Manage Account:** Update your skin tone and location to refine color suggestions.

### Additional Features
- **Color Shades:** Enter a color name to view various shades of that color.
- **Complementary Colors:** Find out the complementary color for a given color.

## API Endpoints
The app interacts with a backend API for user data and color suggestions. Key endpoints include:

- **User Registration:** `POST /api/user/register`
- **User Login:** `POST /api/user/login`
- **Get User:** `GET /api/user/getuser`
- **User Preferences:** `POST /api/user/user-preference/:userId`
- **Dress Suggestion:** `POST /api/user/dress-suggestion/:userId`
- **Color Shades:** `GET /api/user/shades/:colorName`
- **Complementary Colors:** `GET /api/user/complementary/:colorName`

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and passes all tests.

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please contact us at [bavithra.sjh@gmail.com].



