
function dateConvertor(date) {

    const dateOfPost = new Date(date);

    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }


    return dateOfPost.toLocaleDateString('nl-NL' , longOptions);


}

export default dateConvertor;