// Back-End
function Pizza () {
  this.toppings = [];
  this.size;
  this.total;
}
Pizza.prototype.cost = function () {
  var cost = 0;
  this.toppings.map(function(topping) {
    cost += topping
  });
  var total = cost + this.size;
  this.total = "Your total is: " + "ksh" + total.toFixed(2);
};

// Front-End
$(function() {
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var pizza = new Pizza();
    $("#pizzaForm").fadeIn();
    $("#orderStarter button").hide();
    $(".pizza-image-container").fadeIn();
    $("button#addToppings").click(function() {
      var toppingsPrice = parseFloat($("#toppings").val());
      var toppingsText = $("#toppings option:selected").text();
      if (toppingsPrice === 0) {
        $(".error").show();
        $("#toppings").addClass('error-border');
      } else if(toppingsPrice === 0.5) {
        $(".order-receipt").fadeIn();
        $(".error").hide();
        $("#toppings").removeClass('error-border');
        pizza.toppings.push(toppingsPrice);
        $("#orderConfirmation ul").append('<li>' + toppingsText + '&nbsp;</li>');
        if(toppingsText === "Pepperoni") {
          $(".pizza-toppings-container img").remove();
          $(".pizza-toppings-container").prepend('<img src="imgs/pepperonis.png">');
        } else if(toppingsText === "Sausage") {
          $(".pizza-toppings-container img").remove();
          $(".pizza-toppings-container").prepend('<img src="imgs/sausages.png">');
        } else if(toppingsText === "Bell Pepper") {
          $(".pizza-toppings-container img").remove();
          $(".pizza-toppings-container").prepend('<img src="imgs/bell-pepper.png">');
        } else if(toppingsText === "Mushroom") {
          $(".pizza-toppings-container img").remove();
          $(".pizza-toppings-container").prepend('<img src="imgs/mushroom.png">');
        } else if(toppingsText === "Onion") {
          $(".pizza-toppings-container img").remove();
          $(".pizza-toppings-container").prepend('<img src="imgs/onions.png">');
        } else if(toppingsText === "Artichoke") {
          $(".pizza-toppings-container img").remove();
          $(".pizza-toppings-container").prepend('<img src="imgs/artichokes.png">');
        } else if(toppingsText === "Tempeh") {
          $(".pizza-toppings-container img").remove();
          $(".pizza-toppings-container").prepend('<img src="imgs/tempehs.png">');
        }
        $("#toppings").val(0);
      }
    });
    $("#order").click(function() {
      var size = parseInt($("#sizes").val());
      if(size === 0) {
        $(".error").show();
      } else {
        $(".error").hide();
        $("#pizzaForm").fadeOut();
        $(".pizza-image-container").fadeOut();
        $(".order-receipt").fadeOut();
        setInterval(function () {
          $(".order-receipt").fadeIn();
          $(".order-receipt ul").addClass('display-block');
          $(".order-receipt").addClass('text-center');
          $("#totalCost").text(pizza.total);
          $("#totalCost").fadeIn();
        }, 700);
        pizza.size = size;
        pizza.cost();
      }
    });
  });
});
