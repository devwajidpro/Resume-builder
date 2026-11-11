# 🤖 AI Resume Builder

An **AI-Powered Resume Builder** built with the **MERN Stack** that helps users create, customize, manage, and share professional resumes.

Create professional resumes with customizable templates, AI-enhanced summaries and job descriptions, PDF downloads, and public sharing — all through an intuitive and responsive web application.

<p align="center">
  <a href="https://resume-builder-eight-topaz-53.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-6366F1?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/>
  </a>
  <a href="https://github.com/devwajidpro/Resume-builder">
    <img src="https://img.shields.io/badge/GitHub-View%20Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository"/>
  </a>
</p>

---

## 🌐 Live Demo

**Live Website:** [AI Resume Builder](https://resume-builder-eight-topaz-53.vercel.app/)

Explore the application to create professional resumes, enhance content with AI, customize resume templates, download PDFs, and share resumes online.

---

## ✨ Features

### 📝 Resume Management
- Create professional resumes with personal and professional information.
- Edit and manage existing resumes.
- Organize resume content into dedicated sections.
- Manage multiple resumes from your account.

### 🤖 AI-Powered Features
- Enhance professional summaries using AI.
- Improve job descriptions with AI-generated content.
- Create more polished and professional resume content.

### 🎨 Customization & Design
- Choose from multiple resume templates.
- Customize resume accent colors.
- Preview resumes before downloading.
- Responsive interface for different screen sizes.

### 👤 Professional Information
- Add personal and contact information.
- Showcase work experience and achievements.
- Include education and qualifications.
- Highlight projects and technical skills.
- Add professional links.

### 📄 Export & Sharing
- Download resumes as PDF files.
- Generate public resume links.
- Share resumes online with recruiters and employers.

### 🔐 Authentication & Security
- User authentication.
- Personalized resume management.
- Protected application functionality.

---

## 🛠️ Tech Stack

Technologies and tools used to build this application.

### Frontend
<p>
  <img src="https://skillicons.dev/icons?i=react,tailwind,redux,js,vite" alt="React, Tailwind CSS, Redux, JavaScript and Vite"/>
</p>

- React.js
- Tailwind CSS
- Redux Toolkit
- Axios
- React Router
- Lucide React
- React Hot Toast
- Vite

### Backend
<p>
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb" alt="Node.js, Express.js and MongoDB"/>
</p>

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs

### AI & External Services
- OpenAI SDK / Compatible AI API
- ImageKit for image storage and processing

---

## 📸 Application Preview

Add your actual application screenshots here to help visitors understand the interface and functionality.

<!-- Replace these paths with actual screenshot URLs or repository image paths. -->

<!--
<p align="center">
  <img src="screenshots/dashboard.png" alt="AI Resume Builder Dashboard" width="800"/>
</p>
-->

---

## 📂 Project Structure

```text
Resume-builder/
├── client/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── configs/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- MongoDB database
- API key for your configured AI provider
- ImageKit credentials

### 1. Clone the Repository

```bash
git clone https://github.com/devwajidpro/Resume-builder.git

cd Resume-builder
```

### 2. Install Frontend Dependencies

```bash
cd client

npm install
```

### 3. Install Backend Dependencies

Open another terminal from the project root:

```bash
cd server

npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

OPENAI_API_KEY=your_ai_api_key
OPENAI_BASEURL=your_ai_endpoint_url
OPENAI_MODEL=your_supported_model

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Create a `.env` file inside the `client` directory:

```env
VITE_BASE_URL=http://localhost:3000
```

**Important:**
- These are example variables. Use the exact names expected by your application configuration.
- Configure any additional credentials required by your ImageKit integration.
- Never commit `.env` files, API keys, or database credentials to GitHub.

### 5. Start the Backend

From the `server` directory:

```bash
npm run server
```

Make sure this command matches a script defined in your backend `package.json`. Otherwise, use the appropriate available script.

### 6. Start the Frontend

From the `client` directory, open another terminal:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## 🔄 How It Works

1. Register or log in to your account.
2. Create a new resume or open an existing one.
3. Add personal information, education, work experience, projects, and skills.
4. Use AI to enhance your professional summary and job descriptions.
5. Select a resume template and customize its accent color.
6. Preview and download your resume as a PDF.
7. Make your resume public and share its link with recruiters or employers.

---

## 🔒 Security

- Keep API keys and sensitive credentials in environment variables.
- Protect private resume data with authentication and authorization.
- Validate incoming requests on the backend.
- Allow public access only to resumes explicitly marked as public.

---

## 🎯 Project Goals

This project demonstrates practical experience in:

- Full Stack Web Development
- MERN Stack Application Development
- REST API Development
- MongoDB Database Integration
- Authentication and Authorization
- Frontend State Management
- AI API Integration
- Responsive Web Design
- Application Deployment

---

## 🔮 Future Improvements

- Additional professional resume templates.
- ATS compatibility analysis.
- AI-powered resume scoring.
- Personalized resume improvement suggestions.
- Custom font and layout options.
- Additional export formats.

---

## 👨‍💻 Author

**Wajid Ali**  
Full Stack Developer | React.js | Next.js | Node.js | AI-Powered Web Applications

- 🌐 Portfolio: [devwajidpro.com](https://www.devwajidpro.com)
- 💻 GitHub: [@devwajidpro](https://github.com/devwajidpro)
- 💼 LinkedIn: [Wajid Ali](https://www.linkedin.com/in/devwajidpro/)

---

<p align="center">
  ⭐ If you find this project useful, consider giving the repository a star!
</p>

<p align="center">
  <b>Built with ❤️ by Wajid Ali</b>
</p>
