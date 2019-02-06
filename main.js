$(document).ready(function(){
  $("#mysearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myUL article").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

let trash = $('a');
let contact; $('contact')

  
  $(document).ready(function(){
    init();
 })
 
 function init(){
    $(trash).each(function(i, contact){
        $(contact).click(onDelete);})

    counter();
    $ ('#add').on('click', add);


 }
 
 function onDelete(){
  
    $(this).parent().remove();
console.log($("article").length);

    counter();

 }

 function counter(){
  $('#counter h3').text("Compteur : " + $('article').length);
 }

 function add(){
if( $('textarea').val() !== "" ){


  let value = `<article class="contact"><img src="img/profils1.png" alt="profil1"><h2>Profil 1</h2><p>${$('textarea').val()}</p><a href="#"><i class="fa fa-trash" aria-hidden="true"></i></a></article>`



  $('.content').append(value)
}

$('textarea').val("")
counter();
init();
}


