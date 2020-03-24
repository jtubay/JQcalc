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
})