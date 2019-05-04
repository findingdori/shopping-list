$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
  //console.log($(this.closest('li')));
});