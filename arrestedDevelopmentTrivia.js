
'use strict';

/**
 * The first answer is the correct one
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
                 },
                 {
                     "In the season one episode Pier Pressure, how does Lindsay punish Maybe for getting bad grades?": [
                         "Makes her spend a day with Lucille Bluth",
                         "Makes her spend spring break working at the Bluth Company",
                         "Makes her work for a day in the banana stand",
                         "Makes her attend a charity banquet",
                         "Makes her shadow Michael Bluth for a day"
                     ]
                 },
                 {
                     "In the season one episode Pier Pressure, why does the fake Hot Cops drug bust fail to fool George Michael?": [
                         "One of the Hot Cops is his choir teacher",
                         "He is working overtime in the banana stand at the time",
                         "Jobe has told him about the plot",
                         "One of the Hot Cops' breakaway uniforms comes open",
                         "One of the Hot Cops hits on him"
                     ]
                 },
                 {
                     "In the season one episode Pier Pressure, what spelling mistake does Maybe make?": [
                         "She spells minus, <say-as interpret-as=\"spell-out\">mines</say-as>",
                         "She spells banana, <say-as interpret-as=\"spell-out\">bananana</say-as>",
                         "She spells note, <say-as interpret-as=\"spell-out\">noat</say-as>",
                         "She spells Jobe without the periods",
                         "She spells Hot Cops, <say-as interpret-as=\"spell-out\">hotkops</say-as>",
                         "She spells Bluth, <say-as interpret-as=\"spell-out\">blooth</say-as>"
                     ]
                 },
                 {
                     "In the season one episode Public Relations, why is George Michael rejected from admission to the Milford School?": [
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
                         "Ophelia Love",
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
                     "In the season one episode Marta Complex, what gift does Marta buy for Michael?": [
                         "A suit",
                         "A set of cufflinks",
                         "A watch",
                         "A dozen roses",
                         "A bottle of scotch",
                         "A bottle of wine"
                     ]
                 },
                 {
                     "In the season one episode Marta Complex, who does Lucille Austero begin dating instead of Buster?": [
                         "Carl Weathers",
                         "Warden Gentles",
                         "Michael Bluth",
                         "Wayne Jarvis",
                         "Bob Loblaw",
                         "Herbert Love"
                     ]
                 },
                 {
                     "In the season one episode Marta Complex, what recipe does Carl Weathers describe to Tobias?": [
                         "Stew",
                         "Bloody Mary",
                         "Pancakes",
                         "Pecan pie",
                         "Grilled cheese",
                         "Oatmeal"
                     ]
                 },
                 {
                     "What is the name of Marta's fictional brother on El Amor Prohibido?": [
                         "<phoneme alphabet=\"ipa\" ph=\"tioʊ\">Tio</phoneme",
                         "<phoneme alphabet=\"ipa\" ph=\"eɪɹmɑnoʊ\">Hermano</phoneme",
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
                     "In the season one episode Beef Consomme, how does Buster attempt to impress Marta?": [
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
                         "Ophelia Love",
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
                         "Ophelia Love",
                         "Jan Eagleman"
                     ]
                 },
                 {
                     "In the season one episode Shock and Aww, what is the name of Jobe's girlfriend who dumps him at the diversity dance?": [
                         "Shannon",
                         "Ophelia",
                         "Beth",
                         "Marta",
                         "Tonya",
                         "Sydney"
                     ]
                 },
                 {
                     "In the season one episode Shock and Aww, who does Maybe bring as her date to the diversity dance?": [
                         "Annyong Bluth",
                         "George Michael Bluth",
                         "Steve Holt",
                         "Paul Huan",
                         "Mort Myers",
                         "Marky Bark"
                     ]
                 },
                 {
                     "In the season one episode Staff Infection, which actor is said to be researching a role at the prison?": [
                         "Steve Bushemi",
                         "Jake Jillenhall",
                         "James Franco",
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
                     "In the season one episode Altar Egos, how much money does Maybe give George Michael to do her homework instead of tutoring her?": [
                         "One hundred twenty dollars",
                         "One hundred dollars",
                         "Eighty dollars",
                         "Sixty dollars"
                     ]
                 },
                 {
                     "Which drug did Doctor <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪz\">Funke's</phoneme> one hundred percent natural good time family band solution never have a relationship with?": [
                         "Sanidex",
                         "Teamocil",
                         "Zanotab",
                         "Euphorazeen"
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
                     "In the season one episode Justice is Blind, which of the following is NOT a way the characters misquoted the ten commandments?": [
                         "As you seek so shall you find thyself",
                         "Thou shalt protect thy father, and honor no one above him unless it <phoneme alphabet=\"ipa\" ph=\"biɪθ\">beith</phoneme> me: thy sweet Lord.",
                         "Be true to thine own self, and to thine own self be true"
                     ]
                 },
                 {
                     "In the season one episode Justice is Blind, whose face is crossed out on the chart in the interrogation room?": [
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
                     "In the season one episode Missing Kitty, what is Warden Gentles' advice to Tobias?": [
                         "To learn real fear from White Power Bill",
                         "To use his therapist skills to reveal the real source of White Power Bill's hatred",
                         "To become the Dorothy of the prison",
                         "To realize that the real source of fear is anger",
                         "To learn why George Bluth really hates him"
                     ]
                 },
                 {
                     "In the season one episode Missing Kitty, where did Lucille Bluth hide the inheritance from her mother?": [
                         "In a trust fund for Annyong",
                         "In the banana stand",
                         "In the Bluth company's Iraqi holding corporation",
                         "In Bluth company stock",
                         "In Annyong's pocket",
                         "In her purse"
                     ]
                 },
                 {
                     "In the season one episode Best Man for the Jobe, who does Jobe's wife fall in love with?": [
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
                         "Cloudmir",
                         "Teamocil",
                         "<say-as interpret-as=\"spell-out\">YOM</say-as>"
                     ]
                 },
                 {
                     "In the season one episode Best Man for the Jobe, who is NOT in attendance at Jobe's bachelor party?": [
                         "George Michael Bluth",
                         "The hot cops",
                         "Ira Gilligan",
                         "Michael Bluth",
                         "Buster Bluth",
                         "Jobe Bluth"
                     ]
                 },
                 {
                     "In the season one episode Whistler's Mother, which song does Lindsay dance to while protesting the war in the free speech zone?": [
                         "Bad girls",
                         "All you need is smiles",
                         "The show's theme music",
                         "The final countdown",
                         "Vogue",
                         "Big yellow joint"
                     ]
                 },
                 {
                     "In the season one episode Whistler's Mother, why does Lindsay decide to protest the war?": [
                         "Her hair stylist has been called to war",
                         "The war has led to a freeze on the Bluth Company's assets",
                         "The war has led to a fur embargo",
                         "It will be easier than getting the ten commandments removed from the courthouse",
                         "To get closer to Marky Bark",
                         "To be a role model for Maybe"
                     ]
                 },
                 {
                     "In the season one episode Whistler's Mother, why is Michael's purchase of Oscar's lemon grove a mistake?": [
                         "The government has an easement on the land",
                         "The land is actually in Mexico",
                         "A wall is being built through the land",
                         "A colony of hippies is living on the land",
                         "The purchase is made with frozen Bluth Company assets",
                         "It is actually George who takes the money for the land"
                     ]
                 },
                 {
                     "In the season one episode Not Without My Daughter, which group goes to the mall to prove that they are manly?": [
                         "Tobias, George Michael, and Jobe",
                         "Jobe, George Michael, and Steve Holt",
                         "Steve Holt, Jobe, and Michael",
                         "Buster, Annyong, and Jobe",
                         "Annyong, Buster, and Oscar",
                         "Tobias, Buster, and George Michael"
                     ]
                 },
                 {
                     "Fill in the blank: say what you will about America. Blank bucks still gets you a hell of a lot of mice.": [
                         "Thirteen",
                         "Fourteen",
                         "Sixteen",
                         "Eighteen",
                         "Twelve",
                         "Nineteen"
                     ]
                 },
                 {
                     "In the season one episode Not Without My Daughter, why does Lindsay pretend to be a shoplifter?": [
                         "To conceal the fact that she has a job at the mall",
                         "To show George Michael that she's a cool aunt",
                         "To distract attention from her father's upcoming trial",
                         "To impress Steve Holt",
                         "To hide the fact that she used company money to buy expensive outfits",
                         "To have an excuse to talk to Officer Carter"
                     ]
                 },
                 {
                     "In the season one finale Let Em Eat Cake, what information does Kitty try to use to blackmail Michael?": [
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
                     "How many episodes did Oscar Bluth appear in?": [
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
                     "In the season two premier The One Where Michael Leaves, who runs over Tobias with their car?": [
                         "Barry Zuckerkorn",
                         "Jobe Bluth",
                         "Lucille Bluth",
                         "Oscar Bluth",
                         "Officer Taylor",
                         "George Bluth"
                     ]
                 },
                 {
                     "In the season two episode The One Where They Build A House, which group does Michael employ to build the fake model home?": [
                         "Oscar Bluth, George Michael Bluth, Buster Bluth, and Tom Jane",
                         "Buster Bluth, Oscar Bluth, and Jobe Bluth",
                         "George Michael Bluth, Buster Bluth, Oscar Bluth, and Marky Bark",
                         "Buster Bluth, Oscar Bluth, and Annyong Bluth",
                         "Oscar Bluth, Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>, George Michael Bluth, and Tom Jane",
                         "Tobias <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>, Jobe Bluth, Oscar Bluth, and George Michael Bluth"
                     ]
                 },
                 {
                     "In the season two episode The One Where They Build A House, which children's game is referenced at the ribbon cutting ceremony for the fake model home?": [
                         "Rock, paper, scissors",
                         "Cat's cradle",
                         "Cops and robbers",
                         "Dodgeball",
                         "Duck, duck, goose",
                         "Hungry Hungry Hippos"
                     ]
                 },
                 {
                     "Fill in the blank in this quotation from Buster: I don't agree with your blank here, but I will defend with my life your right to do it.": [
                         "Dirty doings",
                         "Seal dealing",
                         "Sneaky selling",
                         "Filthy blackmail",
                         "Chicken dance"
                     ]
                 },
                 {
                     "In the season two episode Amigos, where is Michael's office while Jobe acts as Bluth Company president to appease the stockholders?": [
                         "A supply closet",
                         "The stair car",
                         "The Mercedes",
                         "The model home attic",
                         "North Roast Coffee",
                         "The banana stand"
                     ]
                 },
                 {
                     "In the season two episode Amigos, which character is tackled more than once?": [
                         "Michael Bluth",
                         "Oscar Bluth",
                         "Gobe Bluth",
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
                     "In the season two episode Good Grief, why does Jobe perform an elaborate illusion at George's wake?": [
                         "To make the cover of Poof Magazine",
                         "To prevent Buster from realizing it's a wake",
                         "To turn the wake into a wedding between himself and Anne",
                         "To give George a chance to escape into the attic"
                     ]
                 },
                 {
                     "In the season two episode Good Grief, why does Maybe try to set Lindsay up with the bounty hunter Ice?": [
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
                     "In the season two episode Sad Sack, why does Lindsay start spending more time with Maybe?": [
                         "To get closer to Steve Holt",
                         "To win her allegiance as she and Tobias prepare to split up",
                         "To keep Maybe from aligning herself with Lucille",
                         "To show James Carr that she's young",
                         "To have an excuse to talk to Ice"
                     ]
                 },
                 {
                     "In the season two episode Sad Sack, what is former Bluth Company attorney Wayne Jarvis' new job?": [
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
                     "In the season two episode Afternoon Delight, which of the following is never claimed as the price of Jobe's suit?": [
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
                     "In the season two episode Afternoon Delight, which holiday tradition do Michael and George Michael participate in?": [
                         "Rebuilding the banana stand after it has been vandalized",
                         "George Michael driving the car to the Bluth Company holiday party",
                         "Wearing matching outfits to the Living Classics pageant",
                         "Moving Lucille's vodka from the banana stand to her condo"
                     ]
                 },
                 {
                     "In the season two episode Afternoon Delight, which of the following duos DOES NOT perform karaoke at the Bluth Company holiday party?": [
                         "Michael and George Michael",
                         "Michael and Maybe",
                         "Lindsay and George Michael"
                     ]
                 },
                 {
                     "What was the first episode to air in the year two thousand five?": [
                         "Season two episode seven: Switch Hitter",
                         "Season two episode eleven: Out on a Limb",
                         "Season one episode twelve: Marta Complex",
                         "Season one episode five: Charity Drive",
                         "Season three episode five: Mister F",
                         "Season three episode eight: Making a Stand"
                     ]
                 },
                 {
                     "In the season two episode Switch Hitter, which book does Maybe have a homework assignment on?": [
                         "The Old Man and the Sea",
                         "A Tale of Two Cities",
                         "Pride and Prejudice",
                         "The Sun Also Rises",
                         "Catch Twenty Two",
                         "Breakfast of Champions"
                     ]
                 },
                 {
                     "In the season two episode Switch Hitter, what fake holiday does Maybe invent to get out of going to school?": [
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
                     "In the season two episode Queen for a Day, which professional sports team does Barry Zuckerkorn have a lawsuit against?": [
                         "The Los Angeles Kings",
                         "The Los Angeles Dodgers",
                         "The Los Angeles Galaxy",
                         "The Los Angeles Lakers",
                         "The Anaheim Ducks",
                         "The Los Angeles Clippers"
                     ]
                 },
                 {
                     "In the season two episode Burning Love, what does Lucille Austero give Michael in exchange for his promise to bid on her at the charity auction?": [
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
                         "Emmett Richter",
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
                     "Which of the following has never had romantic involvement with Lucille Austero?": [
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
                     "In the season two episode Out on a Limb, what do Lindsay and Tobias do to add excitement to their relationship?": [
                         "Break into Maggie Lizer's house",
                         "Start dating other people",
                         "Develop a friendship with Debrie Bardoe and Marky Bark",
                         "Sneak out of George Bluth's trial",
                         "Plan a day to have marital relations"
                     ]
                 },
                 {
                     "In which episode is Buster's hand bitten off by a seal?": [
                         "Season two, episode eleven: Out on a Limb",
                         "Season two, episode twelve: Hand to God",
                         "Season two, episode thirteen: Motherboy <say-as interpret-as=\"spell-out\">XXX</say-as>",
                         "Season two, episode fifteen: Sword of Destiny",
                         "Season two, episode seven: Switch Hitter",
                         "Season two, episode eighteen: Righteous Brothers"
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
                     "In the season two episode Hand to God, what is written in the note George Michael retrieves from Maggie Lizer's front door?": [
                         "Really eager to hear from you",
                         "Finished milk. Buy more.",
                         "A friend needs pot, can you get some?",
                         "Thanks for the gift",
                         "Here's the tux. You bring the flowers and champagne."
                     ]
                 },
                 {
                     "In the season two episode Hand to God, what does Doctor Fishman say about Buster?": [
                         "He's going to be all right",
                         "It's too late for me to do anything for your son",
                         "You look really hot",
                         "It looks like he's dead",
                         "We lost him",
                         "Your son went down while piloting a plane over Afghanistan"
                     ]
                 },
                 {
                     "In the season two episode Motherboy Thirty, why does Lindsay become attracted to Tobias?": [
                         "He has the power of George Bluth due to playing him in Scandalmakers",
                         "He survives being run over by Barry Zuckerkorn",
                         "He returns from prison with a detached attitude",
                         "He finds a date as soon as they open up their relationship"
                     ]
                 },
                 {
                     "In the season two episode Motherboy Thirty, who rescues George Michael from participating in Motherboy?": [
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
                     "Which letter does not appear in the spelling of Teamocil?": [
                         "<say-as interpret-as=\"spell-out\">S</say-as",
                         "<say-as interpret-as=\"spell-out\">I</say-as",
                         "<say-as interpret-as=\"spell-out\">A</say-as"
                     ]
                 },
                 {
                     "In the season two episode The Immaculate Election, where does Tobias end up staying after Lindsay kicks him out of the model home?": [
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
                     "In the season two episode Sword of Destiny, in which geographical area does Doctor Stein never claim to be the best doctor?": [
                         "Newport Beach",
                         "Orange County",
                         "Southern California",
                         "California"
                     ]
                 },
                 {
                     "In the season two episode Sword of Destiny, which operation does Doctor Stein NOT perform on Michael?": [
                         "Swapping his middle and index fingers",
                         "Shortening his calf muscle",
                         "Appendectomy",
                         "Removing an abcess on his abdominal wall"
                     ]
                 },
                 {
                     "In the season two episode Sword of Destiny, Tony Wonder's website is plagued by pop up ads for what?": [
                         "Family Guy",
                         "The Cornballer",
                         "The Brady Bunch Movie",
                         "Boyfights",
                         "Klimpy's Restaurant"
                     ]
                 },
                 {
                     "In the season two episode Meat the Veals, which group abducts Lucille to take her to the vow renewal ceremony?": [
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
                         "Dave Attell",
                         "Jeff Garlin",
                         "Ed Begley Junior",
                         "Ed Helms",
                         "John Michael Higgins"
                     ]
                 },
                 {
                     "In the season two episode Spring Breakout, the rehab facility Shady Pines is named after a retirement community in which show that Mitchell Hurwitz previously wrote for?": [
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
                     "In the season two finale Righteous Brothers, why does George Michael decide not to break up with Ann?": [
                         "He thinks she might kiss him at a protest",
                         "He thinks Maybe might be his real cousin",
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
                         "Manwich",
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
                     "In the season three premiere The Cabin Show, what was Jim Cramer's rating for Bluth Company stock before upgrading it to Don't Buy?": [
                         "Triple sell",
                         "Double negative",
                         "Two thumbs down",
                         "Dump it",
                         "Run away",
                         "Widespread panic"
                     ]
                 },
                 {
                     "On I'm Oscar Dot Com, Oscar has the same inmate number as which famous fictional inmate?": [
                         "John Valjohn",
                         "Ivan Denisovich",
                         "The count of Monte Cristo",
                         "Rodion Raskolnikov"
                     ]
                 },
                 {
                     "In the season three premiere The Cabin Show, who does Lucille refer to as some sort of scientist?": [
                         "Tom Cruise",
                         "John Travolta",
                         "Kirstie Alley"
                     ]
                 },
                 {
                     "In the season three episode For British Eyes Only, which vehicle does Michael give Lindsay after she asks for a new car?": [
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
                     "In the season three episode Forget Me Now, why does Buster knock Rita to the ground?": [
                         "She is wearing a seal backpack",
                         "She stares at his hook",
                         "She ignores him",
                         "She invites him to swim in the ocean",
                         "She touches his waist"
                     ]
                 },
                 {
                     "Which guest star also appeared in Happy Days, where he was introduced in order to appeal to younger audiences?": [
                         "Scott Baio",
                         "Dave Thomas",
                         "Ben Stiller",
                         "Martin Mull",
                         "Mark Cherry",
                         "Andy Richter"
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
                         "Mauve",
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
                         "Lindsay coaches Ann, Tobias coachesh Maybe",
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
                     "In the season three episode Mister F, what does Michael give George Michael for his birthday?": [
                         "A Jack Welch suit and a copy of Quicken",
                         "A jet pack and a copy of Quickbooks",
                         "A receipt scanner and a subscription to Salesforce",
                         "A Brooks Brothers tie and a copy of Getting to Yes"
                     ]
                 },
                 {
                     "In the season three episode Mister F, Michael finds Tobias on the floor after he got how many hair plugs in one sitting?": [
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
                         "Gangee",
                         "A Thorougly Polite Dustup",
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
                     "In the season three episode The Ocean Walker, how long does Rita claim to be able to hold her breath?": [
                         "Twenty minutes",
                         "Ten minutes",
                         "Fifteen minutes",
                         "Thirty minutes",
                         "Two hours",
                         "Eighty minutes"
                     ]
                 },
                 {
                     "In the season three episode The Ocean Walker, which show does Michael watch with George Senior over the phone while pretending Rita is in the shower?": [
                         "E True Hollywood Story",
                         "Access Hollywood",
                         "Entertainment Tonight",
                         "<say-as interpret-as=\"spell-out\">TMZ</say-as>"
                     ]
                 },
                 {
                     "In the season three episode Prison Break In, how does Michael console himself after his breakup with Rita?": [
                         "Playing guitar",
                         "Eating an entire thing of candy beans",
                         "Taking George Michael on a fishing trip",
                         "Buying a new bicycle"
                     ]
                 },
                 {
                     "In the season three episode Prison Break In, which screenplay does Maybe ask George Michael to read for her?": [
                         "New Warden",
                         "Homeless Dad",
                         "Almost Cousins",
                         "<phoneme alphabet=\"ipa\" ph=\"leɪ kuzɑŋ dɑŋd͡ʒɚɹɝ\">Les Cousins Dangereux</phoneme>",
                         "Love Indubitably"
                     ]
                 },
                 {
                     "In the season three episode Prison Break In, who does Michael refer to as, her?": [
                         "Lucille Bluth",
                         "Lindsay <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Ann Veal",
                         "Maybe <phoneme alphabet=\"ipa\" ph=\"fjuŋkeɪ\">Funke</phoneme>",
                         "Rita Leeds",
                         "Maggie Lizer"
                     ]
                 },
                 {
                     "In the season three episode Making a Stand, Jobe wants to sell Bluth Company blueprints to our Mexican friends down in which country?": [
                         "Colombia",
                         "Portugal",
                         "Venezuela",
                         "El Salvador",
                         "Nicaragua",
                         "Guatemala"
                     ]
                 },
                 {
                     "In the season three episode Making a Stand, which of the following is NOT part of a competition tactic used by one of the two banana stands?": [
                         "Distributing flyers on the boardwalk",
                         "A banana suit",
                         "A jetpack",
                         "Fireballs",
                         "Scantily clad women",
                         "An aggressive slogan"
                     ]
                 },
                 {
                     "In the season three episode Making a Stand, the Guatemalan painter Rolando has taken improv classes at which theater?": [
                         "The Groundlings",
                         "Upright Citizens Brigade",
                         "Improv Olympic",
                         "The Annoyance",
                         "People's Improv Theater",
                         "Magnet Theater"
                     ]
                 },
                 {
                     "In the season three episode S.O.B's, what is written in the letter from the Openings school that Lindsay and Tobias don't read?": [
                         "Maybe is about to be expelled",
                         "Maybe has been sleeping at the school",
                         "Maybe is a secret movie studio executive",
                         "Maybe is failing spelling",
                         "Maybe is posing as her altar ego Surely"
                     ]
                 },
                 {
                     "In the season three episode S.O.B's, which Richter quintuplet is poisoned by the muffin man?": [
                         "Donnie",
                         "Andy",
                         "Emmett",
                         "Rocky",
                         "Chareth"
                     ]
                 },
                 {
                     "Which Richter quintuplet does not like to have his face shown on television?": [
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
                     "In the season three episode Fakin It, who is Lindsay's love interest?": [
                         "The son of Buster's hospital roommate",
                         "Tom Jane",
                         "James Carr",
                         "Moses Taylor",
                         "Larry Middleman",
                         "Marky Bark"
                     ]
                 },
                 {
                     "In the season three episode Fakin It, which issue is Lindsay temporarily passionate about?": [
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
                         "Debrie Bardeaux",
                         "Jobe's wife"
                     ]
                 },
                 {
                     "In the season three episode Family Ties, when Michael first arrives at the office, one of the <phoneme alphabet=\"ipa\" ph=\"sʌpoʊzɛd\">supposed</phoneme> computers an employee is holding is in fact what?": [
                         "A toaster oven",
                         "A homefill",
                         "A record player",
                         "A boom box",
                         "A typewriter"
                     ]
                 },
                 {
                     "In the season three episode Family Ties, why is George sitting in Buster's room surrounded by computer equipment from the Bluth Company office?": [
                         "He is trying to delete the hard drives",
                         "He is in the midst of a Black Friday firing spree",
                         "He is searching for information on N Bluth"
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
        	} else if(grade <= 0.25) {
        		speechOutput += "Your grade is a D minus. At least it's above a D, right?";
        	} else if(grade <= 0.50) {
        		speechOutput += "Your grade is an Elvis head.";
        	} else if(grade <= 0.75) {
        		speechOutput += "Your grade is a crocodile.";
        	} else if(grade <= 0.999) {
        		speechOutput += "Your grade is an <say-as interpret-as=\"spell-out\">A</say-as> minus. An <say-as interpret-as=\"spell-out\">A</say-as> gets you ice cream. You know that.";
        	} else {
        		speechOutput += "Incredible! You're having an incredible year.";
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