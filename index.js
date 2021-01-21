//read input feom user
var readlineSync=require('readline-sync');
//take username
var userName=readlineSync.question("What is your name ? ");
console.log("\nWelcome "+userName+" \nLets see..how well you know Diksha? ")
//count score 
var countScore=0 

//check if user answer is valid or not
function checkAnswer(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase()) 
  {
    console.log("Kudos to you!! ");
    countScore++;
    console.log("Current score: "+countScore);
  }
  else
    console.log("Better luck next time..");

console.log("---------------------");

}


//store question and answer in array
var questionList=[
  {
    question : "\nWhich book she liked in 2020? ",
    answer :"Steve Jobs"
  },
  {
    question : "\nPlace she visited at the end of this year? ",
    answer :"Kunwara Bhimsen"
  },
  {question : "\nWhere she went for doing internship? ",
    answer :"Mumbai"}

]
//track of high score
var highScore=[{
  Name:"Diksha",
  score:3
},{
  Name:"Aniket",
  score:2
}]

//call function using each object of array
for(var i=0;i<questionList.length;i++)
{
  checkAnswer(questionList[i].question,questionList[i].answer);
}

//total score

console.log("\nHey..You SCORED  "+countScore);
console.log("---------------------");
//Name of high scorers
console.log("\nName of High scorer:\n ")
for(var i=0;i<highScore.length;i++)
{
  console.log("Name: "+highScore[i].Name+"\nscore: "+highScore[i].score);
}
console.log("---------------------");
console.log("Remember to send me screenshot if you beat the score..\n I will update your name in high scorer list...")