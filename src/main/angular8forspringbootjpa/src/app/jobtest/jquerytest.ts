









 
function setup() {
    //Write your code here
     $('button').each(function() {
        $(this).on('click', function(event) {
            if ($(this).text() == 'Up!') {
                //Get the combined text contents of each element in the set of matched elements,
                // including their descendants, or set the text contents of the matched elements.
                let t1 = $(this).parent().contents().get(1).textContent;
                let t2 = $(this).parent().prev().contents().get(1).nodeValue;
                $(this).parent().contents().get(1).textContent = t2;
                $(this).parent().prev().contents().get(1).textContent = t1;
            }
            if ($(this).text() == 'Down!') {
                let t1 = $(this).parent().contents().get(1).textContent;
                let t2 = $(this).parent().next().contents().get(1).nodeValue;
                $(this).parent().contents().get(1).textContent = t2;
                $(this).parent().next().contents().get(1).textContent = t1;
            }
        });
    });
}
  
  document.body.innerHTML = `<ol>
    <li><button>Up!</button>Taco<button>Down!</button></li>
    <li><button>Up!</button>Pizza<button>Down!</button></li>
    <li><button>Up!</button>Eggs<button>Down!</button></li>
  </ol>`;
  
  setup();
  $("button").get(2).click();
  
  console.log(document.body.innerHTML);





/**
    function createProductCodeForm(parent) {
    var form = $("<form/>");  // <form></form>  cannot use 'form' because this is selector
  
    form.append($("<label>").text('Product Code:'));
    form.append($("<input>").attr('name', 'productCode').attr('type', 'text'));
    form.append($("<label>").attr('name', 'hint').
        text('The product code can be found on the label.').hide()); //this text for label 
    
  
    form.append('<br>');
  
    form.append($("<input>").attr('type', 'submit'));
    // jquery object to DOM object or reverse
    // $(parent) to Jquery object;  form[0]/form.get(0) to DOM object
    // to show by two ways:
    //parent.appendChild(form[0]);
    $(parent).append(form).html();

    $('input').filter("[name='productCode']").on({ focus: function (event) {
        // filter return first one jquery object
        $('label').filter("[name='hint']").show();  
        }, blur:function (event) {
            $('label').filter("[name='hint']").hide(); 
        }
    });
    
  }

  document.body.innerHTML = `
  <div>
  </div>`;
  createProductCodeForm (document.querySelector('div'));

function endangeredSpecies(continent, species) {
    // Implement the function here.
    return $('ul').filter("[data-continent='"+continent+"']").find('li').
        filter("[data-species='"+species+"']")[0].textContent;
  }
  
  // Example case
  $('body').html(
    `<div>
      <ul data-continent="North America">
        <li data-species="California condor">Critically Endangered</li>
        <li data-species="American bison">Near Threatened</li>
      </ul>
      <ul data-continent="Europe">
        <li data-species="Cave bear">Extinct</li>
      </ul>
    </div>`
  );
  
  console.log(endangeredSpecies('North America', 'American bison')); // should print 'Near Threatened'
  **/