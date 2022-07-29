class Post {
  constructor(post) {
    Object.assign(this, post);
    this.like = this.like.bind(this);
  }

  createPostAvatar() {
    const postAvatar = document.createElement("img");
    postAvatar.setAttribute("src", this.avatar);
    postAvatar.setAttribute("alt", `${this.name}'s avatar`);
    postAvatar.classList.add("post-avatar");
    return postAvatar;
  }

  createPostInfoName() {
    const postInfoName = document.createElement("p");
    postInfoName.textContent = `${this.name}`;
    postInfoName.classList.add("post-info-name");
    return postInfoName;
  }

  createPostInfoLocation() {
    const postInfoLocation = document.createElement("p");
    postInfoLocation.textContent = `${this.location}`;
    postInfoLocation.classList.add("post-info-location");
    return postInfoLocation;
  }

  createPostImage() {
    const postImage = document.createElement("img");
    postImage.setAttribute("src", `${this.post}`);
    postImage.setAttribute("alt", `${this.name}'s post`);
    return postImage;
  }

  createIcons() {    
    const icons = document.createElement("div");
    const iconNames = ["heart", "comment", "dm"];
    iconNames.forEach((name) => {
      const icon = document.createElement("img");
      icon.setAttribute("src", `images/icon-${name}.png`);
      icon.setAttribute("alt", `${name} icon`);
      icon.classList.add("icon");
      icons.appendChild(icon);

      if (name === "heart") {
        icon.addEventListener("click", this.like);
      }
    });
    return icons;
  }

  createPostLikes() {
    const likes = document.createElement("p");
    likes.textContent = `${this.likes} likes`;
    likes.classList.add("likes");
    likes.classList.add(`${this.username}`);
    return likes;
  }

  createPostInfo() {
    const comment = document.createElement("p");
    const username = document.createElement("span");
    const commentText = document.createElement("span");
    username.classList.add("post-username");
    username.textContent = `${this.username}`;
    commentText.textContent = ` ${this.comment}`;
    comment.appendChild(username);
    comment.appendChild(commentText);
    return comment;
  }

  like(event) {
    if (!this.liked) {
      this.likes += 1;
      this.liked = true;
    } else {
      this.likes -= 1;
      this.liked = false;
    }
    this.renderLikes();
  }

  renderLikes(value) {
    const likes = document.querySelector(`.${this.username}`);
    likes.textContent = `${this.likes} likes`;
  }

  renderPost() {
    const body = document.querySelector("body");
    const post = document.createElement("section");
    const postHeader = document.createElement("header");
    const postUserInfo = document.createElement("div");
    const mainContent = document.createElement("main");
    const postInfo = document.createElement("div");

    post.classList.add("post");
    postHeader.classList.add("post-header");
    postUserInfo.classList.add("post-user-info");
    postInfo.classList.add("post-info");

    body.appendChild(post);
    post.appendChild(postHeader);
    postHeader.appendChild(this.createPostAvatar());
    postHeader.appendChild(postUserInfo);
    postUserInfo.appendChild(this.createPostInfoName());
    postUserInfo.appendChild(this.createPostInfoLocation());
    post.appendChild(mainContent);
    mainContent.appendChild(this.createPostImage());
    mainContent.appendChild(postInfo);
    postInfo.appendChild(this.createIcons());
    postInfo.appendChild(this.createPostLikes());
    postInfo.appendChild(this.createPostInfo());
  }
}

export default Post;
