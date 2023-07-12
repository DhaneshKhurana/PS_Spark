import { Link } from "react-router-dom";
import { Panel, PanelGroup } from "rsuite";

export const PostCard = ({ post }) => {
  return (
    <Panel
      header={<h3>{post.title}</h3>}
      bordered
      style={{ marginBottom: "20px", marginTop: "10px" }}
    >
      <img src={post.featuredImage} alt={post.title} />
      <p>{post.shortDescription}</p>
      <b>
        <p>Author: {post.author}</p>
      </b>
      <p>Publish Date: {post.publishDate}</p>
      <Link to={`/posts/${post.id}`}>Read More</Link>
    </Panel>
  );
};
