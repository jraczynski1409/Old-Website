var menu_icon = true;

function toggleMenu()
{
    var element = document.getElementById("menu");
    
    var button = document.getElementById("ikona_w_menu");
    
    if(menu_icon)
    {
        button.src="/icons/menu_icon.png";
        element.removeAttribute("class","wyswietlaj");
        element.setAttribute("class","nie_wyswietlaj");
        menu_icon=false;
    }
    else
    {
        button.src="/icons/exit_menu_icon.png";
        element.setAttribute("class","wyswietlaj");
        element.removeAttribute("class","nie_wyswietlaj");
        menu_icon=true;
    }
        
}