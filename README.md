# NestJS MySQL API

A RESTful API built with NestJS and MySQL, featuring user management and posts functionality.

## Features

- User management with profiles
- Posts system with user relationships
- MySQL database integration
- TypeORM for database operations
- RESTful endpoints

## Prerequisites

- Node.js (v14 or higher)
- Docker
- MySQL (or Docker container)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/juanrevello/nestjs-mysql-api
cd nestjs-mysql-api
```

2. Install dependencies:
```bash
npm install
```

3. Start MySQL container:
```bash
docker run --name nestjs-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=nestdb -p 3306:3306 -d mysql:8.0 --default-authentication-plugin=mysql_native_password
```

4. Start the application:
```bash
npm run start:dev
```

## Database Configuration

The application uses the following database configuration:
- Host: 127.0.0.1
- Port: 3306
- Username: root
- Password: root
- Database: nestdb

## API Endpoints

### Users
- `POST /users` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id` - Update user
- `POST /users/:id/profile` - Create user profile

### Posts
- `POST /posts` - Create a new post
- `GET /posts` - Get all posts

## Project Structure

```
src/
├── users/
│   ├── user.entity.ts
│   ├── profile.entity.ts
│   └── users.module.ts
├── posts/
│   ├── post.entity.ts
│   └── posts.module.ts
└── app.module.ts
```

## Development

The application uses:
- NestJS framework
- TypeORM for database operations
- MySQL database
- Docker for containerization

