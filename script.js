let currentPageUrl = 'https://jsonplaceholder.typicode.com/posts';

window.onload = async () => {
    try {
        await loadPosts(currentPageUrl);
    } catch(error) {
        console.log(error);
    }
}

async function loadPosts(url) {
    const mainContent = document.createElement("div");
    mainContent.className = "main-content";

   
    

    try {
        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.className = "post";

            const title = document.createElement("h1");
            title.innerText = post.title;

            const body = document.createElement("span");
            body.innerText = post.body;

            postElement.appendChild(title);
            postElement.appendChild(body);
            mainContent.appendChild(postElement);
        });

        // document.body.innerHTML = '';
        document.body.appendChild(mainContent);

        currentPageUrl = url;
    } catch(error) {
        console.log(error);
    }
}