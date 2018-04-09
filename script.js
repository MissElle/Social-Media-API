window.onload = function(){
    var feed = new Instafeed({
        get: 'tagged',
        tagName: '',
        clientId: 'boobitters'
    });
    feed.run();
}