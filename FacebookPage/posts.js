fetch("https://sharo-me.herokuapp.com/api/post/getAll", {
    headers: {
         Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
        },   
        method: "get",
  })
    .then((res) => res.json())
    .then((data) => {
        var i = 1;
        console.log(data);
        data.forEach((post) => {
            newDivPicImage = document.createElement("div");
            newDivDetailsAuthor = document.createElement("div");
            newDivDateLocation = document.createElement("div");
            newDivPostImage= document.createElement("div");
            newDivContent = document.createElement("div");

            // newPicImage = document.createElement("img");
            // newPicImage.src = "./img/profile-pic.jpg";
            newDetailsAuthor = document.createTextNode(post.author);
            newDateLocation = document.createTextNode(post.timeStamp);
            newPostImage = document.createTextNode(post.pictureLink);
            newContent = document.createTextNode(post.postText);

            // newDivPicImage.appendChild(newPicImage);
            // parentDiv = document.querySelector(".user-img-post-wrapper");
            // parentDiv.appendChild(newDivPicImage);
            // i++;
            newDivDetailsAuthor.appendChild(newDetailsAuthor);
            parentDiv = document.querySelector(".post-details-author");
            parentDiv.appendChild(newDivDetailsAuthor);
           
            newDivDateLocation.appendChild(newDateLocation);
            parentDiv = document.querySelector(".post-details-date-location");
            parentDiv.appendChild(newDivDateLocation);
          
            newDivPostImage.appendChild(newPostImage);
            parentDiv = document.querySelector(".post-img-wrapper");
            parentDiv.appendChild(newDivPostImage);
          
            newDivContent.appendChild(newContent);
            parentDiv = document.querySelector(".post-text");
            parentDiv.appendChild(newDivContent);
   

            console.log(post);
        });
    })