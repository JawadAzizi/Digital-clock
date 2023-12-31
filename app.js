
        let X = 0;
        let Y = 0;
        
        
        class Clock{

            //this function prints the body of the digits which is made of polygon shape inside a svg tag 
            //@X is the distance of digit from letf side
            //@Y is the distance of digit from the up side
            //@classnName is the the class attribute of the polygon     
            printDigit(X ,Y, className ){
                let dig = ""
                let points ='';
    
                Y+=0
                X+=0
                points = [[10+X,20+Y],[ 30+X, 10+Y],[ 120+X, 10+Y],[ 135+X, 20+Y],[ 95+X, 55+Y],[ 50+X ,55+Y]]
                dig += `<polygon class = "${className}1" points = "${points}" />`
                
                Y+=0
                X+=100
                points = [[40+X,25+Y],[ 45+X, 40+Y],[ 45+X, 145+Y],[ 35+X, 155+Y],[ 0+X, 125+Y],[ 0+X ,60+Y]]
                dig += `<polygon class = "${className}2" points = "${points}" />`
                
                Y+=135
                X+=0
                points = [[35+X,25+Y],[ 45+X, 40+Y],[ 45+X, 145+Y],[ 35+X, 160+Y],[ 0+X, 125+Y],[ 0+X ,60+Y]]
                dig += `<polygon class = "${className}3" points = "${points}" />`
                
                Y+=125
                X+=-100
                points = [[10+X,35+Y],[ 50+X, 4+Y],[ 96+X, 4+Y],[ 131+X, 38+Y],[ 115+X, 50+Y],[ 25+X ,50+Y]]
                dig += `<polygon class = "${className}4" points = "${points}" />`
    
                Y+=-125
                X+=0
                points = [[8+X,25+Y],[ 45+X, 60+Y],[ 45+X, 125+Y],[ 8+X, 155+Y],[ 0+X, 145+Y],[ 0+X ,35+Y]]
                dig += `<polygon class = "${className}5" points = "${points}" />`;
    
                Y+=-135
                X+=0
                points = [[8+X,25+Y],[ 45+X, 60+Y],[ 45+X, 125+Y],[ 8+X, 155+Y],[ 0+X, 145+Y],[ 0+X ,35+Y]]
                dig += `<polygon class = "${className}6" points = "${points}" />`
    
                Y+=130
                X+=0
                points = [[15+X,28+Y],[ 50+X, 0+Y],[ 95+X, 0+Y],[ 128+X, 28+Y],[ 95+X, 62+Y],[ 50+X ,62+Y]]
                dig += `<polygon class = "${className}7" points = "${points}" />`
        
                return  dig;
            }
            
            //thi function print dots to dots between the digits which is made of circle inside of svg tag
            // @X is the distance of digit from letf side
            //@Y is the distance of digit from the up side
            printDot(x, y){
             
                let dott = ""
                dott +=`<circle cx= "${x}"  cy="${y}" r="30" />`
                dott +=`<circle cx= "${x}"  cy="${120+y}" r="30" />`
                return dott;
            }

            //thi function print text to dots between the digits which is made of circle inside of svg tag
            // @X is the distance of digit from letf side
            //@Y is the distance of digit from the up side
            printText(X, Y){
                let text = ""
                text +=`<text class ='noon' x = '${X}' y ='${Y}' fill ='red'></text>`
                return text
            }
    
            //this function displays the digits
            display(){
                // this is each digit codinate list
                this.digitList = {
                    0:[1, 2, 3, 4, 5, 6],
                    1:[2, 3],
                    2:[1, 2, 7, 5, 4],
                    3:[1, 2, 3, 4, 7],
                    4:[6, 7, 2, 3],
                    5:[1, 6, 7, 3, 4],
                    6:[1, 6, 5, 4, 3, 7],
                    7:[1, 2, 3],
                    8:[1, 2, 3, 4, 5, 6, 7],
                    9:[7, 6, 1, 2, 3, 4]
                }
                
                //this updates every thing each second
                setInterval(()=>{
                    let d = document.querySelectorAll(["circle"])
                    d.forEach(element => {
                        element.classList.add("unMuted")
                        setTimeout(()=>{
                        element.classList.remove("unMuted")
                        },700 )
                    });
            
                    let  t = new Date()
                    let time ={
                        "noon": t.toLocaleTimeString().split(" ")[1],
                        "hours": t.toLocaleTimeString().split(" ")[0].split(":")[0],
                        "minutes": t.toLocaleTimeString().split(" ")[0].split(":")[1],
                        "seconds": t.toLocaleTimeString().split(" ")[0].split(":")[2]
                    }
        
                    console.log(time["hours"]+" : "+time["minutes"]+" : "+time["seconds"]+" : "+time["noon"])    
                    
                    this.clrear()
                    this.showDigit("h", time.hours, this.digitList)
                    this.showDigit("m", time.minutes, this.digitList)
                    this.showDigit("s", time.seconds, this.digitList)
                    document.querySelector(".noon").innerHTML=time.noon
                }, 1000)
            }     
         
            //this method chage the color of the printed digit to red
            showDigit(className, digit, digitList){
    
                digit = digit.toString()
                if(digit.length < 2){
                    digit= "0" + digit 
                }
                
                let digit1= parseInt(digit[0])
                let digit2= parseInt(digit[1])
                
                digitList[digit1].forEach(element =>{
                    document.querySelector("."+className + element).classList.add("unMuted");
                })
                
                digitList[digit2].forEach(element =>{
                    document.querySelector("."+className + className + element).classList.add("unMuted");
                })
            }
    
            //this function clrear all of the red digits on the screen
            clrear(){
                document.querySelectorAll("polygon").forEach((element) =>{
                    if(element.classList.contains("unMuted"))
                        element.classList.remove("unMuted");
                })
            }

        }



        let clock = new Clock();
        document.querySelector(["#svg"]).innerHTML += clock.printDigit(10,0 , "h") 
        document.querySelector(["#svg"]).innerHTML += clock.printDigit(165,0 , "hh") 
        document.querySelector(["#svg"]).innerHTML += clock.printDigit(380,0 , "m") 
        document.querySelector(["#svg"]).innerHTML += clock.printDigit(535,0 , "mm") 
        document.querySelector(["#svg"]).innerHTML += clock.printDigit(750,0 , "s") 
        document.querySelector(["#svg"]).innerHTML += clock.printDigit(905,0, "ss") 
        document.querySelector(["#svg"]).innerHTML += clock.printDot(345,100) 
        document.querySelector(["#svg"]).innerHTML += clock.printDot(715,100) 
        document.querySelector(["#svg"]).innerHTML += clock.printText(1060, 300)
        
        clock.display()

