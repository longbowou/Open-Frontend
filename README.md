# Open

A cutting-edge app built with React, TypeScript, and Tailwind CSS, offering a smooth and intuitive user experience for
login, registration, profile updates, and image uploads. The app leverages API Gateway to route requests, AWS Lambda for
serverless backend logic, DynamoDB for fast and scalable data storage, and S3 for secure image hosting. CloudFront
accelerates content delivery, ensuring rapid load times and global reach. Seamlessly blending a sleek frontend with
powerful serverless technologies, this app is designed for performance, scalability, and a beautiful user experience.

![Screenshot 2024-10-22 at 9.43.18 PM.png](screenshots/cloudformation/Screenshot%202024-10-22%20at%209.43.18%E2%80%AFPM.png)

## Online Demo

<a href="https://dgzyzdn6ci4rp.cloudfront.net" target="_blank">https://dgzyzdn6ci4rp.cloudfront.net</a>

![Screenshot 2024-10-22 at 9.46.31 PM.png](screenshots/frontend/Screenshot%202024-10-22%20at%209.46.31%E2%80%AFPM.png)
Checkout more [screenshots](#screenshots) down.

## Effortless Serverless Deployment with CloudFormation

Checkout the [CloudFormation Repository](https://github.com/longbowou/open-cloudformation) to deploy this app’s
serverless backend and frontend easier with AWS
CloudFormation. In just a few simple steps, you’ll set up a fully scalable infrastructure.

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

### Frontend built with React, TypeScript, and Tailwind CSS

The app’s frontend, hosted on Amazon S3, is crafted with a modern tech stack consisting of React, TypeScript, and
Tailwind CSS to provide an intuitive and dynamic user experience. Here’s how these technologies enhance the app:

- **React**:
  React powers the app’s component-based architecture, allowing for a fast, interactive UI. With state management and
  hooks, the app delivers seamless user interactions and real-time data rendering, creating a highly responsive
  interface.

- **TypeScript**:
  By integrating TypeScript, the app gains type safety and developer-friendly features, ensuring fewer bugs, better code
  quality, and easier maintenance. TypeScript provides a robust development experience by catching errors early during
  the development phase, making the app more reliable and scalable.

- **Tailwind CSS**:
  Tailwind CSS provides a utility-first approach to styling, allowing for rapid UI development with minimal custom CSS.
  The design is responsive, consistent, and highly customizable, resulting in a modern, sleek interface that adapts
  beautifully to any screen size or device.

#### Blazing-Fast Performance with CloudFront

Combined with Amazon CloudFront for global content distribution, the frontend is delivered to users with lightning
speed, reducing latency and ensuring an optimized user experience—whether users are accessing the app from mobile
devices or desktops.

#### Why This Frontend Stack is Powerful

Together, React, TypeScript, and Tailwind CSS offer a robust, scalable, and visually appealing solution. This stack
ensures that the app not only performs efficiently but also provides a smooth, modern user experience that can scale as
user demand grows. Whether it’s handling dynamic updates, improving developer productivity, or offering a clean and
responsive UI, this combination delivers on all fronts.

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

## AWS Services

In this serverless application, AWS infrastructure components come together to create a modern, scalable platform for
user authentication, profile management, and media uploads, all while minimizing server management overhead. Here’s how
the key resources contribute to this seamless experience:

### API Gateway

API Gateway acts as the heart of the app’s communication. It serves as a scalable entry point, routing requests like
user login, registration, and profile updates to the appropriate Lambda functions. API Gateway offers the app a
powerful, secure, and easily manageable interface for handling HTTP requests without the need for complex backend
servers.

### AWS Lambda

Lambda is the brains behind each operation. The serverless architecture leverages Lambda to process login credentials,
manage user data, and handle image uploads. Functions are written in Node.js, executing on demand when triggered by API
Gateway. This eliminates the need for dedicated servers and ensures the app can scale effortlessly, processing user
requests in milliseconds.

### S3 (Simple Storage Service)

S3 serves dual purposes in this app. The FrontendBucket hosts static frontend files, delivering them globally to users
with blazing speed, while the MediaBucket manages image uploads for user profiles. With its built-in redundancy and CORS
configuration, S3 ensures safe and efficient storage for user media, while making file access straightforward.

### DynamoDB

DynamoDB serves as the app’s database, providing high-performance, low-latency storage for user information. Every
registered user has an entry in DynamoDB, with operations such as creating, reading, updating, and deleting profiles
handled smoothly. The database’s scalability matches the dynamic growth of the app, ensuring optimal performance
regardless of the user load.

### CloudFront

CloudFront, a global Content Delivery Network (CDN), accelerates content delivery by caching frontend files closer to
users. This results in faster load times and ensures a seamless experience, even under heavy traffic. Additionally,
CloudFront provides enhanced security with HTTPS, protecting user interactions.

## Lambda Functions

Here you can find each lambda function written in node.js on it on repository with more detail. Check them out:

### [Login](https://github.com/longbowou/open-login)

This Lambda function facilitates secure user authentication by validating credentials against stored user data in
DynamoDB and generating a JWT (JSON Web Token) for authenticated users. It integrates password hashing with bcrypt for
enhanced security, ensuring that users’ credentials are safely processed.

### [Register](https://github.com/longbowou/open-register)

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

## Screenshots

### Frontend App

![Screenshot 2024-10-22 at 9.45.49 PM.png](screenshots/frontend/Screenshot%202024-10-22%20at%209.45.49%E2%80%AFPM.png)
![Screenshot 2024-10-23 at 12.30.28 AM.png](screenshots/frontend/Screenshot%202024-10-23%20at%2012.30.28%E2%80%AFAM.png)
![Screenshot 2024-10-22 at 9.46.23 PM.png](screenshots/frontend/Screenshot%202024-10-22%20at%209.46.23%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.46.31 PM.png](screenshots/frontend/Screenshot%202024-10-22%20at%209.46.31%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.46.38 PM.png](screenshots/frontend/Screenshot%202024-10-22%20at%209.46.38%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.46.52 PM.png](screenshots/frontend/Screenshot%202024-10-22%20at%209.46.52%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.46.59 PM.png](screenshots/frontend/Screenshot%202024-10-22%20at%209.46.59%E2%80%AFPM.png)

## Cloud Formation

![Screenshot 2024-10-22 at 9.43.18 PM.png](screenshots/cloudformation/Screenshot%202024-10-22%20at%209.43.18%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.41.29 PM.png](screenshots/cloudformation/Screenshot%202024-10-22%20at%209.41.29%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.41.38 PM.png](screenshots/cloudformation/Screenshot%202024-10-22%20at%209.41.38%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.41.45 PM.png](screenshots/cloudformation/Screenshot%202024-10-22%20at%209.41.45%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.41.55 PM.png](screenshots/cloudformation/Screenshot%202024-10-22%20at%209.41.55%E2%80%AFPM.png)

### Codebuild

![Screenshot 2024-10-22 at 10.00.04 PM.png](screenshots/codebuild/Screenshot%202024-10-22%20at%2010.00.04%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.00.13 PM.png](screenshots/codebuild/Screenshot%202024-10-22%20at%2010.00.13%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.00.21 PM.png](screenshots/codebuild/Screenshot%202024-10-22%20at%2010.00.21%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.01.36 PM.png](screenshots/codebuild/Screenshot%202024-10-22%20at%2010.01.36%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.00.59 PM.png](screenshots/codebuild/Screenshot%202024-10-22%20at%2010.00.59%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.01.06 PM.png](screenshots/codebuild/Screenshot%202024-10-22%20at%2010.01.06%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.01.56 PM.png](screenshots/codebuild/Screenshot%202024-10-22%20at%2010.01.56%E2%80%AFPM.png)

### API Gateway

![Screenshot 2024-10-22 at 10.03.26 PM.png](screenshots/apigateway/Screenshot%202024-10-22%20at%2010.03.26%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.03.33 PM.png](screenshots/apigateway/Screenshot%202024-10-22%20at%2010.03.33%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.04.03 PM.png](screenshots/apigateway/Screenshot%202024-10-22%20at%2010.04.03%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.04.10 PM.png](screenshots/apigateway/Screenshot%202024-10-22%20at%2010.04.10%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.04.17 PM.png](screenshots/apigateway/Screenshot%202024-10-22%20at%2010.04.17%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.04.39 PM.png](screenshots/apigateway/Screenshot%202024-10-22%20at%2010.04.39%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.04.47 PM.png](screenshots/apigateway/Screenshot%202024-10-22%20at%2010.04.47%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.05.00 PM.png](screenshots/apigateway/Screenshot%202024-10-22%20at%2010.05.00%E2%80%AFPM.png)

### Lambda

![Screenshot 2024-10-22 at 9.47.58 PM.png](screenshots/lambda/Screenshot%202024-10-22%20at%209.47.58%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.48.20 PM.png](screenshots/lambda/Screenshot%202024-10-22%20at%209.48.20%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.48.34 PM.png](screenshots/lambda/Screenshot%202024-10-22%20at%209.48.34%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.48.43 PM.png](screenshots/lambda/Screenshot%202024-10-22%20at%209.48.43%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.49.03 PM.png](screenshots/lambda/Screenshot%202024-10-22%20at%209.49.03%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.49.16 PM.png](screenshots/lambda/Screenshot%202024-10-22%20at%209.49.16%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.49.33 PM.png](screenshots/lambda/Screenshot%202024-10-22%20at%209.49.33%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.49.58 PM.png](screenshots/lambda/Screenshot%202024-10-22%20at%209.49.58%E2%80%AFPM.png)

### DynamoDB

![Screenshot 2024-10-22 at 9.55.33 PM.png](screenshots/dynamodb/Screenshot%202024-10-22%20at%209.55.33%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.56.12 PM.png](screenshots/dynamodb/Screenshot%202024-10-22%20at%209.56.12%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.56.21 PM.png](screenshots/dynamodb/Screenshot%202024-10-22%20at%209.56.21%E2%80%AFPM.png)

### S3

![Screenshot 2024-10-22 at 9.57.25 PM.png](screenshots/s3/Screenshot%202024-10-22%20at%209.57.25%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.57.33 PM.png](screenshots/s3/Screenshot%202024-10-22%20at%209.57.33%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 10.16.45 PM.png](screenshots/s3/Screenshot%202024-10-22%20at%2010.16.45%E2%80%AFPM.png)
![Screenshot 2024-10-22 at 9.57.48 PM.png](screenshots/s3/Screenshot%202024-10-22%20at%209.57.48%E2%80%AFPM.png)

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