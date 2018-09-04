function telephoneCheck(str) {// ^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
let numRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g; // Change this line
let result = str.match(numRegex);
    console.log(str);
    console.log(result);
  if (result){//if result of str matching regex returns true
    console.log("true");
    return true;
  }
  else{    
    console.log("false");
    return false;
  }//end of false
}//end of telephoneChecker function

 // telephoneCheck("1 555-555-5555");// should return true.
 // telephoneCheck("1 (555) 555-5555");// should return true.
 // telephoneCheck("5555555555");// should return true.
 // telephoneCheck("(555)555-5555");// should return true.
 // telephoneCheck("1(555)555-5555");// should return true.
//  telephoneCheck("1 555 555 5555");// should return true.
  telephoneCheck("1 456 789 4444");// should return true.
  telephoneCheck("555)-555-5555");// should return false.
  telephoneCheck("(555-555-5555");// should return false.
//  telephoneCheck("555-555-5555");// should return true.
//  telephoneCheck("1 (555) 555-5555");// should return true.
//  telephoneCheck("5555555555");// should return true.
//  telephoneCheck("555-555-5555");// should return true.
//  telephoneCheck("(555)555-5555");// should return true.
//  telephoneCheck("1(555)555-5555");// should return true.
//  telephoneCheck("555-5555");// should return false.
//  telephoneCheck("5555555");// should return false.
//  telephoneCheck("1 555)555-5555");// should return false.
//  telephoneCheck("1 555 555 5555");// should return true.
//  telephoneCheck("1 456 789 4444");// should return true.
//  telephoneCheck("123**&!!asdf#");// should return false.
//  telephoneCheck("55555555");// should return false.
//  telephoneCheck("(6054756961)");// should return false
//  telephoneCheck("2 (757) 622-7382");// should return false.
//  telephoneCheck("0 (757) 622-7382");// should return false.
//  telephoneCheck("-1 (757) 622-7382");// should return false
//  telephoneCheck("2 757 622-7382");// should return false.
//  telephoneCheck("10 (757) 622-7382");// should return false.
//  telephoneCheck("27576227382");// should return false.
//  telephoneCheck("(275)76227382");// should return false.
//  telephoneCheck("2(757)6227382");// should return false.
//  telephoneCheck("2(757)622-7382");// should return false.
//  telephoneCheck("555)-555-5555");// should return false.
//  telephoneCheck("(555-555-5555");// should return false.
//  telephoneCheck("(555)5(55?)-5555");// should return false.
