var menu_icon = false;

function toggleMenu()
{
    var element = document.getElementById("menu");
    
    
    if(menu_icon)
    {
        element.removeAttribute("class","wyswietlaj");
        element.setAttribute("class","nie_wyswietlaj");
    }
    else
    {
        element.setAttribute("class","wyswietlaj");
        element.removeAttribute("class","nie_wyswietlaj");
    }
        
}