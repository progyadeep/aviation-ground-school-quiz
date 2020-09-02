require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./home-page.js": "./home-page.js",
	"./home-page.xml": "./home-page.xml",
	"./quiz-page.js": "./quiz-page.js",
	"./quiz-page.xml": "./quiz-page.xml",
	"./random-page.js": "./random-page.js",
	"./random-page.xml": "./random-page.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Frame defaultPage=\"home-page\"></Frame>\n"; 
if (false ) {} 

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".top-down-margin-true"],"declarations":[{"type":"declaration","property":"margin","value":"6% 0 0 0"}]},{"type":"rule","selectors":["ActionBar Label"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"},{"type":"declaration","property":"font-size","value":"22px"}]},{"type":"rule","selectors":[".logo"],"declarations":[{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"font-size","value":"40%"},{"type":"declaration","property":"color","value":"brown"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin-bottom","value":"80px"}]},{"type":"rule","selectors":[".butt1"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"margin","value":"20px 0 20px"},{"type":"declaration","property":"padding","value":"50px"},{"type":"declaration","property":"background-color","value":"cornflowerblue"},{"type":"declaration","property":"width","value":"60%"}]},{"type":"rule","selectors":[".optionButt"],"declarations":[{"type":"declaration","property":"padding","value":"50px"},{"type":"declaration","property":"visibility","value":"collapse"}]},{"type":"rule","selectors":["#next"],"declarations":[{"type":"declaration","property":"visibility","value":"collapse"}]},{"type":"rule","selectors":[".text1"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"22px"},{"type":"declaration","property":"margin-bottom","value":"50px"},{"type":"declaration","property":"font-style","value":"italic"}]},{"type":"rule","selectors":[".subtext"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin-top","value":"50px"}]}],"parsingErrors":[]}};; 
if (false ) {} 

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (false) {}
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        let application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
application.run({ moduleName: "app-root" });
; 
if (false ) {} 
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var http = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
var utils = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");

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
	http.getString("https://progyadeep.github.io/ground-theory-quiz/latest-app-version.txt?cb="+Math.random()*9999).then((res)=>{
		if(res.split(":")[0] != page.getViewById('appversion').text.split(": ")[1]){
			dialogs.confirm({
				title: 'Update available!',
				message: 'A new version of the app is available. It is recommended that you download the new APK file and re-install the app.',
				okButtonText: 'Download now',
				cancelButtonText: 'Download later'
			}).then((res)=>{
				if(res)
					utils.openUrl("https://progyadeep.github.io/ground-theory-quiz/");
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
}; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home-page.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page loaded=\"pageLoaded\" actionBarHidden=\"true\">\n    <ScrollView>\n        <StackLayout class=\"top-down-margin-true\">\n            <Label textWrap=\"true\" text=\"Ground Theory Quiz\" class=\"logo\" />\n\t\t\t<Button class=\"butt1\" text=\"Air Navigation\" tap=\"startQuiz\" cat=\"0\" /> \n            <Button class=\"butt1\" text=\"Meteorology\" tap=\"startQuiz\" cat=\"1\" />\n            <Button class=\"butt1\" text=\"Air Regulation\" tap=\"startQuiz\" cat=\"2\" />\n            <Button class=\"butt1\" text=\"Technical General\" tap=\"startQuiz\" cat=\"3\" />\n\t\t\t<Button class=\"butt1\" text=\"Random\" tap=\"startQuiz\" cat=\"4\" style=\"background-color:darkcyan;\"/>\n\t\t\t<Label class=\"subtext\" id=\"appversion\" text=\"App version: 1.7.4\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"; 
if (false ) {} 

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"app.js","name":"tns-template-blank","version":"3.1.1"};

/***/ }),

/***/ "./quiz-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var http = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

var page, quizAns;
var qCats = ["Air Navigation", "Meteorology", "Air Regulation", "Technical General", "Random"];
var total_no_of_questions = 0;
var qAttempted = false;

exports.pageLoaded = function (args) {
    page = args.object;
    page.getViewById("quizCat").text = qCats[global.quizCat];
	
	//downloading questions if not already downloaded
	if(global.question_pool[global.quizCat] == ""){ 
		http.getString("https://progyadeep.github.io/ground-theory-quiz/"+global.qFiles[global.quizCat]+"-questions.txt").then((res)=>{
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
}; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./quiz-page.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page loaded=\"pageLoaded\">\r\n\t<ActionBar>\r\n\t\t<Label text=\"< Back\" tap=\"goBack\"/>\r\n\t</ActionBar>\r\n    <ScrollView>\r\n        <StackLayout class=\"top-down-margin-true\" style=\"width:80%;\">\r\n            <Label textWrap=\"true\" class=\"logo\" id=\"quizCat\" text=\"\" />\r\n            <Label textWrap=\"true\" class=\"text1\" id=\"question\" text=\"\"/>\r\n\t\t\t\r\n\t\t\t<Label class=\"subtext\" id=\"loadingLabel\" text=\"Fetching questions...\"/>\r\n\t\t\t<ActivityIndicator id=\"loading\" color=\"brown\" busy=\"true\" style=\"margin-top:50px;\"/>\r\n\t\t\t\r\n            <Button class=\"optionButt\" text=\"\" id=\"op1\" tap=\"checkAns\"/>\r\n            <Button class=\"optionButt\" text=\"\" id=\"op2\" tap=\"checkAns\"/>\r\n            <Button class=\"optionButt\" text=\"\" id=\"op3\" tap=\"checkAns\"/>\r\n            <Image src=\"~/next.png\" id=\"next\" width=\"100\" height=\"100\" tap=\"loadQuestion\" style=\"margin-top:80px;\"/>\r\n        </StackLayout>\r\n    </ScrollView>\r\n</Page>"; 
if (false ) {} 

/***/ }),

/***/ "./random-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var http = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

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
}; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./random-page.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page loaded=\"pageLoaded\">\r\n\t<ActionBar>\r\n\t\t<Label text=\"< Back\" tap=\"goBack\"/>\r\n\t</ActionBar>\r\n    <ScrollView>\r\n        <StackLayout class=\"top-down-margin-true\" style=\"width:80%;\">\r\n            <Label textWrap=\"true\" class=\"logo\" id=\"quizCat\" text=\"Random\" />\r\n            <Label textWrap=\"true\" class=\"text1\" id=\"question\" text=\"\"/>\r\n\t\t\t\r\n\t\t\t<Label class=\"subtext\" id=\"loadingLabel\" text=\"Fetching questions...\"/>\r\n\t\t\t<ActivityIndicator id=\"loading\" color=\"brown\" busy=\"true\" style=\"margin-top:50px;\"/>\r\n\t\t\t<Progress value=\"0\" maxValue=\"4\" id=\"progress\"></Progress>\r\n            <Button class=\"optionButt\" text=\"\" id=\"op1\" tap=\"checkAns\"/>\r\n            <Button class=\"optionButt\" text=\"\" id=\"op2\" tap=\"checkAns\"/>\r\n            <Button class=\"optionButt\" text=\"\" id=\"op3\" tap=\"checkAns\"/>\r\n            <Image src=\"~/next.png\" id=\"next\" width=\"100\" height=\"100\" tap=\"loadQuestion\" style=\"margin-top:80px;\"/>\r\n        </StackLayout>\r\n    </ScrollView>\r\n</Page>"; 
if (false ) {} 

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ob21lLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3F1aXotcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9xdWl6LXBhZ2UueG1sIiwid2VicGFjazovLy8uL3JhbmRvbS1wYWdlLmpzIiwid2VicGFjazovLy8uL3JhbmRvbS1wYWdlLnhtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSjs7Ozs7Ozs7QUM5QkEsK0Q7QUFDQSxJQUFJLEtBQTBGLEdBQUcsRTs7Ozs7OztBQ0ZqRyxrQkFBa0Isa0NBQWtDLFVBQVUscUVBQXFFLDREQUE0RCxFQUFFLEVBQUUsK0RBQStELGtFQUFrRSxFQUFFLDJEQUEyRCxFQUFFLEVBQUUscURBQXFELDZEQUE2RCxFQUFFLDBEQUEwRCxFQUFFLHdEQUF3RCxFQUFFLDhEQUE4RCxFQUFFLCtEQUErRCxFQUFFLEVBQUUs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEQ7QUFDQTtBQUNBOztBQUVBLGFBQWEsTUFBTTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBLHFCO0FBQ0EsRTtBQUNBLElBQUksS0FBNEYsR0FBRyxFOzs7Ozs7Ozs7QUMxSG5HLDhOQUE4TixtWEFBbVgsMGNBQTBjLGdFO0FBQzNoQyxJQUFJLEtBQTZGLEdBQUcsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2hvbWUtcGFnZS5qc1wiOiBcIi4vaG9tZS1wYWdlLmpzXCIsXG5cdFwiLi9ob21lLXBhZ2UueG1sXCI6IFwiLi9ob21lLXBhZ2UueG1sXCIsXG5cdFwiLi9xdWl6LXBhZ2UuanNcIjogXCIuL3F1aXotcGFnZS5qc1wiLFxuXHRcIi4vcXVpei1wYWdlLnhtbFwiOiBcIi4vcXVpei1wYWdlLnhtbFwiLFxuXHRcIi4vcmFuZG9tLXBhZ2UuanNcIjogXCIuL3JhbmRvbS1wYWdlLmpzXCIsXG5cdFwiLi9yYW5kb20tcGFnZS54bWxcIjogXCIuL3JhbmRvbS1wYWdlLnhtbFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwiaG9tZS1wYWdlXFxcIj48L0ZyYW1lPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC1yb290LnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2FwcC1yb290LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudG9wLWRvd24tbWFyZ2luLXRydWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI2JSAwIDAgMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhciBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJsZWZ0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjJweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5sb2dvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNDAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJicm93blwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiODBweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idXR0MVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIyMHB4IDAgMjBweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI1MHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcImNvcm5mbG93ZXJibHVlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI2MCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIub3B0aW9uQnV0dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI1MHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmlzaWJpbGl0eVwiLFwidmFsdWVcIjpcImNvbGxhcHNlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiI25leHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2aXNpYmlsaXR5XCIsXCJ2YWx1ZVwiOlwiY29sbGFwc2VcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dDFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjJweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI1MHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zdHlsZVwiLFwidmFsdWVcIjpcIml0YWxpY1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zdWJ0ZXh0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCI1MHB4XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG4gICAgICAgIGxldCBhcHBsaWNhdGlvbkNoZWNrUGxhdGZvcm0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uQ2hlY2tQbGF0Zm9ybS5hbmRyb2lkICYmICFnbG9iYWxbXCJfX3NuYXBzaG90XCJdKSB7XG4gICAgICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jID0gZ2xvYmFsLl9fb25MaXZlU3luYztcblxuICAgICAgICAgICAgZ2xvYmFsLl9fb25MaXZlU3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gTGl2ZVN5bmNcbiAgICAgICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoID0gZnVuY3Rpb24oeyB0eXBlLCBwYXRoIH0gPSB7fSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBob3QgdXBkYXRlcyBhcmUgYXBwbGllZCwgYXNrIHRoZSBtb2R1bGVzIHRvIGFwcGx5IHRoZSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMoeyB0eXBlLCBwYXRoIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIGluaXRpYWwgYXBwIHN0YXJ0XG4gICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCJ+L1wiLCB0cnVlLCAvKD88IVxcYkFwcF9SZXNvdXJjZXNcXGIuKikoPzwhXFwuXFwvXFxidGVzdHNcXGJcXC8uKj8pXFwuKHhtbHxjc3N8anN8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSE1SOiBBY2NlcHQgbW9kdWxlICdcIiArIGNvbnRleHQuaWQgKyBcIicgZnJvbSAnXCIgKyBtb2R1bGUuaWQgKyBcIidcIik7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIGxldCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuYXBwbGljYXRpb24ucnVuKHsgbW9kdWxlTmFtZTogXCJhcHAtcm9vdFwiIH0pO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2FwcC5qc1wiIH0pO1xuICAgIH0pO1xufSBcbiAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICIsInZhciBodHRwID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9odHRwJyk7XG52YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG52YXIgdXRpbHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcblxudmFyIHBhZ2U7XG5nbG9iYWwucXVlc3Rpb25fcG9vbCA9IFtcIlwiLFwiXCIsXCJcIixcIlwiXTtcbmdsb2JhbC5xRmlsZXMgPSBbXCJuYXZcIiwgXCJtZXRcIiwgXCJyZWdcIiwgXCJ0ZWNoZ2VuXCJdO1xuZ2xvYmFsLnF1ZXN0aW9uc19naXZlbiA9IFtdO1xuZ2xvYmFsLnNjb3JlID0gMDtcblxuZXhwb3J0cy5wYWdlTG9hZGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cGFnZSA9IGFyZ3Mub2JqZWN0LnBhZ2U7XG5cdFxuXHQvL2NoZWNraW5nIGlmIHF1aXogc2NvcmUgaXMgeWV0IHRvIGJlIGRpc3BsYXllZFxuXHRpZihnbG9iYWwucXVlc3Rpb25zX2dpdmVuLmxlbmd0aCAhPSAwKXtcblx0XHRkaWFsb2dzLmFsZXJ0KHtcblx0XHRcdHRpdGxlOiAnUXVpeiBTY29yZScsXG5cdFx0XHRtZXNzYWdlOiBnbG9iYWwuc2NvcmUrJy8nK2dsb2JhbC5xdWVzdGlvbnNfZ2l2ZW4ubGVuZ3RoLFxuXHRcdFx0b2tCdXR0b25UZXh0OiAnT2theSdcblx0XHR9KTtcblx0XHRnbG9iYWwuc2NvcmUgPSAwO1xuXHRcdGdsb2JhbC5xdWVzdGlvbnNfZ2l2ZW4gPSBbXTtcblx0fVxuXHRcblx0Ly9jaGVja2luZyBmb3IgdXBkYXRlXG5cdGh0dHAuZ2V0U3RyaW5nKFwiaHR0cHM6Ly9wcm9neWFkZWVwLmdpdGh1Yi5pby9ncm91bmQtdGhlb3J5LXF1aXovbGF0ZXN0LWFwcC12ZXJzaW9uLnR4dD9jYj1cIitNYXRoLnJhbmRvbSgpKjk5OTkpLnRoZW4oKHJlcyk9Pntcblx0XHRpZihyZXMuc3BsaXQoXCI6XCIpWzBdICE9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2FwcHZlcnNpb24nKS50ZXh0LnNwbGl0KFwiOiBcIilbMV0pe1xuXHRcdFx0ZGlhbG9ncy5jb25maXJtKHtcblx0XHRcdFx0dGl0bGU6ICdVcGRhdGUgYXZhaWxhYmxlIScsXG5cdFx0XHRcdG1lc3NhZ2U6ICdBIG5ldyB2ZXJzaW9uIG9mIHRoZSBhcHAgaXMgYXZhaWxhYmxlLiBJdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb3dubG9hZCB0aGUgbmV3IEFQSyBmaWxlIGFuZCByZS1pbnN0YWxsIHRoZSBhcHAuJyxcblx0XHRcdFx0b2tCdXR0b25UZXh0OiAnRG93bmxvYWQgbm93Jyxcblx0XHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogJ0Rvd25sb2FkIGxhdGVyJ1xuXHRcdFx0fSkudGhlbigocmVzKT0+e1xuXHRcdFx0XHRpZihyZXMpXG5cdFx0XHRcdFx0dXRpbHMub3BlblVybChcImh0dHBzOi8vcHJvZ3lhZGVlcC5naXRodWIuaW8vZ3JvdW5kLXRoZW9yeS1xdWl6L1wiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwgKGUpPT57fSk7XG59XG5cbmV4cG9ydHMuc3RhcnRRdWl6ID0gZnVuY3Rpb24oYXJncyl7XG5cdGlmKHBhcnNlSW50KGFyZ3Mub2JqZWN0LmNhdCkgIT0gNCl7XG5cdFx0Z2xvYmFsLnF1aXpDYXQgPSBwYXJzZUludChhcmdzLm9iamVjdC5jYXQpO1xuXHRcdHBhZ2UuZnJhbWUubmF2aWdhdGUoXCJxdWl6LXBhZ2VcIik7XG5cdH1cblx0ZWxzZXtcblx0XHRwYWdlLmZyYW1lLm5hdmlnYXRlKFwicmFuZG9tLXBhZ2VcIik7IFxuXHR9XG59XG5cbmV4cG9ydHMuY3JlZGl0c0FuZFN1cHBvcnQgPSBmdW5jdGlvbigpe1xuXHRwYWdlLmZyYW1lLm5hdmlnYXRlKFwiY3JlZGl0cy1zdXBwb3J0XCIpO1xufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9ob21lLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgbG9hZGVkPVxcXCJwYWdlTG9hZGVkXFxcIiBhY3Rpb25CYXJIaWRkZW49XFxcInRydWVcXFwiPlxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwidG9wLWRvd24tbWFyZ2luLXRydWVcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwiR3JvdW5kIFRoZW9yeSBRdWl6XFxcIiBjbGFzcz1cXFwibG9nb1xcXCIgLz5cXG5cXHRcXHRcXHQ8QnV0dG9uIGNsYXNzPVxcXCJidXR0MVxcXCIgdGV4dD1cXFwiQWlyIE5hdmlnYXRpb25cXFwiIHRhcD1cXFwic3RhcnRRdWl6XFxcIiBjYXQ9XFxcIjBcXFwiIC8+IFxcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJ1dHQxXFxcIiB0ZXh0PVxcXCJNZXRlb3JvbG9neVxcXCIgdGFwPVxcXCJzdGFydFF1aXpcXFwiIGNhdD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidXR0MVxcXCIgdGV4dD1cXFwiQWlyIFJlZ3VsYXRpb25cXFwiIHRhcD1cXFwic3RhcnRRdWl6XFxcIiBjYXQ9XFxcIjJcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnV0dDFcXFwiIHRleHQ9XFxcIlRlY2huaWNhbCBHZW5lcmFsXFxcIiB0YXA9XFxcInN0YXJ0UXVpelxcXCIgY2F0PVxcXCIzXFxcIiAvPlxcblxcdFxcdFxcdDxCdXR0b24gY2xhc3M9XFxcImJ1dHQxXFxcIiB0ZXh0PVxcXCJSYW5kb21cXFwiIHRhcD1cXFwic3RhcnRRdWl6XFxcIiBjYXQ9XFxcIjRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOmRhcmtjeWFuO1xcXCIvPlxcblxcdFxcdFxcdDxMYWJlbCBjbGFzcz1cXFwic3VidGV4dFxcXCIgaWQ9XFxcImFwcHZlcnNpb25cXFwiIHRleHQ9XFxcIkFwcCB2ZXJzaW9uOiAxLjcuNFxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vaG9tZS1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2hvbWUtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIGh0dHAgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKTtcclxudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xyXG5cclxudmFyIHBhZ2UsIHF1aXpBbnM7XHJcbnZhciBxQ2F0cyA9IFtcIkFpciBOYXZpZ2F0aW9uXCIsIFwiTWV0ZW9yb2xvZ3lcIiwgXCJBaXIgUmVndWxhdGlvblwiLCBcIlRlY2huaWNhbCBHZW5lcmFsXCIsIFwiUmFuZG9tXCJdO1xyXG52YXIgdG90YWxfbm9fb2ZfcXVlc3Rpb25zID0gMDtcclxudmFyIHFBdHRlbXB0ZWQgPSBmYWxzZTtcclxuXHJcbmV4cG9ydHMucGFnZUxvYWRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmdldFZpZXdCeUlkKFwicXVpekNhdFwiKS50ZXh0ID0gcUNhdHNbZ2xvYmFsLnF1aXpDYXRdO1xyXG5cdFxyXG5cdC8vZG93bmxvYWRpbmcgcXVlc3Rpb25zIGlmIG5vdCBhbHJlYWR5IGRvd25sb2FkZWRcclxuXHRpZihnbG9iYWwucXVlc3Rpb25fcG9vbFtnbG9iYWwucXVpekNhdF0gPT0gXCJcIil7IFxyXG5cdFx0aHR0cC5nZXRTdHJpbmcoXCJodHRwczovL3Byb2d5YWRlZXAuZ2l0aHViLmlvL2dyb3VuZC10aGVvcnktcXVpei9cIitnbG9iYWwucUZpbGVzW2dsb2JhbC5xdWl6Q2F0XStcIi1xdWVzdGlvbnMudHh0XCIpLnRoZW4oKHJlcyk9PntcclxuXHRcdFx0Z2xvYmFsLnF1ZXN0aW9uX3Bvb2xbZ2xvYmFsLnF1aXpDYXRdID0gcmVzLnNwbGl0KFwiXFxuXCIpO1xyXG5cdFx0XHR0b3RhbF9ub19vZl9xdWVzdGlvbnMgPSBnbG9iYWwucXVlc3Rpb25fcG9vbFtnbG9iYWwucXVpekNhdF0ubGVuZ3RoO1xyXG5cdFx0XHRyZXNldFF1aXpQYWdlKCk7XHJcblx0XHR9LCAoZXJyKT0+e1xyXG5cdFx0XHRkaWFsb2dzLmFsZXJ0KHtcclxuXHRcdFx0XHR0aXRsZTogJ0Nvbm5lY3Rpb24gZXJyb3IhJyxcclxuXHRcdFx0XHRtZXNzYWdlOiAnQ291bGQgbm90IGNvbm5lY3QgdG8gc2VydmVyLiBDaGVjayB5b3VyIGludGVybmV0IHNldHRpbmdzIGFuZCB0cnkgYWdhaW4gbGF0ZXIuJyxcclxuXHRcdFx0XHRva0J1dHRvblRleHQ6ICdDbG9zZSdcclxuXHRcdFx0fSk7XHJcblx0XHRcdHBhZ2UuZnJhbWUuZ29CYWNrKCk7XHJcblx0XHR9KTtcclxuXHR9ZWxzZXtcclxuXHRcdHRvdGFsX25vX29mX3F1ZXN0aW9ucyA9IGdsb2JhbC5xdWVzdGlvbl9wb29sW2dsb2JhbC5xdWl6Q2F0XS5sZW5ndGg7XHJcblx0XHRyZXNldFF1aXpQYWdlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRRdWVzdGlvbigpIHtcclxuXHRpZihxdWVzdGlvbnNfZ2l2ZW4ubGVuZ3RoID09IHRvdGFsX25vX29mX3F1ZXN0aW9ucyl7XHJcblx0XHRkaWFsb2dzLmFsZXJ0KHtcclxuXHRcdFx0dGl0bGU6ICdFbmQgb2YgUXVpeicsXHJcblx0XHRcdG1lc3NhZ2U6ICdZb3UgaGF2ZSBhdHRlbXB0ZWQgYWxsIGF2YWlsYWJsZSAnK3FDYXRzW2dsb2JhbC5xdWl6Q2F0XSsnIHF1ZXN0aW9ucy4nLFxyXG5cdFx0XHRva0J1dHRvblRleHQ6ICdZYXkhJ1xyXG5cdFx0fSk7XHJcblx0XHRwYWdlLmZyYW1lLmdvQmFjaygpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRcclxuXHRmb3IodmFyIGk9MTsgaTw9MzsgaSsrKXtcclxuXHRcdHBhZ2UuZ2V0Vmlld0J5SWQoJ29wJytpKS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlMWUxZTFcIjtcclxuXHRcdHBhZ2UuZ2V0Vmlld0J5SWQoJ29wJytpKS5jb2xvciA9IFwiYmxhY2tcIjtcclxuXHR9XHJcblx0dmFyIHFJbmQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogdG90YWxfbm9fb2ZfcXVlc3Rpb25zKSArIDApO1xyXG5cdHdoaWxlKHF1ZXN0aW9uc19naXZlbi5pbmRleE9mKHFJbmQpICE9IC0xKVxyXG5cdFx0cUluZCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiB0b3RhbF9ub19vZl9xdWVzdGlvbnMpICsgMCk7XHJcblx0XHJcblx0Z2xvYmFsLnF1ZXN0aW9uc19naXZlbi5wdXNoKHFJbmQpO1xyXG5cdHZhciBxU3RyID0gZ2xvYmFsLnF1ZXN0aW9uX3Bvb2xbZ2xvYmFsLnF1aXpDYXRdW3FJbmRdLnNwbGl0KFwiO1wiKTtcclxuXHRwYWdlLmdldFZpZXdCeUlkKCdxdWVzdGlvbicpLnRleHQgPSBxU3RyWzBdO1xyXG5cdHZhciBxT3AgPSBxU3RyWzFdLnNwbGl0KFwiLFwiKTtcclxuXHRmb3IodmFyIGk9MTsgaTw9MzsgaSsrKVxyXG5cdFx0cGFnZS5nZXRWaWV3QnlJZCgnb3AnK2kpLnRleHQgPSBxT3BbaS0xXVxyXG5cdFxyXG5cdHF1aXpBbnMgPSBwYXJzZUludChxU3RyWzJdKTtcclxuXHRxQXR0ZW1wdGVkID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydHMubG9hZFF1ZXN0aW9uID0gbG9hZFF1ZXN0aW9uO1xyXG5cclxuZnVuY3Rpb24gcmVzZXRRdWl6UGFnZSgpe1xyXG5cdHBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmdMYWJlbCcpLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7IFxyXG5cdHBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmcnKS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xyXG5cdFxyXG5cdGZvcih2YXIgaT0xOyBpPD0zOyBpKyspXHJcblx0XHRwYWdlLmdldFZpZXdCeUlkKCdvcCcraSkudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cdFxyXG5cdHBhZ2UuZ2V0Vmlld0J5SWQoJ25leHQnKS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblx0bG9hZFF1ZXN0aW9uKCk7XHJcbn1cclxuXHJcbmV4cG9ydHMuY2hlY2tBbnMgPSBmdW5jdGlvbiAoYXJncykge1xyXG5cdGlmKCFxQXR0ZW1wdGVkKXtcclxuXHRcdHFBdHRlbXB0ZWQgPSB0cnVlO1xyXG5cdFx0dmFyIGFucyA9IGFyZ3Mub2JqZWN0O1xyXG5cdFx0dmFyIG9wID0gcGFyc2VJbnQoXCJcIithbnMuaWQuY2hhckF0KDIpKTtcclxuXHRcdGlmIChvcCA9PSBxdWl6QW5zKXtcclxuXHRcdFx0YW5zLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcclxuXHRcdFx0Z2xvYmFsLnNjb3JlKys7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRhbnMuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuXHRcdFx0dmFyIGNhID0gcGFnZS5nZXRWaWV3QnlJZChcIm9wXCIrcXVpekFucyk7XHJcblx0XHRcdGNhLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcclxuXHRcdFx0Y2EuY29sb3IgPSBcIndoaXRlXCI7XHJcblx0XHR9XHJcblx0XHRhbnMuY29sb3IgPSBcIndoaXRlXCI7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKCl7XHJcblx0cGFnZS5mcmFtZS5nb0JhY2soKTtcdFxyXG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3F1aXotcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3F1aXotcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiPlxcclxcblxcdDxBY3Rpb25CYXI+XFxyXFxuXFx0XFx0PExhYmVsIHRleHQ9XFxcIjwgQmFja1xcXCIgdGFwPVxcXCJnb0JhY2tcXFwiLz5cXHJcXG5cXHQ8L0FjdGlvbkJhcj5cXHJcXG4gICAgPFNjcm9sbFZpZXc+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInRvcC1kb3duLW1hcmdpbi10cnVlXFxcIiBzdHlsZT1cXFwid2lkdGg6ODAlO1xcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwibG9nb1xcXCIgaWQ9XFxcInF1aXpDYXRcXFwiIHRleHQ9XFxcIlxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0MVxcXCIgaWQ9XFxcInF1ZXN0aW9uXFxcIiB0ZXh0PVxcXCJcXFwiLz5cXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQ8TGFiZWwgY2xhc3M9XFxcInN1YnRleHRcXFwiIGlkPVxcXCJsb2FkaW5nTGFiZWxcXFwiIHRleHQ9XFxcIkZldGNoaW5nIHF1ZXN0aW9ucy4uLlxcXCIvPlxcclxcblxcdFxcdFxcdDxBY3Rpdml0eUluZGljYXRvciBpZD1cXFwibG9hZGluZ1xcXCIgY29sb3I9XFxcImJyb3duXFxcIiBidXN5PVxcXCJ0cnVlXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDo1MHB4O1xcXCIvPlxcclxcblxcdFxcdFxcdFxcclxcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XFxcIm9wdGlvbkJ1dHRcXFwiIHRleHQ9XFxcIlxcXCIgaWQ9XFxcIm9wMVxcXCIgdGFwPVxcXCJjaGVja0Fuc1xcXCIvPlxcclxcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XFxcIm9wdGlvbkJ1dHRcXFwiIHRleHQ9XFxcIlxcXCIgaWQ9XFxcIm9wMlxcXCIgdGFwPVxcXCJjaGVja0Fuc1xcXCIvPlxcclxcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XFxcIm9wdGlvbkJ1dHRcXFwiIHRleHQ9XFxcIlxcXCIgaWQ9XFxcIm9wM1xcXCIgdGFwPVxcXCJjaGVja0Fuc1xcXCIvPlxcclxcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vbmV4dC5wbmdcXFwiIGlkPVxcXCJuZXh0XFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgdGFwPVxcXCJsb2FkUXVlc3Rpb25cXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOjgwcHg7XFxcIi8+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1Njcm9sbFZpZXc+XFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3F1aXotcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9xdWl6LXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBodHRwID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9odHRwJyk7XHJcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcclxuXHJcbnZhciBwYWdlLCBxdWl6QW5zLCBwcm9ncmVzc0JhcjtcclxudmFyIHRvdGFsX25vX29mX3F1ZXN0aW9ucyA9IDA7XHJcbnZhciBxQXR0ZW1wdGVkID0gZmFsc2U7XHJcblxyXG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgcGFnZSA9IGFyZ3Mub2JqZWN0O1xyXG5cdHByb2dyZXNzQmFyID0gcGFnZS5nZXRWaWV3QnlJZCgncHJvZ3Jlc3MnKTtcclxuXHRcclxuXHQvL2Rvd25sb2FkaW5nIGFsbCBxdWVzdGlvbnMgaWYgbm90IGFscmVhZHkgZG93bmxvYWRlZFxyXG5cdGlmKGdsb2JhbC5xdWVzdGlvbl9wb29sLmluZGV4T2YoXCJcIik9PSAtMSlcclxuXHRcdHNldFF1aXpQYWdlKCk7XHJcblx0ZWxzZXtcclxuXHRcdGh0dHAuZ2V0U3RyaW5nKFwiaHR0cHM6Ly9wcm9neWFkZWVwLmdpdGh1Yi5pby9ncm91bmQtdGhlb3J5LXF1aXovbmF2LXF1ZXN0aW9ucy50eHRcIikudGhlbigocmVzKT0+e1xyXG5cdFx0XHRnbG9iYWwucXVlc3Rpb25fcG9vbFswXSA9IHJlcy5zcGxpdChcIlxcblwiKTtcclxuXHRcdFx0cHJvZ3Jlc3NCYXIudmFsdWU9XCIxXCI7XHJcblx0XHRcdGh0dHAuZ2V0U3RyaW5nKFwiaHR0cHM6Ly9wcm9neWFkZWVwLmdpdGh1Yi5pby9ncm91bmQtdGhlb3J5LXF1aXovbWV0LXF1ZXN0aW9ucy50eHRcIikudGhlbigocmVzKT0+e1xyXG5cdFx0XHRcdGdsb2JhbC5xdWVzdGlvbl9wb29sWzFdID0gcmVzLnNwbGl0KFwiXFxuXCIpO1xyXG5cdFx0XHRcdHByb2dyZXNzQmFyLnZhbHVlPVwiMlwiO1xyXG5cdFx0XHRcdGh0dHAuZ2V0U3RyaW5nKFwiaHR0cHM6Ly9wcm9neWFkZWVwLmdpdGh1Yi5pby9ncm91bmQtdGhlb3J5LXF1aXovcmVnLXF1ZXN0aW9ucy50eHRcIikudGhlbigocmVzKT0+e1xyXG5cdFx0XHRcdFx0Z2xvYmFsLnF1ZXN0aW9uX3Bvb2xbMl0gPSByZXMuc3BsaXQoXCJcXG5cIik7XHJcblx0XHRcdFx0XHRwcm9ncmVzc0Jhci52YWx1ZT1cIjNcIjtcclxuXHRcdFx0XHRcdGh0dHAuZ2V0U3RyaW5nKFwiaHR0cHM6Ly9wcm9neWFkZWVwLmdpdGh1Yi5pby9ncm91bmQtdGhlb3J5LXF1aXovdGVjaGdlbi1xdWVzdGlvbnMudHh0XCIpLnRoZW4oKHJlcyk9PntcclxuXHRcdFx0XHRcdFx0Z2xvYmFsLnF1ZXN0aW9uX3Bvb2xbM10gPSByZXMuc3BsaXQoXCJcXG5cIik7XHJcblx0XHRcdFx0XHRcdHByb2dyZXNzQmFyLnZhbHVlPVwiNFwiO1xyXG5cdFx0XHRcdFx0XHRzZXRRdWl6UGFnZSgpO1xyXG5cdFx0XHRcdFx0fSwgKGVycik9PntcclxuXHRcdFx0XHRcdFx0c2hvd0NvbkVycigpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSwgKGVycik9PntcclxuXHRcdFx0XHRcdHNob3dDb25FcnIoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSwgKGVycik9PntcclxuXHRcdFx0XHRzaG93Q29uRXJyKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgKGVycik9PntcclxuXHRcdFx0c2hvd0NvbkVycigpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUXVlc3Rpb24oKSB7XHJcblx0aWYocXVlc3Rpb25zX2dpdmVuLmxlbmd0aCA9PSB0b3RhbF9ub19vZl9xdWVzdGlvbnMpe1xyXG5cdFx0ZGlhbG9ncy5hbGVydCh7XHJcblx0XHRcdHRpdGxlOiAnRW5kIG9mIFF1aXonLFxyXG5cdFx0XHRtZXNzYWdlOiAnWW91IGhhdmUgYXR0ZW1wdGVkIGFsbCBhdmFpbGFibGUgcXVlc3Rpb25zLicsXHJcblx0XHRcdG9rQnV0dG9uVGV4dDogJ1lheSEnXHJcblx0XHR9KTtcclxuXHRcdHBhZ2UuZnJhbWUuZ29CYWNrKCk7IFxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRcclxuXHRmb3IodmFyIGk9MTsgaTw9MzsgaSsrKXtcclxuXHRcdHBhZ2UuZ2V0Vmlld0J5SWQoJ29wJytpKS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlMWUxZTFcIjtcclxuXHRcdHBhZ2UuZ2V0Vmlld0J5SWQoJ29wJytpKS5jb2xvciA9IFwiYmxhY2tcIjtcclxuXHR9XHJcblx0XHJcblx0dmFyIHFJbmRfMCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDApO1xyXG5cdHZhciBxSW5kXzEgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogZ2xvYmFsLnF1ZXN0aW9uX3Bvb2xbcUluZF8wXS5sZW5ndGgpICsgMCk7XHJcblx0d2hpbGUocXVlc3Rpb25zX2dpdmVuLmluZGV4T2YocUluZF8wK1wiOlwiK3FJbmRfMSkgIT0gLTEpe1xyXG5cdFx0cUluZF8wID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMCk7XHJcblx0XHRxSW5kXzEgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogZ2xvYmFsLnF1ZXN0aW9uX3Bvb2xbcUluZF8wXS5sZW5ndGgpICsgMCk7XHJcblx0fVxyXG5cdFxyXG5cdGdsb2JhbC5xdWVzdGlvbnNfZ2l2ZW4ucHVzaChxSW5kXzArXCI6XCIrcUluZF8xKTtcclxuXHR2YXIgcVN0ciA9IGdsb2JhbC5xdWVzdGlvbl9wb29sW3FJbmRfMF1bcUluZF8xXS5zcGxpdChcIjtcIik7XHJcblx0cGFnZS5nZXRWaWV3QnlJZCgncXVlc3Rpb24nKS50ZXh0ID0gcVN0clswXTtcclxuXHR2YXIgcU9wID0gcVN0clsxXS5zcGxpdChcIixcIik7XHJcblx0Zm9yKHZhciBpPTE7IGk8PTM7IGkrKylcclxuXHRcdHBhZ2UuZ2V0Vmlld0J5SWQoJ29wJytpKS50ZXh0ID0gcU9wW2ktMV1cclxuXHRcclxuXHRxdWl6QW5zID0gcGFyc2VJbnQocVN0clsyXSk7XHJcblx0cUF0dGVtcHRlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnRzLmxvYWRRdWVzdGlvbiA9IGxvYWRRdWVzdGlvbjtcclxuXHJcbmZ1bmN0aW9uIHNldFF1aXpQYWdlKCl7XHJcblx0dG90YWxfbm9fb2ZfcXVlc3Rpb25zID0gZ2xvYmFsLnF1ZXN0aW9uX3Bvb2xbMF0ubGVuZ3RoICsgZ2xvYmFsLnF1ZXN0aW9uX3Bvb2xbMV0ubGVuZ3RoICsgZ2xvYmFsLnF1ZXN0aW9uX3Bvb2xbMl0ubGVuZ3RoICsgZ2xvYmFsLnF1ZXN0aW9uX3Bvb2xbM10ubGVuZ3RoO1xyXG5cdHBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmdMYWJlbCcpLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7IFxyXG5cdHBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmcnKS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xyXG5cdHByb2dyZXNzQmFyLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XHJcblx0XHJcblx0Zm9yKHZhciBpPTE7IGk8PTM7IGkrKylcclxuXHRcdHBhZ2UuZ2V0Vmlld0J5SWQoJ29wJytpKS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblx0XHJcblx0cGFnZS5nZXRWaWV3QnlJZCgnbmV4dCcpLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHRsb2FkUXVlc3Rpb24oKTtcclxufVxyXG5cclxuZXhwb3J0cy5jaGVja0FucyA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcblx0aWYoIXFBdHRlbXB0ZWQpe1xyXG5cdFx0cUF0dGVtcHRlZCA9IHRydWU7XHJcblx0XHR2YXIgYW5zID0gYXJncy5vYmplY3Q7XHJcblx0XHR2YXIgb3AgPSBwYXJzZUludChcIlwiK2Fucy5pZC5jaGFyQXQoMikpO1xyXG5cdFx0aWYgKG9wID09IHF1aXpBbnMpe1xyXG5cdFx0XHRhbnMuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xyXG5cdFx0XHRnbG9iYWwuc2NvcmUrKztcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdGFucy5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG5cdFx0XHR2YXIgY2EgPSBwYWdlLmdldFZpZXdCeUlkKFwib3BcIitxdWl6QW5zKTtcclxuXHRcdFx0Y2EuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xyXG5cdFx0XHRjYS5jb2xvciA9IFwid2hpdGVcIjtcclxuXHRcdH1cclxuXHRcdGFucy5jb2xvciA9IFwid2hpdGVcIjtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDb25FcnIoKXtcclxuXHRkaWFsb2dzLmFsZXJ0KHtcclxuXHRcdHRpdGxlOiAnQ29ubmVjdGlvbiBlcnJvciEnLFxyXG5cdFx0bWVzc2FnZTogJ0NvdWxkIG5vdCBjb25uZWN0IHRvIHNlcnZlci4gQ2hlY2sgeW91ciBpbnRlcm5ldCBzZXR0aW5ncyBhbmQgdHJ5IGFnYWluIGxhdGVyLicsXHJcblx0XHRva0J1dHRvblRleHQ6ICdDbG9zZSdcclxuXHR9KTtcclxuXHRwYWdlLmZyYW1lLmdvQmFjaygpO1xyXG59XHJcblxyXG5leHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKCl7XHJcblx0cGFnZS5mcmFtZS5nb0JhY2soKTtcdFxyXG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3JhbmRvbS1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vcmFuZG9tLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgbG9hZGVkPVxcXCJwYWdlTG9hZGVkXFxcIj5cXHJcXG5cXHQ8QWN0aW9uQmFyPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCI8IEJhY2tcXFwiIHRhcD1cXFwiZ29CYWNrXFxcIi8+XFxyXFxuXFx0PC9BY3Rpb25CYXI+XFxyXFxuICAgIDxTY3JvbGxWaWV3PlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJ0b3AtZG93bi1tYXJnaW4tdHJ1ZVxcXCIgc3R5bGU9XFxcIndpZHRoOjgwJTtcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImxvZ29cXFwiIGlkPVxcXCJxdWl6Q2F0XFxcIiB0ZXh0PVxcXCJSYW5kb21cXFwiIC8+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dDFcXFwiIGlkPVxcXCJxdWVzdGlvblxcXCIgdGV4dD1cXFwiXFxcIi8+XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0PExhYmVsIGNsYXNzPVxcXCJzdWJ0ZXh0XFxcIiBpZD1cXFwibG9hZGluZ0xhYmVsXFxcIiB0ZXh0PVxcXCJGZXRjaGluZyBxdWVzdGlvbnMuLi5cXFwiLz5cXHJcXG5cXHRcXHRcXHQ8QWN0aXZpdHlJbmRpY2F0b3IgaWQ9XFxcImxvYWRpbmdcXFwiIGNvbG9yPVxcXCJicm93blxcXCIgYnVzeT1cXFwidHJ1ZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6NTBweDtcXFwiLz5cXHJcXG5cXHRcXHRcXHQ8UHJvZ3Jlc3MgdmFsdWU9XFxcIjBcXFwiIG1heFZhbHVlPVxcXCI0XFxcIiBpZD1cXFwicHJvZ3Jlc3NcXFwiPjwvUHJvZ3Jlc3M+XFxyXFxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwib3B0aW9uQnV0dFxcXCIgdGV4dD1cXFwiXFxcIiBpZD1cXFwib3AxXFxcIiB0YXA9XFxcImNoZWNrQW5zXFxcIi8+XFxyXFxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwib3B0aW9uQnV0dFxcXCIgdGV4dD1cXFwiXFxcIiBpZD1cXFwib3AyXFxcIiB0YXA9XFxcImNoZWNrQW5zXFxcIi8+XFxyXFxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwib3B0aW9uQnV0dFxcXCIgdGV4dD1cXFwiXFxcIiBpZD1cXFwib3AzXFxcIiB0YXA9XFxcImNoZWNrQW5zXFxcIi8+XFxyXFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9uZXh0LnBuZ1xcXCIgaWQ9XFxcIm5leHRcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiB0YXA9XFxcImxvYWRRdWVzdGlvblxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6ODBweDtcXFwiLz5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDwvU2Nyb2xsVmlldz5cXHJcXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcmFuZG9tLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcmFuZG9tLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=