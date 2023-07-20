const productList = [
  { id: "1", title: "Product1", price: 256, image: "/images/1.jpg" },
  { id: "2", title: "Product2", price: 256, image: "/images/2.jpg" },
  { id: "3", title: "Product3", price: 256, image: "/images/3.jpg" },
  { id: "4", title: "Product4", price: 256, image: "/images/4.jpg" },
  { id: "5", title: "Product5", price: 256, image: "/images/5.jpg" },
  { id: "6", title: "Product6", price: 256, image: "/images/6.jpg" },
  { id: "7", title: "Product7", price: 256, image: "/images/7.jpg" },
  { id: "8", title: "Product8", price: 256, image: "/images/8.jpg" },
  { id: "9", title: "Product9", price: 256, image: "/images/9.jpg" },
  { id: "10", title: "Product10", price: 256, image: "/images/10.jpg" },
  { id: "11", title: "Product11", price: 256, image: "/images/11.jpg" },
  { id: "12", title: "Product12", price: 256, image: "/images/12.jpg" },
];

function getProductData(id) {
  let productData = productList.find((item) => item.id === id);
  return productData;
}

export { productList, getProductData };
