const modeBtn = document.getElementById("mode")
const imgLogo = document.getElementById("logo-img")
const burgerBtn = document.getElementById("burger")
const burger = document.getElementById("burger-menu")
const back = document.getElementById("back")
const autoBtn = document.getElementById("autoBtn")
const boxText = document.getElementById("box-txt")
const modelBtn = document.getElementById("modelBtn")
const compBtn = document.getElementById("companyId")
const locBtn = document.getElementById("locationBtn")
const boxSlider = document.getElementById("slider")
const left = document.getElementById("left")
const right = document.getElementById("right")
const hideBtn = document.getElementById("hide")
const boxInf = document.getElementById("box-inf")
const hideBtn2 = document.getElementById("hide-2")
const boxInf2 = document.getElementById("box-inf-2")
const hideBtn3 = document.getElementById("hide-3")
const boxInf3 = document.getElementById("box-inf-3")
const hideBtn4 = document.getElementById("hide-4")
const boxInf4 = document.getElementById("box-inf-4")
const hideBtn5 = document.getElementById("hide-5")
const boxInf5 = document.getElementById("box-inf-5")
const hideBtn6 = document.getElementById("hide-6")
const boxInf6 = document.getElementById("box-inf-6")
const reg = document.getElementById("reg")
const sendBtn = document.getElementById("send")

document.body.className = "light-mode"

let mode= false
let num = 0 
let img = ["banner1.png","banner2.jpg","banner3.jpg",]
let hide = false
let hide2 = false
let hide3 = false
let hide4 = false
let hide5 = false
let hide6 = false

/* Slider */

boxSlider.style.backgroundImage = `url(Images/${img[0]})`

left.addEventListener("click",()=>{
    num -=1
    if (num >= 0){
        boxSlider.style.backgroundImage = `url(Images/${img[num]})`
    } else if (num < 0){
        num = 2
        boxSlider.style.backgroundImage = `url(Images/${img[num]})`
    }
    console.log(num)
})

right.addEventListener("click", () => {
    num += 1
    boxSlider.style.backgroundImage = `url(Images/${img[num]})`
    if (num < 0){
        boxSlider.style.backgroundImage = `url(Images/${img[num]})`
    } else if (num > 2 ){
        num = 0
        boxSlider.style.backgroundImage = `url(Images/${img[num]})`
    }
    console.log(img[num])
})

setInterval(()=>{
    num += 1
    boxSlider.style.backgroundImage = `url(Images/${img[num]})`
    if (num < 0){
        boxSlider.style.backgroundImage = `url(Images/${img[num]})`
    } else if (num > 2 ){
        num = 0
        boxSlider.style.backgroundImage = `url(Images/${img[num]})`
    }
}, 5000)

/* Light/Dark */

modeBtn.addEventListener("click",()=>{
    mode = ! mode 
    if(mode){
        document.body.className = "dark-mode"
        imgLogo.src = "Images/porshl.png"
    } else if(!mode){
        document.body.className = "light-mode"
        imgLogo.src = "Images/porshd.png"
    }
    
})

/* Burger-Menu */

burgerBtn.addEventListener("click", ()=>{
    burger.style.left = "0px"
    back.style.backdropFilter = "blur(2px)"
    back.style.width = "1170px"
    back.style.height = "950px"
    document.body.style.overflow="hidden"
})

document.getElementById("closeBurger").addEventListener("click", ()=>{
    burger.style.left = "-900px"
    back.style.backdropFilter = "blur(0)"
    back.style.width = "0"
    back.style.height = "0"
    document.body.style.overflow=""
})


autoBtn.addEventListener("click",()=>{
    boxText.innerHTML = ""
    boxText.innerHTML = `<ul>
    <li><a href="">Новые Автомобили</a></li>
    <li><a href="">Автомобили с пробегом</a></li>
    <li><a href="">Классические автомобили</a></li>
</ul>`
})

modelBtn.addEventListener("click", ()=>{
    boxText.innerHTML = ""
    boxText.innerHTML =  `<ul>
    <li><a href="">718</a></li>
    <li><a href="">911</a></li>
    <li><a href="">Taycan</a></li>
    <li><a href="">Panamera</a></li>
    <li><a href="">Macan</a></li>
    <li><a href="">Cayenne</a></li>
</ul>`
})

compBtn.addEventListener("click", ()=>{
    boxText.innerHTML = ""
    boxText. innerHTML = `<ul>
    <li><a href="">Связаться с нами</a></li>
    <li><a href="">Наша Команда</a></li>
    <li><a href="">О Porshe Center Moldova</a></li>
</ul>`
})

locBtn.addEventListener("click", ()=>{
    boxText.innerHTML = ""
    boxText.innerHTML= `<h1>Porshe Center Moldova</h1>
    <ul>
        <li><a href=""><i class="fa-solid fa-map-pin"></i>  Ул. Каля Трушенилор 28/1 МД - 3733 Кишинев, Р. Молдова</a></li>
        <li><a href=""><i class="fa-solid fa-phone"></i> +(373)22-911911</a></li>
        <li><a href=""><i class="fa-regular fa-envelope"></i> office@porshe.md</a></li>
        <li><a href="">Часы работы</a></li>
        <li><a href="">Получить месторасположение</a></li>
        <li><a href="">Записаться на сервис</a></li>
        <li><a href="">Записаться на тест драйв</a></li>
    </ul>   `
})

/* Hide/Show */
boxInf.style.display = "none" 
boxInf2.style.display = "none" 
boxInf3.style.display = "none" 
boxInf4.style.display = "none" 
boxInf5.style.display = "none" 
boxInf6.style.display = "none" 

hideBtn.addEventListener("click", ()=>{
    hide = !hide
    if(hide){
        boxInf.style.display = "block"
        hideBtn.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
    } else if(!hide){
        boxInf.style.display = "none" 
        hideBtn.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
    }
})

hideBtn2.addEventListener("click", ()=>{
    hide2 = !hide2
    if(hide2){
        boxInf2.style.display = "block"
        hideBtn2.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
    } else if(!hide2){
        boxInf2.style.display = "none" 
        hideBtn2.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
    }
})

hideBtn3.addEventListener("click", ()=>{
    hide3 = !hide3
    if(hide3){
        boxInf3.style.display = "block"
        hideBtn3.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
    } else if(!hide3){
        boxInf3.style.display = "none" 
        hideBtn3.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
    }
})

hideBtn4.addEventListener("click", ()=>{
    hide4 = !hide4
    if(hide4){
        boxInf4.style.display = "block"
        hideBtn4.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
    } else if(!hide4){
        boxInf4.style.display = "none" 
        hideBtn4.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
    }
})

hideBtn5.addEventListener("click", ()=>{
    hide5 = !hide5
    if(hide5){
        boxInf5.style.display = "block"
        hideBtn5.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
    } else if(!hide5){
        boxInf5.style.display = "none" 
        hideBtn5.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
    }
})

hideBtn6.addEventListener("click", ()=>{
    hide6 = !hide6
    if(hide6){
        boxInf6.style.display = "block"
        hideBtn6.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
    } else if(!hide6){
        boxInf6.style.display = "none" 
        hideBtn6.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
    }
})

/* Regex */

function trueBtn(){
    sendBtn.innerHTML =`<i class="fa-solid fa-check"></i>`
    sendBtn.style.backgroundColor ="green"
    sendBtn.style.color = "white"
}
function falseBtn(){
    sendBtn.innerHTML =`<i class="fa-solid fa-x"></i>`
    sendBtn.style.backgroundColor ="red"
    sendBtn.style.color = "white"
}

reg.addEventListener("submit",(e)=>{
    e.preventDefault()

    let name = reg.name.value
    let number = reg.number.value
    let email = reg.email.value



    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        trueBtn()
    } else {
        falseBtn()
    }

    
    if (/^[a-zA-Zа-яА-Я]+([-'][a-zA-Zа-яА-Я]+)?(?:\s+[a-zA-Zа-яА-Я]+([-'][a-zA-Zа-яА-Я]+)?)?$/.test(name)) {
        trueBtn()
    } else {
        falseBtn()
    }

    if (/^\+?(373|380|40)\d{8,9}$/.test(number)) {
        trueBtn()
    } else {
        falseBtn()
    }
})