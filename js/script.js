let techItems = document.querySelectorAll('.tech__items')
let techSection = document.querySelector('.tech')
let headerBurger = document.querySelector('.active_burger')
let headerNavbar = document.querySelector('.header_navbar')
let homeOverflow = document.querySelector('.info_content')
let servicesOverflow = document.querySelector('.services_overflow')
let techOverflow = document.querySelector('.tech_overflow')
let processOverflow = document.querySelector('.process_overflow')


function animAdd(anim1, anim2) {
    techItems.forEach((item) => {
        item.classList.remove([anim2])
        item.classList.add([anim1])
    })
}

techSectionButton.addEventListener('click', () => {
    if (techSection.style.height == '100vh') {
        techSectionButton.style.transform = 'rotate(0deg)'
        animAdd('techItemsAnimationUp', 'techItemsAnimationDown')
        setTimeout(() => {
            techSection.style.height = '60vh'
        }, 2000)
    }
    else {
        techSectionButton.style.transform = 'rotate(180deg)'
        techSection.style.height = '100vh'
        setTimeout(() => {
            animAdd('techItemsAnimationDown', 'techItemsAnimationUp')
        }, 1000)
    }
})

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('inactive_burger');
    if (headerBurger.className == 'active_burger inactive_burger') {
        headerNavbar.style.left = '0'
        document.body.style.overflow = 'hidden'
        document.body.style.height = '100%'
    }
    else {
        headerNavbar.style.left = '-100%'
        document.body.style.overflow = 'auto'
        document.body.style.height = 'auto'
    }
})


let countHome = 0;
let countServices = 0;
let countTech = 0;
let countProcess = 0;

function slider(name,subcount,condition,action1,action2,subject){
    if(condition){
        subcount = action1;
    }
    else{
        subcount = subcount + action2;
    }

    if(name == 'home'){
        countHome = subcount
    }
    else if(name == 'services'){
        countServices = subcount
    }
    else if(name == 'tech'){
        countTech = subcount
    }
    else if(name == 'process' ){
        countProcess = subcount
    }
    else {
        subcount = subcount
    }
   
    subject.style.left = `${subcount}%`
}

homeRight.onclick = () =>{
    slider('home',countHome,countHome<=-200,0,-100,homeOverflow)
}

homeLeft.onclick = ()=>{
    slider('home',countHome,countHome>=0,-200,100,homeOverflow)
}

servicesRight.onclick = ()=>{
    slider('services',countServices,countServices<=-300,0,-100,servicesOverflow)
}

servicesLeft.onclick = ()=>{
    slider('services',countServices,countServices>=0,-300,100,servicesOverflow)
}

techRight.onclick = ()=>{
    slider('tech',countTech,countTech<=-300,0,-100,techOverflow)
}

techLeft.onclick = ()=>{
    slider('tech',countTech,countTech>=0,-300,100,techOverflow)
}
processRight.onclick = ()=>{
    slider('process',countProcess,countProcess<=-300,0,-100,processOverflow)
}

processLeft.onclick = ()=>{
    slider('process',countProcess,countProcess>=0,-300,100,processOverflow)
}