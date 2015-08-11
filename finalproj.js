$('.analysis-btn').click(function(){
  $('.analysis-btn').blur();

  $loading.show();
  $error.hide();
  $traits.hide();
  $results.hide();

  $.ajax({
    type: 'POST',
    data: {
      text: $content.val(),
      language: language
    },
    url: '/',
    dataType: 'json',
    success: function(response) {
      $loading.hide();

      if (response.error) {
        showError(response.error);
      } else {
        $results.show();
        showTraits(response);
        showTextSummary(response);
        showVizualization(response);
      }

    },
    error: function(xhr) {
      $loading.hide();

      var error;
      try {
        error = JSON.parse(xhr.responseText || {});
      } catch(e) {}
      showError(error.error || error);
    }
  });
});