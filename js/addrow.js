
$('.addRowLink').click(function(){
  $('#table-body > tbody:last-child').append('<tr class="pl-5 pt-3"><td scope="row" class="pl-4"><div class="table-product-img d-inline"><img class="img-fluid" src="images/blue-circle.png" /></div><span><a data-toggle="modal" data-target="#myModal">Ginger Art 112</a></span></td><td class="pl-4">Arper, Monastier di Trevesto (TV)</td><td class="pl-5">03</td><td class="pl-4"><a class="modal-click"  data-toggle="modal" data-target="#myModal"><div class="table-product-img d-inline"><img class="img-fluid" src="images/edit-icon.png" /></div></a><a class = "deleteRowLink" href=""><div class="table-product-img d-inline"><img class="img-fluid" src="images/delete-icon.png" /></div></a></td></tr>');

});


$('.addRowLink2').click(function(){
  $('#table-body > tbody:last-child').append('<tr class="pl-5 pt-3"><td scope="row" class="pl-4"><div class="table-product-img d-inline"><img class="img-fluid" src="images/blue-circle.png" /></div><span><a data-toggle="modal" data-target="#myModal">Ginger Art 112</a></span></td><td class="pl-4">Arper, Monastier di Trevesto (TV)</td><td class="pl-5">03</td><td class="pl-4"><a class="modal-click"  data-toggle="modal" data-target="#myModal"><div class="table-product-img d-inline"><img class="img-fluid" src="images/edit-icon.png" /></div></a><a class = "deleteRowLink" href=""><div class="table-product-img d-inline"><img class="img-fluid" src="images/delete-icon.png" /></div></a></td></tr>');

});

  $(".deleteRowLink").click(function(){
    $(this).parent().parent().remove();
  });
