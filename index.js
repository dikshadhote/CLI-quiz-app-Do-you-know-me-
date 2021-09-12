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
    question : "\nShe is techie or people person? ",
    answer :"people person"
  },
  {question : "\nWhere she went for doing internship? ",
    answer :"Mumbai"},
    {question : "\nWhat is name of entrepreneur she is inspired by? ",
    answer :"Steve Jobs"},
    {question : "\nWhich technology she learned recently? ",
    answer :"Web development"}

]
//track of high score
var highScore=[{
  Name:"Diksha",
  score:5
},{
  Name:"Aniket",
  score:3
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