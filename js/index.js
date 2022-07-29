import posts from "./data.js";
import Post from "./Post.js";

function init() {
  for (let i = 0; i < posts.length; i++) {
    const post = new Post(posts[i]);
    post.renderPost();
  }
}

init();
