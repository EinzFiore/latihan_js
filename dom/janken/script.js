
function getNonPlayer() {
    const npc = Math.random();
    if (npc < 0.34) return 'gajah';
    if (npc >= 0.34 && npc < 0.67) return 'orang';
    return 'semut';
}

function getResult(npc,player) {
    if (player == npc) return 'Seri !!';
    if (player == 'gajah') return (npc == 'orang') ? 'Menang !' : 'Kalah !';
    if (player == 'orang') return (npc == 'gajah') ? 'Menang !' : 'Kalah !';
    if (player == 'semut') return (npc == 'orang') ? 'Menang !' : 'Kalah !';
    
}


function random() {
    const imgNPC = document.querySelector('.img-komputer');
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    const startTime = new Date().getTime(); 
    setInterval(function(){
        if( new Date().getTime() - startTime > 1000 ) {
            clearInterval;
            return;
        }
        imgNPC.setAttribute('src','img/' + gambar[i++] + '.png');
        if(i == gambar.length) i=0;
    },100)
}


const thisPlayer = document.querySelectorAll('li img');
thisPlayer.forEach(function(pil){
    pil.addEventListener('click',function(){
        const nonPlayer = getNonPlayer();
        const thisPlayer = pil.className;
        const result = getResult(nonPlayer,thisPlayer);
        random();
        setTimeout(function() {
            const imgNPC = document.querySelector('.img-komputer');
            imgNPC.setAttribute('src','img/' + nonPlayer + '.png');
            
            const info  = document.querySelector('.info');
            info.innerHTML = result;
        },1000);

    });
});


// const btnGajah = document.querySelector('.gajah');
// btnGajah.addEventListener('click',function(){
//     const nonPlayer = getNonPlayer();
//     const thisPlayer = btnGajah.className;
//     const result = getResult(nonPlayer,thisPlayer);

//     const imgNPC = document.querySelector('.img-komputer');
//     imgNPC.setAttribute('src','img/' + nonPlayer + '.png');

//     const info  = document.querySelector('.info');
//     info.innerHTML = result;

// });

// const btnOrang = document.querySelector('.orang');
// btnOrang.addEventListener('click',function(){
//     const nonPlayer = getNonPlayer();
//     const thisPlayer = btnOrang.className;
//     const result = getResult(nonPlayer,thisPlayer);

//     const imgNPC = document.querySelector('.img-komputer');
//     imgNPC.setAttribute('src','img/' + nonPlayer + '.png');

//     const info  = document.querySelector('.info');
//     info.innerHTML = result;

// });

// const btnSemut = document.querySelector('.semut');
// btnSemut.addEventListener('click',function(){
//     const nonPlayer = getNonPlayer();
//     const thisPlayer = btnSemut.className;
//     const result = getResult(nonPlayer,thisPlayer);

//     const imgNPC = document.querySelector('.img-komputer');
//     imgNPC.setAttribute('src','img/' + nonPlayer + '.png');

//     const info  = document.querySelector('.info');
//     info.innerHTML = result;

// });