var divs = document.getElementsByClassName("col-auto");

for (let i=0; i<divs.length; i++){
    const element= document.createElement("img");
    divs[i].appendChild(element);
  
}
const images=document.getElementsByTagName("img");

async function addsrc(j){

    images[j].src="https://source.unsplash.com/random/300x301?$"+(j);
}

function src5(){
    images[5].src="https://source.unsplash.com/random/300x300";
}
src5();

for (let j=0; j<5; j++){
    
    addsrc(j);
}

for (let j=6; j<images.length ; j++){
    
    addsrc(j);
}