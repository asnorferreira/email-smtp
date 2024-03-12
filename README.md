# Project Documentation

## Project Requirements
1. Have the functionality to register an email and name of a person who wishes to receive the Newsletter.
2. Have an endpoint that sends the email text in the request body, and this text should be sent via email to all registered emails.
3. The body of the sent email should contain the name of the person receiving the Newsletter.
4. Use Template Engine to create an email template.

## Environment Setup
1. Clone the project repository: `git clone https://github.com/your-username/project-name.git`
2. Install project dependencies: `npm install`
3. Configure environment variables in the `.env` file at the project root. Example:


- EMAIL_HOST=your-email-host
- EMAIL_PORT=email-port
- EMAIL_USER=your-email-user
- EMAIL_PASS=your-email-password
- EMAIL_FROM=your-sending-email

---


## How to Run the Project
1. Start the server: `npm start`
2. Access the API endpoints using your preferred API client (Postman, Insomnia, etc.).

## API Endpoints
1. **POST /register**
- Registers an email to receive the Newsletter.
- Request body:
  ```json
  {
    "email": "example@email.com"
  }
  ```
2. **POST /send-mail**
- Sends an email to all registered emails in the Newsletter.
- Request body:
  ```json
  {
    "subject": "Email Subject",
    "body": "Email Body"
  }
  ```

## Technologies Used
- Node.js
- Express.js
- Nodemailer
- Handlebars



