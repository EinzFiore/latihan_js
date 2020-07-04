const judul = document.getElementsByTagName('h1')[0];
const ig = document.querySelector('section#a a');

const p2 = document.querySelector('.p2');

const pNew = document.createElement('p');
const txt = document.createTextNode('Paragraph Baru');
pNew.appendChild(txt);
const secA = document.querySelector('section#a');
secA.appendChild(pNew);

const liNew = document.createElement('li');
const txtLi = document.createTextNode('Item Baru');
liNew.appendChild(txtLi);

const ul = document.querySelector('section#b ul ');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liNew,li2);

const link = document.getElementsByTagName('a')[0];
secA.removeChild(link);

// const secB = document.getElementById('b');
// const p4 = secB.querySelector('p');

// const h2New = document.createElement('h2');
// const txtH2 = document.createTextNode('Judul Baru');

// h2New.appendChild(txtH2);

// secB.replaceChild(h2New,p4)

const p3 = secA.getElementsByTagName('p')[2];

function ubahWarna(){
    p3.style.backgroundColor='lightblue';
}

p3.onclick = ubahWarna;

const p4 = document.querySelector('section#b p')
p4.addEventListener('click',function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const txtLi = document.createTextNode('li baru');

    liBaru.appendChild(txtLi);
    ul.appendChild(liBaru);
});


