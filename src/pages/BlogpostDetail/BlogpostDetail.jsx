import React from 'react';
import { useParams } from 'react-router-dom';

function BlogpostDetail() {

    const { id } = useParams();

    return (
        <main className="blog-detail">
            <h1>Dit is blog {id}</h1>
        </main>
    )
}

export default BlogpostDetail;