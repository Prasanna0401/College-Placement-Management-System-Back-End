# College Placement Management System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [User Roles](#user-roles)
- [Installation](#installation)

## Introduction
The **College Placement Management System** is a web application designed to streamline the placement process in educational institutions. This system provides distinct roles for students, TPO (Training and Placement Officer) admin, management admin, and super admin, ensuring a smooth and efficient workflow.

## Features
- **Student Portal**: Students can view available job opportunities, apply for placements, and track their application status.
- **TPO Admin Portal**: TPO admins can manage job postings, schedule interviews, and track student progress.
- **Management Admin Portal**: Management can oversee the entire placement process, view reports, and analyze data.
- **Super Admin Portal**: The super admin can manage system settings, user accounts, and oversee the management of TPO and management users.

## API Endpoints

- Routes for user : 
- `GET /api/v1/user/detail` - To get the details
- `GET /api/v1/user/all-users` - To get all details
- `GET /api/v1/user/:userID` - To get user data by ID
- `POST /api/v1/user/upload-photo` - To update a photo
- `POST /api/v1/user/update-profile` - To update profile
- `POST /api/v1/user/change-password` - To change the password

- Routes for student user : 
- `POST /api/v1/student/signup` - To signup or register
- `POST /api/v1/student/login` - To login
- `POST /api/v1/student/upload-resume` - To upload the resume using multer
- `POST /api/v1/student/upload-offer-letter` - To upload the offer letter
- `POST /api/v1/student/delete-offer-letter/:jobId/:studentId` - To delete the offer letter
- `PUT /api/v1/student/job/:jobId/:studentId` - To apply job
- `GET /api/v1/student/check-applied/:jobId/:studentId` - Check applied or not to job
- `POST /api/v1/student/update-status/:jobId/:studentId` - To update job status
- `GET /api/v1/student/internship` - To get all internship of a student
- `POST /api/v1/student/update-internship` - To update internship of a student
- `POST /api/v1/student/delete-internship` - To delete internship of a student
- `GET /api/v1/student/all-students-data-year-and-branch` - To get stundent arrays (for tpo and management only)
- `GET /api/v1/student/notify-interview-hired` - Student who is on interview or hired (for tpo and management only)

- Routes for tpo user : 
- `POST /api/v1/tpo/login` - To login
- `POST /api/v1/tpo/post-job` - To job listing data
- `GET /api/v1/tpo/jobs` - To get all jobs
- `POST /api/v1/tpo/delete-job` - To delete a job
- `GET /api/v1/tpo/job/:jobID` - To view a job
- `GET /api/v1/tpo/job/applicants/:jobId` - Job with its applicants 
- `GET /api/v1/tpo/myjob/:studentId` - Student jobs applied

- Routes for management user : 
- `POST /api/v1/management/login` - To login
- `GET /api/v1/management/tpo-users` - To get tpo users
- `POST /api/v1/management/deletetpo` - To delete tpo
- `POST /api/v1/management/addtpo` - To add tpo
- `POST /api/v1/management/add-management` - To add management
- `POST /api/v1/management/add-student` - To add student
- `POST /api/v1/management/send-notice` - To send a notice
- `GET /api/v1/management/get-all-notices` - To get all notices
- `GET /api/v1/management/get-notice` - To get a notice
- `POST /api/v1/management/delete-notice` - To delete a notice

- Routes for admin user : 
- `POST /api/v1/admin/login` - To login
- `GET /api/v1/admin/management-users` - To get a management users
- `POST /api/v1/admin/management-add-user` - To add a management user
- `POST /api/v1/admin/management-delete-user` - To delete a management user
- `GET /api/v1/admin/tpo-users` - To get a tpo users
- `POST /api/v1/admin/tpo-add-user` - To add a tpo user
- `POST /api/v1/admin/tpo-delete-user` - To delete a tpo user
- `GET /api/v1/admin/student-users` - To get a student users
- `POST /api/v1/admin/student-add-user` - To add a student user
- `POST /api/v1/admin/student-delete-user` - To delete a student user
- `POST /api/v1/admin/student-approve` - To approve a student

- Routes for company : 
- `GET /api/v1/company/company-detail` - To get all company details
- `POST /api/v1/company/add-company` - To add a company
- `POST /api/v1/company/delete-company` - To delete a company
- `GET /api/v1/company/company-data` - To get a company detail

## Tech Stack
- **Frontend**: Vite + React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: Tailwind CSS

## Project Structure
```plaintext
   ├── config
   ├── controllers
   ├── middleware
   ├── models
   ├── public
   │   └──  offerLetter
   │   └──  resumes
   │   └──  profileImgs
   │         └── default
   ├── routes
   ├── .env (NOTE: YOU NEED TO CREATE THIS FILE)
   ├── .gitignore
   ├── index.js
   ├── package.json
   ├── package-lock.json
   └── README.md
```

## User Roles
- **Students**: Can view and apply for job opportunities, update profiles, and track their application status.
- **TPO Admin**: Manages job postings, student applications, and interviews.
- **Management Admin**: Oversees the placement process, views reports, and analyzes placement data.
- **Super Admin**: Manages the overall system, creates new admin users (TPO and Management), and manages system-level settings.

## Installation
1. Clone the project
   ```bash
   https://github.com/Prasanna0401/College-Placement-Management-System-Back-End.git
   ``` 
2. Go to the project directory
   ```bash
   cd my-project
   ```
3. Create a `.env` file for environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=your_port_number
   JWT_SECRET=your_jwt_secret_key
   ```
4. Install the necessary packages:
   ```bash
   npm install
   ```
5. Start the backend server:
   ```bash
   npm start
   ```