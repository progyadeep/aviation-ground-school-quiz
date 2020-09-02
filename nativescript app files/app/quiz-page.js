var http = require('tns-core-modules/http');
var dialogs = require("tns-core-modules/ui/dialogs");

var page, quizAns;
var qCats = ["Air Navigation", "Meteorology", "Air Regulation", "Technical General", "Random"];
var total_no_of_questions = 0;
var qAttempted = false;

exports.pageLoaded = function (args) {
    page = args.object;
    page.getViewById("quizCat").text = qCats[global.quizCat];
	
	//downloading questions if not already downloaded
	if(global.question_pool[global.quizCat] == ""){ 
		http.getString("https://progystechblog.surge.sh/ground-theory-quiz/"+global.qFiles[global.quizCat]+"-questions.txt").then((res)=>{
			global.question_pool[global.quizCat] = res.split("\n");
			total_no_of_questions = global.question_pool[global.quizCat].length;
			resetQuizPage();
		}, (err)=>{
			dialogs.alert({
				title: 'Connection error!',
				message: 'Could not connect to server. Check your internet settings and try again later.',
				okButtonText: 'Close'
			});
			page.frame.goBack();
		});
	}else{
		total_no_of_questions = global.question_pool[global.quizCat].length;
		resetQuizPage();
    }
}

function loadQuestion() {
	if(questions_given.length == total_no_of_questions){
		dialogs.alert({
			title: 'End of Quiz',
			message: 'You have attempted all available '+qCats[global.quizCat]+' questions.',
			okButtonText: 'Yay!'
		});
		page.frame.goBack();
		return;
	}
	
	for(var i=1; i<=3; i++){
		page.getViewById('op'+i).backgroundColor = "#e1e1e1";
		page.getViewById('op'+i).color = "black";
	}
	var qInd = Math.floor((Math.random() * total_no_of_questions) + 0);
	while(questions_given.indexOf(qInd) != -1)
		qInd = Math.floor((Math.random() * total_no_of_questions) + 0);
	
	global.questions_given.push(qInd);
	var qStr = global.question_pool[global.quizCat][qInd].split(";");
	page.getViewById('question').text = qStr[0];
	var qOp = qStr[1].split(",");
	for(var i=1; i<=3; i++)
		page.getViewById('op'+i).text = qOp[i-1]
	
	quizAns = parseInt(qStr[2]);
	qAttempted = false;
}

exports.loadQuestion = loadQuestion;

function resetQuizPage(){
	page.getViewById('loadingLabel').visibility = "collapse"; 
	page.getViewById('loading').visibility = "collapse";
	
	for(var i=1; i<=3; i++)
		page.getViewById('op'+i).visibility = "visible";
	
	page.getViewById('next').visibility = "visible";
	loadQuestion();
}

exports.checkAns = function (args) {
	if(!qAttempted){
		qAttempted = true;
		var ans = args.object;
		var op = parseInt(""+ans.id.charAt(2));
		if (op == quizAns){
			ans.backgroundColor = "green";
			global.score++;
		}
		else{
			ans.backgroundColor = "red";
			var ca = page.getViewById("op"+quizAns);
			ca.backgroundColor = "green";
			ca.color = "white";
		}
		ans.color = "white";
	}
}

exports.goBack = function(){
	page.frame.goBack();	
}