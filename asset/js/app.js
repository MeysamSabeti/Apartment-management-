document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');

    var instances = M.Sidenav.init(elems, {   //code materialize
        edge : 'right',    //dar inja mitavan anvae option haro gozasht
        draggable : true   //az site qesmate : sidenav > java script
    });      
    
    var tabs = document.querySelectorAll('.main_ui_navbar');
    var instance = M.Tabs.init(tabs, {
        swipeable:true
    });

    var actionbutton = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(actionbutton, {});

    
  });

 