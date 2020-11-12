
 
    // Your code goes here
    // Children with the same name: Wrong answer ??
    function closestRelative(parent, relativeName) {
      // Your code goes here let a = parent  as HTMLElement;
        let cn  = parent.childNodes;  //children;  direct child only
        //let cn1  = a.children;
        // breadth first, not deep first
        for (let i=0; i < cn.length; i++) {
            let j = breadFirst (parent, relativeName)
            if (  j!= null) {
              return j;
            }
           
            let f = closestRelative(cn[i], relativeName); //debugger;
            if (f != null)
                return f;   
        }
    
        return null;
      }
    
      function breadFirst (parent, rname) {
        let a = parent; //  as HTMLElement;
        let cn  = a.childNodes; 
        for (let i=0; i < cn.length; i++) {
          if ( cn[i].nodeName.toLowerCase() == rname.toLowerCase()) {
              return cn[i];
          }
        }
         return null;
      }
      
    
  
  // Example case
  document.body.innerHTML = 
  '<James>' +
    '<Dave><Mike>dddd</Mike><Mike>ffff</Mike></Dave>' +
    '<Mike>ccccc</Mike><Mike>AAAA</Mike>' +
    '<Sarah></Sarah>' +
  '</James>';
  
  let parent1 = document.getElementsByTagName('James')[0]; //as HTMLElement;
  let rel = closestRelative(parent1, 'Mike') ;
  console.log(rel && rel.tagName); // prints MIKE