const container = document.querySelector('.blogs ');
const searchForm = document.querySelector('.search');

const renderPosts = async(searchTerm) => {
    let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';

    if (searchTerm) {
        uri += `&q=${searchTerm}`;
    }

    const response = await fetch(uri);
    const postsDatas = await response.json();

    let template = '';
    postsDatas.forEach(postsData => {
        template += `
        <div class="post">

            <h2>${postsData.title}</h2>

            <p><small>${postsData.likes} likes</small></p>

            <p>${postsData.body.slice(0,200)}</p>

            <a href="/details.html?id=${postsData.id}">read more</a>

        </div>
        `
    })

    container.innerHTML = template;
}


searchForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    renderPosts(searchForm.searchTerm.value)
});

window.addEventListener('DOMContentLoaded', () => renderPosts());