const generateBlocks = ()=>{
       const el = document.querySelector('#square');

       for (let i = 0; i < 25; i++) {
        const elem= document.createElement("span");
        el.appendChild(elem);
        elem.style.cssText=` width: 50px; height: 50px;background-color: ${getRandomColor()}`;
        }       
};

const generateBlocksInterval = ()=> {
        const block = document.getElementById('square');
        const cells = block.getElementsByTagName('span');
        
        for (let cell of cells) {
          cell.style.backgroundColor = getRandomColor();          
        }
};




export function getRandomColor () {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


generateBlocks();
setInterval(generateBlocksInterval,1000);

module.exports = {generateBlocks,
                generateBlocksInterval,
                getRandomColor
                };