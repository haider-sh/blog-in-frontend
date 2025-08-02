import Post from "./Post";
import posts from "../data/postData.js";

function Blog(){
    return (
        <div className="blogs">
                {
                    posts.map((post, inx) => (
                        <Post 
                        id={inx}
                        title={post.title}
                        date={post.date}
                        description={post.description}
                        author={post.author}
                        />
                    ))
                }
            </div>
    );
}

export default Blog;