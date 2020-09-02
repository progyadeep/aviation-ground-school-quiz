var http = require('tns-core-modules/http');
var dialogs = require("tns-core-modules/ui/dialogs");
var utils = require("tns-core-modules/utils/utils");

var page;
global.question_pool = ["","","",""];
global.qFiles = ["nav", "met", "reg", "techgen"];
global.questions_given = [];
global.score = 0;

exports.pageLoaded = function (args) {
	page = args.object.page;
	
	//checking if quiz score is yet to be displayed
	if(global.questions_given.length != 0){
		dialogs.alert({
			title: 'Quiz Score',
			message: global.score+'/'+global.questions_given.length,
			okButtonText: 'Okay'
		});
		global.score = 0;
		global.questions_given = [];
	}
	
	//checking for update
	http.getString("https://progystechblog.surge.sh/ground-theory-quiz/latest-app-version.txt?cb="+Math.random()*9999).then((res)=>{
		if(res.split(":")[0] != page.getViewById('appversion').text.split(": ")[1]){
			dialogs.confirm({
				title: 'Update available!',
				message: 'A new version of the app is available. It is recommended that you download the new APK file and re-install the app.',
				okButtonText: 'Download now',
				cancelButtonText: 'Download later'
			}).then((res)=>{
				if(res)
					utils.openUrl("https://progystechblog.surge.sh/ground-theory-quiz/");
			});
		}
	}, (e)=>{});
}

exports.startQuiz = function(args){
	if(parseInt(args.object.cat) != 4){
		global.quizCat = parseInt(args.object.cat);
		page.frame.navigate("quiz-page");
	}
	else{
		page.frame.navigate("random-page"); 
	}
}

exports.creditsAndSupport = function(){
	page.frame.navigate("credits-support");
}