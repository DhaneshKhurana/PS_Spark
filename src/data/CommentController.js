import { comments } from "./FakeComment";

export function getCommentsForPost(postID) {
  console.log("CommentController:: Post Id received:: ", postID);
  for (const id in comments) {
    if (id == postID) {
      console.log("CommentController:: data returned", comments[id]);
      return comments[id];
    }
  }
  console.log("CommentController:: Sorry no data found");
}
