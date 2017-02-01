
'use strict';

/**
 * Trivia questions
 * The first answer is the correct one
 * The correct answer is randomly mixed in with wrong ones chosen from the rest
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
                     "In the season one episode, Top Banana, who burns down the storage unit containing the Bluth company flight records?": [
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
                     "In the season one episode, Top Banana, what does Jobe say is his least consistent magic trick?": [
                         "Fireball",
                         "<phoneme alphabet=\"ipa\" ph=\"laɪv\">Live</phoneme> doves",
                         "Shooting pennies",
                         "The Aztec Tomb",
                         "Making the yacht disappear",
                         "<phoneme alphabet=\"ipa\" ph=\"laɪv\">Live</phoneme> mice"
                     ]
                 },
                 {
                     "In the season one episode, Bringing Up Buster, which play does Maybe audition for to get a chance to kiss Steve Holt?": [
                         "Much Ado About Nothing",
                         "Our Town",
                         "Singing In The Rain",
                         "A Midsummer Night's Dream",
                         "Death Of A Salesman",
                         "King Lear"
                     ]
                 },
                 {
                     "In the season one episode, Bringing Up Buster, what does Michael use to try to get closer to George Michael?": [
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
                     "In the season one episode, Key Decisions, which example of Lindsay's hypocrisy does Michael point out?": [
                         "Ostrich skin boots",
                         "Killing a frog in the wetlands",
                         "Wanting a nicer car",
                         "Shopping spree",
                         "Mink coat",
                         "Leather briefcase"
                     ]
                 },
                 {
                     "In the season one episode, Key Decisions, what is Michael holding when he and Marta are talking on top of the stair car after the Desi awards?": [
                         "A cup from Inn En Out Burger",
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
                     "In the season one episode, Charity Drive, how much money does Buster bid on the wrong Lucille at the charity auction?": [
                         "Ten thousand dollars",
                         "One thousand dollars",
                         "Five thousand dollars",
                         "Fifteen thousand dollars",
                         "Seven thousand dollars",
                         "Five hundred dollars"
                     ]
                 },
                 {
                     "In the season one episode, Charity Drive, how does Jobe blow his cover when breaking into the permit office to misfile the building permits?": [
                         "Whistles due to a chipped tooth",
                         "Releases a <phoneme alphabet=\"ipa\" ph=\"laɪv\">Live</phoneme> dove",
                         "Releases a box of mice",
                         "Sprays lighter fluid",
                         "Crashes his segway"
                     ]
                 },
                 {
                     "In the season one episode, Visiting Ours, why is George preoccupied when Michael visits him in prison to ask about the location of some international files?": [
                         "A softball game",
                         "A visit from Kitty",
                         "Starting a religion within the prison",
                         "An ice cream sandwich",
                         "Tobias being in prison",
                         "Buster being too coddled"
                     ]
                 },
                 {
                     "In the season one episode, Visiting Ours, Tobias and the marriage therapist can be heard discussing the cast of which show during their therapy session?": [
                         "Friends",
                         "The O C",
                         "Happy Days",
                         "<phoneme alphabet=\"ipa\" ph=\"fɹeɪʒɚɹ\">Frasier</phoneme>",
                         "My So Called Life",
                         "Sixty Minutes"
                     ]
                 },
                 {
                     "In the season one episode, Visiting Ours, why does Jobe write a strongly worded letter to the prison warden?": [
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
                     "Seasons one through four included how many total episodes?": [
                         "Sixty eight",
                         "Fifty three",
                         "Seventy two",
                         "Eighty four",
                         "Seventy six",
                         "Eighty six"
                     ]
                 },
                 {
                     "In the season one episode, In God We Trust, who is Lucille's date to the Living Classics pageant?": [
                         "Wayne Jarvis",
                         "Oscar Bluth",
                         "Stefen Gentles",
                         "Tom Jane",
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
                     "In the season one episode, In God We Trust, why does Buster have a panic attack at the Living Classics pageant?": [
                         "He assumes the crowd is booing his relationship with Lucille Austero",
                         "He is afraid to play Adam",
                         "He is not allowed to wear cutoffs in the pageant",
                         "He feels he is too old to perform in the pageant",
                         "George Michael and Tobias fight over Buster's role of Adam",
                         "He sees his mother Lucille on a date with Wayne Jarvis"
                     ]
                 },
                 {
                     "What is the name of the apartment building where Lucille lives in a penthouse?": [
                         "Balboa Towers",
                         "Sudden Valley",
                         "Paradise Gardens",
                         "Singles City",
                         "Seaside Village",
                         "Brookfeather"
                     ]
                 },
                 {
                     "In the season one episode, My Mother the Car, how does Buster sustain an injury?": [
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
                         "How the Other Half <phoneme alphabet=\"ipa\" ph=\"lɪvz\">Lives</phoneme>",
                         "Real Estate Nightmares"
                     ]
                 },
                 {
                     "In the season one episode, Storming the Castle, what does Jobe say to Michael as he steals Micheal's watch?": [
                         "I appreciate your time",
                         "What kind of threats?",
                         "He doesn’t want to break my legs, he wants to take my legs",
                         "You’re a good brother Michael",
                         "I want you to have it",
                         "I want to try to be a better brother. Like you are to me"
                     ]
                 },
                 {
                     "In which episode does George Bluth convert to Judaism?": [
                         "Season one, episode nine, Storming the Castle",
                         "Season one, episode seventeen, Justice is Blind",
                         "Season one, episode fifteen, Staff Infection",
                         "Season two, episode four, Good Grief",
                         "Season two, episode five, Sad Sack",
                         "Season two, episode seven, Switch Hitter"
                     ]
                 },
                 {
                     "In the season one episode, Storming the Castle, why is George Bluth supportive of Buster's relationship with Lucille Austero?": [
                         "His recent conversion to Judaism",
                         "His desire to get revenge on Lucille Bluth",
                         "His desire to keep his other sons away from Lucille Austero",
                         "His plan to use Lucille Austero's resources after escaping from prison",
                         "Lucille Austero's ability to bring down Sitwell Enterprises",
                         "His desire to distract Buster from monopolizing Lucille Bluth's time"
                     ]
                 },
                 {
                     "In the season one episode, Pier Pressure, how does Lindsay punish Maybe for getting bad grades?": [
                         "Makes her spend a day with Lucille Bluth",
                         "Makes her spend spring break working at the Bluth Company",
                         "Makes her work for a day in the banana stand",
                         "Makes her attend a charity banquet",
                         "Makes her shadow Michael Bluth for a day"
                     ]
                 },
                 {
                     "In the season one episode, Pier Pressure, why does the fake Hot Cops drug bust fail to fool George Michael?": [
                         "One of the Hot Cops is his choir teacher",
                         "He is working overtime in the banana stand at the time",
                         "Jobe has told him about the plot",
                         "One of the Hot Cops' breakaway uniforms comes open",
                         "One of the Hot Cops hits on him"
                     ]
                 },
                 {
                     "In the season one episode, Pier Pressure, what spelling mistake does Maybe make?": [
                         "She spells minus, <say-as interpret-as=\"spell-out\">mines</say-as>",
                         "She spells banana, <say-as interpret-as=\"spell-out\">bananana</say-as>",
                         "She spells note, <say-as interpret-as=\"spell-out\">noat</say-as>",
                         "She spells Jobe without the periods",
                         "She spells Hot Cops, <say-as interpret-as=\"spell-out\">hotkops</say-as>",
                         "She spells Bluth, <say-as interpret-as=\"spell-out\">blooth</say-as>"
                     ]
                 },
                 {
                     "In the season one episode, Public Relations, why is George Michael rejected from admission to the Milford School?": [
                         "The Bluth family's recent brawl at a Klimpy's restaurant",
                         "He speaks during the interview",
                         "Michael speaks during the interview",
                         "The Bluth family is in the news for building houses in Iraq",
                         "George Senior has called the school to oppose George Michael's admission on religious grounds",
                         "The admissions officer wants to keep his relationship with Lucille Bluth a secret"
                     ]
                 },
                 {
                     "What is the name of the publicist Michael hires for the Bluth Family in Season One?": [
                         "Jessie Bowers",
                         "Sandy Uber",
                         "Luisa Velez",
                         "Jan Eagleman",
                         "<phoneme alphabet=\"ipa\" ph=\"oʊfiliə\">Ophelia</phoneme> Love",
                         "Beth Barely"
                     ]
                 },
                 {
                     "Where does Tobias first meet Carl Weathers?": [
                         "In an airport shuttle",
                         "In a method acting class",
                         "At the prison",
                         "At Burger King",
                         "At Klimpy's restaurant",
                         "At a police auction"
                     ]
                 },
                 {
                     "In the season one episode, Marta Complex, what gift does Marta buy for Michael?": [
                         "A suit",
                         "A set of cufflinks",
                         "A watch",
                         "A dozen roses",
                         "A bottle of scotch",
                         "A bottle of wine"
                     ]
                 },
                 {
                     "In the season one episode, Marta Complex, who does Lucille Austero begin dating instead of Buster?": [
                         "Carl Weathers",
                         "Stefen Gentles",
                         "Michael Bluth",
                         "Wayne Jarvis",
                         "Bob Loblaw",
                         "Herbert Love"
                     ]
                 },
                 {
                     "In the season one episode, Marta Complex, what recipe does Carl Weathers describe to Tobias?": [
                         "Stew",
                         "Bloody Mary",
                         "Pancakes",
                         "Pecan pie",
                         "Grilled cheese",
                         "Oatmeal"
                     ]
                 },
                 {
                     "What is the name of Marta's fictional brother on El Amor <phoneme alphabet=\"ipa\" ph=\"pɹoʊhibidoʊ\">Prohibido</phoneme>?": [
                         "<phoneme alphabet=\"ipa\" ph=\"tioʊ\">Tio</phoneme>",
                         "<phoneme alphabet=\"ipa\" ph=\"eɪɹmɑnoʊ\">Hermano</phoneme>",
                         "<phoneme alphabet=\"ipa\" ph=\"ihoʊ\">Hijo</phoneme>",
                         "<phoneme alphabet=\"ipa\" ph=\"ɑbweɪloʊ\">Abuelo</phoneme>",
                         "<phoneme alphabet=\"ipa\" ph=\"soʊbrinoʊ\">Sobrino</phoneme>",
                         "<phoneme alphabet=\"ipa\" ph=\"nieɪtoʊ\">Nieto</phoneme>"
                     ]
                 },
                 {
                     "How many episodes was the series originally picked up for by Fox?": [
                         "Thirteen",
                         "Twenty two",
                         "Eighteen",
                         "Fifteen",
                         "Ten",
                         "Eight"
                     ]
                 },
                 {
                     "In the season one episode, Beef Consomme, how does Buster attempt to impress Marta?": [
                         "Hiring a mariachi band",
                         "Serenading her outside her window",
                         "Getting in a fight with Jobe",
                         "Declaring his love for her in front of Lucille",
                         "Entering a charity date auction",
                         "Playing Adam in the Living Classics Pageant"
                     ]
                 },
                 {
                     "What is the name of George Michael's ethics teacher?": [
                         "Beth Barely",
                         "Rita Leeds",
                         "Jessie Bowers",
                         "<phoneme alphabet=\"ipa\" ph=\"oʊfiliə\">Ophelia</phoneme> Love",
                         "Edna Whitehead",
                         "Jan Eagleman"
                     ]
                 },
                 {
                     "What was the name of Michael and Jobe's high school civics teacher?": [
                         "Edna Whitehead",
                         "Beth Barely",
                         "Rita Leeds",
                         "Jessie Bowers",
                         "<phoneme alphabet=\"ipa\" ph=\"oʊfiliə\">Ophelia</phoneme> Love",
                         "Jan Eagleman"
                     ]
                 },
                 {
                     "In the season one episode, Shock and Aww, what is the name of Jobe's girlfriend who dumps him at the diversity dance?": [
                         "Shannon",
                         "<phoneme alphabet=\"ipa\" ph=\"oʊfiliə\">Ophelia</phoneme>",
                         "Beth",
                         "Marta",
                         "Tonya",
                         "Sydney"
                     ]
                 },
                 {
                     "In the season one episode, Shock and Aww, who does Maybe bring as her date to the diversity dance?": [
                         "<phoneme alphabet=\"ipa\" ph=\"anjaŋ\">Annyong</phoneme> Bluth",
                         "George Michael Bluth",
                         "Steve Holt",
                         "Paul Huan",
                         "Mort Myers",
                         "Marky Bark"
                     ]
                 },
                 {
                     "In the season one episode, Staff Infection, which actor is said to be researching a role at the prison?": [
                         "Steve <phoneme alphabet=\"ipa\" ph=\"buʃɛmi\">Buscemi</phoneme>",
                         "Jake Jillenhall",
                         "James <phoneme alphabet=\"ipa\" ph=\"fɹæŋkoʊ\">Franco</phoneme>",
                         "Carl Weathers",
                         "Brian Cranston",
                         "Zach Braff"
                     ]
                 },
                 {
                     "What is the make of the stair car?": [
                         "Ford",
                         "Chevrolet",
                         "Daihatsu",
                         "<say-as interpret-as=\"spell-out\">GMC</say-as>",
                         "Great Wall",
                         "Dodge"
                     ]
                 },
                 {
                     "Which guest star had David Cross publicly mocked in his stand up comedy act before they appeared on the show?": [
                         "James Lipton",
                         "Henry Winkler",
                         "John Beard",
                         "Jeff Garlin",
                         "Ed Begley Junior",
                         "Ben Stiller"
                     ]
                 },
                 {
                     "How does Cindy Lightballoon spell her first name?": [
                         "<say-as interpret-as=\"spell-out\">Cindi</say-as>",
                         "<say-as interpret-as=\"spell-out\">Cindee</say-as>",
                         "<say-as interpret-as=\"spell-out\">Sindy</say-as>",
                         "<say-as interpret-as=\"spell-out\">Sindi</say-as>",
                         "<say-as interpret-as=\"spell-out\">Sin-dee</say-as>",
                         "<say-as interpret-as=\"spell-out\">Sindee</say-as>"
                     ]
                 },
                 {
                     "In the season one episode, Altar Egos, how much money does Maybe give George Michael to do her homework instead of tutoring her?": [
                         "One hundred twenty dollars",
                         "One hundred dollars",
                         "Eighty dollars",
                         "Sixty dollars"
                     ]
                 },
                 {
                     "Which drug did Doctor <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪz\">Funke's</phoneme> one hundred percent natural good time family band solution never have a relationship with?": [
                         "Sanidex",
                         "<phoneme alphabet=\"ipa\" ph=\"timoʊsɪl\">Teamocil</phoneme>",
                         "Zanotab",
                         "<phoneme alphabet=\"ipa\" ph=\"jufoʊɹəzin\">Euphorazine</phoneme>"
                     ]
                 },
                 {
                     "Which position does Surely <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme> roll for?": [
                         "Student council treasurer",
                         "Student body president",
                         "Student council vice president",
                         "Student activities coordinator",
                         "Student council secretary",
                         "Student council chaplain"
                     ]
                 },
                 {
                     "In the season one episode, Justice is Blind, which of the following is NOT a way the characters misquoted the ten commandments?": [
                         "As you seek so shall you find thyself",
                         "Thou shalt protect thy father, and honor no one above him unless it <phoneme alphabet=\"ipa\" ph=\"biɪθ\">beith</phoneme> me, thy sweet Lord.",
                         "Be true to thine own self, and to thine own self be true"
                     ]
                 },
                 {
                     "In the season one episode, Justice is Blind, whose face is crossed out on the chart in the interrogation room?": [
                         "Marta <phoneme alphabet=\"ipa\" ph=\"ɛstɹeɪjə\">Estrella</phoneme>",
                         "Kitty Sanchez",
                         "Ann Veal",
                         "Jobe's wife",
                         "Beth Barely",
                         "Surely <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>"
                     ]
                 },
                 {
                     "Which fictional network is a parody of <say-as interpret-as=\"spell-out\">MTV</say-as>?": [
                         "<say-as interpret-as=\"spell-out\">YOM</say-as>",
                         "<say-as interpret-as=\"spell-out\">YTV</say-as>",
                         "<say-as interpret-as=\"spell-out\">MOTV</say-as>",
                         "<say-as interpret-as=\"spell-out\">GLS</say-as>",
                         "<say-as interpret-as=\"spell-out\">TTV</say-as>",
                         "<say-as interpret-as=\"spell-out\">M1S</say-as>"
                     ]
                 },
                 {
                     "In the season one episode, Missing Kitty, what is Warden Gentles' advice to Tobias?": [
                         "To learn real fear from White Power Bill",
                         "To use his therapist skills to reveal the real source of White Power Bill's hatred",
                         "To become the Dorothy of the prison",
                         "To realize that the real source of fear is anger",
                         "To learn why George Bluth really hates him"
                     ]
                 },
                 {
                     "In the season one episode, Missing Kitty, where did Lucille Bluth hide the inheritance from her mother?": [
                         "In a trust fund for <phoneme alphabet=\"ipa\" ph=\"anjaŋ\">Annyong</phoneme>",
                         "In the banana stand",
                         "In the Bluth company's Iraqi holding corporation",
                         "In Bluth company stock",
                         "In <phoneme alphabet=\"ipa\" ph=\"anjaŋz\">Annyong's</phoneme> pocket",
                         "In her purse"
                     ]
                 },
                 {
                     "In the season one episode, Best Man for the Jobe, who does Jobe's wife fall in love with?": [
                         "Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Ira Gilligan",
                         "Wayne Jarvis",
                         "George Bluth",
                         "Stan Sitwell",
                         "Marky Bark"
                     ]
                 },
                 {
                     "Which of the following does Lucille Bluth consider to be one of her favorite brands?": [
                         "<phoneme alphabet=\"ipa\" ph=\"klaʊdmiɹ\">Cloudmir</phoneme>",
                         "<phoneme alphabet=\"ipa\" ph=\"timoʊsɪl\">Teamocil</phoneme>",
                         "<say-as interpret-as=\"spell-out\">YOM</say-as>"
                     ]
                 },
                 {
                     "In the season one episode, Best Man for the Jobe, who is NOT in attendance at Jobe's bachelor party?": [
                         "George Michael Bluth",
                         "The hot cops",
                         "Ira Gilligan",
                         "Michael Bluth",
                         "Buster Bluth",
                         "Jobe Bluth"
                     ]
                 },
                 {
                     "In the season one episode, Whistler's Mother, which song does Lindsay dance too while protesting the war in the free speech zone?": [
                         "Bad girls",
                         "All you need is smiles",
                         "The show's theme music",
                         "The final countdown",
                         "Vogue",
                         "Big yellow joint"
                     ]
                 },
                 {
                     "In the season one episode, Whistler's Mother, why does Lindsay decide to protest the war?": [
                         "Her hair stylist has been called to war",
                         "The war has led to a freeze on the Bluth Company's assets",
                         "The war has led to a fur embargo",
                         "It will be easier than getting the ten commandments removed from the courthouse",
                         "To get closer to Marky Bark",
                         "To be a role model for Maybe"
                     ]
                 },
                 {
                     "In the season one episode, Whistler's Mother, why is Michael's purchase of Oscar's lemon grove a mistake?": [
                         "The government has an easement on the land",
                         "The land is actually in Mexico",
                         "A wall is being built through the land",
                         "A colony of hippies is living on the land",
                         "The purchase is made with frozen Bluth Company assets",
                         "It is actually George who takes the money for the land"
                     ]
                 },
                 {
                     "In the season one episode, Not Without My Daughter, which group goes to the mall to prove that they are manly?": [
                         "Tobias, George Michael, and Jobe",
                         "Jobe, George Michael, and Steve Holt",
                         "Steve Holt, Jobe, and Michael",
                         "Buster, <phoneme alphabet=\"ipa\" ph=\"anjaŋ\">Annyong</phoneme>, and Jobe",
                         "<phoneme alphabet=\"ipa\" ph=\"anjaŋ\">Annyong</phoneme>, Buster, and Oscar",
                         "Tobias, Buster, and George Michael"
                     ]
                 },
                 {
                     "Fill in the blank. Say what you will about America. Blank bucks still gets you a hell of a lot of mice.": [
                         "Thirteen",
                         "Fourteen",
                         "Sixteen",
                         "Eighteen",
                         "Twelve",
                         "Nineteen"
                     ]
                 },
                 {
                     "In the season one episode, Not Without My Daughter, why does Lindsay pretend to be a shoplifter?": [
                         "To conceal the fact that she has a job at the mall",
                         "To show George Michael that she's a cool aunt",
                         "To distract attention from her father's upcoming trial",
                         "To impress Steve Holt",
                         "To hide the fact that she used company money to buy expensive outfits",
                         "To have an excuse to talk to Officer Carter"
                     ]
                 },
                 {
                     "In the season one finale, Let Them Eat Cake, what information does Kitty try to use to blackmail Michael?": [
                         "The Bluth Company has unpaid back taxes",
                         "George Bluth has been found in Mexico",
                         "Kitty was on the yacht when Jobe blew it up",
                         "The Bluth Company is not OSHA compliant",
                         "Sitwell Industries is attempting to learn Bluth Company secrets from Kitty",
                         "Kitty saw Michael on a date with prosecutor Maggie Lizer"
                     ]
                 },
                 {
                     "What is the name of the literal doctor played by Ian Roberts?": [
                         "Doctor Fishman",
                         "Doctor Hartman",
                         "Doctor Whitman",
                         "Doctor Hemingway",
                         "Doctor <phoneme alphabet=\"ipa\" ph=\"spət͡ʃɛmɛn\">Spaceman</phoneme>",
                         "Doctor Litt"
                     ]
                 },
                 {
                     "Which of the following has NOT been one of Doctor Fishman's patients?": [
                         "Jobe Bluth",
                         "George Bluth",
                         "Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Lindsay <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Buster Bluth",
                         "Michael Bluth"
                     ]
                 },
                 {
                     "In seasons one through four, how many episodes did Oscar Bluth appear in?": [
                         "Twenty six",
                         "Thirteen",
                         "Thirty four",
                         "Twenty two",
                         "Eighteen",
                         "Twenty"
                     ]
                 },
                 {
                     "In which month did the first episode of season two air?": [
                         "November two thousand four",
                         "November two thousand three",
                         "September two thousand four",
                         "September two thousand three",
                         "November two thousand five",
                         "September two thousand five"
                     ]
                 },
                 {
                     "In the season two premier, The One Where Michael Leaves, who runs over Tobias with their car?": [
                         "Barry Zuckerkorn",
                         "Jobe Bluth",
                         "Lucille Bluth",
                         "Oscar Bluth",
                         "Officer Taylor",
                         "George Bluth"
                     ]
                 },
                 {
                     "In the season two episode, The One Where They Build A House, which group does Michael employ to build the fake model home?": [
                         "Oscar Bluth, George Michael Bluth, Buster Bluth, and Tom Jane",
                         "Buster Bluth, Oscar Bluth, and Jobe Bluth",
                         "George Michael Bluth, Buster Bluth, Oscar Bluth, and Marky Bark",
                         "Buster Bluth, Oscar Bluth, and <phoneme alphabet=\"ipa\" ph=\"anjaŋ\">Annyong</phoneme> Bluth",
                         "Oscar Bluth, Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>, George Michael Bluth, and Tom Jane",
                         "Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>, Jobe Bluth, Oscar Bluth, and George Michael Bluth"
                     ]
                 },
                 {
                     "In the season two episode, The One Where They Build A House, which children's game is referenced at the ribbon cutting ceremony for the fake model home?": [
                         "Rock paper scissors",
                         "Cat's cradle",
                         "Cops and robbers",
                         "Dodgeball",
                         "Duck duck goose",
                         "Hungry Hungry Hippos"
                     ]
                 },
                 {
                     "Fill in the blank in this quotation from Buster. I don't agree with your blank here, but I will defend with my life your right to do it.": [
                         "Dirty doings",
                         "Seal dealing",
                         "Sneaky selling",
                         "Filthy blackmail",
                         "Chicken dance"
                     ]
                 },
                 {
                     "In the season two episode, Amigos, where is Michael's office while Jobe acts as Bluth Company president to appease the stockholders?": [
                         "A supply closet",
                         "The stair car",
                         "The Mercedes",
                         "The model home attic",
                         "North Roast Coffee",
                         "The banana stand"
                     ]
                 },
                 {
                     "In the season two episode, Amigos, which character is tackled more than once?": [
                         "Michael Bluth",
                         "Oscar Bluth",
                         "Jobe Bluth",
                         "Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "George Bluth"
                     ]
                 },
                 {
                     "Which of the following is NOT a motivational poster at the Bluth Company office?": [
                         "Think before you speak",
                         "Don't be afraid to make a mistake",
                         "Never give up",
                         "Keep an open mind"
                     ]
                 },
                 {
                     "In the season two episode, Good Grief, why does Jobe perform an elaborate illusion at George's wake?": [
                         "To make the cover of Poof Magazine",
                         "To prevent Buster from realizing it's a wake",
                         "To turn the wake into a wedding between himself and Anne Veal",
                         "To give George a chance to escape into the attic"
                     ]
                 },
                 {
                     "In the season two episode, Good Grief, why does Maybe try to set Lindsay up with the bounty hunter, Ice?": [
                         "To build a case for emancipation from her parents",
                         "To distract Lindsay from her relationship with Steve Holt",
                         "To distract Lindsay as she prepares to run away",
                         "To secure Ice's catering services for her movie set",
                         "To prevent Ice from discovering her secret life as a movie producer"
                     ]
                 },
                 {
                     "Which two actors portray Ann Veal?": [
                         "Alessandra Torresani and Mae Whitman",
                         "Isla Fisher and Leonor Varela",
                         "Bronwen Masters and Mo Collins",
                         "Mae Whitman and Isla Fisher",
                         "Mo Collins and Mae Whitman",
                         "Leonor Varela and Alessandra Torresani"
                     ]
                 },
                 {
                     "In the season two episode, Sad Sack, why does Lindsay start spending more time with Maybe?": [
                         "To get closer to Steve Holt",
                         "To win her allegiance as she and Tobias prepare to split up",
                         "To keep Maybe from aligning herself with Lucille",
                         "To show James Carr that she's young",
                         "To have an excuse to talk to Ice"
                     ]
                 },
                 {
                     "In the season two episode, Sad Sack, what is former Bluth Company attorney Wayne Jarvis's new job?": [
                         "Prosecutor",
                         "District attorney",
                         "Attorney for Lucille Austero",
                         "<say-as interpret-as=\"spell-out\">SEC</say-as> director",
                         "Army sergeant",
                         "Private investigator"
                     ]
                 },
                 {
                     "How many times did Jobe try to microwave a ding dong while it was still in its foil?": [
                         "Two",
                         "Three",
                         "Four"
                     ]
                 },
                 {
                     "In the season two episode, Afternoon Delight, which of the following is never claimed as the price of Jobe's suit?": [
                         "Sixteen hundred dollars",
                         "Three thousand dollars",
                         "Four thousand dollars",
                         "Five thousand dollars",
                         "Sixty three hundred dollars",
                         "Seven thousand dollars",
                         "Thirty six hundred dollars"
                     ]
                 },
                 {
                     "In the season two episode, Afternoon Delight, which holiday tradition do Michael and George Michael participate in?": [
                         "Rebuilding the banana stand after it has been vandalized",
                         "George Michael driving the car to the Bluth Company holiday party",
                         "Wearing matching outfits to the Living Classics pageant",
                         "Moving Lucille's vodka from the banana stand to her condo"
                     ]
                 },
                 {
                     "In the season two episode, Afternoon Delight, which of the following duos DOES NOT perform karaoke at the Bluth Company holiday party?": [
                         "Michael and George Michael",
                         "Michael and Maybe",
                         "Lindsay and George Michael"
                     ]
                 },
                 {
                     "What was the first episode to air in the year two thousand five?": [
                         "Season two, episode seven, Switch Hitter",
                         "Season two, episode eleven, Out on a Limb",
                         "Season one, episode twelve, Marta Complex",
                         "Season one, episode five, Charity Drive",
                         "Season three, episode five, Mister F",
                         "Season three, episode eight, Making a Stand"
                     ]
                 },
                 {
                     "In the season two episode, Switch Hitter, which book does Maybe have a homework assignment on?": [
                         "The Old Man and the Sea",
                         "A Tale of Two Cities",
                         "Pride and Prejudice",
                         "The Sun Also Rises",
                         "Catch Twenty Two",
                         "Breakfast of Champions"
                     ]
                 },
                 {
                     "In the season two episode, Switch Hitter, what fake holiday does Maybe invent to get out of going to school?": [
                         "Help your dad follow his dreams day",
                         "Bring your niece to work day",
                         "Help your mother find a date day",
                         "Shadow your cousin day"
                     ]
                 },
                 {
                     "Which actor portrays Stan Sitwell?": [
                         "Ed Begley Junior",
                         "Ian Roberts",
                         "Dave Thomas",
                         "John Michael Higgins",
                         "Bob Glouberman",
                         "J J Wall"
                     ]
                 },
                 {
                     "What is Barry Zuckerkorn's search engine of choice?": [
                         "Ask Jeeves",
                         "Bing",
                         "Alta Vista",
                         "Web Crawler",
                         "Excite",
                         "Lycos"
                     ]
                 },
                 {
                     "In the season two episode, Queen for a Day, which professional sports team does Barry Zuckerkorn have a lawsuit against?": [
                         "The Los Angeles Kings",
                         "The Los Angeles Dodgers",
                         "The Los Angeles Galaxy",
                         "The Los Angeles Lakers",
                         "The Anaheim Ducks",
                         "The Los Angeles Clippers"
                     ]
                 },
                 {
                     "In the season two episode, Burning Love, what does Lucille Austero give Michael in exchange for his promise to bid on her at the charity auction?": [
                         "Usage of her country club membership",
                         "One percent of the Bluth Company",
                         "Usage of her Corvette for his date with Sally Sitwell",
                         "A promise not to testify against the Bluth Company"
                     ]
                 },
                 {
                     "What is the name of the fictional actor who plays the fictional character Frank Wrench?": [
                         "Moses Taylor",
                         "David Carter",
                         "Emmett Rick<phoneme alphabet=\"ipa\" ph=\"təɹ\">ter</phoneme>",
                         "Tom Jane",
                         "Ed Helms",
                         "Phillip Litt"
                     ]
                 },
                 {
                     "What happens shortly before George Michael and Ann share their first kiss?": [
                         "They listen to the Jerky Boys",
                         "George Michael gives Ann a tub of diamond cream",
                         "George Michael bids on Ann in the charity auction",
                         "Ann is found on a bench in Mexico",
                         "Jobe leaves Ann at the altar",
                         "George Michael watches a taping of Ann's father's <say-as interpret-as=\"spell-out\">TV</say-as> show"
                     ]
                 },
                 {
                     "Which of the following people has never had romantic involvement with Lucille Austero?": [
                         "George Bluth",
                         "Oscar Bluth",
                         "Michael Bluth",
                         "Jobe Bluth",
                         "Stan Sitwell",
                         "Carl Weathers",
                         "Buster Bluth"
                     ]
                 },
                 {
                     "Which season did Lucille Austero NOT appear in?": [
                         "Season three",
                         "Season one",
                         "Season two",
                         "Season four"
                     ]
                 },
                 {
                     "Which fictional character did the fictional Jack Dorso portray in the nineteen forties?": [
                         "Bullet",
                         "Red McGibbon",
                         "Belvedere",
                         "Willie Stark",
                         "Sam Spade",
                         "Bunko"
                     ]
                 },
                 {
                     "In the season two episode, Out on a Limb, what do Lindsay and Tobias do to add excitement to their relationship?": [
                         "Break into Maggie Lizer's house",
                         "Start dating other people",
                         "Develop a friendship with DeBrie Bar Dough and Marky Bark",
                         "Sneak out of George Bluth's trial",
                         "Plan a day to have marital relations"
                     ]
                 },
                 {
                     "In which episode is Buster's hand bitten off by a seal?": [
                         "Season two, episode eleven, Out on a Limb",
                         "Season two, episode twelve, Hand to God",
                         "Season two, episode thirteen, Motherboy Thirty",
                         "Season two, episode fifteen, Sword of Destiny",
                         "Season two, episode seven, Switch Hitter",
                         "Season two, episode eighteen, Righteous Brothers"
                     ]
                 },
                 {
                     "Why did Sally Sitwell break up with Michael?": [
                         "She thinks he's always looking for things to come between them",
                         "She stopped being attracted to him when he wore the large coat at the country club",
                         "She stopped being attracted to him when his credit card was declined at the country club",
                         "Her father Stan Sitwell convinced her to leave him",
                         "She was unimpressed with his performance in the company softball game"
                     ]
                 },
                 {
                     "Which couple did NOT have their hypothetical child rendered by Mommy What Will I Look Like?": [
                         "George Michael Bluth and Ann Veal",
                         "George Bluth and Kitty Sanchez",
                         "Michael Bluth and Sally Sitwell"
                     ]
                 },
                 {
                     "Which of the following characters never blames themself for Buster losing his hand?": [
                         "Michael Bluth",
                         "Lucille Bluth",
                         "Jobe Bluth"
                     ]
                 },
                 {
                     "In the season two episode, Hand to God, what is written in the note George Michael retrieves from Maggie Lizer's front door?": [
                         "Really eager to hear from you",
                         "Finished milk. Buy more.",
                         "A friend needs pot, can you get some?",
                         "Thanks for the gift",
                         "Here's the tux. You bring the flowers and champagne."
                     ]
                 },
                 {
                     "In the season two episode, Hand to God, what does Doctor Fishman say about Buster?": [
                         "He's going to be all right",
                         "It's too late for me to do anything for your son",
                         "You look really hot",
                         "It looks like he's dead",
                         "We lost him",
                         "Your son went down while piloting a plane over Afghanistan"
                     ]
                 },
                 {
                     "In the season two episode, Motherboy Thirty, why does Lindsay become attracted to Tobias?": [
                         "He has the power of George Bluth due to playing him in Scandalmakers",
                         "He survives being run over by Barry Zuckerkorn",
                         "He returns from prison with a detached attitude",
                         "He finds a date as soon as they open up their relationship"
                     ]
                 },
                 {
                     "In the season two episode, Motherboy Thirty, who rescues George Michael from participating in Motherboy?": [
                         "Michael and Buster",
                         "Buster and Jobe",
                         "Lindsay and Michael",
                         "Michael and George Senior",
                         "Maybe and Michael"
                     ]
                 },
                 {
                     "To parody the lawsuit brought against the show by the band Arrested Development, the narrator says he is legally required to make a distinction between something in the show and which fictional band?": [
                         "Motherboy",
                         "Sad Sack",
                         "Ice",
                         "Hot Mother",
                         "Scandalmakers",
                         "Star Wars Kid"
                     ]
                 },
                 {
                     "Which letter does not appear in the spelling of <phoneme alphabet=\"ipa\" ph=\"timoʊsɪl\">Teamocil</phoneme>?": [
                         "S",
                         "I",
                         "A"
                     ]
                 },
                 {
                     "In the season two episode, The Immaculate Election, where does Tobias end up staying after Lindsay kicks him out of the model home?": [
                         "The set of Wrench",
                         "Oscar's trailer",
                         "The Queen Mary",
                         "Jobe's houseboat",
                         "Oscar's desert retreat",
                         "A supply closet at the Bluth Company office"
                     ]
                 },
                 {
                     "Which real viral video did the show parody with a video by George Michael?": [
                         "The Star Wars Kid",
                         "Leave Britney Alone",
                         "Sneezing Panda",
                         "Trapped in an Elevator",
                         "Most Shirts Worn at One Time",
                         "David After Dentist"
                     ]
                 },
                 {
                     "What is Misses Featherbottom's first name?": [
                         "<phoneme alphabet=\"ipa\" ph=\"fɚlɪsiə\">Felitia</phoneme>",
                         "Cindy",
                         "Penelope",
                         "Hortecia",
                         "Soliloquy",
                         "Ovaria"
                     ]
                 },
                 {
                     "In the season two episode, Sword of Destiny, over which geographical area does Doctor Stein never claim to be the best doctor?": [
                         "Newport Beach",
                         "Orange County",
                         "Southern California",
                         "California"
                     ]
                 },
                 {
                     "In the season two episode, Sword of Destiny, which operation does Doctor Stein NOT perform on Michael?": [
                         "Swapping his middle and index fingers",
                         "Shortening his calf muscle",
                         "Appendectomy",
                         "Removing an abcess on his abdominal wall"
                     ]
                 },
                 {
                     "In the season two episode, Sword of Destiny, Tony Wonder's website is plagued by pop up ads for what?": [
                         "Family Guy",
                         "The Cornballer",
                         "The Brady Bunch Movie",
                         "Boyfights",
                         "Klimpy's Restaurant"
                     ]
                 },
                 {
                     "In the season two episode, Meat the Veals, which group abducts Lucille to take her to the vow renewal ceremony?": [
                         "Jobe, Franklin, and George Senior",
                         "George Senior and Buster",
                         "Tobias, George Senior, and Jobe"
                     ]
                 },
                 {
                     "Who has never been knocked out by Franklin dipped in ether?": [
                         "Lindsay <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "George Bluth",
                         "Lucille Bluth",
                         "Buster Bluth",
                         "Jobe Bluth"
                     ]
                 },
                 {
                     "What is Pastor Veal's first name?": [
                         "Terry",
                         "Timothy",
                         "Thomas",
                         "Trevor",
                         "Teddy"
                     ]
                 },
                 {
                     "Which actor portrays Phillip Litt?": [
                         "Zach Braff",
                         "Dave Atell",
                         "Jeff Garlin",
                         "Ed Begley Junior",
                         "Ed Helms",
                         "John Michael Higgins"
                     ]
                 },
                 {
                     "In the season two episode, Spring Breakout, the rehab facility Shady Pines is named after a retirement community in which show that Mitchell Hurwitz previously wrote for?": [
                         "The Golden Girls",
                         "Designing Women",
                         "Family Guy",
                         "The Simpsons",
                         "Step By Step"
                     ]
                 },
                 {
                     "Which event prompts Lucille to do her chicken dance for the first time?": [
                         "A potential Bluth Company investor backing out",
                         "Buster refusing to participate in Motherboy",
                         "George refusing to engage in conjugal relations in prison",
                         "Michael threatening to move to Phoenix",
                         "Lindsay hesitating to discipline Maybe"
                     ]
                 },
                 {
                     "In the season two finale, Righteous Brothers, why does George Michael decide not to break up with Ann?": [
                         "He thinks she might kiss him at a protest",
                         "He thinks Maybe might be his biological cousin",
                         "He is tired of Michael trying to control him",
                         "He wants to make Maybe jealous",
                         "He wants to stop her from dating Jobe"
                     ]
                 },
                 {
                     "Which brand name finally makes Buster realize that Oscar is his real father?": [
                         "Pop Secret",
                         "Green Giant",
                         "Double Take",
                         "Ovaltine",
                         "Man which",
                         "Big Daddy's"
                     ]
                 },
                 {
                     "In the season two finale Righteous Brothers, which Bryan Adams song does Franklin sing on his <say-as interpret-as=\"spell-out\">CD</say-as>?": [
                         "Everything I do I do it for you",
                         "Please forgive me",
                         "Heat of the night",
                         "Getaway",
                         "Run to you",
                         "Heaven"
                     ]
                 },
                 {
                     "In the season three premiere, The Cabin Show, what was Jim Cramer's rating for Bluth Company stock before upgrading it to Don't Buy?": [
                         "Triple sell",
                         "Double negative",
                         "Two thumbs down",
                         "Dump it",
                         "Run away",
                         "Widespread panic"
                     ]
                 },
                 {
                     "On the website, I'm Oscar Dot Com, Oscar has the same inmate number as which famous fictional inmate?": [
                         "John Valjohn",
                         "Ivan Denisovich",
                         "The count of Monte Cristo",
                         "Rodion Raskolnikov"
                     ]
                 },
                 {
                     "In the season three premiere, The Cabin Show, who does Lucille refer to as some sort of scientist?": [
                         "Tom Cruise",
                         "John Travolta",
                         "Kirstie Alley"
                     ]
                 },
                 {
                     "In the season three episode, For British Eyes Only, which vehicle does Michael give Lindsay after she asks for a new car?": [
                         "The cabin car",
                         "The stair car",
                         "The segway",
                         "The Mini Cooper",
                         "His bicycle"
                     ]
                 },
                 {
                     "What is the name of Rita Leeds' uncle?": [
                         "Trevor",
                         "Trent",
                         "Thomas",
                         "Timothy",
                         "Taylor"
                     ]
                 },
                 {
                     "When daylight saving time is not in effect, what is the time difference between Wee Britain and surrounding Orange County?": [
                         "Wee Britain is eight hours ahead",
                         "Wee Britain is nine hours ahead",
                         "Wee Britain is six hours behind",
                         "Wee Britain is seven hours behind",
                         "Wee Britain is five hours ahead"
                     ]
                 },
                 {
                     "In what order were the Bluth Company attorneys hired?": [
                         "Barry Zuckerkorn, Wayne Jarvis, Bob Loblaw",
                         "Barry Zuckerkorn, Bob Loblaw, Wayne Jarvis",
                         "Wayne Jarvis, Barry Zuckerkorn, Bob Loblaw",
                         "Wayne Jarvis, Bob Loblaw, Barry Zuckerkorn",
                         "Bob Loblaw, Wayne Jarvis, Barry Zuckerkorn",
                         "Bob Loblaw, Barry Zuckerkorn, Wayne Jarvis"
                     ]
                 },
                 {
                     "In the season three episode, Forget Me Now, why does Buster knock Rita to the ground?": [
                         "She is wearing a seal backpack",
                         "She stares at his hook",
                         "She ignores him",
                         "She invites him to swim in the ocean",
                         "She touches his waist"
                     ]
                 },
                 {
                     "Which guest star also appeared in Happy Days, where he was introduced in order to appeal to younger audiences?": [
                         "Scott <phoneme alphabet=\"ipa\" ph=\"beɪoʊ\">Baio</phoneme>",
                         "Dave Thomas",
                         "Ben Stiller",
                         "Martin Mull",
                         "Mark Cherry",
                         "Andy Rick<phoneme alphabet=\"ipa\" ph=\"təɹ\">ter</phoneme>"
                     ]
                 },
                 {
                     "In which month did the season three premiere air?": [
                         "September two thousand five",
                         "November two thousand five",
                         "September two thousand four",
                         "November two thousand four",
                         "September two thousand six",
                         "November two thousand six"
                     ]
                 },
                 {
                     "What is the name of Bob Loblaw's daughter?": [
                         "Hope",
                         "Shirley",
                         "Emma",
                         "<phoneme alphabet=\"ipa\" ph=\"mɔv\">Mauve</phoneme>",
                         "Tina",
                         "Penny"
                     ]
                 },
                 {
                     "Who do Lindsay and Tobias each coach in the Miss Inner Beauty Pageant?": [
                         "Lindsay coaches Hope Loblaw, Tobias coaches Ann",
                         "Lindsay coaches Hope Loblaw, Tobias coaches Maybe",
                         "Lindsay coaches Maybe, Tobias coaches Ann",
                         "Lindsay coaches Maybe, Tobias coaches Hope Loblaw",
                         "Lindsay coaches Ann, Tobias coaches Maybe",
                         "Lindsay coaches Ann, Tobias coaches Hope Loblaw"
                     ]
                 },
                 {
                     "Which song does Ann sing in the Miss Inner Beauty Pageant?": [
                         "We Three Kings",
                         "Whom Shall I Fear",
                         "Just Be Held",
                         "Amazing Grace",
                         "Give Me Your Eyes",
                         "City On Our Knees"
                     ]
                 },
                 {
                     "In the season three episode, Mister F, what does Michael give George Michael for his birthday?": [
                         "A Jack Welch suit and a copy of Quicken",
                         "A jet pack and a copy of Quickbooks",
                         "A receipt scanner and a subscription to Salesforce",
                         "A Brooks Brothers tie and a copy of Getting to Yes"
                     ]
                 },
                 {
                     "In the season three episode, Mister F, Michael finds Tobias on the floor after he got how many hair plugs in one sitting?": [
                         "Four thousand",
                         "Five thousand",
                         "Ten thousand",
                         "Eight thousand"
                     ]
                 },
                 {
                     "Maybe receives her first F for which film?": [
                         "Love Indubitably",
                         "The Ocean Walker",
                         "<phoneme alphabet=\"ipa\" ph=\"leɪ kuzɑŋ dɑŋd͡ʒɚɹɝ\">Les Cousins Dangereux</phoneme>",
                         "Homeless Dad",
                         "Almost Cousins",
                         "<phoneme alphabet=\"ipa\" ph=\"gæŋgi\">Gangee</phoneme>",
                         "A Thoroughly Polite Dustup",
                         "The Young Man and the Beach",
                         "Snowboarding School Two"
                     ]
                 },
                 {
                     "Which of Maybe's film scripts does Rita contribute content for?": [
                         "The Ocean Walker",
                         "Love Indubitably",
                         "Almost Cousins",
                         "A Thoroughly Polite Dustup",
                         "The Young Man and the Beach",
                         "Homeless Dad",
                         "Snowboarding School Two"
                     ]
                 },
                 {
                     "In the season three episode, The Ocean Walker, how long does Rita claim to be able to hold her breath?": [
                         "Twenty minutes",
                         "Ten minutes",
                         "Fifteen minutes",
                         "Thirty minutes",
                         "Two hours",
                         "Eighty minutes"
                     ]
                 },
                 {
                     "In the season three episode, The Ocean Walker, which show does Michael watch with George Senior over the phone while pretending Rita is in the shower?": [
                         "E True Hollywood Story",
                         "Access Hollywood",
                         "Entertainment Tonight",
                         "<say-as interpret-as=\"spell-out\">TMZ</say-as>"
                     ]
                 },
                 {
                     "In the season three episode, Prison Break In, how does Michael console himself after his breakup with Rita?": [
                         "Playing guitar",
                         "Eating an entire thing of candy beans",
                         "Taking George Michael on a fishing trip",
                         "Buying a new bicycle"
                     ]
                 },
                 {
                     "In the season three episode, Prison Break In, which screenplay does Maybe ask George Michael to read for her?": [
                         "New Warden",
                         "Homeless Dad",
                         "Almost Cousins",
                         "<phoneme alphabet=\"ipa\" ph=\"leɪ kuzɑŋ dɑŋd͡ʒɚɹɝ\">Les Cousins Dangereux</phoneme>",
                         "Love Indubitably"
                     ]
                 },
                 {
                     "In the season three episode, Prison Break In, who does Michael refer to as. Her?": [
                         "Lucille Bluth",
                         "Lindsay <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Ann Veal",
                         "Maybe <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Rita Leeds",
                         "Maggie Lizer"
                     ]
                 },
                 {
                     "In the season three episode, Making a Stand, Jobe wants to sell Bluth Company blueprints to our Mexican friends down in which country?": [
                         "Colombia",
                         "Portugal",
                         "Venezuela",
                         "El Salvador",
                         "Nicaragua",
                         "Guatemala"
                     ]
                 },
                 {
                     "In the season three episode, Making a Stand, which of the following is NOT part of a competition strategy used by one of the two banana stands?": [
                         "Distributing flyers on the boardwalk",
                         "A banana suit",
                         "A jetpack",
                         "Fireballs",
                         "Scantily clad women",
                         "An aggressive slogan"
                     ]
                 },
                 {
                     "In the season three episode, Making a Stand, the Guatemalan painter Rolondo has taken improv classes at which theater?": [
                         "The Groundlings",
                         "Upright Citizens Brigade",
                         "Improv Olympic",
                         "The Annoyance",
                         "People's Improv Theater",
                         "Magnet Theater"
                     ]
                 },
                 {
                     "In the season three episode, S.O.B's, what is written in the letter from the Openings school that Lindsay and Tobias don't read?": [
                         "Maybe is about to be expelled",
                         "Maybe has been sleeping at the school",
                         "Maybe is a secret movie studio executive",
                         "Maybe is failing spelling",
                         "Maybe is posing as her altar ego Surely"
                     ]
                 },
                 {
                     "In the season three episode, S.O.B's, which Rick<phoneme alphabet=\"ipa\" ph=\"təɹ\">ter</phoneme> quintuplet is poisoned by the muffin man?": [
                         "Donnie",
                         "Andy",
                         "Emmett",
                         "Rocky",
                         "Chareth"
                     ]
                 },
                 {
                     "Which Rick<phoneme alphabet=\"ipa\" ph=\"təɹ\">ter</phoneme> quintuplet does not like to have his face shown on television?": [
                         "Emmett",
                         "Donnie",
                         "Andy",
                         "Rocky",
                         "Chareth"
                     ]
                 },
                 {
                     "Which actor portrays Judge Reinhold?": [
                         "Edward Reinhold Junior",
                         "Seth Rogen",
                         "Martin Mull",
                         "Bob Glouberman",
                         "Mac Brandt",
                         "Chris Diamantopoulos"
                     ]
                 },
                 {
                     "In the season three episode, Fakin It, who is Lindsay's love interest?": [
                         "The son of Buster's hospital roommate",
                         "Tom Jane",
                         "James Carr",
                         "Moses Taylor",
                         "Larry Middlemen",
                         "Marky Bark"
                     ]
                 },
                 {
                     "In the season three episode, Fakin It, which issue is Lindsay temporarily passionate about?": [
                         "The right to pull the plug",
                         "Saving the wetlands",
                         "Removing the ten commandments from the county courthouse",
                         "Supporting the Ladies of Literacy",
                         "Monkey freedom",
                         "A larger free speech zone"
                     ]
                 },
                 {
                     "Which character is played by Justine Bateman?": [
                         "Nellie",
                         "Starla",
                         "Jan Eagleman",
                         "Rebel Alley",
                         "Young Lucille Bluth",
                         "DeBrie Bar Dough",
                         "Jobe's wife"
                     ]
                 },
                 {
                     "In the season three episode, Family Ties, when Michael first arrives at the office, one of the computers an employee is holding is actually what?": [
                         "A toaster oven",
                         "A homefill",
                         "A record player",
                         "A boom box",
                         "A typewriter"
                     ]
                 },
                 {
                     "In the season three episode, Family Ties, why is George sitting in Buster's room surrounded by computer equipment from the Bluth Company office?": [
                         "He is trying to delete the hard drives",
                         "He is in the midst of a Black Friday firing spree",
                         "He is searching for information on N Bluth"
                     ]
                 },
                 {
                     "In the season three episode, Exit Strategy, what is the name of the nurse who falls in love with supposedly comatose Buster?": [
                         "Adelaide",
                         "Victoria",
                         "Sydney",
                         "Augusta",
                         "Benalla"
                     ]
                 },
                 {
                     "How many phone calls did Buster make to radio stations while supposedly in a coma?": [
                         "Fifteen",
                         "Eight",
                         "Thirteen",
                         "Twenty two",
                         "Nineteen",
                         "Twenty four"
                     ]
                 },
                 {
                     "In the season three episode, Exit Strategy, why did Maybe lose her movie studio job?": [
                         "George Michael invited her coworkers to her sweet sixteen surprise party",
                         "Tobias dropped her off at work in the stair car",
                         "Lindsay and Lucille attended a studio tour drunk",
                         "Mort Meyers discovered her high school math homework"
                     ]
                 },
                 {
                     "What was the title of the season three finale?": [
                         "Development Arrested",
                         "It Gets Better",
                         "Blockheads",
                         "Off the Hook",
                         "Senioritis"
                     ]
                 },
                 {
                     "In the season three finale, Development Arrested, what was Jim Cramer's rating for Bluth Company stock after upgrading it from Don't Buy?": [
                         "Risky",
                         "Double negative",
                         "Two thumbs down",
                         "Triple sell",
                         "Run away",
                         "Widespread panic"
                     ]
                 },
                 {
                     "In the season three finale, Development Arrested, who makes Lindsay realize she is almost forty?": [
                         "Stan Sitwell",
                         "George Bluth",
                         "Barry Zuckerkorn",
                         "Lucille Austero",
                         "Doctor Fishman",
                         "Larry Middlemen"
                     ]
                 },
                 {
                     "In which month was season four released on Netflix?": [
                         "May two thousand thirteen",
                         "November two thousand twelve",
                         "September two thousand twelve",
                         "June two thousand thirteen",
                         "August two thousand twelve",
                         "June two thousand twelve"
                     ]
                 },
                 {
                     "In the season four premiere, Flight of the Phoenix, why has George Michael been given an extra large dorm room?": [
                         "The housing office thought he was two people",
                         "P Hound is scheduled to move in at the beginning of second semester",
                         "The housing administrator is a Milford Academy graduate",
                         "The university is allowing family to stay in dorms during the recession"
                     ]
                 },
                 {
                     "What is the name of the in flight magazine for Out West Airlines?": [
                         "Altitude",
                         "Hemispheres",
                         "En Route",
                         "Sky",
                         "Spirit"
                     ]
                 },
                 {
                     "In the season four episode, Borderline Personalities, which of the following is NOT one of Oscar's friends?": [
                         "Divine Spirit",
                         "Heartfire",
                         "Doctor Norman",
                         "China Garden"
                     ]
                 },
                 {
                     "Where did Barry Zuckerkorn go to law school?": [
                         "The Virgin Islands",
                         "Barbados",
                         "Colombia",
                         "Belize",
                         "Puerto Rico",
                         "Venezuela"
                     ]
                 },
                 {
                     "In the season four episode, Borderline Personalities, which actor portrays the young Barry Zuckerkorn?": [
                         "Max Winkler",
                         "John Slattery",
                         "Allan Wasserman",
                         "Mac Brandt",
                         "Seth Rogen",
                         "Todd Jeffries"
                     ]
                 },
                 {
                     "The season four episode, Indian Takers, revolves around which character?": [
                         "Lindsay",
                         "Tobias",
                         "Michael",
                         "Maybe",
                         "George Michael",
                         "Jobe"
                     ]
                 },
                 {
                     "In the season four episode, Indian Takers, which item is C.W. Swappigan's no longer accepting for barter?": [
                         "Hotel soaps",
                         "Butter",
                         "Cocktail trays",
                         "High heeled shoes",
                         "Candlesticks"
                     ]
                 },
                 {
                     "Which actor portrays DeBrie Bar Dough?": [
                         "Maria Bamford",
                         "Debra Mooney",
                         "Jessica Chaffin",
                         "Kristen Wiig",
                         "Becky Thyre",
                         "Nancy Lantis"
                     ]
                 },
                 {
                     "In the season four episode, The B Team, which part does Michael want Rebel Alley to play in the movie about the Bluth family?": [
                         "Tracey Bluth",
                         "Maybe <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Lindsay <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Rita Leeds",
                         "Sally Sitwell",
                         "Maggie Lizer"
                     ]
                 },
                 {
                     "In the season four episode, The B Team, what team does Michael assemble to meet with Ron Howard about the Bluth Family movie?": [
                         "Stefen Gentles, Andy Rick<phoneme alphabet=\"ipa\" ph=\"təɹ\">ter</phoneme>, and Carl Weathers",
                         "Carl Weathers, Donnie Rick<phoneme alphabet=\"ipa\" ph=\"təɹ\">ter</phoneme>, and Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Rebel Alley, Stefen Gentles, and Brian Grazer",
                         "Mike Dawkins, Carl Weathers, and Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Carl Weathers, Jobe Bluth, and Franklin",
                         "Stefen Gentles, Carl Weathers, and Maybe <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>"
                     ]
                 },
                 {
                     "In the season four episode, The B Team, which of the following is NOT mentioned as one of Imagine Entertainment's films?": [
                         "Life of Pi",
                         "Cocoon",
                         "How the Grinch Stole Christmas",
                         "Splash",
                         "Curious George",
                         "The DaVinci Code",
                         "Willow"
                     ]
                 },
                 {
                     "The season four episode, A New Start, revolves around which character?": [
                         "Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Lindsay <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Michael Bluth",
                         "George Michael Bluth",
                         "Buster Bluth",
                         "Jobe Bluth"
                     ]
                 },
                 {
                     "In the season four episode, A New Start, which section of the book, Eat Pray Love, do Lindsay and Tobias both skip?": [
                         "Love",
                         "Eat",
                         "Pray"
                     ]
                 },
                 {
                     "In the season four episode, A New Start, which show do the Indian interns say has just reached India?": [
                         "Laugh In",
                         "Baywatch",
                         "Melrose Place",
                         "The O.C.",
                         "In Living Color",
                         "Family Ties"
                     ]
                 },
                 {
                     "In the season four episode, Double Crossers, who said, Do I look like someone who eats at C.W. Swappigan's?": [
                         "Herbert Love",
                         "George Bluth",
                         "Andy Rick<phoneme alphabet=\"ipa\" ph=\"təɹ\">ter</phoneme>",
                         "Lindsay <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Jobe Bluth",
                         "Lucille Bluth"
                     ]
                 },
                 {
                     "In the season four episode, Double Crossers, who describes George Senior's testosterone levels as somewhere in the baby range?": [
                         "Doctor Norman",
                         "Doctor Stein",
                         "Doctor Fishman"
                     ]
                 },
                 {
                     "The season four episode, Double Crossers, features George Senior running a sweat lodge in the desert. Which main characters do not appear in this episode?": [
                         "Tobias, Maybe, and George Michael",
                         "George Michael, Lucille, and Lindsay",
                         "Maybe, Lucille, and Buster",
                         "Buster, Tobias, and Jobe",
                         "Jobe, George Michael, and Oscar",
                         "Buster, Lucille, and George Michael"
                     ]
                 },
                 {
                     "Which television network airs the show, And As It Is Such, So Also As Such Is It Unto You?": [
                         "Miracle Network",
                         "Hope Channel",
                         "Glorystar Channel",
                         "Trinity Broadcasting Network",
                         "Sky Angel",
                         "Grace T.V."
                     ]
                 },
                 {
                     "In the season four episode, Colony Collapse, Jobe survived for two weeks in a storage locker eating only what?": [
                         "Red licorice vines",
                         "Wheat Thins",
                         "Junior Mints",
                         "Flamin Hot Cheetos",
                         "Marshmallows",
                         "Pumpkin Spice Twinkies"
                     ]
                 },
                 {
                     "How many exclamation points are in the name, Steve Holt Pest Control Business?": [
                         "One",
                         "Zero",
                         "Two",
                         "Three"
                     ]
                 },
                 {
                     "What is the name of Marky Bark's pet ostrich?": [
                         "Cindy",
                         "Harry",
                         "Penelope",
                         "Jubilee",
                         "Ozark",
                         "Trisha"
                     ]
                 },
                 {
                     "In the season four episode, Red Hairing, what fake name does Lindsay use to introduce herself to Herbert Love?": [
                         "Cindy Featherbottom",
                         "Sharon Cutestory",
                         "Lindsay Maharris"
                     ]
                 },
                 {
                     "In the season four episode, Red Hairing, what does the crowd chat at Cinco de Cuatro?": [
                         "Put up this wall",
                         "Don't buy",
                         "Speech",
                         "Risky"
                     ]
                 },
                 {
                     "Which actor portrays Argyle Austero?": [
                         "Tommy Tune",
                         "Terry Crews",
                         "John Slattery",
                         "Jay Johnston",
                         "Scott Vance",
                         "Lonny Ross"
                     ]
                 },
                 {
                     "In the season four episode, Smashed, who is NOT in the group session led by Tobias at the Austerity clinic?": [
                         "Marky Bark",
                         "DeBrie Bar Dough",
                         "Emmett Rick<phoneme alphabet=\"ipa\" ph=\"təɹ\">ter</phoneme>",
                         "Mark Cherry"
                     ]
                 },
                 {
                     "What is the slogan of the Austerity clinic?": [
                         "A full service way to live without",
                         "Nothing is so bad a drink won’t make it worse",
                         "When you smile, your brain thinks you’re happy",
                         "Your day will go the way the corners of your mouth turn",
                         "Dance your way to the next phase of your life"
                     ]
                 },
                 {
                     "What is the name of China Garden's aunt?": [
                         "Olive Garden",
                         "Jade Dragon",
                         "Misses Oh",
                         "Panda Garden",
                         "Lucky Dynasty"
                     ]
                 },
                 {
                     "In the season four episode, Queen B, why does Lucille push Oscar away on the night of Cinco de Cuatro?": [
                         "She notices a Lucille Austero sticker on his pants",
                         "She notices a blue handprint on his chest",
                         "She finds out he has been filling in for George who has low testosterone"
                     ]
                 },
                 {
                     "What is DeBrie Bar Dough's part in the show, Fantastic Four: An Action Musical?": [
                         "Sue Storm",
                         "Misses Fantastic",
                         "The Thing",
                         "Electra",
                         "Trinity",
                         "Babydoll"
                     ]
                 },
                 {
                     "In the season four episode, A New Attitude, Jobe and Tony Wonder, bond at Tony Wonder's house over what?": [
                         "Wine and popcorn",
                         "Mike's Hard Lemonade and ice cream",
                         "Zima and Chinese food",
                         "Strawberry Andre and Inn En Out"
                     ]
                 },
                 {
                     "The actor who plays Tony Wonder is married in real life to the actor who plays which other character?": [
                         "Sally Sitwell",
                         "Trisha Thoon",
                         "Starla",
                         "DeBrie Bar Dough",
                         "Kitty Sanchez",
                         "Rebel Alley"
                     ]
                 },
                 {
                     "What is the name of Pastor Veal's co-host on the show, And As It Is Such, So Also As Such Is It Unto You?": [
                         "Father Marsala",
                         "Father Parmigiana",
                         "Father Tartare",
                         "Father Ossobuco"
                     ]
                 },
                 {
                     "The season four episode, Senioritis, revolves around which character?": [
                         "Maybe",
                         "Lucille",
                         "George",
                         "Oscar",
                         "George Michael",
                         "Buster"
                     ]
                 },
                 {
                     "In the season four episode, Senioritis, how does Maybe plan to teach her parents a lesson?": [
                         "Failing out of high school",
                         "Travelling to India to film a movie",
                         "Going back to repeat her senior year of high school"
                     ]
                 },
                 {
                     "In the season four episode, Senioritis, who does Maybe date until she determines that he's an undercover cop?": [
                         "Perfecto Tellas",
                         "Paul Huan",
                         "Steve Holt",
                         "Rocky Rick<phoneme alphabet=\"ipa\" ph=\"təɹ\">ter</phoneme> Wang"
                     ]
                 },
                 {
                     "In the season four episode, It Gets Better, we learn that George Michael was in a love triangle his sophomore year of college with which two people?": [
                         "Ray and Becky",
                         "Maybe and Perfecto",
                         "Jobe and the Spanish housewife",
                         "Ann and Mark Cherry",
                         "P Hound and Ann",
                         "Jobe and Rebel Alley"
                     ]
                 },
                 {
                     "Where did George Michael study abroad in college?": [
                         "Spain",
                         "Portugal",
                         "Italy",
                         "France",
                         "Monaco",
                         "Luxembourg"
                     ]
                 },
                 {
                     "In the season four episode, It Gets Better, how much does George Michael pay to trademark the name Fakeblock?": [
                         "Five thousand dollars",
                         "Three times ninety nine cents",
                         "Three thousand dollars",
                         "Two thousand dollars",
                         "Seven thousand dollars",
                         "Six thousand dollars"
                     ]
                 },
                 {
                     "The season four episode, Off the Hook, revolves around which character?": [
                         "Buster",
                         "George",
                         "Maybe",
                         "Lucille",
                         "Tobias",
                         "Jobe"
                     ]
                 },
                 {
                     "In the season four episode, Off the Hook, which location does Buster destroy as a drone pilot?": [
                         "A hospital in Spain",
                         "A school in Brazil",
                         "A nursing home in Peru",
                         "A toy store in Bosnia",
                         "A petting zoo in Northern Ireland",
                         "A church in Greece"
                     ]
                 },
                 {
                     "In the season four episode, Off the Hook, why is Buster discharged from the army?": [
                         "He fails the Q-test",
                         "He fails to scale the wall",
                         "He refuses to operate a drone remotely",
                         "He wears a breakaway soldier costume instead of his uniform",
                         "Lucille bribes the Colonel to discharge him"
                     ]
                 },
                 {
                     "In the season four episode, Blockheads, why does George Michael fire Maybe from Fakeblock?": [
                         "For over hyping the company",
                         "For skipping work to produce the movie, <phoneme alphabet=\"ipa\" ph=\"gæŋgi\">Gangee</phoneme> on the Ganges",
                         "For telling Rebel Alley his real name",
                         "For violating a patent on security software"
                     ]
                 },
                 {
                     "In the season four episode, Blockheads, Jobe hires a group of people from which country to build the wall between the U.S. and Mexico?": [
                         "Mongolia",
                         "Colombia",
                         "Canada",
                         "Vietnam",
                         "Venezuela",
                         "Guatemala"
                     ]
                 },
                 {
                     "In the season four episode, Blockheads, Buster is arrested for the murder of whom?": [
                         "Lucille Austero",
                         "Rebel Alley",
                         "Tony Wonder",
                         "Officer Taylor",
                         "Doctor Stein",
                         "Stan Sitwell"
                     ]
                 },
                 {
                     "What is Maybe <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>'s date of birth?": [
                         "September twenty second, nineteen ninety",
                         "December twenty fourth, nineteen eighty seven",
                         "January second, nineteen eighty five",
                         "May first, nineteen eighty nine"
                     ]
                 },
                 {
                     "In seasons one through four, what percentage of episodes did Maybe <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme> appear in?": [
                         "Ninety percent",
                         "Ninety four percent",
                         "Eighty seven percent",
                         "Eighty eight percent",
                         "Ninety six percent",
                         "Seventy nine percent"
                     ]
                 },
                 {
                     "How much money did the Bluth family spend on fertility services for Lindsay and Tobias?": [
                         "One hundred thirty thousand dollars",
                         "Two hundred thousand dollars",
                         "Two hundred thirty thousand dollars",
                         "One hundred eighty thousand dollars",
                         "One hundred ninety thousand dollars",
                         "Two hundred twenty thousand dollars"
                     ]
                 },
                 {
                     "In what year did the <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme> family move from Boston to Newport Beach?": [
                         "Two thousand three",
                         "Two thousand one",
                         "Two thousand two",
                         "Two thousand four",
                         "Nineteen ninety nine",
                         "Nineteen ninety eight"
                     ]
                 },
                 {
                     "What is Ann Veal's middle name?": [
                         "Paul",
                         "Terry",
                         "Marsala",
                         "Kernel",
                         "Lynn",
                         "V"
                     ]
                 },
                 {
                     "Which of the following are some of the names Michael Bluth calls Ann Veal?": [
                         "Plant, Yam, Egg, Mouth, and Blank",
                         "Ann Hog, Yam, Mouth, Fog, and Blank",
                         "Plant, Blank, Egg, Plain, and Blanket",
                         "Blank, Floor, Yam, Ann Hog, and Plain",
                         "Bland, Egg, Block, Blank, and Mouth",
                         "Yam, Mouth, Plain, Plant, and Block"
                     ]
                 },
                 {
                     "Which character did Mitchell Hurwitz originally intend to be played by a different actor in each appearance?": [
                         "Ann Veal",
                         "Marta <phoneme alphabet=\"ipa\" ph=\"ɛstɹeɪjə\">Estrella</phoneme>",
                         "Kitty Sanchez",
                         "Lupe"
                     ]
                 },
                 {
                     "What country is Marta <phoneme alphabet=\"ipa\" ph=\"ɛstɹeɪjə\">Estrella</phoneme> from?": [
                         "Colombia",
                         "Guatemala",
                         "Nicaragua",
                         "Ecuador",
                         "Venezuela",
                         "El Salvador"
                     ]
                 },
                 {
                     "What are the names of Marta <phoneme alphabet=\"ipa\" ph=\"ɛstɹeɪjə\">Estrella</phoneme>'s sons?": [
                         "<phoneme alphabet=\"ipa\" ph=\"əmɑbleɪ\">Amable</phoneme> and Cortezio",
                         "<phoneme alphabet=\"ipa\" ph=\"iɦoʊ\">Hijo</phoneme> and Planeta",
                         "Cometa and Fernando"
                     ]
                 },
                 {
                     "In seasons one through four, how many episodes did Marta <phoneme alphabet=\"ipa\" ph=\"ɛstɹeɪjə\">Estrella</phoneme> appear in?": [
                         "Seven",
                         "Eight",
                         "Six",
                         "Five",
                         "Four"
                     ]
                 },
                 {
                     "In seasons one through four, what percentage of episodes did Jobe Bluth appear in?": [
                         "Ninety seven percent",
                         "Ninety eight percent",
                         "Ninety five percent",
                         "Ninety four percent",
                         "Ninety six percent",
                         "Ninety three percent"
                     ]
                 },
                 {
                     "What reason does Jobe give for having started his magic career?": [
                         "To get out of gym class",
                         "To destroy George Senior's yacht",
                         "To make use of his girlfriend's pet doves",
                         "To avoid jury duty"
                     ]
                 },
                 {
                     "In seasons one through four, how many episodes did Steve Holt appear in?": [
                         "Thirteen",
                         "Eleven",
                         "Sixteen",
                         "Nine",
                         "Fifteen",
                         "Nineteen"
                     ]
                 },
                 {
                     "Which seasons does Bob Loblaw appear in?": [
                         "Three and four",
                         "Two and three",
                         "Two and four"
                     ]
                 },
                 {
                     "What is George Michael Bluth's date of birth?": [
                         "November second, nineteen ninety",
                         "September twenty second, nineteen ninety",
                         "December twenty fourth, nineteen eighty seven",
                         "January second, nineteen eighty five",
                         "May first, nineteen eighty nine"
                     ]
                 },
                 {
                     "Over seasons one through four, how many episodes did not feature an appearance by George Michael Bluth?": [
                         "Seven",
                         "Eight",
                         "Five",
                         "Three",
                         "Four",
                         "Six"
                     ]
                 },
                 {
                     "In the season two episode The Immaculate Election, what percentage of the vote for student council does George Michael receive?": [
                         "Three percent",
                         "Two percent",
                         "Two point five percent",
                         "Four percent",
                         "One point nine percent",
                         "Two point eight percent"
                     ]
                 },
                 {
                     "George Michael develops Fakeblock to get into which school?": [
                         "Juliard",
                         "Oberlin",
                         "Berkeley College of Music",
                         "Harvard",
                         "N Y U"
                     ]
                 },
                 {
                     "George Maharis and Perfecto Tellas were named after real life people who had which profession?": [
                         "Actors",
                         "Magicians",
                         "Radio hosts",
                         "Opera singers",
                         "Handball players",
                         "Speed skaters"
                     ]
                 },
                 {
                     "What is Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>'s middle name?": [
                         "Onyango",
                         "Adolfo",
                         "Gerhard",
                         "Reinhold",
                         "Zelig",
                         "Waldo"
                     ]
                 },
                 {
                     "In seasons one through four, what percentage of episodes did Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme> appear in?": [
                         "Eighty seven percent",
                         "Eighty nine percent",
                         "Ninety percent",
                         "Ninety one percent",
                         "Ninety three percent",
                         "Ninety two percent"
                     ]
                 },
                 {
                     "Which mark appears in Annyong Bluth's real name, Hello?": [
                         "A hyphen",
                         "An exclamation point",
                         "A circumflex",
                         "An overdot",
                         "An apostrophe",
                         "A circle"
                     ]
                 },
                 {
                     "Over seasons one through four, how many episodes did Annyong Bluth appear in?": [
                         "Twelve",
                         "Nine",
                         "Eleven",
                         "Ten",
                         "Thirteen",
                         "Fourteen"
                     ]
                 },
                 {
                     "What were Lucille and Buster arguing about when Lucille angrily signed the forms to adopt Annyong?": [
                         "Cottage cheese",
                         "<phoneme alphabet=\"ipa\" ph=\"mɑʒɑŋ\">mahjong</phoneme>",
                         "A sweater",
                         "Jobe",
                         "Vodka",
                         "Army"
                     ]
                 },
                 {
                     "What does the word Hel-loh mean in the Korean language?": [
                         "Day",
                         "Goodbye",
                         "Son",
                         "Chicken",
                         "Ocean",
                         "Travel"
                     ]
                 },
                 {
                     "Over seasons one through four, what percentage of episodes does Buster Bluth appear in?": [
                         "Eighty five percent",
                         "Eighty seven percent",
                         "Eighty nine percent",
                         "Ninety one percent",
                         "Ninety two percent",
                         "Ninety four percent"
                     ]
                 },
                 {
                     "How many hours does Buster spend controlling drone planes for the army before finding out he is controlling real weapons?": [
                         "Seventy two hours",
                         "Thirty six hours",
                         "Eighteen hours",
                         "Twenty six hours",
                         "Forty eight hours"
                     ]
                 },
                 {
                     "The name of Buster's nurse, Nurse Ratchet, is a play on the name of a nurse who performs lobotomies in which book?": [
                         "One Flew Over the Cuckoo's Nest",
                         "Slaughterhouse Five",
                         "Catch Twenty Two",
                         "Brave New World",
                         "A Clockwork Orange",
                         "Cat's Cradle"
                     ]
                 },
                 {
                     "What is the name of Rebel Alley's son?": [
                         "Lem",
                         "Guy",
                         "Frederick",
                         "Tripp",
                         "Ron",
                         "Benedict"
                     ]
                 },
                 {
                     "What musical instrument does Rebel Alley play?": [
                         "The bagpipes",
                         "The woodblock",
                         "The Chapman stick",
                         "The fiddle",
                         "The flute",
                         "The yabahar"
                     ]
                 },
                 {
                     "In what year was Rebel Alley's son born?": [
                         "Two thousand eight",
                         "Nineteen ninety nine",
                         "Two thousand four",
                         "Two thousand six",
                         "Nineteen ninety eight",
                         "Two thousand one"
                     ]
                 },
                 {
                     "In seasons one through four, how many episodes did not feature an appearance by Lindsay <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>?": [
                         "Seven",
                         "Six",
                         "Five",
                         "Four",
                         "Eight",
                         "Nine"
                     ]
                 },
                 {
                     "What is Michael Bluth's birthday?": [
                         "December fourteenth",
                         "December twenty fourth",
                         "March twelfth",
                         "April first",
                         "September sixteenth",
                         "February thirteenth"
                     ]
                 },
                 {
                     "Over seasons one through four, how many episodes did Lucille Austero appear in?": [
                         "Twenty one",
                         "Nineteen",
                         "Seventeen",
                         "Eighteen",
                         "Sixteen",
                         "Twenty two"
                     ]
                 },
                 {
                     "In which year does Lucille Austero decide to run for congress?": [
                         "Two thousand twelve",
                         "Two thousand four",
                         "Two thousand six",
                         "Two thousand ten",
                         "Two thousand two",
                         "Two thousand eight"
                     ]
                 },
                 {
                     "In what year was Michael Bluth born?": [
                         "Nineteen sixty seven",
                         "Nineteen seventy one",
                         "Nineteen sixty nine",
                         "Nineteen seventy three",
                         "Nineteen sixty four",
                         "Nineteen sixty three"
                     ]
                 },
                 {
                     "In what year did Michael Bluth marry Tracy?": [
                         "Nineteen eighty nine",
                         "Nineteen eighty seven",
                         "Nineteen eighty five",
                         "Nineteen eighty six",
                         "Nineteen ninety",
                         "Nineteen ninety one"
                     ]
                 },
                 {
                     "Over seasons one through four, what percentage of episodes does Michael Bluth appear in?": [
                         "One hundred percent",
                         "Ninety eight percent",
                         "Ninety seven percent",
                         "Ninety six percent",
                         "Ninety five percent",
                         "Ninety four percent"
                     ]
                 },
                 {
                     "What is George Bluth's prisoner number?": [
                         "<say-as interpret-as=\"digits\">1881372911</say-as>",
                         "<say-as interpret-as=\"digits\">7773425344</say-as>",
                         "<say-as interpret-as=\"digits\">9892221012</say-as>"
                     ]
                 },
                 {
                     "Over seasons one through four, how many episodes did not feature an appearance by George Bluth?": [
                         "Four",
                         "Three",
                         "Two",
                         "One",
                         "Five",
                         "Six"
                     ]
                 },
                 {
                     "In what year did George Bluth found the Bluth Company?": [
                         "Nineteen fifty three",
                         "Nineteen fifty one",
                         "Nineteen fifty four",
                         "Nineteen sixty one",
                         "Nineteen sixty three",
                         "Nineteen sixty nine"
                     ]
                 },
                 {
                     "George Bluth stole the idea for the frozen banana stand from an immigrant from which country?": [
                         "Korea",
                         "Portugal",
                         "Peru",
                         "Colombia",
                         "Guatemala",
                         "Vietnam"
                     ]
                 },
                 {
                     "How many religious awakenings does George Bluth have during the series?": [
                         "Two",
                         "One",
                         "Three"
                     ]
                 },
                 {
                     "Mitchell Hurwitz originally intended George Senior to appear in how many episodes?": [
                         "One",
                         "Thirteen",
                         "Four",
                         "Six",
                         "Eight",
                         "Three"
                     ]
                 },
                 {
                     "In which season does Tracey Bluth appear in a flashback video?": [
                         "Season four",
                         "Season one",
                         "Season two",
                         "Season three"
                     ]
                 },
                 {
                     "What is the spelling of Baby talk, the product marketed by George Bluth in the early nineteen nineties?": [
                         "<say-as interpret-as=\"spell-out\">Babytock!</say-as>",
                         "<say-as interpret-as=\"spell-out\">Bay-B-talk!</say-as>",
                         "<say-as interpret-as=\"spell-out\">Baebytalk!</say-as>"
                     ]
                 },
                 {
                     "Which of the following is not one of Gene Parmesan's disguises?": [
                         "Construction worker",
                         "Janitor",
                         "Firefighter",
                         "Doctor",
                         "Fry cook",
                         "Blue bear suit"
                     ]
                 },
                 {
                     "Which character is portrayed by the same actor who played Colonel Mustard in the 1985 movie Clue?": [
                         "Gene Parmesan",
                         "George Bluth",
                         "Warden Gentles",
                         "Barry Zuckerkorn",
                         "Officer Taylor",
                         "Jack Dorso"
                     ]
                 },
                 {
                     "Which seasons did Maggie Lizer appear in?": [
                         "One and two",
                         "One and three",
                         "One and four",
                         "Two and three",
                         "Two and four",
                         "One, two, and three",
                         "One, two, and four"
                     ]
                 },
                 {
                     "What is Lucille Bluth's maiden name?": [
                         "Jenkins",
                         "Franklin",
                         "Hartfield",
                         "Popper",
                         "Carter",
                         "Crenshaw"
                     ]
                 },
                 {
                     "Over seasons one through four, what percentage of episodes does Lucille Bluth appear in?": [
                         "Ninety seven percent",
                         "Ninety eight percent",
                         "Ninety five percent",
                         "Ninety four percent",
                         "Ninety three percent",
                         "Ninety six percent"
                     ]
                 },
                 {
                     "What is the address of the model home?": [
                         "One Lucille Lane",
                         "One Bluth Circle",
                         "One Sudden Place",
                         "One George Way",
                         "One Newport Court"
                     ]
                 },
                 {
                     "Which seasons does Tony Wonder appear in?": [
                         "Two, three, and four",
                         "Two and three",
                         "Three and four",
                         "Two and four",
                         "One, two, and four",
                         "One and three"
                     ]
                 },
                 {
                     "Which seasons does Kitty Sanchez appear in?": [
                         "One, two, three, and four",
                         "One and two",
                         "One, two, and three",
                         "One, two, and four"
                     ]
                 },
                 {
                     "Who worked as Lucille Austero's campaign manager for her 2012 congressional run?": [
                         "Sally Sitwell",
                         "Michael Bluth",
                         "Wayne Jarvis",
                         "Jessie Bowers"
                     ]
                 },
                 {
                     "Which seasons does Sally Sitwell appear in?": [
                         "Two, three, and four",
                         "One, two, and three",
                         "One, two, and four",
                         "Two and three",
                         "Three and four",
                         "One, three, and four"
                     ]
                 },
                 {
                     "What is Oscar Bluth's middle name?": [
                         "George",
                         "Michael",
                         "Byron"
                     ]
                 },
                 {
                     "Which season included the greatest number of episodes featuring Oscar Bluth?": [
                         "Season two",
                         "Season one",
                         "Season three",
                         "Season four"
                     ]
                 },
                 {
                     "Which seasons does Franklin Delano Bluth appear in?": [
                         "Two and three",
                         "One and two",
                         "Two, three, and four",
                         "Two and four",
                         "One, two, and three"
                     ]
                 },
                 {
                     "What is the name of Jobe's wife's lawyer?": [
                         "Saul Zentsman",
                         "Amos Aaronson",
                         "Benjamin Edelman",
                         "Daniel Weissman",
                         "Eli Appelbaum"
                     ]
                 },
                 {
                     "Which seasons does Carl Weathers appear in?": [
                         "One, two, and four",
                         "One and two",
                         "One, two, and three",
                         "One, three, and four",
                         "One and three"
                     ]
                 },
                 {
                     "In which seasons does Ron Howard appear on screen?": [
                         "Three and four",
                         "Four",
                         "One and four",
                         "One, two, and four",
                         "Two and four"
                     ]
                 },
                 {
                     "What condition does Marky Bark suffer from?": [
                         "Prosopagnosia",
                         "Fibrodysplasia",
                         "Cold Urticaria",
                         "Hypertrichosis",
                         "Cardiomyopathy",
                         "Kawasaki disease"
                     ]
                 },
                 {
                     "How did J Walter Weatherman lose his arm?": [
                         "Construction accident",
                         "Land mine",
                         "Shark attack",
                         "Train accident"
                     ]
                 },
                 {
                     "How old was Jack Dorso when he lost the use of his legs?": [
                         "Seventy",
                         "Sixty",
                         "Seventy six",
                         "Forty",
                         "Fifty six"
                     ]
                 },
                 {
                     "Which seasons does Misses Veal appear in?": [
                         "Two and four",
                         "One and two",
                         "Three and four",
                         "One, two, and four",
                         "Two, three, and four",
                         "One and three"
                     ]
                 },
                 {
                     "Which seasons does Andy Rick<phoneme alphabet=\"ipa\" ph=\"təɹ\">ter</phoneme> appear in?": [
                         "Two, three, and four",
                         "Two and four",
                         "Three and four",
                         "One, three, and four",
                         "One, two, and four"
                     ]
                 },
                 {
                     "Which seasons does Doctor Fishman appear in?": [
                         "One, two, and four",
                         "Two and four",
                         "One and two",
                         "Two, three, and four",
                         "One, three, and four",
                         "Two and three"
                     ]
                 },
                 {
                     "Over seasons one through four, how many episodes does John Beard appear in?": [
                         "Twenty four",
                         "Twelve",
                         "Sixteen",
                         "Eighteen",
                         "Twenty two",
                         "Fourteen"
                     ]
                 },
                 {
                     "Which seasons does Mort Meyer appear in?": [
                         "Two, three, and four",
                         "Three and four",
                         "Two and four",
                         "Two and three"
                     ]
                 },
                 {
                     "What company does Mort Meyers form after being fired from Tantamount Studios?": [
                         "Schnoodle",
                         "Marble",
                         "Air table",
                         "Accredible",
                         "Shippo",
                         "Elucify"
                     ]
                 },
                 {
                     "How many episodes does Ice appear in?": [
                         "Two",
                         "One",
                         "Three"
                     ]
                 },
                 {
                     "Which seasons does Terry Veal appear in?": [
                         "Two and four",
                         "Two, three, and four",
                         "One and four",
                         "One and two",
                         "Three and four",
                         "Two and three"
                     ]
                 },
                 {
                     "Which seasons does Wayne Jarvis appear in?": [
                         "One, two, and three",
                         "One and two",
                         "Two and three",
                         "One and three"
                     ]
                 },
                 {
                     "In the season three episode Mister F, Uncle Trevor is seen doing what, while brushing his teeth?": [
                         "Smoking",
                         "Connecting a wire tap",
                         "Driving",
                         "Hiding chocolate",
                         "Sitting in a hot tub"
                     ]
                 },
                 {
                     "What is the name of Officer Taylor's partner?": [
                         "David Carter",
                         "Ian Franklin",
                         "Jonathan Penrose",
                         "Matthew McGinley",
                         "Bradley Jefferson",
                         "Antonio DiMaggio"
                     ]
                 },
                 {
                     "Which season does Officer Taylor NOT appear in?": [
                         "Season three",
                         "Season one",
                         "Season two",
                         "Season four"
                     ]
                 },
                 {
                     "Which of the following characters is portrayed in the pilot episode by an uncredited extra?": [
                         "T Bone",
                         "Ann Veal",
                         "Lupe",
                         "Marta <phoneme alphabet=\"ipa\" ph=\"ɛstɹeɪjə\">Estrella</phoneme>",
                         "Eve Holt"
                     ]
                 },
                 {
                     "What is the name of Johnny Bark's wife?": [
                         "Joan Bark",
                         "Molly Bark",
                         "Jenny Bark",
                         "Julie Bark",
                         "Minnie Bark",
                         "Margie Bark"
                     ]
                 },
                 {
                     "Which character is played by Ron Howard's brother?": [
                         "Johnny Bark",
                         "J Walter Weatherman",
                         "Argyle Austero",
                         "<phoneme alphabet=\"ipa\" ph=\"nɑʒgalja\">Nazhgalia</phoneme>",
                         "Terry Veal",
                         "Doctor Fishman"
                     ]
                 },
                 {
                     "Which seasons does Johnny Bark appear in?": [
                         "One and four",
                         "One and two",
                         "Two and four",
                         "One, two, and four",
                         "One and three",
                         "One, three, and four"
                     ]
                 },
                 {
                     "What are the letters after Doctor Phil <phoneme alphabet=\"ipa\" ph=\"gʌnti\">Gunty</phoneme>'s name?": [
                         "<say-as interpret-as=\"spell-out\">MFCC</say-as>",
                         "<say-as interpret-as=\"spell-out\">CRMA</say-as>",
                         "<say-as interpret-as=\"spell-out\">CMT</say-as>",
                         "<say-as interpret-as=\"spell-out\">CCMT</say-as>",
                         "<say-as interpret-as=\"spell-out\">CDFM</say-as>",
                         "<say-as interpret-as=\"spell-out\">MCP</say-as>"
                     ]
                 },
                 {
                     "How much weight did Cindi Lightballoon lose from dieting on Bluth Banana Jail Bars?": [
                         "Four pounds",
                         "Six pounds",
                         "Eight pounds",
                         "Seven pounds",
                         "Nine pounds"
                     ]
                 },
                 {
                     "Which seasons does Stefan Gentles appear in?": [
                         "One, three, and four",
                         "One and four",
                         "Three and four",
                         "One, two, and four",
                         "Two and four"
                     ]
                 },
                 {
                     "Which character is played by the actor who voiced Homer on The Simpsons?": [
                         "Doctor Stein",
                         "Doctor Fishman",
                         "Wayne Jarvis",
                         "James Carr",
                         "Jack Dorso",
                         "Larry Middleman"
                     ]
                 },
                 {
                     "What is the name of the waitress who sued Skip Church's Bistro for making her gain weight?": [
                         "Loretta",
                         "Lois",
                         "Linda",
                         "Lucinda",
                         "Lorna",
                         "Lenora"
                     ]
                 },
                 {
                     "Over seasons one through four, how many episodes does the man with the freedom sign appear in?": [
                         "Five",
                         "Four",
                         "Three",
                         "Six",
                         "Two",
                         "Seven"
                     ]
                 },
                 {
                     "What is the name of the paralegal who sues Barry Zuckerkorn for discrimination?": [
                         "James Alan Spangler",
                         "Bradley Jacob Clark",
                         "Jeffrey Robert Strickland",
                         "Matthew David Townsend",
                         "Christopher Daniel Becker",
                         "Andrew Jason Campbell"
                     ]
                 },
                 {
                     "Which seasons feature appearances by Trisha Thoon?": [
                         "One and four",
                         "One, two, and four",
                         "One, two, three, and four",
                         "One, three, and four"
                     ]
                 },
                 {
                     "The real life William Hung, gained fame in 2004, for performing which song on American Idol?": [
                         "She Bangs, by Ricky Martin",
                         "Ignition, by R Kelly",
                         "Bring me to Life, by Evanescence",
                         "Baby Boy, by Beyonce",
                         "Magic Stick, by Lil Kim",
                         "Cry Me a River, by Justin Timberlake"
                     ]
                 },
                 {
                     "Who was the first character to break the fourth wall during the series, by looking directly into the camera?": [
                         "Lionel Ping",
                         "Barry Zuckerkorn",
                         "Buster Bluth",
                         "Wayne Jarvis",
                         "Frank Wrench",
                         "Doctor Stein"
                     ]
                 },
                 {
                     "How is Chareth Rick<phoneme alphabet=\"ipa\" ph=\"təɹ\">ter</phoneme> sometimes known?": [
                         "Chareth the Flirt",
                         "Sneaky Chareth",
                         "Flaky Chareth",
                         "Chareth the Rock",
                         "Chareth the Cat",
                         "Timidd Chareth"
                     ]
                 },
                 {
                     "What is the name of the C.I.A. agent who follows Buster, Jobe, and Michael, to the Bluth Company model homes in Iraq?": [
                         "Richard Shaw",
                         "Bernard Jenkins",
                         "Jim Baldwin",
                         "Gabriel Alvin",
                         "Archie Felsenstein",
                         "Art Bartholomew"
                     ]
                 },
                 {
                     "Which character is never attacked by Cindy the ostrich?": [
                         "George Michael Bluth",
                         "Michael Bluth",
                         "Lucille Austero",
                         "Maybe <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Lindsay <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>"
                     ]
                 },
                 {
                     "What is the name of George Michael's host while studying abroad in Spain?": [
                         "Rosalita",
                         "Sofia",
                         "Isabella",
                         "Luciana",
                         "Mariana",
                         "Gabriela"
                     ]
                 },
                 {
                     "What is the name of the Orange County Prison warden who was replaced by Stefan Gentles?": [
                         "James Buck",
                         "Trevor Martinez",
                         "Terence Wright",
                         "Kenneth King",
                         "Garrett Hall",
                         "Vincent Walker"
                     ]
                 },
                 {
                     "Detective Fellows, who interrogates Michael about the disappearance of Kitty Sanchez in season one, is played by an actor who later competed three times on which reality show?": [
                         "Survivor",
                         "The Bachelorette",
                         "Big Brother",
                         "So You Think You Can Dance",
                         "Hell's Kitchen",
                         "America's Got Talent"
                     ]
                 },
                 {
                     "What is the name of the treatment facility where Lucille Austero spends a month being treated for vertigo?": [
                         "The Plumb Clinic",
                         "A Balanced Body",
                         "Balance Health Institute",
                         "Healing Access",
                         "Oasis Vitality Center",
                         "Precision Vertigo Care"
                     ]
                 },
                 {
                     "What is the name of Wayne Jarvis's legal assistant?": [
                         "Choe",
                         "Albert",
                         "Jun-young",
                         "Byron"
                     ]
                 },
                 {
                     "Cinco de Cuatro was organized in 1982 when which Bluth family housekeeper took May fifth off to celebrate Cinco de Mayo with her family?": [
                         "Rosa",
                         "Luce",
                         "Lupe"
                     ]
                 },
                 {
                     "What name does Jobe never call <phoneme alphabet=\"ipa\" ph=\"nɑʒgalja\">Nazhgalia</phoneme>?": [
                         "<phoneme alphabet=\"ipa\" ph=\"nɑʒbartrəm\">Nazhbartram</phoneme>",
                         "<phoneme alphabet=\"ipa\" ph=\"næʒbægəlæʒdəm\">...</phoneme>",
                         "Nagarmat",
                         "N, VonOnnin"
                     ]
                 }];

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
        speechOutput = "Welcome to Arrested Development trivia. <break time=\"600ms\"/> I will ask you " + GAME_LENGTH.toString()
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
            speechOutputAnalysis = "Incredible! ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "You've made a huge mistake. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
        	var grade = currentScore / GAME_LENGTH;
            speechOutput = speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                    + GAME_LENGTH.toString() + " questions correct. ";
        	if(grade == 0) {
        		speechOutput += "You've fluctuated in your learning.";
        	} else if(grade <= 0.25) {
        		speechOutput += "Your grade is a D minus. At least it's above a D, right?";
        	} else if(grade <= 0.50) {
        		speechOutput += "Your grade is an Elvis head.";
        	} else if(grade <= 0.75) {
        		speechOutput += "Your grade is a crocodile.";
        	} else if(grade <= 0.999) {
        		speechOutput += "Your grade is an <say-as interpret-as=\"spell-out\">A</say-as> minus. An <say-as interpret-as=\"spell-out\">A</say-as> gets you ice cream. You know that.";
        	} else {
        		speechOutput += "You're having an incredible year!";
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
            speechOutput = speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

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