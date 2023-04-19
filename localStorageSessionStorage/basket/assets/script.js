let cards=document.querySelectorAll(".card");
// console.log(cards);
let addToCardButtons=[];
let count=document.querySelector(".count");
let totalSpan=document.querySelector(".total");
cards.forEach((card)=>{
    // let productName = card.children[0].children[1].textContent;
    // let productPrice=card.children[0].children[3].textContent;
    // let productDesc=card.children[0].children[2].textContent;
    // console.log(productDesc);
    // console.log(productPrice);
    // console.log(productName);
    addToCardButtons.push(card.children[0].children[4]);
    // console.log(addToCardButtons);
})
document.addEventListener("DOMContentLoaded",()=>{
    if(!localStorage.getItem("product")){
        let basket=[];
        localStorage.setItem("product",JSON.stringify(basket));
    }
})
addToCardButtons.forEach((add)=>{
add.addEventListener("click",(e)=>{
    let name=e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    let price=e.target.previousElementSibling.children[0].textContent;
    let desc=e.target.previousElementSibling.previousElementSibling.textContent;
    let id=e.target.parentElement.parentElement.getAttribute("data-id")
    let product={
        id:id,
        name: name,
        price: price,
        desc: desc,
        count:1,
    }
       let basket=JSON.parse(localStorage.getItem("product")) || [];
       let existed=basket.find((basketItem)=>basketItem.id==id);
       if(existed){
        existed.count++;
       }else{
        basket.push(product)
       }
    count.textContent=basket.length;

    let total=basket.reduce((total,value)=>{
        let t = Number(value.price)*Number(value.count);
        return total+t;
    },0);
    console.log(total);
    totalSpan.textContent=total;
    localStorage.setItem("product",JSON.stringify(basket))
    console.log(basket);
})
    });