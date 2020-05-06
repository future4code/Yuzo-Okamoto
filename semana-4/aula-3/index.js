
const postDatabase = [];


function onEnter(e) {
    if (e.key === "Enter") {
        event.preventDefault();
    }
    console.log(e)
}

function sendPost() {
    const postTemp = {
        username: "",
        title: "",
        text: ""
    };

    postTemp.username = document.getElementById("post-username").value;
    postTemp.title = document.getElementById("post-title").value;
    postTemp.text = document.getElementById("post-text").value;

    if (postTemp.username === "" || postTemp.title === "" || postTemp.text === "") {
        alert("Error. To send a post you need to fill in the username, title and text fields.");
    }
    else {
        const postSection = document.getElementsByClassName("show-posts")[0];
        postSection.innerHTML += `<article><h3>${postTemp.title}</h3><p>${postTemp.text}</p><h6>${postTemp.username}</h6></article>`
        postDatabase.push(postTemp);
    }

    console.log(postTemp);
    console.log(postDatabase);
    event.preventDefault();
}
