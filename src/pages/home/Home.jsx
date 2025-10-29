import React from "react";
import billboard from '../../assets/billboard.png'
import "./Home.css"

function Home() {
    return (
        <main className="homepage-container">
            <h1>Bij Blogventure geloven we in de kracht van woorden*</h1>
            <div className="img-wrapper">
                <img src={billboard} alt="billboard"/>
                <p className="footnote">
                    * En in billboards. Die zijn niet te missen namelijk.
                </p>
            </div>
        </main>
    )
}

export default Home;