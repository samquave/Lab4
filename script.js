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
       this.innerText = id;
    div.addEventListener('mouseleave', function() {
           this.innerText = "";
    div.addEventListener('dblclick', function() {
        var id = this.id;
        if(id % 2 === 0) {
            if (this.nextSibling) {
                this.nextSibling.remove();
            } else {
                alert("There's nothing to the right to remove.");
            }
        } else{
            if (this.previousSibling) {
                this.previousSibling.remove();
            } else {
                alert("There are no elements to the left to remove.");
            }
        }
    })
     })
    })
    })
    })
})
   



        

    
  


        


