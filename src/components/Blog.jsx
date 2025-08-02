import Post from "./Post";

function Blog({ posts }) {
    return (
        <div className="blogs">
            {
                posts?.length ? posts.map(post => (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        date={post.created}
                        description={post.description}
                        author={post.author}
                    />
                )) :
                    "Loading..."
            }
        </div>
    );
}

export default Blog;