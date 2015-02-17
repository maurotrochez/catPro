var ViewModel = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/cat_picture1.jpg');
    this.imgAttribution = ko.observable('http://www.flicker.com');
    this.type = ko.observable('Newborn');
    this.nickNames = ko.observableArray(['Iron', 'Bots', 'Juk']);

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
        if(this.clickCount()>10){
            this.type('Infant');
        }
        else if(this.clickCount()>110) this.type('Teen');
    };


};
ko.applyBindings(new ViewModel());