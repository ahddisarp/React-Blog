import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Post } from "../types";
const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get post id from the URL
    const [post, setPost] = useState<Post | null>(null);

    // Fetch the specific post when the component is mounted
    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data.data));
    }, [id]);

    return (
        <>
            <div className="back-link">
                <Link to="/">← Back to Blog List</Link>
            </div>
            <div className="blog-detail">
                {post ? (
                    <>
                        <h1>{post.title}</h1>
                        <h2>by {post.authorName}</h2>
                        <span>
                            {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                        <p>{post.content}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};

export default BlogDetail;
