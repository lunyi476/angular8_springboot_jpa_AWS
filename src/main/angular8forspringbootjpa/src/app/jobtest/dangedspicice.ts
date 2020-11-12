function endangeredSpecies(continent, species) {
    // Your code goes here
    let u = document.getElementsByTagName('ul');  //as HTMLCollectionOf<HTMLUListElement>;
    for (let i=0; i < u.length; i++) {
        if (u[i].hasAttribute('data-continent') &&  u[i].attributes[0].value == continent ) {
            let l = u[i].querySelectorAll('li');
            for (let j=0; j < l.length; j++) {
                if (l[j].hasAttribute('data-species') &&  l[j].attributes[0].value == species) {
                    return l[j].textContent;
                }
            }
        }
    }
  }
  
  // Example case
  document.body.innerHTML =
  `<div>
    <ul id="p1" data-continent="North America">
      <li data-species="California condor">Critically Endangered</li>
      <li data-species="American bison">Near Threatened</li>
    </ul>
    <ul data-continent="Europe">
      <li data-species="Cave bear">Extinct</li>
    </ul>
  </div>`;
 /**   try jquery
  jQuery(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toString().toLowerCase();
      $("#myTable tr").filter( function (index) { 
        $(this).text().toLowerCase().indexOf(value) > -1;
      });
    });
  }); 
  
  $("div").filter('[style*="red"]').css("background-color", "yellow");

  document.getElementById('p1').removeAttribute('[data-')
  $("#p1").removeAttr('').css("color", "red").slideUp(2000).slideDown(2000);
  $('li').filter('[data-species~="Cave"]').filter(
    function (index) {  //$(this).toggle(
      return $(this).text().toLowerCase().indexOf("A") > -1 ;
    }
   ).html;
   */
  console.log(endangeredSpecies('North America', 'American bison')); // should print 'Near Threatened'