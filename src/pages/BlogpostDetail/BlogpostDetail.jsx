import React from 'react';
import {useParams} from 'react-router-dom';
import data from '../../constants/data.json'
import dateConvertor from "../../helpers/dateConvertor.js";
import './BlogpostDetail.css'

function BlogpostDetail() {

    const {id} = useParams();
    const post = data.find(p => p.id === parseInt(id));

    if (!post) {
        return <p>Blogpost niet gevonden</p>;
    }

    return (
        <main className="blog-detail">
            <h1>{post.title}</h1>
            <p className="blog-author">
                Geschreven door <strong>{post.author}</strong> op {dateConvertor(post.created)}
            </p>
            <section className="blog-content">
                <p>{post.content}</p>
            </section>
            <p className="comments">
                {post.comments} reacties - {post.shares} keer gedeeld
            </p>
        </main>
    );
}

export default BlogpostDetail;