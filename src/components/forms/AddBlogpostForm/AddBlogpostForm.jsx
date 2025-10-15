import "./AddBlogpostForm.css"
import { useForm } from "react-hook-form";
import calculateReadTime from "../../../helpers/calculateReadTime.js";
import { useNavigate } from "react-router-dom";

function AddBlogpostForm() {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        const blogPost = {
            ...data,
            comments: 0,
            shares: 0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(data.content)
        };

        console.log(blogPost);

        navigate("/blog-overview");
    }


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor="blogpostTitle">
                    Titel:
                    <input
                        {...register("title", {required: true})}
                        type="text"
                        id="blogpostTitle"
                    />
                </label>
                <label htmlFor="blogpostSubtitle">
                    Subtitel:
                    <input
                        {...register("subtitle", {required: true})}
                        type="text"
                        id="blogpostSubtitle"
                    />
                </label>
                <label htmlFor="blogpostAuthor">
                    Auteur:
                    <input
                        {...register("author", {required: true})}
                        type="text"
                        id="blogpostAuteur"
                    />
                </label>
                <label htmlFor="blogpostContent">
                    Bericht :
                    <textarea
                        {...register("content", {
                            required: true,
                            minLength: 300,
                            maxLength: 2000
                        })}
                        id="blogpostContent"
                        placeholder="Schrijf hier je nieuwe blogpost"
                        rows="10"
                        cols="100"
                    >
                    </textarea>
                </label>

                <button type="submit">Versturen</button>

            </form>
        </div>
    )
}

export default AddBlogpostForm;