// shopping cart

let cart ={};
const Product = [
    {id: 1, name: "product1", price: 25},
    {id: 2, name: "product2", price: 30},
    {id: 3, name: "product3", price: 45}
];

const showProduct = () => {
let str = "";
Product.map(value=> {
    return str += `${value.name} - ${value.price}\n`;
});
console.log("***Product List***");
console.log(str);
}

showProduct();

const addToCart = (id) => {
cart = { ...cart, [id] : 1}
};

addToCart(1);
addToCart(3);
addToCart(2);

const showCart = () => {
    console.log("***Cart List***");
    let str=""
    Product.map(value => {
        cart[value.id] &&
        (str += ` ${cart[value.id]} - ${value.name} - ${value.price}`);
    })
    console.log(str);
}
showCart();

const increment = (id) => {
    cart = { ...cart, [id] : cart[id] + 1 };
}

increment(1);



const decrement = (id) => {
    cart = { ...cart, [id] : cart[id] - 1 };
}
decrement(1);

showCart();
const orderValue = Product.reduce(
    (sum,
    value) => {
        return sum + (value.price * (cart[value.id] ?? 0));
    } ,0);


console.log(`Total Order Value: ${orderValue}`);

// const ordervalue = () => {
//     let total = 0;
//     Product.map(value => {
//         cart[value.id] && (total += cart[value.id] * value.price);
//     });
//     console.log(`Total Order Value: ${total}`);
// }
// ordervalue();