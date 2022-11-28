console.log("aa gya re")

console.log(document.getElementsByClassName('koni'))

console.log(document.getElementsByTagName('input'))

console.log(document.querySelectorAll('.koni'))

var maindiv=document.querySelector("body div");

var countdownElement= document.getElementById('countdown');

var initialcoundownval=countdownElement.innerHTML;

console.log(initialcoundownval)
var backimg=document.getElementById('bellicon')

console.log(backimg.src)

setInterval(function(){   
    initialcoundownval=initialcoundownval>0?initialcoundownval-1:0;

    countdownElement.innerHTML=initialcoundownval;
    var bckimg=initialcoundownval % 2 === 0? '/static/NDTVapp/images/bellicon.png'  :  '/static/NDTVapp/images/fbicon.png' ;
    maindiv.style.backgroundColor="rgb("+ Math.floor(Math.random()*255) +"," + Math.floor(Math.random()*255) +","+ Math.floor(Math.random()*255) +")"
    backimg.src=bckimg;
;
},1000)
var countdownElement2= document.getElementById('countdown2');
var initialcoundownval2=countdownElement2.innerHTML;

var interval=setInterval(function(){   
    initialcoundownval2=initialcoundownval2>0?initialcoundownval2-1:0;

    countdownElement2.innerHTML=initialcoundownval2;
    
    countdownElement2.style.fontSize=initialcoundownval2*100+"px"
     
    countdownElement2.style.marginRight=initialcoundownval2*100+"px"
    
    backimg.style.width=initialcoundownval2*100+"px"

    if(initialcoundownval2<=0)
    {
        clearInterval(interval) //to stop the interval
    }
    
;
},1000)

var btn =document.getElementById("buttonclick");



function onbtnclick()
{
    alert("aa gya sawad");
    btn.style.backgroundColor="Red"
    // maindiv.style.backgroundColor="green"
    var randomnum=Math.floor(Math.random()*255)
    maindiv.style.backgroundColor="rgb("+ Math.floor(Math.random()*255) +"," + Math.floor(Math.random()*255) +","+ randomnum +")"

    alert(Math.floor(Math.random()*255))
    

}

// btn.onclick = onbtnclick;

// btn.addEventListener('click',function(){
//         alert("aa gya sawad");
//     })

btn.addEventListener('click',onbtnclick)

// btn.onclick = function(){
//     alert("aa gya sawad");
// }



var radiohide=document.getElementById('radio1')
var images=document.getElementById('img')

// radiohide.addEventListener('click',function(){
//     images.style.display="none"
    
// })


var formxyz=document.getElementById('formxy')
var name23=document.getElementById('Name')
// name23.addEventListener('change',function(){
//     console.log('value changed'); //changes vbalue 
// })

name23.addEventListener('input',function(e)
{
    console.log('value changes')
    // console.log(e.target)  ///to find on which value or event happening 
    // console.log(e.target.value)  //value 
    var currentvalue=e.target.value;
    currentvalue=currentvalue.toUpperCase();
    console.log(currentvalue)
    name23.value=currentvalue
})
 
name23.addEventListener('focus',function(e)
{
    console.log('Element focuse')
  
})


name23.addEventListener('blur',function(e)
{
    console.log('Element lost focuse')
  
})
// function play() {
//     var audio = new Audio(
// 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
// console.log('pcj ngy')
 
// }


// formxyz.addEventListener('submit',play)

// formxyz.addEventListener('submit',function(e)
// {
// alert("Submit")

// e.preventDefault()  //to prevent page form refrese 
// })





document.body.addEventListener('keydown',function(e)
{
console.log("A key was clicked")
 var keycode=e.Keycode;


//  if(keycode === 13)
//  {
//     console.log(keycode);
//  }
 
})


btn.addEventListener('mousedown',function(){
    console.log('mOuse down')
})

btn.addEventListener('mouseup',function(){
    console.log('mOuse up')
})


btn.addEventListener('dblclick',function(){
    console.log('Double CLick')
})


var newlist=document.createElement('li')
var btnAdd=document.getElementById('buttonadd')
var list=document.getElementById('todolist')

var addlistitem=document.getElementById('addlist')
console.log("YHI HUWA HAI BE"+addlistitem.value)
var currentvalue

addlistitem.addEventListener('input',function(e)
{
    console.log('value changes')
    // console.log(e.target)  ///to find on which value or event happening 
    // console.log(e.target.value)  //value 
    currentvalue=e.target.value;
    
})

newlist.appendChild(document.createTextNode('Juice1'))
console.log(newlist)

newlist.id="item3"

listtotalelement=list.childElementCount
// console.log(listtotalelement)

console.log(currentvalue+"vgjnksnakdxn")

btnAdd.addEventListener('click',function(){
    var newlist=document.createElement('li')
    if (currentvalue===undefined )
    {
        alert("Please enter the darta in add list ")
    }
    else if(currentvalue===""){
        alert("Please enter the darta in add list ")
    } else{
    //var textnode=document.createTextNode('Juice2')
    var textnode=document.createTextNode(currentvalue)
    newlist.appendChild(textnode)
    newlist.id="item"+(listtotalelement+1)
    console.log(newlist)
    list.appendChild(newlist)
    listtotalelement=list.childElementCount
    // console.log(currentvalue+"fghjkl")
// console.log(listtotalelement)
    }

})





