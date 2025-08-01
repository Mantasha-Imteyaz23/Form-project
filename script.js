let btn = document.querySelector(".btn");
let main = document.querySelector(".main");
let form = document.querySelector('form');
let bts = document.querySelector("#bts");
let input = document.querySelector("input");
let div = document.querySelector(".show")


btn.addEventListener("click",function(){
  main.style.display = "block";
  btn.style.display = "none";
})

form.addEventListener("submit",function(dets){
  dets.preventDefault();
  const name = dets.target.elements[0].value;
  alert(`Welcome!${name} AND Form submit successfully`);
  // console.log(dets.target.elements[2].value)
  div.textContent = `Welcome ${name}`
  form.reset()
})

bts.addEventListener("click",function(){
  main.style.display = "none";
//  btn.style.display = 'initial'
  })


