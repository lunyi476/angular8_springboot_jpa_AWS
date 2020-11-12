function showCustomers(customers, targetList) {
    // Your code goes here
    for ( let i=0; i < customers.length; i++) {
        let l = document.createElement('li');
        let p1 = document.createElement('p');
        p1.textContent = customers[i].name;
        p1.addEventListener('click', function (event) {
            if (event.target.nextElementSibling.style.visibility =="hidden")
                event.target.nextElementSibling.style.visibility ="visible";
            else if (event.target.nextElementSibling.style.visibility =="visible")
                event.target.nextElementSibling.style.visibility ="hidden";
        });
        let p2 = document.createElement('p');
        p2.textContent = customers[i].email;
        p2.style.visibility ='hidden';
        l.append(p1);
        l.append(p2);
        targetList.append(l);
    }


  }
  
  document.body.innerHTML = `
  <div>
    <ul id="customers">
    </ul>
  </div>
  `;
  let customers = [{name: "John", email: "john@example.com"},
                   {name: "Mary", email: "mary@example.com"}];
  showCustomers(customers, document.getElementById("customers"));
  
  let customerParagraph = document.querySelectorAll("li > p")[0];
  if(customerParagraph) {
    customerParagraph.click();
  }
  console.log(document.body.innerHTML);