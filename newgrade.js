function processGrade(grade){
  if(grade < 70 ){
      console.log("There is no grade like that");
      
  }
  else if (grade >=70 && grade < 75){
    if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade -3));
    }
    else {
      console.log("Your new grade is :" + (grade -2));   
    }
  }
  else if(grade>=75 && grade <=100){

 if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade + 5));
    }
    else {
      console.log("Your new grade is :" + (grade + 3));   
    }

  }
  else if(grade == "INC" || grade == "inc"){
      console.log("Your Grade is incomplete");
      
  }
  else{
      console.log("Grade is overkill");
  }
}

module.exports = {
    processTheGrade:processGrade
}