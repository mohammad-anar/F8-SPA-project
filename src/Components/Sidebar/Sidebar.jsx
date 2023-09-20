import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="ml-5 flex flex-col gap-y-4 p-5">
            <Link to ='/inbox'>Inbox</Link>
            <Link to ='/inbox'>Draft</Link>
            <Link to ='/inbox'>Spam</Link>
            <Link to ='/inbox'>Sent</Link>
            <Link to ='/inbox'>outbox</Link>
            <Link to ='/inbox'>Label</Link>
            <Link to ='/inbox'>Caption</Link>
        </div>
    );
};

export default Sidebar;