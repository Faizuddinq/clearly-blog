
# 🌟 Clearly Blog

A responsive blog application built with React.js, Vite, and Tailwind CSS. It displays blog articles in the form of cards and includes features like pagination and a mobile-responsive layout.

## 🛠️ Tech Stack

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A modern, fast build tool for React applications.
- **Tailwind CSS**: A utility-first CSS framework to style the application.
- **Dummy Data**: Static blog data to simulate real blog posts.

## 🚀 Features

- **Pagination**: Displays blog posts in pages, allowing users to navigate through multiple pages of blog cards. 📄➡️
- **Blog Cards**: Each blog post is displayed in a card format with a title, excerpt, and date. 📰
- **Responsive Design**: The application is fully responsive and adjusts to different screen sizes, including a mobile-friendly navigation menu. 📱💻

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (version 14.x or higher) 🔧

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/clearly-blog.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd clearly-blog
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` to view the application. 🌐

### Development

- **Vite**: This project is powered by Vite, a fast development server and bundler. Vite automatically reloads the page when you make changes to the source code. 🚄
  
- **Tailwind CSS**: The project uses Tailwind CSS for styling. You can customize the styles by modifying the `tailwind.config.js` file. 🎨

### 📁 File Structure

```
.
├── public/
│   └── index.html           # The root HTML file
├── src/
│   ├── components/          # React components (Header, Footer, BlogCard, Pagination)
│   ├── data/                # Dummy blog data
│   ├── App.jsx              # Main component to render the application
│   ├── index.jsx            # Entry point for the React app
│   ├── App.css              # Global styles (if any)
└── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Project dependencies and scripts
```

## 🧩 Key Components

- **App.jsx**: The main entry point that contains the layout and structure of the app, including the header, blog cards, and pagination.
- **Header.jsx**: A responsive header with a logo, navigation links, and a mobile menu that switches between a hamburger and close icon. 🍔❌
- **BlogCard.jsx**: A component that displays individual blog posts in a card format. 📃
- **Pagination.jsx**: A component that handles the pagination functionality to display blogs across multiple pages. 🔢
- **Dummy Data**: Simulated blog posts in the `data/blogs.js` file. 💼

