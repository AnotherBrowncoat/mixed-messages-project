// MIXED MESSAGES PORTFOLIO PROJECT ---------------------------------------------/

/* For this project, you will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. 
To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. 
Take what you know of JavaScript syntax so far to build the program and customize it to your liking. */


// MY VERSION: -----------------------------------------------------------------/

// Message to be output: "I once saw {celebrity} in {context}, and they were {situation}!". 


// Array 1 : Celebrities -------------------------------------------------------/
const celebArray = ["Tom Selleck",
                   "Rob Lowe",
                   "Chris Pratt",
                   "Elvis Presley",
                   "Charlie Sheen",
                   "Marlon Brando",
                   "Steve Buscemi",
                   "Robert Pattinson",
                   "Simon Pegg",
                   "Hank Azaria",
                   "Eartha Kitt",
                   "Kit Harrington",
                   "Chevy Chase",
                   "Eva Green",
                   "Miley Cyrus",
                   "Mariah Carey",
                   "Alison Brie",
                   "Freema Agyeman",
                   "Madonna",
                   "Cher",
                   "Linda Hamilton",
                   "Katy Perry",
                   "Rebecca Ferguson",
                   "Claire Balding",
                   "Alex Scott"
                   ]

// Array 2 : Contexts ---------------------------------------------------------------/
const contextArray = ["an aeroplane bathroom",
                   "the back of a Chevy Covette",
                   "a McDonalds in Mayfair",
                   "the shower",
                   "a rodeo ring",
                   "the middle of a total meltdown",
                   "a Chinese takeaway",
                   "the back-end of nowhere",
                   "the red-light district",
                   "a doctor's office",
                   "an old strip mall",
                   "the gym",
                   "an empty carpark",
                   "an incredibly bad mood",
                   "the nude",
                   "a toy shop",
                   "a terrible B-Movie",
                   "an audition tape",
                   "a children's playouse",
                   "the path of an oncoming truck",
                   "an obscure music video",
                   "Home Depot",
                   "the deepest Amazon",
                   "Africa",
                   "a bright pink man-kini"
                   ]


// Array 3 : Situations ---------------------------------------------------------------/
const situationArray = ["eating a Snickers",
                   "looking lost",
                   "trying to put on a shirt that was clearly too small",
                   "flirting with my sister",
                   "going to the bathroom",
                   "having a great time",
                   "juggling geese",
                   "making cocktails",
                   "watching Tom Cruise movies one after the other",
                   "getting a physical",
                   "telling a funny story",
                   "aggressively working out",
                   "flipping the bird",
                   "sweating profusely",
                   "eating hotdogs like there was no tomorrow",
                   "having a tantrum",
                   "dropping off their kids",
                   "throwing their shoes at passers-by",
                   "blessing the rains down in Africa",
                   "clearly unimpressed",
                   "really happy about something",
                   "setting up a bed for the night",
                   "definitely drunk, but not in a belligerent way",
                   "way more tanned than I remember",
                   "getting a tattoo of Tom Selleck's moustache"
                   ]



function getMessage() {
    function randomIndex() {
        let randomNumber = Math.floor(Math.random() * 25);
        return randomNumber;
    }
    let rand1 = randomIndex();
    let rand2 = randomIndex();
    let rand3 = randomIndex();
    const finalMessage = console.log(`I once saw ${celebArray[rand1]} in ${contextArray[rand2]}, and they were ${situationArray[rand3]}!`)
    return finalMessage
}