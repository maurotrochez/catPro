var Cat = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/cat_picture1.jpg');
    this.imgAttribution = ko.observable('http://www.flicker.com');
    this.nickNames = ko.observableArray(['Iron', 'Bots', 'Juk']);
    
    this.type = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if(clicks < 10){
            title = 'Newborn';
        }
        else if(clicks < 100){
            title = 'Child';
        }
        return title;
    }, this);

};

var ViewModel = function(){
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function () {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
};
ko.applyBindings(new ViewModel());