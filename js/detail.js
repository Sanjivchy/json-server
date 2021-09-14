const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');


console.log(id);

const renderPosts = async() => {
    const response = await fetch('http://localhost:3000/posts/' + id);
    const postsDatas = await response.json();
    console.log(postsDatas);

    const template = `
    <h1>${postsDatas.title}</h1>
    <p>${postsDatas.body}</p>
    `
    container.innerHTML = template;
}

deleteBtn.addEventListener('click', async(e) => {
    const res = await fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
    })

    window.location.replace('/index.html');
})


window.addEventListener('DOMContentLoaded', () => renderPosts());