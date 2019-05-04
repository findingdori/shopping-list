$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
  //console.log($(this.closest('li')));
});

$('#js-shopping-list-form').on('submit', function(event) {
  //disable form submission
  event.preventDefault();
  
  //get value of text field and assign to variable
  let newListItem = $('#shopping-list-entry').val();

  //append HTML for item to main shopping-list class
  $('.shopping-list').append(`<li>
    <span class="shopping-item">${newListItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  
  //clear text field for next entry
  $('#shopping-list-entry').val('');
})

//Checks off list item when pressing check button
$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

  //console.log($(this.closest('li')));
});