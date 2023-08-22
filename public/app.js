console.log("Cakesicle Time!");
let order = {
    cakepops: [],
};

const allButtons = document.querySelectorAll(".addToCartBtn");

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        const cakepopId = e.srcElement.id;
        order.cakepops.push(cakepopId);
    });
});

// const packButton = document.querySelectorAll(".packBtn");
// packButton.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         const cakepopId = e.srcElement.id;
//         const packPrice = Number(e.srcElement.getAttribute("data-price"));
//         order.cakepops.push(cakepopId);
//         order.total += packPrice;
//     });
// });


const submit = document.querySelector("#submit");

submit.addEventListener("click", async (e)=>{
    let res = await fetch("/cakepop/order",{
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            "Content-Type": "application/json",
        },
    });
    let response = await res.json();
    if (response) {
        order = {
            cakepops: [],
        };
        window.location = `/cakepop/order/${response._id}`;
    }
});