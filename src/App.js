import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';
import { BlogPostProvider } from './contexts/blog.context';

export default function App() {
    return (
        <BlogPostProvider>
            <BrowserRouter>
                <Blog />
            </BrowserRouter>
        </BlogPostProvider>
    );
}
