import React from 'react';
import {useParams} from 'react-router-dom';
import data from '../../constants/data.json'
import dateConvertor from "../../helpers/date-convertor/dateConvertor.jsx";

function BlogpostDetail() {

    const {id} = useParams();
    const post = data.find(p => p.id === parseInt(id));

    if (!post) {
        return <p>Blogpost niet gevonden</p>;
    }

    return (
        <main className="blog-detail">
            <h1>{post.title}</h1>
            <p>Geschreven door {post.author} op {dateConvertor(post.created)}</p>
            <p>{post.content}</p>
            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
        </main>


)
}

export default BlogpostDetail;