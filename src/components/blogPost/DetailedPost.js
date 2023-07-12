// SingleBlogPostPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostUsingId } from "../../data/PostController";
import { Divider, Panel } from "rsuite";

export const DetailedPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const pst = getPostUsingId(postId);
    console.log("post recieved::", pst);

    setPost((prev) => {
      return pst;
    });
  }, [postId]);

  if (post) {
    return (
      <Panel>
        <img
          src={post.featuredImage}
          alt={post.title}
          style={{ width: "100%", marginBottom: "20px" }}
        />
        <h3>{post.title}</h3>
        <p>
          By {post.author} | Published on {post.publishDate}
        </p>
        <Divider />
        <p>{post.content}</p>
        <Divider />
        <h4>Related Posts</h4>
        {/* Render related posts here */}
        <Divider />
        <h4>Comments</h4>
        {/* Render comments section here */}
      </Panel>
    );
  } else {
    return <div>Loading...</div>;
  }
};
