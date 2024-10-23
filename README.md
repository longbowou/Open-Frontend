# Open

A sleek, serverless app offering seamless login, registration, and profile updates with image uploads. Powered by AWS
Lambda, Cognito, and S3, it provides a modern, scalable solution with zero server maintenance—perfect for rapid, secure
user management.

## Description

In this serverless application, AWS infrastructure components come together to create a modern, scalable platform for
user authentication, profile management, and media uploads, all while minimizing server management overhead. Here’s how
the key resources contribute to this seamless experience:

### 1. API Gateway:

API Gateway acts as the heart of the app’s communication. It serves as a scalable entry point, routing requests like
user login, registration, and profile updates to the appropriate Lambda functions. API Gateway offers the app a
powerful, secure, and easily manageable interface for handling HTTP requests without the need for complex backend
servers.

### 2. AWS Lambda:

Lambda is the brains behind each operation. The serverless architecture leverages Lambda to process login credentials,
manage user data, and handle image uploads. Functions are written in Node.js, executing on demand when triggered by API
Gateway. This eliminates the need for dedicated servers and ensures the app can scale effortlessly, processing user
requests in milliseconds.

### 3. S3 (Simple Storage Service):

S3 serves dual purposes in this app. The FrontendBucket hosts static frontend files, delivering them globally to users
with blazing speed, while the MediaBucket manages image uploads for user profiles. With its built-in redundancy and CORS
configuration, S3 ensures safe and efficient storage for user media, while making file access straightforward.

### 4. DynamoDB:

DynamoDB serves as the app’s database, providing high-performance, low-latency storage for user information. Every
registered user has an entry in DynamoDB, with operations such as creating, reading, updating, and deleting profiles
handled smoothly. The database’s scalability matches the dynamic growth of the app, ensuring optimal performance
regardless of the user load.

### 5. CloudFront:

CloudFront, a global Content Delivery Network (CDN), accelerates content delivery by caching frontend files closer to
users. This results in faster load times and ensures a seamless experience, even under heavy traffic. Additionally,
CloudFront provides enhanced security with HTTPS, protecting user interactions.

## Key Features

### Effortless User Management

Say goodbye to traditional login headaches! This app provides frictionless user authentication and registration,
ensuring a smooth onboarding process for new users while maintaining robust security protocols.

### Profile Customization with Image Uploads

Empower users to express themselves with personalized profiles! Seamlessly update user details and profile pictures
with real-time image uploads—ensuring that everyone’s online persona is unique and fresh.

### Serverless Scalability

Built to grow with your users, this app leverages the power of AWS Lambda and DynamoDB, dynamically scaling to handle
millions of requests without breaking a sweat or requiring server maintenance.

### Blazing Fast Content Delivery

With AWS S3 and CloudFront integration, static content like HTML, CSS, and JavaScript is delivered at lightning speed,
offering an immersive, lag-free experience, no matter where your users are in the world.

### Secure API Gateway

All communication between the app and backend services is funneled through AWS API Gateway, ensuring top-notch
security, scalability, and easy maintenance—giving your app the muscle to handle increasing user demand.

### Zero Downtime and High Availability

Thanks to serverless architecture, the app ensures high availability and zero downtime, meaning users can interact
with the app anytime without interruptions.

## App Architecture

### Frontend

The app’s frontend is hosted on Amazon S3, offering a highly scalable, static website hosting solution that serves as
the app’s face. Integrated with Amazon CloudFront, a global content delivery network (CDN), the frontend is distributed
worldwide, offering users lightning-fast load times no matter their location. Modern web technologies like HTML, CSS,
and JavaScript (possibly enhanced with frameworks like React or Vue.js) ensure that users enjoy a sleek, responsive
design across devices.

### Serverless Backend with AWS Lambda

At the core of the app’s backend lies AWS Lambda, powering all of the business logic without the need for traditional
servers. This serverless framework allows for automatic scaling and pay-as-you-go billing, making the app cost-efficient
yet powerful.

- **Login/Registration Flow**:
  User authentication flows through AWS Lambda functions that securely process credentials, interacting with DynamoDB to
  store and retrieve user details. The login and registration APIs ensure a fast, secure experience using JWT tokens for
  authentication.

- **Profile Management & Image Uploads**:
  Profile updates are processed through a Lambda function, allowing users to update their details in DynamoDB. When
  users upload profile pictures, the app seamlessly handles image uploads to the MediaBucket in S3, where images are
  securely stored and easily accessible.

- **API Gateway Integration**:
  AWS API Gateway acts as the bridge between the frontend and backend. Every request to the backend, whether it’s
  logging in, updating profiles, or fetching user data, is routed through API Gateway, ensuring reliable, scalable, and
  secure communication.

## Lambda Functions

Here you can find each lambda function written in node.js on it on repository with more detail. Check them out:

### [Login](https://github.com/longbowou/open-authorizer)

This Lambda function facilitates secure user authentication by validating credentials against stored user data in
DynamoDB and generating a JWT (JSON Web Token) for authenticated users. It integrates password hashing with bcrypt for
enhanced security, ensuring that users’ credentials are safely processed.

### [Register](https://github.com/longbowou/open-fetch-user)

This Lambda function enables secure user registration by integrating DynamoDB for storing user details and S3 for
handling profile image uploads. It ensures that all user data, including passwords, is stored securely, while providing
an efficient way to manage profile pictures.

### [Authorizer](https://github.com/longbowou/open-authorizer)

This AWS Lambda function is designed as an Authorization Layer to protect sensitive API routes by verifying user
identity through JWT (JSON Web Tokens) and confirming user existence in DynamoDB. It’s a critical component for ensuring
only authenticated users can access your API resources, enhancing security and reliability.

### [Fetch User](https://github.com/longbowou/open-fetch-user)

This Lambda function is designed to return the authenticated user's details as provided by the API Gateway’s authorizer.
It’s a simple yet powerful function that can be used to verify and retrieve the user’s identity after they’ve been
authenticated.

### [Update Profile](https://github.com/longbowou/open-update-profile)

This AWS Lambda function is built to handle user profile updates, ensuring that each user’s name, email, and address are
kept up to date while enforcing unique email constraints across the user base.

### [Update Password](https://github.com/longbowou/open-update-password)

This AWS Lambda function provides a secure mechanism for users to update their password. It integrates DynamoDB to store
user data and bcrypt for secure password hashing and validation.

### [Update Image](https://github.com/longbowou/open-update-image)

This Lambda function provides a seamless image upload experience, handling both the secure storage
of images in Amazon S3 and updating user profile information in DynamoDB. It’s designed to allow users to easily
upload their profile pictures, delivering modern and interactive functionality for any application.

## Quick Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```