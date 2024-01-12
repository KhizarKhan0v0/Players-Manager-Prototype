function Show_players_btn(){
    document.getElementById("MainMenu").style.display="none";
    document.getElementById("ShowMenu").style.display="flex";
    
    
    document.getElementById("WrestleZonePlayers").style.display="none";
    document.getElementById("ClashZonePlayers").style.display="none";
    document.getElementById("ShowAll").style.display="none";
    
}
function  Show_clash_zone_btn(){
    document.getElementById("ClashZonePlayers").style.display="flex";
    document.getElementById("MainMenu").style.display="none";
    document.getElementById("ShowMenu").style.display="none";
    document.getElementById("WrestleZonePlayers").style.display="none";
    document.getElementById("ShowAll").style.display="none";
    ShowCRP();
}
function  Show_wrestle_zone_classic(){
    document.getElementById("WrestleZonePlayers").style.display="flex";
    document.getElementById("ClashZonePlayers").style.display="none";
    document.getElementById("MainMenu").style.display="none";
    document.getElementById("ShowMenu").style.display="none";
    document.getElementById("ShowAll").style.display="none";
    ShowWZP();
}
function  Show_all_players(){
    document.getElementById("ShowAll").style.display="flex";
    document.getElementById("ClashZonePlayers").style.display="none";
    document.getElementById("MainMenu").style.display="none";
    document.getElementById("ShowMenu").style.display="none";
    document.getElementById("WrestleZonePlayers").style.display="none";

    ShowAll();
}