import {useParams} from "react-router-dom";
import {blogData} from "./blogData";

const BlogPost = () => {
    const {slug} = useParams();
    const {title, body} = blogData.find(post => post.slug === slug);
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}

export { BlogPost };