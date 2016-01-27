module.exports = {
  whatDoesThreeEqual: function() {
    return 3;
  },
  whatDoesSeventeenEqual: function() {
    return 17;
  },
  whatProbablyDoesNotEqualSeventeen: function(){
    return Math.floor((Math.random()*1000)+1)
  },
  whatDoesSeventeenNotEqual: function(){
    return 9;
  }
};
