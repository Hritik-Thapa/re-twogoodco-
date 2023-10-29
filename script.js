


//buy circle animation

const circle = document.querySelector('.page2_buy-circle p')
const circle_text="THE COURSE OF A WOMANS'S LIFE CHANGE"
const circle_arr=circle_text.split('')

circle_arr.forEach((str,i) => {
    const span = document.createElement('span');
    span.innerText = str; 
    span.style.transform=`rotate(${10*i}deg)`
    circle.appendChild(span);
    
});






//nav scroll change
const nav_2=document.querySelector('.nav-scroll')
const nav=document.querySelector('.nav')
const nav_height=nav.offsetHeight;
window.onscroll=function() {
    const scroll_top=window.pageYOffset;
    if(scroll_top<nav_height*1.5){
        // console.log(`yes`);
        nav.style.visibility='visible';
        nav_2.style.visibility='hidden';
        
    }
    else{
        // console.log(`no`);
        nav.style.visibility='hidden';
        nav_2.style.visibility='visible';
    }
}






//buy circle movement

// const buy_holder=document.querySelector('.page2_buy-holder')
// const page1_height=document.querySelector('.page1').offsetHeight
// const parent_scroll_top=document.querySelector('.page2_image-holder').scrollTop
// // console.log(parent_scroll_top)
// window.onscroll=function(){
//     const scroll_top=window.pageYOffset;

//     console.log(parent_scroll_top)
//     if (scroll_top<page1_height)
//     {
        
//         console.log('YASS')
//         buy_holder.animate({"top":`$(parent_scroll_top)`+'px'},"slow")
//     }
// }