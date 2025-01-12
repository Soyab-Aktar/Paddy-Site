const loadCategory = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(Response=> Response.json())
    .then(data => displayCategory(data.categories))
    .catch((error)=>console.log(error));
}

const displayCategory=(categories)=>{
    const categoryContainer= document.getElementById('category-container')
}


loadCategory();