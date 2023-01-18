function  getHhieroglyph (){     
          return  new Promise((resolve, reject)=> {
                              setTimeout(() => {
                              resolve ( String.fromCharCode(String(Date.now()).slice(-5)) );  
                                          }, 50);            
                                                                 })
                            }                             

async function getRandomChinese (length){                                   
                let result='';
                while(result.length<length) {result+= await getHhieroglyph()}
                console.log(result);
                                        }
                

getRandomChinese(10);




 