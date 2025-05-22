# CitizenIn - Citizen Complaints and Engagement System

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue)](https://citizen-in-full.vercel.app/)
[![Backend API](https://img.shields.io/badge/Backend%20API-Live-green)](https://citizenin-full.onrender.com)

## 📋 Overview

CitizenIn is a comprehensive digital platform that bridges the gap between citizens and government agencies, enabling efficient complaint management and citizen engagement. The system provides a streamlined process for citizens to submit complaints, track their status, and receive responses from relevant government institutions.

## 🌟 Key Features

### For Citizens
- **User Registration & Authentication** - Secure account creation and login
- **Complaint Submission** - Submit complaints with detailed information and attachments
- **Real-time Tracking** - Monitor complaint status and progress updates
- **Response Management** - Receive and view responses from government agencies
- **Feedback System** - Provide feedback on services and resolutions

### For Administrators
- **Category Management** - Create and manage complaint categories
- **Institution Management** - Add and organize government institutions
- **Member Administration** - Manage institution members and their roles
- **System Oversight** - Monitor overall system performance and usage

### For Agency Representatives
- **Complaint Dashboard** - View assigned complaints and their details
- **Status Updates** - Track complaint progress through various stages
- **Response System** - Provide official responses and resolutions to citizens
- **Workflow Management** - Manage complaint routing and assignment

## 🛠️ Technology Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Node.js with Express.js and TypeScript
- **Database**: MongoDB
- **Deployment**: 
  - Frontend: Netlify
  - Backend: Render

## 🏗️ Project Structure

```
CitizenIn/
├── backend/
│   ├── config/                 # Configuration files
│   └── src/
│       ├── database/
│       │   ├── config/         # Database configuration
│       │   ├── models/         # MongoDB models
│       │   └── seeders/        # Database seeders
│       ├── helpers/            # Utility functions
│       ├── middlewares/        # Express middlewares
│       ├── modules/
│       │   ├── controllers/    # Route controllers
│       │   ├── repository/     # Data access layer
│       │   └── validation/     # Input validation schemas
│       ├── routes/             # API routes
│       ├── services/           # Business logic layer
│       └── index.ts            # Application entry point
└── frontend/
    ├── public/                 # Static assets
    ├── src/
    │   ├── components/         # Reusable React components
    │   ├── database/           # Frontend data management
    │   ├── pages/              # Page components
    │   └── utils/              # Utility functions
    └── index.html              # Main HTML file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CitizenIn
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Create .env file with the following variables:
   # MONGODB_URI=your_mongodb_connection_string
   # PORT=5000
   # JWT_SECRET=your_jwt_secret
   # NODE_ENV=development
   
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   
   # Create .env file with:
   # REACT_APP_API_URL=http://localhost:5000
   
   npm start
   ```

## 📱 User Flows

### Citizen Journey
1. **Registration** → Create account with personal details
2. **Login** → Access personal dashboard
3. **Submit Complaint** → Fill complaint form with category and details
4. **Track Progress** → Monitor complaint status in real-time
5. **Receive Response** → Get official response from relevant agency

### Admin Workflow
1. **System Management** → Configure categories and institutions
2. **User Administration** → Manage citizen and agency accounts
3. **Oversight** → Monitor system usage and performance
4. **Reporting** → Generate system reports and analytics

### Agency Process
1. **Dashboard Access** → View assigned complaints
2. **Complaint Review** → Examine complaint details and attachments
3. **Status Updates** → Update complaint progress
4. **Response Delivery** → Provide official response to citizens

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Complaints
- `GET /api/complaints` - Get complaints (filtered by user role)
- `POST /api/complaints` - Submit new complaint
- `GET /api/complaints/:id` - Get specific complaint
- `PUT /api/complaints/:id` - Update complaint status
- `POST /api/complaints/:id/response` - Add response to complaint

### Administration
- `GET /api/categories` - Get complaint categories
- `POST /api/categories` - Create new category
- `GET /api/institutions` - Get institutions
- `POST /api/institutions` - Create new institution

## 🌐 Live Deployment

- **Frontend**: [https://citizen-in-full.vercel.app/]([https://citizen-in-full.vercel.app/))
- **Backend API**: [https://citizenin-full.onrender.com](https://citizenin-full.onrender.com)

## 🔒 Security Features

- JWT-based authentication
- Input validation and sanitization
- Role-based access control
- Secure file upload handling
- CORS configuration
- Environment variable protection

## 📊 Database Schema

### Collections
- **Users** - Citizen and agency user accounts
- **Complaints** - Complaint submissions and details
- **Categories** - Complaint categorization system
- **Institutions** - Government agencies and departments
- **Responses** - Agency responses to complaints

## 🧪 Testing the Application

You can explore the full functionality of **CitizenIn** by using the demo credentials provided below, or by registering as a citizen to create your own account.

### 🔑 Demo Admin Credentials
- **Email:** `demouser@gmail.com`  
- **Password:** `Password123`

Once logged in, you can:
- Manage institutions and categories
- Add institution members
- View and respond to citizen complaints

Feel free to create additional users or register as a citizen to experience the platform from different roles.


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



---

*Built with Heart not rush, and to be continued to keep it impactful.*
