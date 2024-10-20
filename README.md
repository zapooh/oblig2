# Todo App

A simple Todo application built with Next.js, Prisma, and MySQL.

## Prerequisites

- Node.js (v14 or later)
- MySQL

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the database:
   - Create a MySQL database
   - Copy `.env.example` to `.env` and update the `DATABASE_URL` with your MySQL credentials:
     ```
     DATABASE_URL="mysql://username:password@localhost:3306/your_database_name"
     ```

4. Run Prisma migrations:
   ```
   npx prisma migrate dev
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Features

- Add new todos
- Mark todos as completed
- Delete todos

## Technologies Used

- Next.js
- React
- Prisma
- MySQL
- Tailwind CSS

## License

This project is open source and available under the [MIT License](LICENSE).
