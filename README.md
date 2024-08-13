# Student Course Recommendation API

## Overview

The Student Course Recommendation API provides personalized course recommendations to students based on their academic history and preferences. The API leverages machine learning algorithms to generate recommendations and stores user data, course information, and selections in a structured MongoDB database.

## DB design 
 [student-course-recommendation-design.png](/student-course-recommendation-design.jpg)

## Features

- **Personalized Recommendations**: Uses machine learning to suggest courses tailored to each student's profile.
- **RESTful API**: Built with Node.js for interacting with the recommendation system.
- **MongoDB Storage**: Efficiently stores user profiles, course data, and recommendation selections.

## Prerequisites

- Node.js 14.x or higher
- npm (Node package manager)
- MongoDB (Local or Cloud instance)
- Git (for cloning the repository)

## Installation

### Setup MongoDB

1. **Install MongoDB**: Follow the installation guide from the [official MongoDB documentation](https://docs.mongodb.com/manual/installation/).
2. **Start MongoDB**: Ensure MongoDB is running on the default port `27017`.

### Clone the Repository

```bash
git clone https://github.com/yourusername/student-course-recommendation-api.git
cd student-course-recommendation-api
