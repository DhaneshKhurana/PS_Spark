import { blogPosts } from "./FakeData";

export function getPosts() {
  return blogPosts;
}

export function getPostUsingId(postID) {
  console.log("PostController:: Post Id received:: ", postID);
  for (const post of blogPosts) {
    if (post.id == postID) {
      console.log("PostController:: data returned", post);
      return post;
    }
  }
  console.log("PostController:: Sorry no data found");
}
