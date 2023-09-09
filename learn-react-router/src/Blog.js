import { blogData } from "./blogData";
import {Link} from "react-router-dom";

const Blog = () => {
    return (
        <ul>
            { blogData.map(post => (<BlogPreview params={post}/>)) }
        </ul>
    );
}

const BlogPreview = ({params}) => (<li><Link to={`/blog/${params.slug}`}>{params.title}</Link></li>);

export { Blog };