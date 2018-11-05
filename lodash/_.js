//1 Create Object
const _ = {
  //3 clamp number
  //--------------------------------------------------------------
  clamp(number, lower, upper) {
    if (number < lower) {
      return lower
    } else if (number > upper) {
      return upper
    } else {
      return number;
    }
  },
  //7 number in range
  //--------------------------------------------------------------
  inRange (number, start, end) {
    //no end. set start to 0 and end to start
    if (!end) {
      end = start;
      start = 0;
    }
    //start > end ?
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    var isInRange = (start <= number && number < end);
    return isInRange;
  },
  //11 words
  //--------------------------------------------------------------  
  words (string) {
    const words = string.split(' ');
    return words;
  },
  //14 pad
  //--------------------------------------------------------------
  pad (string, length) {
    //length <= string ? return string
    if (length <= string.length) {
      return string;
    }
    //padding character
    const paddedString = ' ';
    //determine spaces needed
    const spacesNeeded = length - string.length; //6-2 = 4
    //determine start padding spaces
    const startPadding = Math.floor(spacesNeeded / 2); //4 / 2 = 2
    //determine end padding spaces
    var endPadding;
    if (Number.isInteger(spacesNeeded / 2)) { //true
      endPadding = startPadding //2
    } else {
      endPadding = startPadding + 1;
    }
    //construct result  2 + 2 + 2 = '  hi  '
    return paddedString.repeat(startPadding) + string + paddedString.repeat(endPadding);
  }, 
  //19 has
  //--------------------------------------------------------------
  has (object, key) {
    var hasValue = (object[key] !== undefined);
    return hasValue;
  },

  //23 invert
  //--------------------------------------------------------------
  invert (object) {
    //create object to be returned
    const invertedObject = {};
    //iterate through object keys
    for (let currentKeyValue in object) {
      let originalValue = object[currentKeyValue];     
      invertedObject[originalValue] = currentKeyValue;
    }
    return invertedObject;
  },
  
  //27 findKey
  //--------------------------------------------------------------
  findKey (object, predicate) {
    //iterate through onkect keys
    for (let currentKeyValue in object) {
      if (predicate(object[currentKeyValue])) {
        return currentKeyValue;  
      }
    }
		//false
    return undefined;    
  },
  
  //31 drop
  //--------------------------------------------------------------
  drop (array, n) {
    //If no number specified, make it 1
    if (n === undefined) {n = 1}; 
    let droppedArray = array.slice(n);
    return droppedArray;
  },

  //35 dropWhie
  //--------------------------------------------------------------
  dropWhile (array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  //39 chunk
  //--------------------------------------------------------------
  chunk (array, size = 1) {
    //initialize size to 1 if not specified
    if (size === undefined) {
      size = 1;
    }
    let arrayChunks = [];
    for (var i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }

};




// Do not write or modify code below this line.
module.exports = _;
