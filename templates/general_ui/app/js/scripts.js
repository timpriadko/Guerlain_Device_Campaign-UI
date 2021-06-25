'use strict';

document.addEventListener('DOMContentLoaded', function () {
  //disable context
  $(document).bind("contextmenu", function (e) {
    return false;
  });

  //
  var email = $('#email');

  if (email.length > 0) {
    var timeInMs = Date.now();

    email.val(`${timeInMs}@guerlain.odore.co.uk`);
  }

  // product page functionality
  var answer_inputs = $('input[name="answer"]');
  var question = $('input[data-question="question"]').closest('form').find('input[name="question"]').val();
  var answer_btn = $('#answer_btn');

  var a_1 = 'More than 20.000';
  var a_2 = 'Preserving biodiversity';
  var a_3 = 'THE BLACK BEE';
  var a_4 = 'Woman for Bees';

  var question_1 = 'How many domestic and wild bee species are there in the world?';
  var question_2 = "What are the 4 pillars of Guerlain's commitment?";
  var question_3 = 'Which of the following bee species lives on ouessant island in France?';
  var question_4 = 'Which of the following initiatives are a part of the Guerlain’s For Bees Conservation Programme?';

  var answer_1 = sessionStorage.getItem(question_1);
  var answer_2 = sessionStorage.getItem(question_2);
  var answer_3 = sessionStorage.getItem(question_3);
  var answer_4 = sessionStorage.getItem(question_4);

  var answers_arr = [answer_1, answer_2, answer_3, answer_4];

  var current_correct_answer = () => {

    if (question === question_1) {
      return a_1;
    }

    if (question === question_2) {
      return a_2;
    }

    if (question === question_3) {
      return a_3;
    }

    if (question === question_4) {
      return a_4;
    }
  };

  var total_correct_answers = () => {
    var total = 0;

    answers_arr.forEach(item => {
      if (item === 'true') {
        total += 1;
      }
    })

    return total;
  }

  answer_btn.click(function (e) {

    if (total_correct_answers() === 4) {
      // 3 axis

      $(this).attr('href', 'step_10-product_2.html');
    }

    if (total_correct_answers() === 3) {
      // AA

      $(this).attr('href', 'step_10-product_1.html');
    }

    if (total_correct_answers() === 2) {
      // AR trilogy

      $(this).attr('href', 'step_10-product_3.html');
    }

    if (total_correct_answers() === 1 || total_correct_answers() === 0) {
      // AR powerful Duo

      $(this).attr('href', 'step_10-product_4.html');
    }
  })

  function answerInputHandler(e) {
    // e.preventDefault();

    sessionStorage.setItem(question, this.value === current_correct_answer() && true);

    $(this).closest('form').submit();
  }

  if ($('input[data-question="question"]').length > 0 && answer_inputs.length > 0) {
    answer_inputs.click(answerInputHandler);
  }

});