function ensure(value) {
    // Your code goes here
    if (value === undefined)
     throw "undefined value";

     return value;
  }
  
  try {
    console.log(ensure());
  } catch(err) {
    console.log(err);
  }