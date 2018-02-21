/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    
    var count = 0;
    var firstLover, secondLover, thirdLover;
    var i;
    for (i = 0; i < preferences.length; i++) {
        firstLover = preferences[i] - 1;
        secondLover = preferences[firstLover] - 1;
        thirdLover = preferences[secondLover] - 1;
        if (thirdLover == i && firstLover != secondLover && secondLover != thirdLover && thirdLover != firstLover) {
            delete preferences[i];
            count++;
        }    }
    return count;
};
