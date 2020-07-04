const btn = document.querySelector('button#btn');
btn.addEventListener('click',function(){
    document.body.classList.toggle('bgColor');
});

// Random Color
const btn2 = document.createElement('button');
btn2.setAttribute('class','btn');
btn2.setAttribute('type','button');
const txtBtn2 = document.createTextNode('Random Color');
btn2.appendChild(txtBtn2);
btn.after(btn2);

btn2.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

const red = document.getElementById('red');
red.addEventListener('input',function(){
    const r =  red.value;
    const g =  green.value;
    const b =  blue.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

const green = document.getElementById('green');
green.addEventListener('input',function(){
    const r =  red.value;
    const g =  green.value;
    const b =  blue.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

const blue = document.getElementById('blue');
blue.addEventListener('input',function(){
    const r =  red.value;
    const g =  green.value;
    const b =  blue.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

document.body.addEventListener('mousemove',function(event){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor='rgb('+xPos+','+yPos+',100)';

});