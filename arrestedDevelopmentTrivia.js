
'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
                 {
                     "In which month did the pilot air?": [
                         "November two thousand three",
                         "October two thousand two",
                         "April two thousand four",
                         "September two thousand two",
                         "November two thousand one",
                         "April two thousand five"
                     ]
                 },
                 {
                     "How much money did the Bluth family spend on cartography classes for Buster?": [
                         "Eighty thousand dollars",
                         "Forty thousand dollars",
                         "Ninety thousand dollars",
                         "Fifty thousand dollars",
                         "Seventy five thousand dollars",
                         "Twenty thousand dollars"
                     ]
                 },
                 {
                     "Which of the following is NOT a way Maybe has rebelled against her parents?": [
                         "Getting a tattoo",
                         "Threatening to enter beauty pageants",
                         "Being pro-leather",
                         "Kissing her cousin",
                         "Becoming a movie producer",
                         "Threatening to escape to Portugal"
                     ]
                 },
                 {
                     "In the season one episode Top Banana, who burns down the storage unit containing the Bluth company flight records?": [
                         "T Bone",
                         "Lucille Bluth",
                         "George Bluth",
                         "Barry Zuckerkorn",
                         "Gene Parmesan",
                         "Maybe <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Roger Danish"
                     ]
                 },
                 {
                     "Which yearbook award did Lindsay and Roger Danish win in high school?": [
                         "Best hair",
                         "Best shoes",
                         "Most likely to burn down the school",
                         "Most likely to marry for money",
                         "Best makeup",
                         "Most likely to become a philanthropist"
                     ]
                 },
                 {
                     "In the season one episode Top Banana, what does Jobe say is his least consistent magic trick?": [
                         "Fireball",
                         "<phoneme alphabet=\"ipa\" ph=\"laɪv\">Live</phoneme> doves",
                         "Shooting pennies",
                         "The Aztec Tomb",
                         "Making the yacht disappear",
                         "Live mice"
                     ]
                 },
                 {
                     "In the season one episode Bringing Up Buster, which play does Maybe audition for to get a chance to kiss Steve Holt?": [
                         "Much Ado About Nothing",
                         "Our Town",
                         "Singing In The Rain",
                         "A Midsummer Night's Dream",
                         "Death Of A Salesman",
                         "King Lear"
                     ]
                 },
                 {
                     "In the season one episode Bringing Up Buster, what does Michael use to try to get closer to George Michael?": [
                         "A new bicycle",
                         "A trip to Phoenix",
                         "A trip to Legoland",
                         "A job in the banana stand",
                         "A trip to the cabin",
                         "An internship in the Bluth Company office"
                     ]
                 },
                 {
                     "Which celebrity appears in the infomercial for the Cornballer?": [
                         "Richard Simmons",
                         "Billy Mays",
                         "Bob Ross",
                         "Kathy Lee Gifford",
                         "Ron Howard",
                         "Steve Irwin"
                     ]
                 },
                 {
                     "Which of the following is NOT the name of a news reporter?": [
                         "Chris Tomer",
                         "John Beard",
                         "Trisha Thoon"
                     ]
                 },
                 {
                     "In the season one episode Key Decisions, which example of Lindsay's hypocrisy does Michael point out?": [
                         "Ostrich skin boots",
                         "Killing a frog in the wetlands",
                         "Wanting a nicer car",
                         "A shopping spree",
                         "Mink coat",
                         "Leather briefcase"
                     ]
                 },
                 {
                     "In the season one episode Key Decisions, what is Michael holding when he and Marta are talking on top of the stair car after the Desi awards?": [
                         "A cup from In N Out Burger",
                         "A bottle in a brown paper bag",
                         "A dead dove",
                         "A taco",
                         "A paddleball",
                         "A bicycle helmet"
                     ]
                 },
                 {
                     "The banana stand mascot, mister banana grabber, resembles which character?": [
                         "Jobe Bluth",
                         "Mister Manager",
                         "Buster Bluth",
                         "George Bluth",
                         "Barry Zuckerkorn",
                         "Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>"
                     ]
                 },
                 {
                     "In the season one episode Charity Drive, how much money does Buster bid on the wrong Lucille at the charity auction?": [
                         "Ten thousand dollars",
                         "One thousand dollars",
                         "Five thousand dollars",
                         "Fifteen thousand dollars",
                         "Seven thousand dollars",
                         "Five hundred dollars"
                     ]
                 },
                 {
                     "In the season one episode Charity Drive, how does Jobe blow his cover when breaking into the permit office to misfile the building permits?": [
                         "Whistles due to a chipped tooth",
                         "Releases a <phoneme alphabet=\"ipa\" ph=\"laɪv\">Live</phoneme> dove",
                         "Releases a box of mice",
                         "Sprays lighter fluid",
                         "Crashes his segway"
                     ]
                 },
                 {
                     "In the season one episode Visiting Ours, why is George preoccupied when Michael visits him in prison to ask about the location of some international files?": [
                         "A softball game",
                         "A visit from Kitty",
                         "Starting a religion within the prison",
                         "An ice cream sandwich",
                         "Tobias being in prison",
                         "Buster being too coddled"
                     ]
                 },
                 {
                     "In the season one episode Visiting Ours, Tobias and the marriage therapist can be heard discussing the cast of which show during their therapy session?": [
                         "Friends",
                         "The O C",
                         "Happy Days",
                         "Frasier",
                         "My So Called Life",
                         "Sixty Minutes"
                     ]
                 },
                 {
                     "In the season one episode Visiting Ours, why does Jobe write a strongly worded letter to the prison warden?": [
                         "A disagreement about the success of his prison breakout stunt",
                         "Not being allowed to perform at the prison",
                         "Having equipment stolen during a visit to George Bluth",
                         "A meeting with George Bluth being cut short",
                         "Not being allowed to bring his segway into the visiting room",
                         "Not being allowed to bring lighter fluid into the prison"
                     ]
                 },
                 {
                     "Season one included how many episodes?": [
                         "Twenty two",
                         "Thirteen",
                         "Eighteen",
                         "Fifteen",
                         "Twenty four",
                         "Twenty six"
                     ]
                 },
                 {
                     "Season two included how many episodes?": [
                         "Eighteen",
                         "Thirteen",
                         "Fifteen",
                         "Twenty two",
                         "Twenty four",
                         "Twenty six"
                     ]
                 },
                 {
                     "Season three included how many episodes?": [
                         "Thirteen",
                         "Fifteen",
                         "Eighteen",
                         "Twenty two",
                         "Twenty four",
                         "Twenty six"
                     ]
                 },
                 {
                     "Season four included how many episodes?": [
                         "Fifteen",
                         "Thirteen",
                         "Eighteen",
                         "Twenty two",
                         "Twenty four",
                         "Twenty six"
                     ]
                 },
                 {
                     "The full series included how many total episodes?": [
                         "Sixty eight",
                         "Fifty three",
                         "Seventy two",
                         "Eighty four",
                         "Seventy six",
                         "Eighty six"
                     ]
                 },
                 {
                     "In the season one episode In God We Trust, who is Lucille's date to the Living Classics pageant?": [
                         "Wayne Jarvis",
                         "Oscar Bluth",
                         "Stephen Gentles",
                         "Tom Jain",
                         "George Bluth",
                         "Buster Bluth"
                     ]
                 },
                 {
                     "What is the true location of Portugal?": [
                         "Europe",
                         "South America",
                         "Central America",
                         "Arizona",
                         "The Caribbean",
                         "Indonesia"
                     ]
                 },
                 {
                     "In the season one episode In God We Trust, why does Buster have a panic attack at the Living Classics pageant?": [
                         "He assumes the crowd is booing his relationship with Lucille Austero",
                         "He is afraid to play Adam",
                         "He is not allowed to wear cutoffs in the pageant",
                         "He feels he is too old to perform in the pageant",
                         "George Michael and Tobias fight over Buster's role of Adam",
                         "He sees his mother Lucille on a date with Wayne Jarvis"
                     ]
                 },
                 {
                     "What is the name of the apartment complex where Lucille lives in a penthouse?": [
                         "Balboa Towers",
                         "Sudden Valley",
                         "Paradise Gardens",
                         "Singles City",
                         "Seaside Village",
                         "Brookfeather"
                     ]
                 },
                 {
                     "In the season one episode My Mother the Car, how does Buster sustain an injury?": [
                         "Leaping through a plate glass window",
                         "Falling off a balcony",
                         "Falling off a segway",
                         "Getting bitten by a seal",
                         "Hurting his back doing construction work",
                         "Running from Lucille"
                     ]
                 },
                 {
                     "Which fictional Fox show features footage of Lucille Bluth?": [
                         "World's Worst Drivers",
                         "World's Wildest Police Videos",
                         "When Animals Attack",
                         "Worst Parents in America",
                         "Penthouse Stories",
                         "How the Other Half Lives",
                         "Real Estate Nightmares"
                     ]
                 },
                 {
                     "In the season one episode Storming the Castle, what does Jobe say to Michael as he steals Micheal's watch?": [
                         "I appreciate your time",
                         "What kind of threats?",
                         "He doesn’t want to break my legs. He wants to take my legs",
                         "You’re a good brother, Michael",
                         "I want you to have it",
                         "I want to try to be a better brother. Like you are to me"
                     ]
                 },
                 {
                     "In which episode did George Bluth convert to Judaism?": [
                         "Season one, episode nine: Storming the Castle",
                         "Season one, episode seventeen: Justice is Blind",
                         "Season one, episode fifteen: Staff Infection",
                         "Season two, episode four: Good Grief",
                         "Season two, episode five: Sad Sack",
                         "Season two, episode seven: Switch Hitter"
                     ]
                 },
                 {
                     "In the season one episode Storming the Castle, why is George Bluth supportive of Buster's relationship with Lucille Austero?": [
                         "His recent conversion to Judaism",
                         "His desire to get revenge on Lucille Bluth",
                         "His desire to keep his other sons away from Lucille Austero",
                         "His plan to use Lucille Austero's resources after escaping from prison",
                         "Lucille Austero's ability to bring down Sitwell Enterprises",
                         "His desire to distract Buster from monopolizing Lucille Bluth's time"
                     ]
                 }
];

/* To copy

,
                 {
                     "": [
                         "",
                         "",
                         "",
                         "",
                         "",
                         ""
                     ]
                 },
                 {
                     "": [
                         "",
                         "",
                         "",
                         "",
                         "",
                         ""
                     ]
                 },
                 {
                     "": [
                         "",
                         "",
                         "",
                         "",
                         "",
                         ""
                     ]
                 }

 */

/* To do list
S1E10
S1E11
S1E12
S1E13
S1E14
S1E15
S1E16
S1E17
S1E18
S1E19
S1E20
S1E21
S1E22
S2E1
S2E2
S2E3
S2E4
S2E5
S2E6
S2E7
S2E8
S2E9
S2E10
S2E11
S2E12
S2E13
S2E14
S2E15
S2E16
S2E17
S2E18
S3E1
S3E2
S3E3
S3E4
S3E5
S3E6
S3E7
S3E8
S3E9
S3E10
S3E11
S3E12
S3E13
S4E1
S4E2
S4E3
S4E4
S4E5
S4E6
S4E7
S4E8
S4E9
S4E10
S4E11
S4E12
S4E13
S4E14
S4E15
Series misc
Character/actor misc
 */

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

       if (event.session.application.applicationId !== "amzn1.ask.skill.5b243e79-89ae-4874-8d1e-6ff0c819d596") {
           context.fail("Invalid Application ID");
        }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 3;
var GAME_LENGTH = 5;
var CARD_TITLE = "Trivia"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "That answer is correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "You've made a huge mistake. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
        	var grade = currentScore / GAME_LENGTH;
            speechOutput = userGaveUp ? "" : speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                    + GAME_LENGTH.toString() + " questions correct. ";
        	if(grade == 0) {
        		speechOutput += "You've fluctuated in your learning.";
        	} else if(grade <= 0.33) {
        		speechOutput += "Your grade is a D minus. At least it's above a D, right?";
        	} else if(grade <= 0.67) {
        		speechOutput += "Your grade is an Elvis head.";
        	} else if(grade <= 0.999) {
        		speechOutput += "Your grade is a crocodile.";
        	} else {
        		speechOutput += "An A gets you ice cream.";
        	}
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput = userGaveUp ? "" : speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.
    
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, or three. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "SSML",
            ssml: "<speak>" + output + "</speak>"
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "SSML",
                ssml: "<speak>" + repromptText + "</speak>"
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "SSML",
            ssml: "<speak>" + output + "</speak>"
        },
        reprompt: {
            outputSpeech: {
                type: "SSML",
                ssml: "<speak>" + repromptText + "</speak>"
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}