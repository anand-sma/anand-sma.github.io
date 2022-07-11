function captchaCode() {
  var Numb1, Numb2, Numb3, Numb4, Code;
  Numb1 = (Math.ceil(Math.random() * 10) - 1).toString();
  Numb2 = (Math.ceil(Math.random() * 10) - 1).toString();
  Numb3 = (Math.ceil(Math.random() * 10) - 1).toString();
  Numb4 = (Math.ceil(Math.random() * 10) - 1).toString();

  Code = Numb1 + Numb2 + Numb3 + Numb4;
  $('#captcha span').remove();
  $('#captcha input').remove();
  $('#captcha').append(
    "<span id='code'>" +
      Code +
      "</span><input type='button' onclick='captchaCode();'>"
  );
  $('#captcha span').css('filter', 'blur: 50%');
}

$(function () {
  captchaCode();

  $('#contactForm').submit(function () {
    var captchaVal = $('#code').text();
    var captchaCode = $('.captcha').val();
    if (captchaVal == captchaCode) {
      $('.captcha').css({
        color: '#609D29',
      });
    } else {
      $('.captcha').css({
        color: '#f00',
      });
    }

    var emailFilter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;
    var emailText = $('.email').val();
    if (emailFilter.test(emailText)) {
      $('.email').css({
        color: '#609D29',
      });
    } else {
      $('.email').css({
        color: '#f00',
      });
    }

    var nameFilter = /^([a-zA-Z \t]{3,15})+$/;
    var nameText = $('.name').val();
    if (nameFilter.test(nameText)) {
      $('.name').css({
        color: '#609D29',
      });
    } else {
      $('.name').css({
        color: '#f00',
      });
    }

    var messageText = $('.message').val().length;
    if (messageText > 20) {
      $('.message').css({
        color: '#609D29',
      });
    } else {
      $('.message').css({
        color: '#f00',
      });
    }

    if (
      captchaVal !== captchaCode ||
      !emailFilter.test(emailText) ||
      !nameFilter.test(nameText) ||
      messageText < 20
    ) {
      return false;
    }
    if (
      captchaVal == captchaCode &&
      emailFilter.test(emailText) &&
      nameFilter.test(nameText) &&
      messageText > 20
    ) {
      $('#messageSent').append('<h3>Message Delivered Syccessfully</h3>');
    }
  });
});
