let targets = [];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomizeTargets() {
  $( ".input-fields input" ).each(function( index ) {
    [1,2,3,4].forEach(i => Array(i).fill(i).forEach(_ => {
      targets.push($( this ).val())
    }))
  });
  $(shuffle(targets)).each(function( index ) {
    $('.targets').append('<p>' + this + '</p>')
  });
}

function groupTargets(groupVal) {
  $('.targets p').each(function( index, element ) {
    if ((index +1) % groupVal == 0) {
      $(element).css('border-bottom', 'solid black 2px')
      $(element).css('padding-bottom', '25px')
    }
  })
}

function removeGroupTargets() {
  $('.targets p').each(function( index, element ) {
      $(element).css('border-bottom', 'none')
      $(element).css('padding-bottom', 'unset')
  })
}

window.onscroll = function() {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;

  if ((offset+2) >= height) {
    randomizeTargets()
    groupTargets($("select[name='group']").val())

  }
};

$("select[name='group']").change(function() {
  if ($(this).val() == 'none') {
    removeGroupTargets();
  } else {
    removeGroupTargets();
    groupTargets($(this).val());
  }


});

$( "[data-field='add']" ).click(function() {
  $('.input-fields').append(' <input type="text"> ')
});

$( "[data-field='remove']" ).click(function() {
  $('.input-fields input').last().remove()
});


$( "[data-field='random']" ).click(function() {
  if ($('.targets p').length > 0) {
    $('.targets p').remove();
    targets = []
  }
  $("select[name='group']").css('display', 'block')
  randomizeTargets()
});