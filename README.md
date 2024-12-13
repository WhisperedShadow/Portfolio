# Personal Portfolio

This is my personal portfolio website built using modern web technologies. The portfolio showcases my projects, skills, and experience, with a visually appealing design and interactive features.

## Features

- **Dynamic 3D Elements**: Built using Three.js for engaging visual experiences.
- **Backend Integration**: Express.js handles backend operations for server-side logic.
- **Contact Form**: Integrated with Mailjet for email functionality.
- **Database**: MySQL used for storing and retrieving dynamic data.
- **Frontend**: Built with React for a fast and responsive user interface.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Three.js**: For creating 3D animations and visuals.

### Backend
- **Express.js**: For server-side logic.
- **Mailjet**: For handling email communication through the contact form.

### Database
- **MySQL**: For managing data storage.

### Deployment
- Hosted on [Your Hosting Provider, e.g., Render, Vercel, Netlify].

## Installation

Follow these steps to set up and run the portfolio locally:

### Prerequisites
Ensure you have the following installed:
- Node.js
- MySQL

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Create a MySQL database.
   - Import the SQL file provided in the `database` folder.
   - Update the database configuration in `backend/config.js`.

4. **Set up Mailjet**:
   - Sign up for a Mailjet account and get your API keys.
   - Add the API keys to your environment file (`.env`).
   
   Example:
   ```env
   MAILJET_API_KEY=your-mailjet-api-key
   MAILJET_SECRET_KEY=your-mailjet-secret-key
   ```

5. **Run the backend server**:
   ```bash
   cd backend
   node server.js
   ```

6. **Run the frontend**:
   ```bash
   cd frontend
   npm start
   ```

## Usage

- Open `http://localhost:3000` in your browser to view the portfolio.
- Use the contact form to send messages, which will be processed through Mailjet.

## Screenshots

Include screenshots of your portfolio to showcase its design and features.

## Contributing

Feel free to contribute by submitting issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out at [dd9514371@gmail.com].
