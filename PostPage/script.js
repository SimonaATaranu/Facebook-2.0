let verifyData = () => {
    let myNewsFeed = window.localStorage.getItem("myNewsFeed");
    let myAttachedPhoto = window.localStorage.getItem("myAttachedPhoto");
    if (
      document.getElementById("feedInput").value === myNewsFeed &&
      document.getElementById("attachInput").value === myAttachedPhoto
    ) {
      document.getElementById("registerButton").setAttribute("type", "submit");
      document.getElementById("form").action = "./posts.html";
    };

  
  let tryRegister = function () {
    let myNewsFeed = document.querySelector("#feedInput").value;
    let myAttachedPhoto = document.querySelector("#attachInput").value;
    console.log(myNewsFeed, myAttachedPhoto);
  
    fetch("https://sharo-me.herokuapp.com/api/post/create", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
  
      body: JSON.stringify({
        userId: 175,
        postText: myNewsFeed,
        pictureLink: myAttachedPhoto,
        author:"asd",
        timeStamp:"123",
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        if (data === "UserId Ok!") {
          window.localStorage.setItem("facebookLoggedIn", "true");
          window.location = "../FacebookPage/facebook2.html";
        } else {
          document.querySelector("#feedInput").value = "";
          document.querySelector("#attachInput").value = "";
        }
      })