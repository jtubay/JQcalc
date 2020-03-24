$(document).ready(()=>{

    let firstNum = 0;
    let seconNum = 0;
    let operator = '';
    let result = 0;
    let isOperatorChosen = false;
    let isCalculated = false;
    const log = console.log
    
    const iniCalc = () => {
        firstNum = '';
        seconNum = '';
        isOperatorChosen = false;
        isCalculated = false;
    
        $('#first-number, #second-number, #operator, #result').empty();
    }
    
    $('.number').on('click', function(){
        log($(this).val())
        if(isCalculated){
            return false
        }
        if(isOperatorChosen) {
            seconNum += $(this).val();
            $('#second-number').text(seconNum)
        }
        else{
            firstNum += $(this).val();
            $('#first-number').text(firstNum);
        }
    });
    
    $('.operator').on('click', function(){
        if(!firstNum || isCalculated){
            return false
        }
        isOperatorChosen = true;
        operator = $(this).val();
        $('#operator').text($(this).text());
    
    });
    
    $('.equal').on('click',  function (){
        if(isCalculated){
            return false
        }
        isCalculated = true;
        firstNum = parseInt(firstNum);
        seconNum = parseInt(seconNum);
    
        switch(operator){
            case 'plus':
                result = firstNum + seconNum;
                break;
            case 'minus':
                result = firstNum - seconNum;
                break;
            case 'times':
                result = firstNum * seconNum;
                break;
            case 'divide':
                result = firstNum / seconNum;
                break;
            case 'power':
                result = Math.pow(firstNumber, secondNumber);
                break;
    
    
        }
        log(result)
        $('#result').text(result);
    });
    
    $(".clear").on('click', ()=>{
        iniCalc()
    })
    iniCalc()
})
