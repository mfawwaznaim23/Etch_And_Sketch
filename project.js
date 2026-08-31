let f = document.querySelector(".button1")
let vari = 0;

function abs()
{
  let num = Number(vari);
 
    let h=800/num;
    let w=800/num;
  

    let div = document.querySelector(".div2");
    for( i=0; i<(num*num); i++)
    {
        let line = document.createElement("div");
        
        line.classList.add("but");
        div.appendChild(line);
        line.style.width= w+"px";
        line.style.height=h+"px";
    }
    let s = document.querySelectorAll(".but"); 
       
    
         
         s.forEach(function (but) {
    but.addEventListener("mouseenter", function () {
        
        statement(but);
    });

});
}


function statement(event)
{
 event.classList.add("clr");
}



f.addEventListener("click",function()
{
    vari = prompt(
  "How large should the grid be?\n\n" +
  "Enter the number of squares per side.\n" +
  "Example: 16 creates a 16 × 16 grid."
);
    let page = document.querySelectorAll(".but");
    if(page!=null)
    {
        page.forEach(function(pg)
    {
        pg.remove();
    });
    }
    abs();
    

})
