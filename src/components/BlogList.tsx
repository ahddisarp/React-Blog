// src/components/BlogList.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../types"; // Assume you have a types file
import Pagination from "./Pagination"; // Import the Pagination component

interface PaginationMeta {
    current_page: number;
    last_page: number;
    total: number;
}

const BlogList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [meta, setMeta] = useState<PaginationMeta | null>(null); // For pagination metadata
    const [currentPage, setCurrentPage] = useState<number>(1); // Current page state

    // Fetch posts when the component is mounted or when page changes
    useEffect(() => {
        fetchPosts(currentPage);
    }, [currentPage]);

    // Function to fetch posts for the given page
    const fetchPosts = (page: number) => {
        fetch(`http://localhost:8000/api/v1/posts?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.data);
                setMeta(data.meta); // Set pagination metadata
            });
    };

    // Function to handle changing the page
    const handlePageChange = (page: number) => {
        // Ensure page is within valid bounds
        if (meta && page >= 1 && page <= meta.last_page) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="blog-list">
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        <div className="author">by {post.authorName}</div>
                    </li>
                ))}
            </ul>

            {/* Pagination Controls */}
            {meta && (
                <Pagination
                    currentPage={meta.current_page}
                    lastPage={meta.last_page}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default BlogList;
