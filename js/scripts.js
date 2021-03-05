$( "button" ).click(function() {
  let startWeight = $('input.start-weight').val()
  let finishWeight = $('input.finish-weight').val()
  if (startWeight && finishWeight) {
    let loosedWeight = startWeight - finishWeight
    let loosedPercents = loosedWeight / (startWeight/100)
    $('p.loosed-kg').text(loosedWeight.toFixed(1) + " kg")
    $('p.loosed-percent').text(loosedPercents.toFixed(1) + " %")
    $('.result').css('display', 'flex')
  } else {
    alert('Wrong data')
  }
});