import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';
import { BlogPostProvider } from './contexts/blog.context';

export default function App() {
    return (
        /* Provider React component that
         will allows child components to
         subscribe to context changes. */
        <BlogPostProvider>
            <BrowserRouter>
                <Blog />
            </BrowserRouter>
        </BlogPostProvider>
    );
}
