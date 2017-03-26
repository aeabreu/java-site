$(function() {
//          function Alex() {
//            this.name = 'alex';
//            this.lastName = 'abreu';
//          }
//
//          Alex.prototype.getName = function() {
//            return 'whaddddup';
//          }
//
//
//          var peter = new Alex();
//          console.log(peter.getName());

  function updateGreeting() {
    var MORNING = 'morning';
    var AFTERNOON = 'afternoon';
    var NIGHT = 'evening';

    var currentDay;
    var timeOfDay = $('#timeOfDay');

    var date = new Date();
    if (date.getHours() < 12) {
      currentDay = MORNING;
    } else if (date.getHours() < 18) {
      currentDay = AFTERNOON;
    } else {
      currentDay = NIGHT;
    }

    timeOfDay.html(currentDay + '! The time is ' + date);
  }

  updateGreeting();

  $('#skillSummaryButton').click(function() {
    if ($('#skillSummary').hasClass('open')) {
      $('#skillSummary').removeClass('open');
      $('#skillSummary').addClass('close');
      $('#skillSummaryButton').text('Open');
    } else {
      $('#skillSummary').removeClass('close');
      $('#skillSummary').addClass('open');
      $('#skillSummaryButton').text('Close');
    }
  });

});