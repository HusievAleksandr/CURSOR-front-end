// Завдання 1:
const idGenerator = createIdGenerator();

function* createIdGenerator(){
    for(let i=1; i<Infinity; i++){
        yield i;
    }
};

//console.log (idGenerator.next().value);
//console.log (idGenerator.next().value);
//console.log (idGenerator.next().value);




// Завдання 2 (advanced)
const fontGenerator = fontGenerators();
const block= document.querySelector('h1');
const block_button= document.querySelector('#blok');

block_button.addEventListener("click", function(e){
        const target = e.target; 
        fontGenerator.next();
        if(target.innerText=='UP'){
            block.style.fontSize = `${fontGenerator.next('UP').value}px`;}
        if(target.innerText=='DOWN'){
            block.style.fontSize =`${fontGenerator.next('DOWN').value}px`;}
                                        });

export function* fontGenerators(result) { 
    let selektor = 14;
    while(true){
        if (result==="UP"){ selektor += 2;}
        else if(result==="DOWN"){selektor -= 2;}   
        result = yield selektor; 
    }
}

module.exports = {idGenerator,
                createIdGenerato,
                fontGenerato,
                block,
                block_button,
                fontGenerators
                };






