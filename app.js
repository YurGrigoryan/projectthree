let g = document.querySelector(".button1")
let h = document.querySelector(".button2")
let q = document.querySelector("header")

let arr = [`img1` , `img2` , `img3`]
let i = 1
g.addEventListener("click" , function(){
    q.classList.remove(arr[i])
    if (i == 1 || i == 2) {
        i--
    }else{
        i = 2
    }
    q.classList.add(arr[i])
   
})
h.addEventListener("click" , function(){
    q.classList.remove(arr[i])
    if (i == 0 || i == 1) {
        i++
    }else{
        i = 0
    }
    q.classList.add(arr[i])
})

let but1 = document.querySelector(".button12")
let but2 = document.querySelector(".button13")
let w = document.querySelector(".bigDiv3")
let gap = 16
but1.addEventListener("click" , function(){
    but1.classList.add("p")
    but2.classList.remove("p")
    w.scrollBy(-(width + gap), 0);
})
but2.addEventListener("click" , function(){
    w.scrollBy(width + gap, 0);
    but2.classList.add("p")
    but1.classList.remove("p")
})
let width = w.offsetWidth;
window.addEventListener("resize", e => (width = w.offsetWidth));

let but3 = document.querySelector(".button10")
let but4 = document.querySelector(".button11")
let l = document.querySelector(".bigDiv2")
but3.addEventListener("click" , function(){
    l.scrollBy(-(width + gap), 0);
    but3.classList.add("p")
    but4.classList.remove("p")
})
but4.addEventListener("click" , function(){
    l.scrollBy(width + gap, 0);
    but3.classList.remove("p")
    but4.classList.add("p")
})


let but5 = document.querySelector(".button14")
let but6 = document.querySelector(".button15")
let k = document.querySelector(".bigDiv4")

but5.addEventListener("click" , function(){
    k.scrollBy(-(width + gap), 0);
    but5.classList.add("p")
    but6.classList.remove("p")
})
but6.addEventListener("click" , function(){
    k.scrollBy(width + gap, 0);
    but5.classList.remove("p")
    but6.classList.add("p")
})
