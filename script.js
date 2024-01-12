let allplayers = [
    'G B',
    'Bing Bang',
    'Tornado',
    'Big Slash',
    'Bad Guy',
    'Sheid',
    'Jack Hebner',
    'Tied',
    'Ken Yakazuma',
    'Style',
    'Flame',
    'Throne',
    'Akm',
    'Kz',
    'Wade Dek',
    'Primo',
    'Dark King',
    'James',
    'Dragonove',
    'B2',
    'Deluxo',
    'Jack Spark',
    'Wedge',
    'Sledge',
    'Test',
    'Albert',
    'Neon',
    'Bronze',
    'Bender Rack',
    'J star',
    'Bullet',
    'Bob',
    'Dexture',
    'Bold',
    'BBK',
    'Blaze',
    'Grime',
    'P1',
    'P2',
    'Beast',
    'Zing',
    'Kevin Donial',
    'Wing',
    'Bryan Hedo',
    'Wild',
    'breeze',
    'kkk',
    'Dragon Blast',
    'Phantom',
    'coolz'
  ];

  let ClashRingPlayers = [
    'Sheid',
    'Tornado',
    'Jack Hebner',
    'Tied',
    'Ken Yakazuma',
    'Flame',
    'Throne',
    'Wade Dek',
    'Primo',
    'Dark King',
    'Deluxo',
    'Sledge',
    'Test',
    'Albert',
    'Bender Rack',
    'J star',
    'Bullet',
    'Bold',
    'Blaze',
    'Beast',
    'Zing',
    'Kevin Donial',
    'Wild',
    'kkk',
    'Phantom'
  ];
  
  let WrestleZonePlayers = [
    'G B',
    'Bing Bang',
    'Big Slash',
    'Bad Guy',
    'Style',
    'Akm',
    'Kz',
    'James',
    'Dragonove',
    'B2',
    'Jack Spark',
    'Wedge',
    'Neon',
    'Bronze',
    'Dexture',
    'BBK',
    'Bob',
    'Grime',
    'P1',
    'P2',
    'Wing',
    'Bryan Hedo',
    'breeze',
    'Dragon Blast',
    'coolz'
  ];
  
function ShowCRP() {
    
    
    var container='';
    for (let i = 0; i < ClashRingPlayers.length; i++) {
        
        container+=`<div>${i+1}) ${ClashRingPlayers[i]}</div>`;
    }
    document.getElementById("ClashZonePlayers").innerHTML=container;
}

function ShowWZP() {
    var container='';
    for (let i = 0; i < WrestleZonePlayers.length; i++) {
        
        container+=`<div>${i+1}) ${WrestleZonePlayers[i]}</div>`;
    }
    document.getElementById("WrestleZonePlayers").innerHTML=container;
}




function ShowAll() {
    var container='';
    for (let i = 0; i < allplayers.length; i++) {
        
        container+=`<div>${i+1}) ${allplayers[i]}</div>`;
    }
    document.getElementById("ShowAll").innerHTML=container;
}








let nav=document.getElementById("nav");
nav.addEventListener("click",()=>{
    document.getElementById("MainMenu").style.display="flex";
    document.getElementById("ShowMenu").style.display="none";
    document.getElementById("ClashZonePlayers").style.display="none";
    document.getElementById("WrestleZonePlayers").style.display="none";
    document.getElementById("ShowAll").style.display="none";
})