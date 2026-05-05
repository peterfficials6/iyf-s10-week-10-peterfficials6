# CommunityHub API - Week 10 

A comprehensive REST API built with Node.js and Express.js, featuring a complete community platform with posts, users, and comments functionality.


##  Project Description

CommunityHub API is a full-featured backend application that demonstrates advanced Node.js and Express.js concepts. This project includes a main API with structured architecture and five daily challenges that progressively build up complexity.

##  Features

### Main Project (Port 3000)
- **Posts Management**: Create, read, update, delete posts
- **User Authentication Ready**: Structured for future auth implementation
- **Advanced Middleware**: Logging, error handling, validation
- **CORS Enabled**: Ready for frontend integration
- **Environment Configuration**: Proper .env setup
- **Modular Architecture**: Separated routes, controllers, middleware, and data layers

### Daily Challenges
- **Day 1**: Hello Server - Basic Express setup (Port 3001)
- **Day 2**: User API - CRUD operations with validation (Port 3002)
- **Day 3**: Query Filtering - Advanced filtering, pagination, sorting (Port 3003)
- **Day 4**: Logger Middleware - File-based logging system (Port 3004)
- **Day 5**: Comments Endpoint - Nested CRUD operations (Port 3005)

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **JavaScript ES6+** - Modern JavaScript features
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing
- **File System** - For logging functionality

##  How to Run

### Prerequisites
- Node.js installed on your machine
- npm (comes with Node.js)

### Main Project Setup
```bash
# Clone the repository
git clone https://github.com/peterfficials6/iyf-s10-week-10-peterfficials6.git
cd iyf-s10-week-10-peterfficials6

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your settings

# Run the main server
node server.js
```

### Daily Challenges
Each daily challenge runs independently:

```bash
# Day 1 - Hello Server
cd daily-challenges/day-1-hello-server
npm install
node server.js
# Visit: http://localhost:3001

# Day 2 - User API
cd daily-challenges/day-2-user-api
npm install
node server.js
# Visit: http://localhost:3002

# Day 3 - Query Filtering
cd daily-challenges/day-3-query-filtering
npm install
node server.js
# Visit: http://localhost:3003

# Day 4 - Logger Middleware
cd daily-challenges/day-4-logger-middleware
npm install
node server.js
# Visit: http://localhost:3004

# Day 5 - Comments Endpoint
cd daily-challenges/day-5-comments-endpoint
npm install
node server.js
# Visit: http://localhost:3005
```

##  Project Structure

```
iyf-s10-week-10-peterfficials6/
├── src/                    # Main project source code
│   ├── routes/            # API routes
│   ├── controllers/       # Business logic
│   ├── middleware/        # Custom middleware
│   └── data/             # Data store
├── daily-challenges/      # Daily challenge projects
│   ├── day-1-hello-server/
│   ├── day-2-user-api/
│   ├── day-3-query-filtering/
│   ├── day-4-logger-middleware/
│   └── day-5-comments-endpoint/
├── server.js              # Main project entry point
├── package.json           # Dependencies
├── .env                   # Environment variables
└── .env.example          # Environment template
```

##  API Endpoints

### Main Project
- `GET /api/posts` - Get all posts (with filtering/sorting)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `PATCH /api/posts/:id/like` - Like a post
- `GET /api/health` - Health check

### Daily Challenges Examples
- **Day 2**: `GET/POST /api/users`
- **Day 3**: `GET /api/posts?author=John&sort=newest&page=1&limit=10`
- **Day 5**: `GET/POST/DELETE /api/posts/:id/comments`

##  Lessons Learned

### Technical Skills
1. **Express.js Architecture**: Learned proper separation of concerns with routes, controllers, and middleware
2. **Middleware Development**: Created custom middleware for logging, validation, and error handling
3. **REST API Design**: Implemented proper RESTful endpoints with appropriate HTTP methods
4. **Data Validation**: Added input validation to ensure data integrity
5. **Error Handling**: Implemented comprehensive error handling throughout the application
6. **Environment Management**: Learned to use environment variables for configuration
7. **CORS Configuration**: Enabled cross-origin requests for frontend integration

### Advanced Concepts
1. **Query Parameter Handling**: Implemented filtering, searching, pagination, and sorting
2. **File-based Logging**: Created a persistent logging system
3. **Nested Resources**: Managed complex relationships (posts with comments)
4. **Modular Project Structure**: Organized code for scalability and maintainability

##  Challenges Faced

### Technical Challenges
1. **File Encoding Issues**: Encountered and resolved file encoding problems when creating files via terminal
2. **Port Conflicts**: Managed multiple servers running simultaneously on different ports
3. **Git Repository Setup**: Handled merging unrelated histories when connecting local and remote repositories
4. **Middleware Order**: Learned the importance of middleware execution order in Express
5. **Async Operations**: Properly handled asynchronous file operations in logging middleware

### Problem-Solving Approaches
1. **Debugging Request Bodies**: Implemented detailed logging to understand request parsing
2. **CORS Issues**: Resolved cross-origin request problems for frontend integration
3. **Environment Configuration**: Set up proper environment variable management
4. **Project Organization**: Restructured project multiple times for optimal organization

##  Development Workflow

### Git Workflow
```bash
# Add changes
git add .

# Commit with descriptive message
git commit -m "Add user validation middleware"

# Push to remote
git push origin main

# Pull latest changes
git pull origin main
```

### Best Practices Applied
- **Descriptive Commit Messages**: Clear and consistent commit history
- **Modular Code**: Separated concerns for maintainability
- **Error Handling**: Comprehensive error handling at all levels
- **Environment Variables**: Secure configuration management
- **Documentation**: Well-documented code and API endpoints

##  Future Enhancements

### Planned Features
1. **User Authentication**: Add JWT-based authentication
2. **Database Integration**: Replace in-memory storage with MongoDB/PostgreSQL
3. **Rate Limiting**: Implement API rate limiting
4. **API Documentation**: Add Swagger/OpenAPI documentation
5. **Testing**: Add unit and integration tests
6. **Docker Containerization**: Containerize the application
7. **Frontend Integration**: Build a React/Vue.js frontend

### Improvements
1. **Input Validation**: Add more robust validation with Joi or Yup
2. **Logging Enhancement**: Implement structured logging with Winston
3. **Performance**: Add caching and optimization
4. **Security**: Implement security best practices
5. **Monitoring**: Add application monitoring and health checks

##  Project Statistics

- **Total Files**: 30+
- **Lines of Code**: 3000+
- **API Endpoints**: 15+
- **Daily Challenges**: 5
- **Middleware Functions**: 4
- **Development Time**: 1 week

##  Contributing

This project is part of the Infinite Youth Foundation (IYF) Week 10 challenge. Feel free to fork, modify, and extend the functionality.

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Acknowledgments

- Infinite Youth Foundation (IYF) for the learning opportunity
- Express.js documentation and community
- All the online resources and tutorials that helped in building this project

## Author

**Name:** Peter  
**GitHub:** [peterfficials6](https://github.com/peterfficials6)  
**Email:** peterfficials6@gmail.com  

---

**Built with ❤️ by Peterfficials**
