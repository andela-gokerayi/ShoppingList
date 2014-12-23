var shoppingList = {

  initializeForm: function(){
    shoppingList.itemCount = 0;
    shoppingList.itemInput = $("input#item");
    shoppingList.itemInput.val("");

    $("a#add-item").click(list);
      $("#item").keydown(function (enter){
        if (enter.keyCode == 13) {
        list();
      }
    });
  },
  shoppingList.addItem: function (listItem) {
    listItem.hide();
    items.append(listItem);
    listItem.show('fast');
  },
  shoppingList.purchasedItem: function (listItem) {
    listItem.hide();
    shoppingList.purchasedItem.append(listItem);
    listItem.show('fast');
  },
    listItem.find("input:checkbox").click(function () {
      this.checked ? purchasedItem(listItem) : addItem(listItem);
  });
      itemInput.focus();

    shoppingList.list: function () {
      if (shoppingList.itemInput.val() === '') {
        return;
      };
      var items = $("ul#items");
      var purchased = $("ul#purchased");
      var itemToBuy = shoppingList.itemInput.val();
        shoppingList.itemInput.val("");

        // create a list item and checkbox, assigning an id to it.
        var listItem = $("<li><input type='checkbox' name=" + itemToBuy + " value=" + itemToBuy + "> " + itemToBuy + " <a class='delete' href='#'><strong>-</strong> Delete</a></li>");
          listItem.attr("id", "item[" + itemCount+++"]");
          shoppingList.addItem(listItem);

        listItem.find("a").click(function () {
          $(this).parent().hide('slow', function () {
          $(this).remove();
      });
    });
  },
};

$(document).ready(shoppingList.initialize);