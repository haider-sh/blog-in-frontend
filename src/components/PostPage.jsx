import { useContext, useEffect, useState } from "react";
import "../styles/PostPage.css";
import Comment from "./Comment.jsx";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { AppContext } from "../AppContext.jsx";

function PostPage() {

    let [comment, setComment] = useState("");
    let [addedComments, setAddedComments] = useState(0);
    let [pageData, setPageData] = useState(null);
    let { loggedIn } = useContext(AppContext);
    let { id } = useParams();

    useEffect(() => {
        async function getPostById() {
            const response = await fetch(`https://blog-in-backend.vercel.app/posts/${id}`);
            const post = await response.json();

            if (!post.success) {
                console.log(post.message);
                return;
            }

            setPageData(post.data);
        }
        getPostById();
    }, [id, addedComments]);

    async function addComment(){
        let response = await fetch(`https://blog-in-backend.vercel.app/posts/${id}/comments/create`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ comment })
            });

            let result = await response.json();
            if(!result.success){
                console.log(result.message);
                return;
            }
            setComment("");
            setAddedComments(addedComments + 1);
    }

    function calculateReadTime(length) {
        return Math.round((length / 5) / 250);
    }

    return (
        pageData ? 
            <div className="page">
                <div className="title">{pageData.title}</div>
                <div className="info">
                    <div className="date">{format(pageData.created, "dd LLL, yyyy")}</div>
                    •
                    <div className="length">{calculateReadTime(pageData.content.length)} min read</div>
                </div>
                <div className="author">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                    {pageData.author.user.username}
                </div>
                <div className="description">{pageData.description}</div>
                <div 
                className="content"
                dangerouslySetInnerHTML={{__html: pageData.content}}
                >                    
                </div>
                <div className="comments">
                    <h2>Comments ({pageData.comments.length})</h2>
                    {
                        loggedIn && 
                        <div className="input">
                            <input
                                type="text"
                                name="comment"
                                value={comment}
                                placeholder="Add a comment"
                                onChange={e => setComment(e.target.value)}
                            />
                            <button onClick={addComment}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" /><path d="M6 12h16" /></svg>
                            </button>
                        </div>}
                    {
                        pageData.comments.map(comment => (
                            <Comment
                                key={comment.id}
                                author={comment.author.user.username}
                                date={format(comment.created, "dd LLL, yyyy")}
                                content={comment.content}
                            />
                        ))
                    }
                </div>
            </div> :
            "Loading post..."
    );
};

export default PostPage;