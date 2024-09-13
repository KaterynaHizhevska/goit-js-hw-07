const categories = document.querySelectorAll("ul#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryTitle = category.querySelector("h2").textContent;
    const itemsList = category.querySelectorAll("ul li").length;

    console.log(`Category: ${categoryTitle}`);
  console.log(`Number of items: ${itemsList}`);
});