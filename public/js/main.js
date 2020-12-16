// SELECTOR
const numberButtons=document.querySelectorAll('.nbr')
const operatorButtons=document.querySelectorAll('.ope')
const calculDisplay=document.querySelector('input')
const equal=document.getElementById('equal')
const dot = document.getElementById('dot')
const ac=document.getElementById('ac')
const del=document.getElementById('del')
let operatorCount=0;
let operator;
let tempNumber1;
let tempNumber2;



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


})


// NUMBERS BUTTON CLICK
numberButtons.forEach(button=>{
    button.addEventListener('click',function(){
        
        calculDisplay.value+=button.textContent.toString()

        if()

        operatorButtons.forEach(ope=>{
            ope.style.color='black'
            ope.style.backgroundColor='var(--basicButtColor)'
        })

        
    })
})


// OPERATOR CLICK
operatorButtons.forEach(ope=>{
    ope.addEventListener('click',()=>{
        if(calculDisplay.value!=""){

            if(operatorCount==0){
                operatorCount++
                tempNumber1=calculDisplay.value
                operator=ope.value
                calculDisplay.value=""
                // style
                ope.style.backgroundColor='var(--onClickButtColor)'
                ope.style.color='white'
                // test
                console.log(tempNumber1);
            }
            // else if(operatorCount==1){
            //     operatorCount++
            //     tempNumber2=calculDisplay.value
            //     operator=ope.textContent
            //     calculDisplay.value=""
            //     // style
            //     ope.style.backgroundColor='var(--onClickButtColor)'
            //     ope.style.color='white'
            //     // test
            //     console.log(tempNumber2);

            // }
            
        }
    })
})



// EQUAL CLICK
equal.addEventListener('click',()=>{

    tempNumber2=calculDisplay.value



    let calcul=eval(tempNumber1+operator+tempNumber2)

    calculDisplay.value=calcul
})



