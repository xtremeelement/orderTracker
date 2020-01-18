$(function() {
  $(".complete").on("click", function(event) {
    let id = $(this).attr("id");
    let completedOrder = {
      order: id
    };
    console.log(id);

    $.ajax(`/api/orders/${id}`, {
      type: "PUT",
      data: completedOrder
    }).then(() => {
      alert("Order Completed");
      location.reload();
    });
  });

  $(".delete").on("click", function(event) {
    let id = $(this).attr("id");
    let deleteddOrder = {
      order: id
    };
    console.log(id);

    $.ajax(`/api/orders/${id}`, {
      type: "DELETE",
      data: deleteddOrder
    }).then(() => {
      alert("Order Delete");
      location.reload();
    });
  });
});
