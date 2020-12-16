// SELECTOR
const numberButtons=document.querySelectorAll('.nbr')
const operatorButtons=document.querySelectorAll('.ope')
const calculDisplay=document.querySelector('#main')
const equal=document.getElementById('equal')
const dot = document.getElementById('dot')
const ac=document.getElementById('ac')
const del=document.getElementById('del')
let operator;
let tempNumber1;
let tempNumber2;
let operatorCount=0;
let equalCount=0
let calcul;
let preview=document.querySelector('#preview')

// PREVENT TEXT IN INPUT TEXT TYPE!!
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}



// DEL CLICK
del.addEventListener('click',()=>{
    calculDisplay.value=calculDisplay.value.substr(0,(calculDisplay.value.length-1))

})
// AC CLICK
ac.addEventListener('click',()=>{
    calculDisplay.value=""
    operator=""
    tempNumber1=""
    tempNumber2=""
    operatorCount=0;
    preview.value=""

})

dot.addEventListener('click',()=>{
    if(calculDisplay.value.includes('.')){
        return
    }

    else{
    

        calculDisplay.value+="."
    }    
    
})



numberButtons.forEach(button=>{
    button.addEventListener('click',function(){ 
            
            if(operatorCount==0){
                calculDisplay.value+=button.textContent.toString()
                tempNumber1=calculDisplay.value
                // console.log(tempNumber1);
                // console.log('test');
                operatorButtons.forEach(ope=>{
                    ope.style.color='black'
                    ope.style.backgroundColor='var(--basicButtColor)'
                })

            }
            else{

                calculDisplay.value+=button.textContent
                tempNumber2=calculDisplay.value
                // console.log(tempNumber2);
                // console.log('test');
                operatorButtons.forEach(ope=>{
                    ope.style.color='black'
                    ope.style.backgroundColor='var(--basicButtColor)'
                })
            }
    
    })
})


// OPERATOR CLICK
operatorButtons.forEach(ope=>{
    ope.addEventListener('click',()=>{
        if(calculDisplay.value!=""){

            if(equalCount>0){
                preview.value=calcul+ope.value


            }

            if(operatorCount==0){
                tempNumber1=calculDisplay.value.toString()
                operatorCount++
                operator=ope.value
                preview.value=tempNumber1+operator
                calculDisplay.value=""
                // style
                ope.style.backgroundColor='var(--onClickButtColor)'
                ope.style.color='white'
                // test  
                console.log(tempNumber1);

            }
            else{
                tempNumber1=tempNumber2
                tempNumber2=calculDisplay.value
                operatorCount++
                operator=ope.value
                calculDisplay.value=""
                // style
                ope.style.backgroundColor='var(--onClickButtColor)'
                ope.style.color='white'
                // test
                console.log(tempNumber1);

            }
           
     
        }
    })
})



// EQUAL CLICK
equal.addEventListener('click',()=>{
    if(calculDisplay.value==""){
        return
    }

    else if(tempNumber2==undefined){

        preview.value+=calculDisplay.value


    }
    else{

        preview.value+=tempNumber2
        equalCount++
        console.log(tempNumber1+tempNumber2);
        tempNumber2=calculDisplay.value
        calcul=eval(tempNumber1+operator+tempNumber2)
        tempNumber2=calcul
        calculDisplay.value=calcul

    }
    

})


