 
  document.body.innerHTML = `<ol>
    <li><button>Up!</button>Taco<button>Down!</button></li>
    <li><button>Up!</button>Pizza<button>Down!</button></li>
    <li><button>Up!</button>Eggs<button>Down!</button></li>
  </ol>`;

  
 
  function exchangeTextNode(chl0, chl1) {
    for (let k=0; k < chl0.length; k++) {
      if (chl0[k].nodeName == '#text') {
        let t0 = chl0[k].textContent;
        for (let j=0; j < chl1.length; j++) {
          if (chl1[j].nodeName == '#text') {
              chl0[k].textContent = chl1[j].textContent;
              chl1[j].textContent = t0;
              return;
          }
        }
      }
   }
  }

function setup() {
  let b = document.getElementsByTagName('button');
  // Write your code here
  for (let i=0; i < b.length; i++) {
      b[i].addEventListener ('click', function ( event)  {        
          let list = document.getElementsByTagName('li');
          // button is target and we can get information of button element
          let flag = this.textContent; //event.target.textContent;
          let inhtml = this.parentElement.innerHTML;
          for (let j=0; j < list.length; j++) {          
                // this button is in this li  
                if (list[j].innerHTML == inhtml) {
                  if (flag =='Up!' && j-1 > -1) {
                    exchangeTextNode(list[j-1].childNodes, list[j].childNodes);
                  }
                  else if ( flag =='Down!' && j+1 < list.length  ) {
                    exchangeTextNode(list[j].childNodes, list[j+1].childNodes);
                  }
                  return; 
                }
              
          }
          
      })
  }
}

  

  
  setup();
  document.getElementsByTagName('button')[2].click();
  
  console.log(document.body.innerHTML);


  
  