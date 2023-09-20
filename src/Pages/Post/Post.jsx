
import PropTypes from 'prop-types';
import {  useNavigate } from 'react-router-dom';
const Post = ({ post }) => {
    const { id, title} = post;
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="border p-4 text-center rounded-lg border-red-200 flex flex-col">
            <div className='flex-1'>
                <h1 className="text-2xl">{id}</h1>
                <h2 className="text-xl">{title}</h2>
            </div>
            <button onClick={handleDetails} className='btn btn-sm btn-primary mt-3 w-full'>Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
}

export default Post;