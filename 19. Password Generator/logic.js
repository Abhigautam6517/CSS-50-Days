const btn = document.getElementById("btn");
const input = document.getElementById("input");


let pwd = ["89&^598","5698()","%^6785ADS","@#5255$","DH$%^","534#$$","654rtgf","sdf856#$","%^&H52","^&*()(*&^","*()852GHJ"]


btn.addEventListener('click',()=>{
    let randon = Math.floor(Math.random() * 10);
    let word=pwd[randon];
    input.value=word;
    console.log("I am clicked")
    console.log(pwd[randon])
    console.log(randon)

})