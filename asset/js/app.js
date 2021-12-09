document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');

    var instances = M.Sidenav.init(elems, {   //code materialize
        edge : 'right',    //dar inja mitavan anvae option haro gozasht
        draggable : true   //az site qesmate : sidenav > java script
    });      

    //...................................................................................

    var tabs = document.querySelectorAll('.main_ui_navbar');
    var instance = M.Tabs.init(tabs, {
        swipeable:true
    });

    //....................................................................................quick menu

    var actionbutton = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(actionbutton, {
        toolbarEnabled: true
    });

    //...................................................................................quick menu

    var quickAccessNodes=Array.prototype.slice.call(document.querySelectorAll('.quic-access-items'));   //entkhab eleman haii k class='quic-access-items' ast va onharo tablid b ye array kon k beshe rushon peymayesh kard
    
    for(const item of quickAccessNodes){

        item.addEventListener('click',function(){
            let index = quickAccessNodes.indexOf(item) + 1;
            let menuItemArray = document.querySelectorAll('.menu-item-list');

            setTimeout(function(){
                menuItemArray[index].click();    //ruye arraye menuItemArray,index e gofte shode click kon
            },100)   //bade 100 milisecond k ykm takir dashte bashe o qati nashe
        })
    }

    //........................................................................................................
    //animation progressbar
    animationProgress ('payProgressPath','payProgressText' ,48)
    animationProgress ('floorProgressPath','floorProgressText' ,91)

    function animationProgress (pathDomId,textDomId ,percent){
        let startPercent = 0;      //baze namayesh darsad
        let maxPercent = percent;

        let startProgress = 0;  //nahayate baze harekat progress
        let maxProgress = 253

        let progressInterval = setInterval(() => {     //har 25 milisecond ejra kon
            if(startPercent<=maxPercent){
                document.getElementById(pathDomId).setAttribute('stroke-dasharray',`${startProgress}
                , ${maxProgress}`)

                document.getElementById(textDomId).innerHTML = startPercent+"%";

                startPercent +=1;
                startProgress +=2.53;
                maxProgress -=2.53;
            }else{
                clearInterval(progressInterval);   //interval stop mishe
            }
            
        }, 25);

    }

    //...................................................................................
    //sabt hamsaye jadid

    var selectElem = document.querySelectorAll('select');
    M.FormSelect.init(selectElem, {});

    //...................................................................................
    //afzodane hazine

    var autoCompleteElem = document.querySelectorAll('.autocomplete');
    M.Autocomplete.init(autoCompleteElem , {
        data:{
            "شارژ": null,
            "آب مشاع": null,
            "آب": null,
            "برق مشاع": null,
            "برق": null,
            "گاز": null,  
        }
    })

    //...................................................................................
    //messages
    var collapsibleElem = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibleElem , {});





    
  });

 