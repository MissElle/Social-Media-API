window.onload = function(){
    var feed = new Instafeed({
        get: 'user',
        tagName: 'boobitters',
        clientId: '	917566a744474d8a93a311662aa5be2f'
    });
    feed.run();
}