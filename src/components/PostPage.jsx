import { useState } from "react";
import "../styles/PostPage.css";
import Comment from "./Comment.jsx";
import { useParams } from "react-router-dom";
import postDetails from "../data/postPageData.js";
import { format } from "date-fns";

function PostPage() {

    let [comment, setComment] = useState("");
    let { id } = useParams();

    let pageData = postDetails[id];

    function calculateReadTime(length) {
        return Math.round((length / 5) / 250);
    }

    return (
        <div className="page">
            <div className="title">{pageData.title}</div>
            <div className="info">
                <div className="date">{format(pageData.date, "dd LLL, yyyy")}</div>
                •
                <div className="length">{calculateReadTime(pageData.content.length)} min read</div>
            </div>
            <div className="author">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                {pageData.author}
            </div>
            <div className="description">{pageData.description}</div>
            <div className="content">{pageData.content}</div>
            <div className="comments">
                <h2>Comments ({pageData.comments.length})</h2>
                <div className="input">
                    <input
                        type="text"
                        name="comment"
                        value={comment}
                        placeholder="Add a comment"
                        onChange={e => setComment(e.target.value)}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" /><path d="M6 12h16" /></svg>
                </div>
                {
                    pageData.comments.map(comment => (
                        <Comment
                            author={comment.author}
                            date={format(comment.date, "dd LLL, yyyy")}
                            content={comment.content}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;