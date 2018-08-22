/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (
  window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
  window.console && window.console.info
) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
  window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})


function toggleDiv(divId) {
    $("."+divId).toggle();
}


$('.clickMe').toggle(
  function(){
      $('#' + $(this).attr('for')).show();
      $(this).text('hide');
  },
  function(){
      $('#' + $(this).attr('for')).hide();
      $(this).text('show');
});


$(document).ready(function(){

  $('input#forminput').keypress(function() {
      $('#hiddenlist').css("visibility","visible");
      $(this).focus();
    });

  



  var selected = [];

  $('#hiddenlist input:checked').each(function() {
      selected.push($(this).attr('name'));
  });
  console.log(selected);

});



$('input').click(function(event){
  //event.preventDefault();

  var selected = [];

  $("#hiddenlist input:checkbox:checked").map(function(){
    selected.push($(this).val());

    currentVal = $('input[name='+'output'+']').val();
    newVal = currentVal & selected;
    $('#output').val(newVal);

    console.log(selected);
  });

  
});
