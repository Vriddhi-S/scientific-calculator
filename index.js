let string="";
let buttons=document.querySelectorAll('.btns');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = string.substring(0,string.length-1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'sin'){
            string = Math.sin(string)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '√'){
            string = Math.sqrt(string)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'cos'){
            string = Math.cos(string)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'tan'){
            string = Math.tan(string)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'pow,2'){
            string = Math.sin(string,2)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'π'){
            string = Math.PI
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'log'){
            string = Math.log(string)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'exp'){
            string = Math.exp(string)
            document.querySelector('input').value = string;
        }
        else{ 
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

