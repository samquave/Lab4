document.addEventListener('DOMContentLoaded', function() {
    var btn = document.createElement('button');
    var body = document.getElementsByTagName('body')[0];
    var text = document.createTextNode("Add Square");
    btn.className = 'button';
    btn.appendChild(text);
    body.appendChild(btn);
    btn.addEventListener('click', function() {
        var div = document.createElement('div');
        var id = body.getElementsByTagName("div").length;
        div.className = 'square';
        div.setAttribute('id', id);
        body.appendChild(div);
        div.style.backgroundColor = 'black';
   
    div.addEventListener('click', function() {
        var color = ["red", "green", "blue", "orange", "yellow", "purple", "brown", "white"];
        var random = color[Math.floor(Math.random()*color.length)];
        div.style.backgroundColor = random;

    div.addEventListener('mouseenter', function() {
        var idtext = document.createTextNode(id);
        var idpara = document.createElement('p');
        idpara.appendChild(idtext);
        div.appendChild(idpara);
    div.addEventListener('mouseleave', function() {
            div.removeChild(idpara);
    })
    })
    })
    })
    })
   



        

    
  


        


