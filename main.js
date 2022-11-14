let player = document.getElementById("player")
let v=(Math.random()>0.5)
let td = []
let text = []
let winner=document.getElementById("winner");
player.textContent= ((!v)? "X": "O")


for(let i=1; i<10; i++){
    td[i]=document.getElementById("t"+i)
}

let color=(a)=>{
    for(let i=1; i<10; i++){
        if(td[i].textContent!=a){
            td[i].style.color="gray"
        }
        if(td[i].textContent==a){
            td[i].style.fontWeight="600"
            
        }
    }
}

let win=()=>{

    if((td[1].textContent==td[5].textContent)&&(td[5].textContent==td[9].textContent)&&td[1].textContent!='  '){
        winner.textContent=td[1].textContent
        color(winner.textContent)
        
    }
    if((td[3].textContent==td[5].textContent)&&(td[5].textContent==td[7].textContent)&&td[5].textContent!='  '){
        winner.textContent=td[3].textContent
        color(winner.textContent)
        
    }
    if((td[1].textContent==td[2].textContent)&&(td[2].textContent==td[3].textContent)&&td[1].textContent!='  '){
        winner.textContent=td[1].textContent
        color(winner.textContent)
        
    }
    if((td[4].textContent==td[5].textContent)&&(td[5].textContent==td[6].textContent)&&td[5].textContent!='  '){
        winner.textContent=td[4].textContent
        color(winner.textContent)
        
    }
    if((td[7].textContent==td[8].textContent)&&(td[8].textContent==td[9].textContent)&&td[8].textContent!='  '){
        winner.textContent=td[7].textContent
        color(winner.textContent)
        
    }
    if((td[1].textContent==td[4].textContent)&&(td[4].textContent==td[7].textContent)&&td[4].textContent!='  '){
        winner.textContent=td[1].textContent
        color(winner.textContent)
        
    }
    if((td[2].textContent==td[5].textContent)&&(td[5].textContent==td[8].textContent)&&td[5].textContent!='  '){
        winner.textContent=td[2].textContent
        color(winner.textContent)
        
    }
    if((td[7].textContent==td[8].textContent)&&(td[8].textContent==td[9].textContent)&&td[8].textContent!='  '){
        winner.textContent=td[7].textContent
        color(winner.textContent)
        
    }

}
let test=false

let jeu=a=> {
    
    if((!((td[a].textContent=="X")||(td[a].textContent=="O")))&&(!((winner.textContent=="X")||(winner.textContent=="O")))){
        if(!v) {
            td[a].textContent="X";
            player.textContent="O";
            
        }
            
        if(v){
            td[a].textContent="O";
            player.textContent="X";
            
        }
        v=!v
        winner.innerHTML="?"
        win()
    }



    
        if(test){
            for(let i=1; i<10; i++){
                td[i].innerHTML="&nbsp;&nbsp;"
                
                test=false
            }
        }
        
    

    test=((winner.textContent=="X")||(winner.textContent=="O"))

    
        
}




let rejouer=()=>{
    for(let i=1; i<10; i++){
        td[i].innerHTML="&nbsp;&nbsp;"
    }
    winner.innerHTML="?"
    
}


