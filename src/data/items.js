const productList = [
  { id: "1", title: "Eye Dragon", price: 20, image: "/images/1.jpg" },
  { id: "2", title: "Black Cane", price: 18, image: "/images/2.jpg" },
  { id: "3", title: "Moon", price: 10, image: "/images/3.jpg" },
  { id: "4", title: "Purple Van Gogh", price: 14, image: "/images/4.jpg" },
  { id: "5", title: "Sunrise", price: 10, image: "/images/5.jpg" },
  { id: "6", title: "Yellow Van Gogh", price: 14, image: "/images/6.jpg" },
  { id: "7", title: "Tibetan", price: 18, image: "/images/7.jpg" },
  { id: "8", title: "Ruby", price: 18, image: "/images/8.jpg" },
  { id: "9", title: "Beak", price: 20, image: "/images/9.jpg" },
  { id: "10", title: "Orthogonal", price: 14, image: "/images/10.jpg" },
  { id: "11", title: "Alien", price: 16, image: "/images/11.jpg" },
  { id: "12", title: "Luna", price: 14, image: "/images/12.jpg" },
];

function getProductData(id) {
  let productData = productList.find((item) => item.id === id);
  return productData;
}

export { productList, getProductData };
