$(function() {

  $("#RSVPForm input,#RSVPForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var song = $("input#song").val();
      var attendees = $("input#attendees").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendRSVPButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      // $.ajax({
      //   url: "https://hidden-badlands-85059.herokuapp.com/rsvps/create",
      //   type: "POST",
      //   header: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: {
      //     rsvp:{
      //       name: 'kc',
      //       attendees: '5',
      //       song: 'at last'
      //     }
      //   },
      //   cache: false,
      //   success: function() {
      //     // Success message
      //     $('#success').html("<div class='alert alert-success'>");
      //     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
      //       .append("</button>");
      //     $('#success > .alert-success')
      //       .append("<strong>Your message has been sent. </strong>");
      //     $('#success > .alert-success')
      //       .append('</div>');
      //     //clear all fields
      //     $('#contactForm').trigger("reset");
      //   },
      //   error: function() {
      //     // Fail message
      //     $('#success').html("<div class='alert alert-danger'>");
      //     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
      //       .append("</button>");
      //     $('#success > .alert-danger').append($("<strong>").text("Sorry Mr" + firstName + ", it seems that my mail server is not responding. Please try again later!"));
      //     $('#success > .alert-danger').append('</div>');
      //     //clear all fields
      //     $('#contactForm').trigger("reset");
      //   },
      //   complete: function() {
      //     setTimeout(function() {
      //       $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
      //     }, 1000);
      //   }
      // });
      $.ajax("https://hidden-badlands-85059.herokuapp.com/rsvps/create", {
    method: 'POST',
    contentType: 'application/json',
    processData: false,
    data: JSON.stringify({
        name: 'John Smith',
        attendees: 34,
        song: 'boombox'
    })
})
.then(
    function success(userInfo) {
        // userInfo will be a JavaScript object containing properties such as
        // name, age, address, etc
    }
);
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
