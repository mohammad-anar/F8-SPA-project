import { useLoaderData } from "react-router-dom";
import Post from "../post/post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
           <h1 className="text-3xl font-bold text-[tomato] text-center">Posts</h1>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 m-4 gap-4 max-h-screen overflow-y-scroll">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
           </div>
        </div>
    );
};

export default Posts;