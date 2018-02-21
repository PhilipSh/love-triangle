/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  var firstLover,secondLover,thirdLover;

  for (var i = 0; i < preferences.length; i++) {
      firstLover = preferences[i];
      secondLover = preferences[firstLover -1 ];
      thirdLover = preferences[secondLover -1 ];
      if(thirdLover== i){
        count++;
    }
  }
  return Math.floor(count/3);
};
