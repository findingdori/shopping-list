function addItem() {
  //set event listener on js-shopping-list-form id to activate on submit
  $('#js-shopping-list-form').on('submit', function(event) {
    //disable form submission
    event.preventDefault();
    //get value of text field and assign to variable
    let newListItem = $('#shopping-list-entry').val();

    //Append HTML for item to main shopping-list class
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
      </li>`)

    //Clear text field for next entry
    $('#shopping-list-entry').val('');
  })
}

function checkItems() {
  //set event listener on shopping list class to activate on clicking itme with shopping-item-delete class
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    /* 
    Get event.currentTarget aka THIS
    Go up to the closest li
    The go down and find the closest shopping-item class
    Toggle the shopping-item_checked class that will strikethrough text
    */
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
  });  
}

function deleteItems() {
  //Set event listener on shopping-list class to activate on clicking on item with shopping-item-delete class
   $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  //Get event.currentTarget aka THIS. Go up to closest li, remove that li item
    $(this).closest('li').remove();
  });
}


//Run on ready
$(function() {
  addItem();
  checkItems();
  deleteItems();
});