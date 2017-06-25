$(function() {
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

    var formattedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

    var hr = date.getHours();
    var min = date.getMinutes();
    if (min < 10) {
      min = '0' + min;
    }

    var ampm = hr < 12 ? 'am' : 'pm';
    var formattedTime = hr + ":" + min + ampm;

    timeOfDay.html(currentDay + '! The day is <span id="date">' + formattedDate + ' ' + formattedTime + '</span>');
  }

  function toggle(selector, trigger) {
    if ($(selector).hasClass('open')) {
      $(selector).removeClass('open');
      $(selector).addClass('close');
      $(trigger).html('<i class="fa fa-chevron-down fa-lg"></i>');
    } else {
      $(selector).removeClass('close');
      $(selector).addClass('open');
      $(trigger).html('<i class="fa fa-chevron-up fa-lg"></i>');
    }
  }

  updateGreeting();

  $('#objectiveButton').click(function() {
    toggle('#objective', '#objectiveButton');
  });
  

  $('#skillSummaryButton').click(function() {
    toggle('#skillSummary', '#skillSummaryButton');
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
 


