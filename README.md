# Student Course Recommendation API

## Overview

The Student Course Recommendation API provides personalized course recommendations to students based on their academic history and preferences. The API leverages machine learning algorithms to generate recommendations and stores student data and recommendations in MongoDB.

## Features

* **Personalized Recommendations** : Uses machine learning to suggest courses tailored to each student's profile.
* **API Integration** : RESTful API built with Node.js for interacting with the recommendation system.
* **MongoDB Storage** : Stores student profiles, course data, and recommendations in MongoDB.

## Prerequisites

* Node.js 14.x or higher
* npm (Node package manager)
* MongoDB (Local or Cloud instance)
* Git (for cloning the repository)

## Installation

### Setup MongoDB

1. **Install MongoDB** : Follow the installation guide from the [official MongoDB documentation](https://docs.mongodb.com/manual/installation/).
2. **Start MongoDB** : Ensure MongoDB is running on the default port `27017`.

### Clone the Repository

`git clone https://github.com/yourusername/student-course-recommendation-api.git cd student-course-recommendation-api`

### Install Dependencies

`npm install`

### Configure MongoDB

1. **Create a Configuration File**
   Create a file named `.env` in the root directory with the following content:
   `MONGODB_URI=mongodb://localhost:27017/student_recommendations PORT=5000`
   Update `MONGODB_URI` if you are using a remote MongoDB instanc
2. **Run Migrations and Seed Data**
   The setup script will automatically handle database creation and initial data seeding:
   `npm run dev `

## Usage

### Starting the API

Run the API server using:

`npm start`

The server will start on `http://localhost:5000` by default.

### API Endpoints

* **GET /recommendations** : Get course recommendations for a student.
* **Parameters** : `student_id` (Required)
* **Response** : JSON object with a list of recommended courses
* **POST /feedback** : Submit feedback for a recommendation.
* **Body** : JSON object with `student_id`, `course_id`, and `rating`
* **Response** : JSON object with confirmation of feedback submission

### Example Requests

* **Get Recommendations**

  `curl -X GET "http://localhost:5000/recommendations?student_id=123"`
* **Submit Feedback**

  `curl -X POST "http://localhost:5000/feedback" -H "Content-Type: application/json" -d '{"student_id": "123", "course_id": "456", "rating": 4}' `

## MongoDB Schema

The MongoDB database consists of the following collections:

* **students** : Stores student profiles.
* **Document Structure** :
  `
  const mongoose = require('mongoose')

  const uniqueValidator = require('mongoose-unique-validator')


  const subjectsSchema = new mongoose.Schema({

    
    title: {
      type: String,
      unique: true ,  
       },
    subject_code: {
      type: Number,
      unique: true ,  
       },
    students_count: {
      type: Number,
       },
    teachers_count: {
      type: Number, 
       }
    	 
  })


  subjectsSchema.plugin(uniqueValidator);



  const Subjects = mongoose.model('Subjects', subjectsSchema)

  module.exports = Subjects`
