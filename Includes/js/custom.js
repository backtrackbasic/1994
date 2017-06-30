//Right click Diasbale.......!

$(document).on({
    "contextmenu": function (e) {
    alert('Right click Diable..')
               // Stop the context menu
        e.preventDefault();
    },
   });