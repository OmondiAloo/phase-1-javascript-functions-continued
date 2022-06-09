// code your solution here
function saturdayFun(someValue= "roller-skate"){
    
       return `This Saturday, I want to ${someValue}!`;
    }



    function mondayWork(someValue="go to the office"){
        return `This Monday, I will ${someValue}.`
    }


    function wrapAdjective(results="*"){
        return function(emphatic="a hard worker") {
            return`You are ${results}${emphatic}${results}!`

        }
    }