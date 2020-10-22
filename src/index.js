module.exports = function check(str, bracketsConfig) {

/*  while (true) {

    let baseSTR = str;

   bracketsConfig.forEach ((item) => {
    let stringBracketsConfig = item.join ("");

    while (true) {
      let newSTR = str;
      str = str.replace (stringBracketsConfig, "");
      if (newSTR === str) {break};
    }
  } )

  if (baseSTR === str) {break};

};
*/

for (let i = 0; i < bracketsConfig.length; i += 1) {

  let stringBracketsConfig = bracketsConfig[i].join ("");
  let level = 0;
  
  while (true) {
    if (str.includes(stringBracketsConfig)) { 
      str = str.replace (stringBracketsConfig, "");
      level += 1;
    } else if (level !== 0) { 
      i = -1;
      break;
    } else { break }

  };
  };


  return (str === "") ? true : false;

}
