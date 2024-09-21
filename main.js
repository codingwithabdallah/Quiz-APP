let counter = 0 ;
let arr = [] ;
let startq = document.createElement("div") ;

startq.textContent = "Questions will Go here" ;

let divQues = document.querySelector(".Questions");
let divbtn = document.querySelector(".btn");
let answerdiv = document.querySelector(".answer") ;

let btn = document.createElement("button") ;
btn.textContent = "start" ;

let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let p4 = document.querySelector(".p4");



divbtn.appendChild(btn) ;
divQues.appendChild(startq) ;


document.body.appendChild(divQues);
document.body.appendChild(answerdiv) ; 
document.body.appendChild(divbtn);




btn.onclick = function(){
    startq.remove();
    btn.remove() ;


    let questions = [
        "What is the output of '2' + 2 in JavaScript?",
        "Which company developed JavaScript?",
        "What does 'NaN' stand for?",
        "Which keyword is used to declare a constant variable?",
        "Which operator checks both value and type in JavaScript?",
    ];
    
    let answers = [["'4'","'22'","4" , "undefined"],["Microsoft", "Apple", "Netscape", "Google"],["Not a Null", "Not a Number", "No additional Number", "Null and Null"],["var", "let", "const", "constant"],["==", "!=", "===", "!=="] ];
    
    // Q
    let allQ = document.createElement("div") ;
    allQ.innerHTML = questions[0] ;
    divQues.appendChild(allQ) ;
    


        p1.style.cssText = " margin: 10px 0; padding: 10px ;background-color: #e7e7e7; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;transition: background-color 0.3s";
        p1.onmouseover = function() {
            p1.style.backgroundColor = '#d4d4d4'; 
        };
        
        p1.onmouseout = function() {
            p1.style.backgroundColor = '#e7e7e7'; 
        };
        
        p2.style.cssText = " margin: 10px 0; padding: 10px ;background-color: #e7e7e7; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;transition: background-color 0.3s";
        p2.onmouseover = function() {
            p2.style.backgroundColor = '#d4d4d4'; 
        };
        
        p2.onmouseout = function() {
            p2.style.backgroundColor = '#e7e7e7'; 
        };
        p3.style.cssText = " margin: 10px 0; padding: 10px ;background-color: #e7e7e7; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;transition: background-color 0.3s";
        p3.onmouseover = function() {
            p3.style.backgroundColor = '#d4d4d4'; 
        };
        
        p3.onmouseout = function() {
            p3.style.backgroundColor = '#e7e7e7'; 
        };
        p4.style.cssText = " margin: 10px 0; padding: 10px ;background-color: #e7e7e7; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;transition: background-color 0.3s";
        p4.onmouseover = function() {
            p4.style.backgroundColor = '#d4d4d4'; 
        };
        
        p4.onmouseout = function() {
            p4.style.backgroundColor = '#e7e7e7'; 
        };


        // Answer

        p1.innerHTML = answers[0][0] ;
        p2.innerHTML = answers[0][1] ;
        p3.innerHTML = answers[0][2] ;
        p4.innerHTML = answers[0][3] ;

        
        p2.onclick = function(){
            if(p2.innerHTML === "'22'"){
                counter = 1 ;
                arr.push(counter) ;
            }
        

        }


    let btn2 = document.createElement("button"); 
    btn2.textContent = "Next" ;
    divbtn.appendChild(btn2) ;
    
    btn2.onclick = function(){   
        allQ.innerHTML = questions[1] ;

        p1.innerHTML = answers[1][0] ;
        p2.innerHTML = answers[1][1] ;
        p3.innerHTML = answers[1][2] ;
        p4.innerHTML = answers[1][3] ;

        p3.onclick = function(){
            if(p3.innerHTML === "Netscape"){
                counter = 2 ;
                arr.push(counter) ;
            }
            
              

        }

        btn2.remove() ;
        
        // creating a new Next 3
        let btn3 = document.createElement("button"); 
        btn3.textContent = "Next" ;
        divbtn.appendChild(btn3) ;
        
        btn3.onclick = function(){   
            allQ.innerHTML = questions[2] ;
    
            p1.innerHTML = answers[2][0] ;
            p2.innerHTML = answers[2][1] ;
            p3.innerHTML = answers[2][2] ;
            p4.innerHTML = answers[2][3] ;
    
            p2.onclick = function(){
                if (p2.innerHTML === "Not a Number"){
                    
                    counter = 3 ;
                    arr.push(counter) ;
                }
                
            }
            btn3.remove() ;

            // creating a new Next 4
            let btn4 = document.createElement("button"); 
            btn4.textContent = "Next" ;
            divbtn.appendChild(btn4) ;
            
            btn4.onclick = function(){   
                allQ.innerHTML = questions[3] ;
        
                p1.innerHTML = answers[3][0] ;
                p2.innerHTML = answers[3][1] ;
                p3.innerHTML = answers[3][2] ;
                p4.innerHTML = answers[3][3] ;
                
                p3.onclick = function(){
                    if(p3.innerHTML === "const"){
                        counter = 4 ;
                        arr.push(counter) ;
                    }
        
                }
                btn4.remove() ;

                // creating a new Next 5
                let btn5 = document.createElement("button"); 
                btn5.textContent = "Next" ;
                divbtn.appendChild(btn5) ;
        
                btn5.onclick = function(){   
                    allQ.innerHTML = questions[4] ;
            
                    p1.innerHTML = answers[4][0] ;
                    p2.innerHTML = answers[4][1] ;
                    p3.innerHTML = answers[4][2] ;
                    p4.innerHTML = answers[4][3] ;
            
                    p3.onclick = function(){
                        if(p3.innerHTML === "==="){
                            counter = 5 ;
                            arr.push(counter) ;
            
                            console.log(arr) ;
                        }
            
                    }
                    btn5.remove() ;

                    // creating a new Next 6

                    let btn6 = document.createElement("button"); 
                    btn6.textContent = "Next" ;
                    divbtn.appendChild(btn6) ;
            
                    btn6.onclick = function(){   
                        allQ.innerHTML =  "Quiz complieted"  ;
                
                        p1.style.backgroundColor = "Tomato";
                        let myuniqdata = new Set(arr) ;
                        console.log(myuniqdata.size)
                        p1.innerHTML = `Your score is ${myuniqdata.size} out of 5` ;
                     
                        p2.remove() ;
                        p3.remove() ;
                        p4.remove() ;
                        btn6.remove();

                        let resbtn = document.createElement("button"); 
                        resbtn.textContent = "Reset" ;
                        divbtn.appendChild(resbtn) ;
                        resbtn.onclick = function(){
                            window.location.reload();
                        }
                        
  
                        
                    }   
                }
            }
        }
    }
}
