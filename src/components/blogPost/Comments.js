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

export const CommentsSection = ({ comments }) => {
  const handleReply = (commentId) => {
    // Handle reply action for the comment with the specified ID
  };

  const handleUpvote = (commentId) => {
    // Handle upvote action for the comment with the specified ID
  };

  const handleDownvote = (commentId) => {
    // Handle downvote action for the comment with the specified ID
  };

  return (
    <Panel header="Comments">
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <Comment.Avatar src={comment.avatar} alt={comment.name} />
          <Comment.Content>
            <Comment.Author>{comment.name}</Comment.Author>
            <Comment.Text>{comment.content}</Comment.Text>
            <Comment.Time>{comment.timestamp}</Comment.Time>

            <div>
              <Button appearance="link" onClick={() => handleReply(comment.id)}>
                Reply
              </Button>
              <Button
                appearance="link"
                onClick={() => handleUpvote(comment.id)}
              >
                <Icon icon="thumbs-o-up" /> Upvote
              </Button>
              <Button
                appearance="link"
                onClick={() => handleDownvote(comment.id)}
              >
                <Icon icon="thumbs-o-down" /> Downvote
              </Button>
            </div>
          </Comment.Content>
        </Comment>
      ))}

      <Divider />

      <Form fluid>
        <FormGroup>
          <ControlLabel>Your Comment</ControlLabel>
          <FormControl name="comment" componentClass="textarea" rows={5} />
        </FormGroup>

        <Button appearance="primary">Submit Comment</Button>
      </Form>
    </Panel>
  );
};
