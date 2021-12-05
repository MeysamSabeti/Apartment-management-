document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');

    var instances = M.Sidenav.init(elems, {   //code materialize
        edge : 'right',    //dar inja mitavan anvae option haro gozasht
        draggable : true   //az site qesmate : sidenav > java script
    });                                    
  });