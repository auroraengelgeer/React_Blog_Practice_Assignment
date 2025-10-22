import React from 'react';
import data from "../../constants/data.json"
import {Link} from "react-router-dom";
import './BlogOverview.css'

function BlogOverview() {
    return (
        <main className="blog-overview">
            <h1>Er zijn {data.length} blogposts</h1>

            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.title} ({post.author})
                        </Link>
                        <p>{post.comments} reacties en {post.shares} keer gedeeld</p>
                    </li>
                ))}
            </ul>

        </main>
    )
}

export default BlogOverview;