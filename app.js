const readline = require('readline');
const utils = require('./newgrade');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a grade: ',function (answer)  {
  var grade = parseInt(answer);
  
  if (isNaN(grade)){
      
        if(grade == "INC"){
            console.log(grade);
            console.log("Your grade is incomplete");
        }
        else if(grade == "DROP"){
            console.log("You have drop the subject");
        }
        else{
            console.log("asdfasdf");
            console.log(grade);
        }
        
    }else{
        utils.processTheGrade(grade);
        
    }

  
  rl.close();
});