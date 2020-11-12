function findTwoSum(numbers, sum) {
    // Your code goes here
   let ind: number[]; // let ind =[];  JS Array is dynamic, no need set size;  let ind = new Array(2);
   for (let i=0; i < numbers.length -1; i++) {
       let t = numbers[i];
       for (let j=i+1; j < numbers.length; j++) {
           if (numbers[j]+ t == sum) {
               ind[0] = i; ind[1] =j;
               return ind;
           }
       }
   }
 
    //if (ind[0] == null) return null;
  }
  
  const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
  console.log(indices);