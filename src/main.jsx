import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './routes/Homepage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import Write from './routes/Write.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root'))
  .render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/:slug" element={<SinglePostPage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ClerkProvider>
  );
// .render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
