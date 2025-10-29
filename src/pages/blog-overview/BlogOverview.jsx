import React, {useEffect, useState} from 'react';
import data from "../../constants/data.json"
import {Link} from "react-router-dom";
import './BlogOverview.css'
import axios from 'axios'

function BlogOverview() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchAllBlogposts() {
            try {
                setLoading(true);
                const result = await axios.get(
                    'https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts',
                    {
                        headers: {
                            'novi-education-project-id': 'e8f5301b-5b8b-4f17-af36-2a6073dc22da'
                        }
                    }
                );
                console.log(result.data);
                setPosts(result.data);
            } catch (error) {
                console.error(error);
                setError("Er is iets misgegaan met het ophalen van de blogposts :(");
            } finally {
                setLoading(false);
            }
        }

        fetchAllBlogposts();
    }, []);

    if (loading) {
        return <p>Blogposts worden geladen...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>
    }
    return (
        <main className="blog-overview">
            <h1>Er zijn {posts.length} blogposts</h1>

            <ul>
                {posts && posts.length > 0 ? (

                        posts.map((post) => (
                            <li key={post.id}>
                                <Link to={`/posts/${post.id}`}>
                                    {post.title} ({post.author})
                                </Link>
                                <p>{post.comments} reacties en {post.shares} keer gedeeld</p>
                            </li>
                        ))
                ) : (
                    <p>Er zijn nog geen blogposts gevonden.</p>
                )}
                    </ul>

                    </main>
                    );
                }

export default BlogOverview;