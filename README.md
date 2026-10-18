# 🤖 AI Resume Builder

An AI powered Resume Builder built with the **MERN Stack** that helps users create, customize, and manage professional resumes with ease. Users can enter their information manually, edit existing resumes, enhance professional summaries and job descriptions using AI, choose different templates, and share their resumes through a public link.


## 🌐 Live Demo

🚀 **Live Website:** https://resume-builder-eight-topaz-53.vercel.app

Explore the application to create professional resumes, enhance content with AI, customize templates, download resumes as PDFs, and share them online.

## ✨ Features

- 📝 **Create Resumes:** Build professional resumes by entering personal and professional information.
- ✏️ **Edit Resumes:** Update existing resumes whenever needed.
- 🤖 **AI Powered Enhancement:** Improve professional summaries and job descriptions using AI.
- 🎨 **Multiple Templates:** Choose from different resume templates and customize accent colors.
- 👤 **Profile Information:** Add personal details, contact information, and professional links.
- 💼 **Work Experience:** Showcase professional experience and achievements.
- 🎓 **Education:** Add educational background and qualifications.
- 🚀 **Projects & Skills:** Highlight projects and technical skills.
- 📄 **Download Resume:** Download resumes as PDF files.
- 🔗 **Public Resume Sharing:** Make resumes public and share them through an online link.
- 🔐 **Authentication:** Secure user authentication and personalized resume management.
- 📱 **Responsive Design:** Use the application across different screen sizes.

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Redux Toolkit
- Axios
- React Router
- Lucide React
- React Hot Toast
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

### AI & Services
- OpenAI SDK / compatible AI API
- ImageKit for image storage and processing

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

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- A MongoDB database
- An API key for your configured AI provider
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

Open a new terminal in the project root and run:

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

**Note:** These are example environment variables. Use the exact names and values expected by your application configuration. If your ImageKit setup requires additional credentials, configure those as well.

Never commit `.env` files, API keys, or database credentials to GitHub.

### 5. Start the Backend

From the `server` directory, run:

```bash
npm run server
```

Make sure this script exists in your `server/package.json`. Otherwise, use the appropriate script defined in your project.

### 6. Start the Frontend

Open another terminal:

```bash
cd client
npm run dev
```

Open the local URL displayed by Vite in your browser.

## 🚀 How It Works

1. Register or log in to your account.
2. Create a new resume or open an existing one.
3. Enter personal information, education, work experience, projects, and skills.
4. Use AI to enhance your professional summary and job descriptions.
5. Select a resume template and customize its appearance.
6. Preview and download your resume as a PDF.
7. Make your resume public and share its link with recruiters or employers.

## 🔒 Security

- Store API keys and database credentials in environment variables.
- Protect private resume data with authentication and authorization.
- Validate incoming requests on the server.
- Allow public access only to resumes explicitly marked as public.

## 🎯 Project Goals

This project demonstrates practical experience in full stack web development, REST APIs, database integration, authentication, state management, AI integration, and responsive UI design.

## 🔮 Future Improvements

- More professional resume templates
- AI powered resume feedback
- ATS compatibility analysis
- Resume scoring and improvement suggestions
- Custom font and layout options
- Additional export formats

## 👨‍💻 Author

**Wajid Ali**

Aspiring Full Stack AI Engineer passionate about building modern web applications and AI powered solutions.

- GitHub: [@devwajidpro](https://github.com/devwajidpro)
- LinkedIn: [Wajid Ali](https://www.linkedin.com/in/devwajidpro)

---

⭐ If you find this project useful, consider giving the repository a star!
## Thank You!
