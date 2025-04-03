document.addEventListener("DOMContentLoaded", function () {
    const loadStories = document.getElementById("load-stories");
    const postStories = document.getElementById("Post-stories");
    const Stories = document.getElementById("stories");
    const row = document.getElementById("row");
    const title = document.getElementById("title-input");
    const content = document.getElementById("content-input");
    let Controller = new AbortController();

    const url = "https://usmanlive.com/wp-json/api/stories";

    postStories.addEventListener("click", function () {
        if (title.value.trim() === "" || content.value.trim() === "") {
            title.style.borderColor = "red";
            content.style.borderColor = "red";
            return;
        }
        title.style.borderColor = "black";
        content.style.borderColor = "black";
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title.value.trim(),
                content: content.value.trim()
            })
        }).then(reposonse => reposonse.json()).then(data => {
            title.value = "";
            content.value = "";
        })
            .catch(error => console.log("error"))

    });



    loadStories.addEventListener("click", function () {
        Stories.classList.remove("d-none");
        row.innerHTML = "";
        title.value = '';
        content.value = '';

        Controller.abort();
        Controller = new AbortController();
        fetch(url, { signal: Controller.signal }).then(res => res.json()).then(data => {

            if (data.length > 0) {
                data.forEach(story => {
                    let div = document.createElement("div");
                    div.classList.add("col-lg-6", "mt-4", "each-card");
                    div.id = story.id;
                    div.innerHTML = `
                <div class="card card-body">
                    <h5 class="card-title">${story.title}</h5>
                    <p class="card-text">${story.content}</p>
                    <div class="d-flex justify-content-between" >
                        <button class="btn edit-button"> Edit</button>
                        <button class="btn Delete-button"> Delete</button>
                    </div>
                `;
                    row.appendChild(div);
                });

            }
        })
            .catch(error => {
                console.log(error)
            })
    });

    row.addEventListener("click", function (event) {
        if (event.target.classList.contains("Delete-button")) {
            const storyCard = event.target.closest(".each-card");
            console.log(storyCard.id);
            fetch(`${url}/${storyCard.id}`, { method: 'DELETE' }).then(response => {
                if (!response.ok) {
                    throw new Error("Somthing Went Wrong");
                }
                console.log("Story to b deleted ", storyCard);
                row.removeChild(storyCard);
            })
                .catch(error => {
                    console.log(error)
                })

        }
        if (event.target.classList.contains("edit-button")) {
            const storyCard = event.target.closest(".col-lg-6");
            console.log(storyCard.id);

            title.value=storyCard.querySelector(".card-title").textContent;
            content.value=storyCard.querySelector(".card-text").textContent;

            postStories.addEventListener("click",function(){
                fetch(`${url}/${storyCard.id}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: title.value.trim(),
                        content: title.value.trim()
                    })
                }).then(reposonse => reposonse.json()).then(data => {
                    title.value = "";
                    content.value = "";
                })
                    .catch(error => console.log("error"))
        
            })
           
            
        }


    });


    
})