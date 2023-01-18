function  get_hieroglyph (){     
          return  new Promise((resolve, reject)=> {
                              setTimeout(() => {
                              resolve ( String.fromCharCode(String(Date.now()).slice(4)) );  
                                          }, 50);            
                                                                 })
                            }                             

async function getRandomChinese (length){                                   
                let result='';
                while(result.length<length) {result+= await get_hieroglyph()}
                console.log(result);
                                        }
                

getRandomChinese(10);




 