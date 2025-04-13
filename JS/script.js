import blogData from './data.js'
const article = document.getElementById('article1')

let html = ''

blogData.forEach(blog => {
    html +=  `  
                    <div class="card">
                        <img class="card-image" src="${blog.imageSrc}">
                        <p class="card-date"> <time datetime="${blog.date.datetime}">${blog.date.display}</time></p>
                        <h1 class="card-heading">${blog.heading}</h1>
                        <p class="card-content">${blog.content}</p>
                    
                    </div>
                
`
})

article.innerHTML = html