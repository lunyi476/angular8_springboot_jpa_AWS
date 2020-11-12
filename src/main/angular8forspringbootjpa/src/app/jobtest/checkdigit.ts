

function createCheckDigit(membershipId) {
  // Write the code that goes here.
  let s = membershipId as string;
  if (s.length <= 1) return s;
  
  let d =0;
  for (let i=0; i < s.length; i++) {
    d = d + Number.parseInt(s.charAt(i));
  }

  return createCheckDigit(d.toString());
}

console.log(createCheckDigit("55555"));