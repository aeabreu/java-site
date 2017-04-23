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

    $('#objectiveButton').click(function() {
    if ($('#objective').hasClass('open')) {
      $('#objective').removeClass('open');
      $('#objective').addClass('close');
      $('#objectiveButton').text('Open');
    } else {
      $('#objective').removeClass('close');
      $('#objective').addClass('open');
      $('#objectiveButton').text('Close');
    }
  });
  

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

  $('#workExperienceButton').click(function() {
    if ($('#workExperience').hasClass('open')) {
      $('#workExperience').removeClass('open');
      $('#workExperience').addClass('close');
      $('#workExperienceButton').text('Open');
    } else {
      $('#workExperience').removeClass('close');
      $('#workExperience').addClass('open');
      $('#workExperienceButton').text('Close');
    }
  });

  $('#educationButton').click(function() {
    if ($('#education').hasClass('open')) {
      $('#education').removeClass('open');
      $('#education').addClass('close');
      $('#educationButton').text('Open');
    } else {
      $('#education').removeClass('close');
      $('#education').addClass('open');
      $('#educationButton').text('Close');
    }
  });

});
 


