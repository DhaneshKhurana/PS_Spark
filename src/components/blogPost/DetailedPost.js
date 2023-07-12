// SingleBlogPostPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostUsingId } from "../../data/PostController";
import { Divider, Panel } from "rsuite";
import { getCommentsForPost } from "../../data/CommentController";
import { CommentSection } from "./CommentSection";

export const DetailedPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const pst = getPostUsingId(postId);
    console.log("post recieved::", pst);
    const cmnts = getCommentsForPost(postId);
    setComments(cmnts);
    setPost(pst);
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

        <CommentSection comments={comments} />
      </Panel>
    );
  } else {
    return <div>Loading...</div>;
  }
};
