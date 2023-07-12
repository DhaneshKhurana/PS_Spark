import {
  Panel,
  Comment,
  Divider,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Icon,
} from "rsuite";

export const CommentSection = ({ comments }) => {
  const handleReply = (commentId) => {
    // Handle reply action for the comment with the specified ID
  };

  const handleUpvote = (commentId) => {
    // Handle upvote action for the comment with the specified ID
  };

  const handleDownvote = (commentId) => {
    // Handle downvote action for the comment with the specified ID
  };

  const handleSubmitComment = (comment) => {};

  return (
    <div className="commentList">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="commentItem">
          <div className="picWrapper">
            <img src={comment.avatar} alt="" />
          </div>
          <span>{comment.name}</span>
          <span> </span>
          <span>{comment.timestamp}</span>
          <p>{comment.content}</p>
          <div>
            <button onClick={() => handleUpvote(comment.id)}>Upvote</button>
            <button onClick={() => handleDownvote(comment.id)}>Downvote</button>
            <button onClick={() => handleReply(comment.id)}>Reply</button>
          </div>
          {comment.replies && (
            <div>
              {comment.replies.map((reply) => (
                <div key={reply.id}>
                  <div>
                    <img src={reply.avatar} alt="Avatar" />
                    <span>{reply.name}</span>
                    <span>{reply.timestamp}</span>
                  </div>
                  <p>{reply.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <form onSubmit={handleSubmitComment}>
        <textarea></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
