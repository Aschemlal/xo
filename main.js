let player = document.getElementById("player")
let v=(Math.random()>0.5)
let td = []
let text = []
let winner=document.getElementById("winner");
player.textContent= ((!v)? "X": "O")


for(let i=1; i<10; i++){
    td[i]=document.getElementById("t"+i)
    
}



let win=()=>{

    
    if((td[1].textContent==td[5].textContent)&&(td[5].textContent==td[9].textContent)){
        winner.textContent=td[1].textContent
        
    }
    if((td[3].textContent==td[5].textContent)&&(td[5].textContent==td[7].textContent)){
        winner.textContent=td[3].textContent
        
    }
    if((td[1].textContent==td[2].textContent)&&(td[2].textContent==td[3].textContent)){
        winner.textContent=td[1].textContent
        
    }
    if((td[4].textContent==td[5].textContent)&&(td[5].textContent==td[6].textContent)){
        winner.textContent=td[4].textContent
        
    }
    if((td[7].textContent==td[8].textContent)&&(td[8].textContent==td[9].textContent)){
        winner.textContent=td[7].textContent
        
    }
    if((td[1].textContent==td[4].textContent)&&(td[4].textContent==td[7].textContent)){
        winner.textContent=td[1].textContent
        
    }
    if((td[2].textContent==td[5].textContent)&&(td[5].textContent==td[8].textContent)){
        winner.textContent=td[2].textContent
        
    }
    if((td[7].textContent==td[8].textContent)&&(td[8].textContent==td[9].textContent)){
        winner.textContent=td[7].textContent
        
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
        win()
    }


    if((winner.textContent=="X")||(winner.textContent=="O")){

    
        if(test){
            for(let i=1; i<10; i++){
                td[i].innerHTML="&nbsp;&nbsp;"
                winner.innerHTML="&nbsp;"
                test=false
            }
        }
        test=true;
    }


    
        
}




