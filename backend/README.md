# Student Registration Backend

## Install Dependencies

npm install

## Configure Environment Variables
Create a .env file in the root of the backend directory and add the following variables:
PORT=5000
DB_HOST=localhost
DB_USER=yourusername
DB_PASSWORD=yourpassword
DB_NAME=student_registration
DB_PORT=3306

## Run Development Server

npm run dev

## Production

npm start

## API Endpoints

POST /api/students
GET /api/students
PUT /api/students/:id
DELETE /api/students/:id