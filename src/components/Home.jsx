import { useState } from "react";
import "../styles/Blog.css";
import Blog from "./Blog";

function Home() {

    let [search, setSearch] = useState("");

    function searchBlog() {
        console.log(search);
    }

    let buttons = [];
    for (let i = 1; i < 5; i++) {
        buttons.push(i);
    }

    return (
        <div className="content">
            <div className="title">
                <h1>Blog In</h1>
                <p>Where we blog anything and everything.</p>
            </div>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search for blogs"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button onClick={searchBlog}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                </button>
            </div>
            <Blog />
            <div className="pagination">
                <button className="left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg></button>
                {
                    buttons.map(button => (
                        <button>{button}</button>
                    ))
                }
                <button className="right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></button>
            </div>
        </div>
    );
}

export default Home;