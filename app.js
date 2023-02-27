const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id:1,
    title: "Air Jordan",
    price:500,
    img: "./img/jordanChi3.jpg",
  },
  {
    id:2,
    title:"Travis Scott",
    price:1500,
    img:"./img/jTravisL0.jpg",
  },
  {
    id:3,
    title:"Travis Olive",
    price:1500,
    img:"./img/TravisOlive1.jpg",
  },
  {
    id:4,
    title:"Travis Mocha",
    price:2000,
    img:"./img/TravisMocha3.jpg",
  },
  {
    id:5,
    title:"Air Jordan IV",
    price:500,
    img:"./img/jordan4Noir.jpg",
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.img;

  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
