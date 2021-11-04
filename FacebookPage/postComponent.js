console.log("Running");

postContainer = document.createElement("div");
postContainer.classList.add("post-container");

userImgPostWrapper = document.createElement("div");
userImgPostWrapper.classList.add("user-img-post-wrapper");

profilePicImage = document.createElement("img");
profilePicImage.src = "./img/profile-pic.jpg";
profilePicImage.classList.add("user-img-post");

userImgPostWrapper.appendChild(profilePicImage);

postWrapper = document.createElement("div");
postWrapper.classList.add("post-wrapper");

postDetails = document.createElement("div");
postDetails.classList.add("post-details");

postDetailsAuthor = document.createElement("p");
postDetailsAuthor.classList.add("post-details-author");
postDetailsAuthor.innerText = "Simona Apryla";

postDetailsDateLocation = document.createElement("p");
postDetailsDateLocation.classList.add("post-details-date-location");
postDetailsDateLocation.innerText = "26/05/2021 - Romania";

postDetails.appendChild(postDetailsAuthor);
postDetails.appendChild(postDetailsDateLocation);

postImageWrapper = document.createElement("div");
postImageWrapper.classList.add("post-img-wrapper");

postImage = document.createElement("img");
postImage.classList.add("post-img");
postImage.src = "./img/img-post-1.jpg";

postImageWrapper.appendChild(postImage);

postContent = document.createElement("div");
postContent.classList.add("post-content");

postText = document.createElement("p");
postText.classList.add("post-text");
postText.innerText =
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.";

postBtns = document.createElement("div");
postBtns.classList.add("post-btns");

postLikeBtnWrapper = document.createElement("div");
postLikeBtnWrapper.classList.add("post-like-btn-wrapper");

postLikeBtn = document.createElement("img");
postLikeBtn.classList.add("post-like-btn");
postLikeBtn.classList.add("like");
postLikeBtn.src = "./img/like-btn.png";

postLikeBtnText = document.createElement("p");
postLikeBtnText.innerText = "Like";

postLikeBtnWrapper.appendChild(postLikeBtn);
postLikeBtnWrapper.appendChild(postLikeBtnText);

postBtnSeparator = document.createElement("div");
postBtnSeparator.classList.add("post-btn-separator");
postBtnSeparator.innerText = "|";

postCommentBtnWrapper = document.createElement("div");
postCommentBtnWrapper.classList.add("post-comment-btn-wrapper");

postCommentBtn = document.createElement("img");
postCommentBtn.classList.add("post-like-btn");
postCommentBtn.src = "./img/comment-btn.png";

postCommentBtnText = document.createElement("p");
postCommentBtnText.innerText = "Comment";

postCommentBtnWrapper.appendChild(postCommentBtn);
postCommentBtnWrapper.appendChild(postCommentBtnText);

postBtns.appendChild(postLikeBtnWrapper);
postBtns.appendChild(postBtnSeparator);
postBtns.appendChild(postCommentBtnWrapper);

postContent.appendChild(postText);
postContent.appendChild(postBtns);

postWrapper.appendChild(postDetails);
postWrapper.appendChild(postImageWrapper);
postWrapper.appendChild(postContent);

postContainer.appendChild(userImgPostWrapper);
postContainer.appendChild(postWrapper);

document.querySelector("#posts-wrapper").appendChild(postContainer);
