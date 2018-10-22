const mongoose = require("mongoose");
const faker = require("faker");

const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

mongoose.Promise = Promise;
mongoose
  .connect(
    "mongodb://localhost/celebrities",
    { useMongoClient: true }
  )
  .then(() => {
    console.log("Connected to Mongo!!!!");
  })
  .catch(err => {
    console.error("Error connecting to Mongo", err);
  });

const celebArr = [
  {
    name: "Gussie Rohan",
    occupation: "singer",
    catchPhrase:
      "You hear of whales beaching themselves, you just know Gussie Rohan is fuckin' shit up under the sea."
  },
  {
    name: "Gage Abshire",
    occupation: "singer",
    catchPhrase: "Gage Abshire is why Waldo is hiding."
  },
  {
    name: "Ted Hoppe",
    occupation: "singer",
    catchPhrase:
      "Ted Hoppe was vacationing in Spain and decided to participate in a bullfight. Chuck was disqualified because he didn't realize he wasn't supposed to knock the bull out."
  },
  {
    name: "Aurelia Blick",
    occupation: "unknown",
    catchPhrase:
      'In the beginning there was nothing, then Aurelia Blick kicked that nothing in the face and said "Get a job!!"...And that\'s the story of the universe.'
  },
  {
    name: "Hugh Hermann",
    occupation: "comedian",
    catchPhrase:
      "people can glow in the dark.....Hugh Hermann can glow in the light."
  },
  {
    name: "Lonie Padberg",
    occupation: "comedian",
    catchPhrase: "Lonie Padberg sold Kajiji on KAJIJI"
  },
  {
    name: "Daron Kulas",
    occupation: "movie star",
    catchPhrase: "IM A TOSSERRR !!!! xx    Daron Kulas"
  },
  {
    name: "Henderson Wolff",
    occupation: "movie star",
    catchPhrase:
      "Henderson Wolff' father is Chuck Norris, his mother is America, his brother is freedom and his other brother isSam... Sam Norris. Chuck Norris loves his family dearly, except for Sam, that is why Sam no longer exists."
  },
  {
    name: "Foster Swift",
    occupation: "singer",
    catchPhrase:
      "Tom Cruise lives with the certainty that one day, he'll bend over the bathroom sink to splash water on his face, lift up his head and in the mirror see that Foster Swift is standing directly behind him."
  },
  {
    name: "Dean O'Keefe",
    occupation: "comedian",
    catchPhrase:
      "One time while hunting deer, Dean O'Keefe made a kill shot from 300 yards. No big deal u say? his weapon of choice was a squirt gun."
  },
  {
    name: "Janiya Boyle",
    occupation: "comedian",
    catchPhrase:
      "Janiya Boyle' derringer can fire a 30 round clip of 12 ga rifled slugs."
  },
  {
    name: "Tanner Wiza",
    occupation: "comedian",
    catchPhrase: "Tanner Wiza uses 8'x10' sheets of plywood as toilet paper."
  },
  {
    name: "Vickie Brekke",
    occupation: "unknown",
    catchPhrase:
      "Vickie Brekke on the cast of The Expendables 2 means the movie will consist of opening credits, one roundhouse kick, and closing credits. A single shot will not be fired."
  },
  {
    name: "Cleve Huel",
    occupation: "singer",
    catchPhrase: "Cleve Huel can tell you how to get to Sesame Street"
  },
  {
    name: "Jana Collier",
    occupation: "unknown",
    catchPhrase:
      "Whatever happened to Duncan MacLeod, The Highlander? He foolishly challenged Jana Collier. In the end, there canbe only one. The one is Chuck Norris."
  },
  {
    name: "Dereck Pfeffer",
    occupation: "comedian",
    catchPhrase: "Dereck Pfeffer uses tabasco sauce instead of visine."
  },
  {
    name: "Danny Rath",
    occupation: "singer",
    catchPhrase:
      "When Danny Rath was a kid, the Tooth Fairy left the keys to Fort Knox under his pillow, in exchange for a molar."
  },
  {
    name: "Estella Smith",
    occupation: "singer",
    catchPhrase:
      "Estella Smith is so fast that he can use the earths rotation as a tredmill."
  },
  {
    name: "Brett Lemke",
    occupation: "movie star",
    catchPhrase:
      "Brett Lemke knows how many licks it takes to get to the center of a Tootsee Pop."
  },
  {
    name: "Peyton Gutkowski",
    occupation: "unknown",
    catchPhrase:
      "An unarmed Peyton Gutkowski was once surrounded by 10,000 heavily armed VietCong.  They immediately surrendered,knowing they never had a chance in hell to survive a battle against Chuck."
  },
  {
    name: "Donnie Harber",
    occupation: "unknown",
    catchPhrase: "Donnie Harber can roll a stone and make it gather moss"
  },
  {
    name: "Jeanie Mohr",
    occupation: "comedian",
    catchPhrase:
      "Pepis was created when Jeanie Mohr said i want a Drink and not a Coke they owe me money. Pepis was thought of, invented, created, canned, and brought to Chuck Norris in 12 mins. Chuck Norris still roundhouse kicked the delivery guy for being to slow with his drink"
  },
  {
    name: "Dallin Fritsch",
    occupation: "unknown",
    catchPhrase:
      "Unlike Santa Claus, Dallin Fritsch doesn't need to check his list twice."
  },
  {
    name: "Rosa Kihn",
    occupation: "movie star",
    catchPhrase:
      "The city of Pompeii was not destroyed by a volcanic eruption, but rather an eruption from Rosa Kihn after havingeaten a truckload of Southern Homestyle Chili. He was the only survivor."
  },
  {
    name: "Sonny Schowalter",
    occupation: "movie star",
    catchPhrase:
      "Sonny Schowalter' favorite seafood restaurant always serves him armadillo on the half shell."
  },
  {
    name: "Casimer Franecki",
    occupation: "unknown",
    catchPhrase:
      "Casimer Franecki eats out only at buffet's. this is because no one serves Chuck Norris and lives."
  },
  {
    name: "Jayce Davis",
    occupation: "unknown",
    catchPhrase:
      "Jayce Davis is always ahead of everybody else. But during Daylight Savings Time he is 2 hours ahead."
  },
  {
    name: "Ruth Hilll",
    occupation: "movie star",
    catchPhrase:
      "Ruth Hilll demands a 29th day of February every 4 years. We call this leap year. It's true name is leapspinkickyear."
  },
  {
    name: "Jess Ruecker",
    occupation: "unknown",
    catchPhrase:
      "Jess Ruecker' backyard shed doubles as his personal torture chamber"
  },
  {
    name: "Camden Turner",
    occupation: "movie star",
    catchPhrase: "Camden Turner is all the rage."
  },
  {
    name: "Dino Beier",
    occupation: "unknown",
    catchPhrase:
      "Dino Beier once tried to wear glasses, the result was him seing his back."
  },
  {
    name: "Royce Pfannerstill",
    occupation: "movie star",
    catchPhrase:
      "Some people like to eat frogs' legs. Royce Pfannerstill likes to eat lizard legs. Hence, snakes."
  },
  {
    name: "Ethyl Zulauf",
    occupation: "unknown",
    catchPhrase: "Ethyl Zulauf doesn't commit susicide, susicide commits him"
  },
  {
    name: "Lambert Wunsch",
    occupation: "movie star",
    catchPhrase:
      "Lambert Wunsch has a truck.That truck know is known as Optimus Prime."
  },
  {
    name: "Jazlyn Von",
    occupation: "movie star",
    catchPhrase: "Jazlyn Von once knocked a woman out with his ejaculation."
  },
  {
    name: "Kenneth Goyette",
    occupation: "comedian",
    catchPhrase:
      "If you ever use the expression 'it happens to the best of us' around Kenneth Goyette, get ready for something violent to happen to you."
  },
  {
    name: "Amber Lynch",
    occupation: "comedian",
    catchPhrase:
      "The Vatican's latest fundraiser is selling WWCND (What Would Amber Lynch Do) braclets."
  },
  {
    name: "Kim Romaguera",
    occupation: "movie star",
    catchPhrase:
      "If you look in Kim Romaguera eyes their is no dought you will explode"
  },
  {
    name: "Zoila Wiza",
    occupation: "movie star",
    catchPhrase:
      'The National Weather Service was going to name a hurricane after Zoila Wiza but television stations would not allow them to call it "Hurricane Fuck\'em Up Chuck".'
  },
  {
    name: "Roberto Gorczany",
    occupation: "comedian",
    catchPhrase:
      "Roberto Gorczany would love to bring your daughter to the slaughter."
  },
  {
    name: "Riley Senger",
    occupation: "unknown",
    catchPhrase:
      "Riley Senger makes Happy(the dwarf) be like Grumpy.  If you have a \"stay off my lawn\" sign, this does not apply to Chuck Norris. he can stand wherever the hell he wants!  If you see a spider in your room, don't freak out. just remember that there is worse. Chuck Norris could be standing in your room with a LARGE knife in his hand. or a bouquet of flowers. the knife makesmore sense though.....  If Chuck Norris was president, courts wouldn't exist because nobody disobeys Chuck Norris or anything he says/writes down  Chuck Norris has never ever missed his target except for that one time.....wait....never mind.... that wasn't Chuck Norris.....never mind."
  },
  {
    name: "Mariane Schamberger",
    occupation: "singer",
    catchPhrase:
      'I put Mariane Schamberger into an online anagram generator and only got one anagram - "Don\'t rearrange these letters or else Chuck Norris will rearrange your face."'
  },
  {
    name: "Mackenzie Maggio",
    occupation: "comedian",
    catchPhrase:
      "If Mackenzie Maggio told YOU to jump off a bridge, you should thank him profusely and do it immediately."
  },
  {
    name: "Kelton Nicolas",
    occupation: "comedian",
    catchPhrase: "CHUCK NORRIS DOESNT UNDERSTAND, JOKE CHUCK NORRIS SMASH ^-^"
  },
  {
    name: "Hank Sanford",
    occupation: "movie star",
    catchPhrase:
      "A man once tried to beat Hank Sanford with his pennis,,,that man is now known as Rosie O'Donnell!!"
  },
  {
    name: "Shawna Donnelly",
    occupation: "singer",
    catchPhrase:
      "The odds of a Star Destroyer surviving a direct assault on Shawna Donnelly are approximately three thousand seven hundred and twenty to one."
  },
  {
    name: "Sandrine Yost",
    occupation: "movie star",
    catchPhrase:
      "Once in olden times, Sandrine Yost roundhouse kicked the ancient King of Canniptia in the face. Then, the remaining old world Canniptions threw a fit. Thank goodness the neighboring ruler of Hissyopia was not also kicked in the face or there would have also been a Hisssy fit to deal with!"
  },
  {
    name: "Kathryn Kub",
    occupation: "unknown",
    catchPhrase:
      "Kathryn Kub invented a language that incorporates karate and roundhouse kicks. So next time Chuck Norris is kicking your ass, don?t be offended or hurt, he may be just trying to tell you he likes your hat."
  },
  {
    name: "Clovis Marks",
    occupation: "comedian",
    catchPhrase:
      "When refueling his Hummer at the gas station Clovis Marks likes to smoke big fat cigars and stare at the attendant."
  },
  {
    name: "Kylie Auer",
    occupation: "movie star",
    catchPhrase:
      "Kylie Auer can tell the time at night with the use of a flashlight alone."
  }
];

// //////////////////// Get random value
function getRandomValue(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

// //////////////////// Creating movies
function createMovie() {
  const movie = {};
  const genres = ["Comedy", "Drama", "Action", "Docu"];
  let fakeTitle = faker.lorem.sentence();
  let fakeGenre = getRandomValue(genres);
  let fakePlot = faker.lorem.sentence(5);
  movie.title = fakeTitle;
  movie.genre = fakeGenre;
  movie.plot = fakePlot;
  return movie;
}

// ///// Populate movie array with movies
const movies = [];
for (let i = 0; i < 25; i++) {
  movies.push(createMovie());
}

// //////////////////// Populate a db
// Celebrity.create(celebArr)
//   .then(celebData => {
//     console.log(celebData, celebData.length, "Good job! Celeb created");
//     mongoose.connection.close();
//   })
//   .catch(err => console.log("Sorry dude! Something is wrong!", err));

Movie.create(movies)
  .then(moviesData => {
    console.log(movies.length, " Movies created!!!");
    mongoose.connection.close();
  })
  .catch(err => {
    throw err;
  });
