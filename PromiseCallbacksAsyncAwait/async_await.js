async function fetchPost(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    
    data.forEach(i => {
        console.log('i', i)
    });
}

fetchPost()