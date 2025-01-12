const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((Response) => Response.json())
    .then((data) => displayCategory(data.categories))
    .catch((error) => console.log(error));
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categories.forEach((item) => {
    console.log(item);

    const btnContainer = document.createElement("div");
    btnContainer.innerHTML = `
        <button class="flex items-center justify-center gap-2  px-4 py-2 rounded-full bg-sky-100 border border-teal-600 btn-wide w-full">
          <img class="w-12 h-12" src="${item.category_icon}" />
          <span class="font-medium text-teal-900">${item.category}</span>
        </button>
        `;
    categoryContainer.append(btnContainer);
  });
};

loadCategory();
