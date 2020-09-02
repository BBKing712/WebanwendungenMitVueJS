
var info = new Vue({ 
    el: '#info', 
    data: 
    { 
        message: new Date() 
    } 
});
function Uhrzeit() {

    info.message = new Date();
    setTimeout(Uhrzeit,1000);

}
Uhrzeit();