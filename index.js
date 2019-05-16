var destupidify = require("destupidify");

function whatIsARandomItemFromTheCollection(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

module.exports = {
  doesItEqualThree: function(input) {
    if (input == 3) {
      return destupidify.destupidifyAffirmativeVal("yes");
    } else {
      return destupidify.destupidifyNegativeVal("no");
    }
  },
  doesItEqualSeventeen: function(input) {
    if (input == 17) {
      return destupidify.destupidifyAffirmativeVal("yes");
    } else {
      return destupidify.destupidifyNegativeVal("no");
    }
  },
  whatDoesNotContainThree: function() {
    noThree = Math.floor(Math.random() * 1000000)
      .toString()
      .replace(/3/g, "1");
    return parseInt(noThree);
  },
  whatDoesSeventeenEqual: function() {
    return 17;
  },
  whatDoesSeventeenNotEqual: function() {
    var notSeventeen = 0;
    do {
      notSeventeen = Math.floor(Math.random() * 100);
    } while (notSeventeen == 17);
    return notSeventeen;
  },
  whatDoesShibleyHaveToSay: function() {
    var shibleyIsms = [
      "Sorry I'm late, guys!",
      "Dude! Fresh Starbucks food!!!",
      "Have you guys ever thought about the implications of strong AI coming to fruition in our lifetime? Such superintelligence would not be just another technological development; it would be the most important invention ever made, and would lead to explosive progress in all scientific and technological fields, as the superintelligence would conduct research with superhuman efficiency! To the extent that ethics is a cognitive pursuit, a superintelligence could also easily surpass humans in the quality of its moral thinking!!! Fuck!",
      "We're all wizards. No, seriously.",
      "Right on.",
      "Check out these comics!",
      "I had to finger my own tomatoes"
    ];
    return whatIsARandomItemFromTheCollection(shibleyIsms);
  },
  whatDoesThreeEqual: function() {
    return 3;
  },
  whatProbablyDoesNotEqualSeventeen: function() {
    return Math.floor(Math.random() * 1000 + 1);
  },
  whosGoingToBeTheNextPresident: function() {
    var candidates = [
      "Donald Trump (AKA Baby Hands)",
      "John Hickenlooper",
      'Bernie "Feel the Bern" Sanders',
      "Joe Biden",
      "Elizabeth Warren"
    ];
    return whatIsARandomItemFromTheCollection(candidates);
  }
};
