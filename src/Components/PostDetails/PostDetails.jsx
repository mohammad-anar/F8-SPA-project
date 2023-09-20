import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post= useLoaderData();
    const {id, title, body} = post;
    console.log(post);
    return (
        <div  className="border p-4 text-center rounded-lg border-red-200 flex flex-col m-8">
            <h1 className="text-2xl">Id: {id}</h1>
            <h3 className="text-xl">Title: {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;