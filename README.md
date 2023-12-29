## Getting Started:

> Pre-requistics

- NodeJS
- NPM
- Git

### 1. Clone repo:

```bash
git clone https://github.com/anaysharma/Hackathon-1.0.git
cd ./Hackathon-1.0
```

### 2. Start the server

```bash
cd ./server
npm i
node index.js
```

### 3. Start development App frontend

```bash
cd ../client
npm i
npm run dev
```

### 4. Preview App in browser

open the development server url in your preferred browser.

## Problem Statement: 

Getting feedback on police operations is difficult due to outdated methods and privacy concerns. Traditional ways like inspections and calls to complainants are restricted and lack inclusivity. This hampers understanding community feelings and addressing policing issues effectively.

## Solution: 

#### Digital Feedback Platform: 

- Develop a user-friendly, cross-platform mobile and web application feedback system for citizens.
- Enable users to initiate the feedback process by scanning a QR code.
- Implement secure user verification through OTP/email, ensuring a trustworthy feedback submission process.
- Offer multiple feedback options, allowing users to provide both short and detailed feedback.
- Foster community engagement by enabling users to share feedback on social media, including the ability to tag a particular police station.
- Integrate a chatbot for user inquiries and assistance, enhancing accessibility and support.
- Automate feedback processing and utilize NLP for summarization, streamlining administrative tasks.
- Provide administrators with efficient insights, ensuring transparency and accountability in police services.

##### Components: 

- <u>Privacy and Anonymity Manager:</u>

  - Implement robust privacy measures to ensure anonymous feedback submission.

- <u>Data Analysis and Reporting:</u>

  - Utilize data analytics for comprehensive reporting on feedback trends.

- <u>User Interface and User Experience:</u>

  - Create an intuitive and accessible interface for a positive user experience.

- <u>Machine Learning-based Chat API:</u>

  - Integrate a chatbot to assist users and streamline the feedback process.

- <u>Database Storage:</u>

  - Implement a secure database for storing feedback data.

- <u>Cybersecurity Management:</u>
  - Prioritize cybersecurity to protect sensitive information.

##### Mode of Access: 

- <u>QR-Based Access:</u>

  - Implement QR codes for easy access to the digital feedback platform.

- <u>Publicly Hosted Web Portal:</u>
  - Ensure the platform is accessible through a publicly hosted web portal.

##### Features: 

- <u>Anonymous Reporting:</u>

  - Allow users to submit feedback anonymously, promoting honesty.

- <u>Multilingual Support:</u>

  - Include multilingual capabilities to accommodate the diverse linguistic population.

- <u>Real-time:</u>

  - Provide real-time feedback submission and response.

- <u>Automated Alerts:</u>

  - Implement automated alerts for immediate attention to critical issues.

- <u>Data Analytics and Reporting:</u>

  - Utilize data analytics to generate actionable insights.

- <u>Chatbot and Helpline:</u>

  - Integrate a chatbot and helpline for user assistance.

- <u>Feedback Submission:</u>
  - Enable users to submit feedback effortlessly.

#### Software & Technology: 

| Category               | Technologies                                                                                                                                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Programming Languages  | JavaScript, Python                                                                                                                                                                       |
| Frameworks             | ReactJS, TailwindCSS, ExpressJS, Axios, BullJS                                                                                                                                           |
| Database               | MongoDB                                                                                                                                                                                  |
| Software               | Browser:<ul><li>Google Chrome: v115 or newer</li><li>Mozilla Firefox: v115 or newer</li><li>Microsoft Edge: v115 or newer</li></ul>Runtime:<ul><li>Node JS: v20.10.00 or newer</li></ul> |
| Web Server             | Amazon Web Services, Google Firebase                                                                                                                                                     |
| Platform               | Windows 10 or newer <br>Android 11 or newer <br>Linux:<ul><li>Ubuntu: v20.01 or newer</li><li>Debian: v10.00 or newer</li><li>Arch: v6.0.6 or newer</li></ul>                            |
| Tools                  | Git, GitHub, Jest, Twilio, JWT                                                                                                                                                           |
| Mobile App Development | React Native                                                                                                                                                                             |
| Testing                | Jest                                                                                                                                                                                     |

## Team Members & Responsibilities: 

| Sr.No. | Candidate Name | Responsibilites      |
| ------ | -------------- | -------------------- |
| 1.     | Prabal Pratap  | AI/ML development    |
| 2.     | Saransh Meena  | Android development  |
| 3.     | Nikhil Raj     | Database development |
| 4.     | Anay Sharma    | web development      |

## Flow chart/ Graphical Representation: 

![High level Architecture of Digital System](/architecture.svg)

<center>Flow chart: High level Architecture of Digital System</center>

![digital mechanism of Police Feedback System](/flowchart.svg)

<center>Flow chart: digital mechanism of Police Feedback System</center>

## Schedule:

Setting realistic deadlines for each component is crucial for completing the project on time. Here's a suggested breakdown of tasks with deadlines:

###### <u>Week 1 (December 6 - 14):</u> Project Setup and Planning

1. <u>Day 1-2: Project Planning</u>

   - Define project scope, features, and requirements.
   - Break down tasks for frontend and backend development.

2. <u>Day 3-4: Environment Setup</u>

   - Set up development environments for React, React Native, and Node.js.
   - Initialize your project repositories.

3. <u>Day 5-7: Frontend Development Kickoff</u>
   - Start building the React web interface.
   - Implement basic navigation and layout.

###### <u>Week 2 (December 15 - 21):</u> Frontend Development

1. <u>Day 8-10: Web Interface</u>

   - Continue developing the React web interface.
   - Implement QR code scanning functionality.

2. <u>Day 11-14: Mobile App Development</u>
   - Begin developing the React Native mobile app.
   - Integrate QR code scanning for mobile using React Native Camera.

###### <u>Week 3 (December 22 - 28):</u> Backend Development

1. <u>Day 15-18: API Development</u>

   - Create RESTful APIs using Express.
   - Implement user authentication and authorization.

2. <u>Day 19-21: Database Integration</u>
   - Connect your backend to the chosen database (MongoDB or PostgreSQL).
   - Set up database schemas.

###### <u>Week 4 (December 29 - January 4):</u> Finalization and Testing

1. <u>Day 22-24: Authentication, Forms, and State Management</u>

   - Finalize authentication flows.
   - Implement forms using formik for React and react-hook-form for React Native.
   - Set up state management with redux for React and Context API for React Native.

2. <u>Day 25-28: Integration, Testing, and Deployment</u>
   - Integrate frontend with backend APIs.
   - Perform thorough testing (unit tests, integration tests).
   - Deploy the applications on cloud services (AWS, Google Cloud, or Azure).

###### <u>Week 5 (January 5 - 10):</u> Polishing and Deployment

1. <u>Day 29-30: Feedback Forms, Social Media Sharing, and Final Checks</u>

   - Implement feedback forms and social media sharing functionality.
   - Conduct final checks, bug fixes, and optimizations.

2. <u>Day 31 (January 10): Project Completion</u>
   - Wrap up any remaining tasks.
   - Deploy the finalized project.

Ensure that each task is broken down into manageable sub-tasks, and regularly review progress to identify and address any challenges. It's also advisable to allocate buffer time for unexpected issues that may arise during the development process. Communication within your development team is key to meeting deadlines effectively.
<br>
Given that digital accessibility varies in Rajasthan, it is imperative to account for users without consistent digital access by incorporating an offline mode we provide other feedback submissions.

##### Paper-based Feedback Form: 

Introduce a simple, paper-based feedback form with easy-to-fill multiple-choice questions.

##### Telephone Feedback System: 

Establish a toll-free hotline for anonymous feedback submission, ensuring accessibility for those less digitally literate.

##### Feedback Boxes: 

Install secure boxes at varying distances from police stations for anonymous written feedback submissions.

##### Printed Information for Awareness: 

Disseminate banners, posters, and brochures to raise awareness about the feedback mechanisms.
