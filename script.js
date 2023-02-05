let left = document.getElementById("left");
let right = document.getElementById("right");
let pros = document.getElementById("pros");
let d = "";

left.onclick = () => {
  pros.scrollLeft -= 300;
};

right.onclick = () => {
  pros.scrollLeft += 300;
};

let order = document.getElementById("order");
let z = 0;

function replace(x) {
  scrollTo(0, 1250);
  let y = 0;
  d = x.id

  order.innerHTML = `
    <div class= "empty">
    <img class ="empty" src="${x.src}">
    </div>
    <div     
    style="display:flex;
    position:relative;
    bottom:60px;
    flex-direction:column;
    justify-content:space-between;
    margin: 0px 20px;">
    <h1>${x.id}</h1>
    <h2>250 LE.</h2>
    <div  style= "display:flex; border:solid 1px orangered;width:115px;margin-top:40px;">
    <button id="plus" class = "no">
    +
    </button>
    <div id="ob" style = "width:40px; align-text:center;display:flex;justify-content:center;align-items:center;">${y}</div>
    <button id ="minus" class = "no">
    -
    </button>
    </div>
    <button class = "conf" id="thaba7">Add to cart</button>
    </div>
    `;
  document.getElementById("plus").addEventListener("click", () => {
    document.getElementById("ob").innerHTML = y += 1;
  });
  document.getElementById("minus").addEventListener("click", () => {
    if (y > 0) {
      document.getElementById("ob").innerHTML = y -= 1;
    }
  });
  document.getElementById("thaba7").addEventListener("click", () => {
    if (document.getElementById("ob").innerHTML > 0) {
      document.getElementById("overlay").classList.add("overlay-active");
      document.getElementById("add").classList.add("add-cart-active");
      document.getElementById("ques").innerHTML = `Are you sure you wanna add ${
        document.getElementById("ob").innerHTML
      } ${x.id} to the cart ?`;
    }
  });
  
}

document.getElementById("cancel").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("overlay-active");
  document.getElementById("add").classList.remove("add-cart-active");
});

document.getElementById("yes").addEventListener("click", () => {
  z += +document.getElementById("ob").innerHTML;
  let s = +document.getElementById("ob").innerHTML;
  document.getElementById("num").innerHTML = z;
  document.getElementById("overlay").classList.remove("overlay-active");
  document.getElementById("add").classList.remove("add-cart-active");
  document.getElementById("cont").innerHTML += `<p>${s}. ${d} </p>`;
  s = 0;
   
});

function cont() {if(document.getElementById("num").innerHTML != ""){
  document.getElementById("cont").classList.add("add-cart-active");
  document.getElementById("overlay").classList.add("overlay-active");
  document.getElementById("close").addEventListener("click", () => {
    document.getElementById("cont").classList.remove("add-cart-active");
    document.getElementById("overlay").classList.remove("overlay-active");
});
}}
