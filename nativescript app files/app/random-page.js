var http = require('tns-core-modules/http');
var dialogs = require("tns-core-modules/ui/dialogs");

var page, quizAns, progressBar;
var total_no_of_questions = 0;
var qAttempted = false;

exports.pageLoaded = function (args) {
    page = args.object;
	progressBar = page.getViewById('progress');
	
	//downloading all questions if not already downloaded
	if(global.question_pool.indexOf("")== -1)
		setQuizPage();
	else{
		http.getString("https://progyadeep.github.io/ground-theory-quiz/nav-questions.txt").then((res)=>{
			global.question_pool[0] = res.split("\n");
			progressBar.value="1";
			http.getString("https://progyadeep.github.io/ground-theory-quiz/met-questions.txt").then((res)=>{
				global.question_pool[1] = res.split("\n");
				progressBar.value="2";
				http.getString("https://progyadeep.github.io/ground-theory-quiz/reg-questions.txt").then((res)=>{
					global.question_pool[2] = res.split("\n");
					progressBar.value="3";
					http.getString("https://progyadeep.github.io/ground-theory-quiz/techgen-questions.txt").then((res)=>{
						global.question_pool[3] = res.split("\n");
						progressBar.value="4";
						setQuizPage();
					}, (err)=>{
						showConErr();
					});
				}, (err)=>{
					showConErr();
				});
			}, (err)=>{
				showConErr();
			});
		}, (err)=>{
			showConErr();
		});
	}
}

function loadQuestion() {
	if(questions_given.length == total_no_of_questions){
		dialogs.alert({
			title: 'End of Quiz',
			message: 'You have attempted all available questions.',
			okButtonText: 'Yay!'
		});
		page.frame.goBack(); 
		return;
	}
	
	for(var i=1; i<=3; i++){
		page.getViewById('op'+i).backgroundColor = "#e1e1e1";
		page.getViewById('op'+i).color = "black";
	}
	
	var qInd_0 = Math.floor((Math.random() * 4) + 0);
	var qInd_1 = Math.floor((Math.random() * global.question_pool[qInd_0].length) + 0);
	while(questions_given.indexOf(qInd_0+":"+qInd_1) != -1){
		qInd_0 = Math.floor((Math.random() * 4) + 0);
		qInd_1 = Math.floor((Math.random() * global.question_pool[qInd_0].length) + 0);
	}
	
	global.questions_given.push(qInd_0+":"+qInd_1);
	var qStr = global.question_pool[qInd_0][qInd_1].split(";");
	page.getViewById('question').text = qStr[0];
	var qOp = qStr[1].split(",");
	for(var i=1; i<=3; i++)
		page.getViewById('op'+i).text = qOp[i-1]
	
	quizAns = parseInt(qStr[2]);
	qAttempted = false;
}

exports.loadQuestion = loadQuestion;

function setQuizPage(){
	total_no_of_questions = global.question_pool[0].length + global.question_pool[1].length + global.question_pool[2].length + global.question_pool[3].length;
	page.getViewById('loadingLabel').visibility = "collapse"; 
	page.getViewById('loading').visibility = "collapse";
	progressBar.visibility = "collapse";
	
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

function showConErr(){
	dialogs.alert({
		title: 'Connection error!',
		message: 'Could not connect to server. Check your internet settings and try again later.',
		okButtonText: 'Close'
	});
	page.frame.goBack();
}

exports.goBack = function(){
	page.frame.goBack();	
}