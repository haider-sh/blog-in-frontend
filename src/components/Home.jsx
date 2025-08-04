import { useEffect, useState } from "react";
import "../styles/Blog.css";
import Blog from "./Blog";

function Home() {

    let [search, setSearch] = useState("");
    let [buttons, setButtons] = useState([]);
    let [currButton, setCurrButton] = useState(1);
    let [currPosts, setCurrPosts] = useState([]);
    let [error, setError] = useState("");

    useEffect(() => {
        async function getPosts() {
            const response = await fetch("https://blog-in-backend.vercel.app/posts?from=0&limit=2");
            const posts = await response.json();

            if (!posts.success) {
                console.log("An error occured while fetching posts.");
                setError(posts.message);
                return;
            }

            if (!posts.data.posts.length) {
                console.log("No posts found");
                setError("No posts found");
                return;
            }

            setError("");

            setCurrPosts(posts.data);

            let pageButtons = [];
            for (let i = 1; i <= Math.ceil(posts.data.postsCount / 2) && i < 5; i++) {
                pageButtons.push(i);
            }

            setButtons(pageButtons);
        }
        getPosts();
    }, []);

    function searchBlog() {
        return async () => {
            const response = await fetch(`https://blog-in-backend.vercel.app/posts?search=${search}&from=0&limit=2`);
            const posts = await response.json();

            if (!posts.success) {
                console.log("An error occured while fetching posts.");
                setError(posts.message);
                return;
            }

            if (!posts.data.posts.length) {
                console.log("No posts found");
                setError("No posts found");
                return;
            }

            setError("");
            setCurrPosts(posts.data);
        }
    }

    function showNextPost(index) {
        return async () => {
            const response = await fetch(`https://blog-in-backend.vercel.app/posts?from=${index * 2}&limit=2`);
            const posts = await response.json();

            if (!posts.success) {
                console.log("An error occured while fetching posts.");
                setError(posts.message);
                return;
            }

            setError("");
            setCurrPosts(posts.data);
        };
    }

    function handleLeftBtnClick() {
        if (currButton === 1) {
            return;
        }

        let pageButtons = [];
        for (let i = currButton - 4; i < currButton; i++) {
            pageButtons.push(i);
        }
        setCurrButton(currButton - 4);
        setButtons(pageButtons);
    }

    function handleRightBtnClick() {
        if (currButton + 4 > Math.ceil((currPosts.postsCount / 2))) {
            return;
        }

        let pageButtons = [];
        for (let i = currButton + 4; i <= Math.ceil(currPosts.postsCount / 2) && i < currButton + 8; i++) {
            pageButtons.push(i);
        }

        setCurrButton(currButton + 4);
        setButtons(pageButtons);
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
                <button onClick={searchBlog()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                </button>
            </div>
            {
                error &&
                <div className="error">{error}</div>
            }
            {
                !error &&
                <Blog
                    posts={currPosts.posts ?? currPosts}
                />
            }
            <div className="pagination">
                <button onClick={handleLeftBtnClick} className="left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg></button>
                {
                    buttons.map(button => (
                        <button key={button} onClick={showNextPost(button - 1)}>{button}</button>
                    ))
                }
                <button onClick={handleRightBtnClick} className="right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></button>
            </div>
        </div>
    );
}

export default Home;