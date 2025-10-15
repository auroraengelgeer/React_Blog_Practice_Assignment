
function calculateReadTime(content) {
    // Trim spaties en splits op één of meer spaties
    const wordCount = content.trim().split(/\s+/).length;

    // Bereken leestijd: 100 woorden = 0.3 min, afronden naar boven
    const readTime = Math.ceil((wordCount / 100) * 0.3);

    return readTime;
}

export default calculateReadTime;