var initialCats = [
    {
        clickCount :0,
        name: 'Tabby',
        imgSrc: 'img/cat_picture1.jpg',
        imgAttribution: 'http://www.flicker.com',
        nickNames: ['Zero']
    },{
        clickCount :0,
        name: 'Iron',
        imgSrc: 'img/cat_picture2.jpeg',
        imgAttribution: 'http://www.flicker.com',
        nickNames: ['Iron', 'Bots']
    },{
        clickCount :0,
        name: 'Thor',
        imgSrc: 'img/cat_picture3.jpeg',
        imgAttribution: 'http://www.flicker.com',
        nickNames: ['Zzzz', 'Crazy', 'Juk']
    },{
        clickCount :0,
        name: 'Luki',
        imgSrc: 'img/cat_picture4.jpeg',
        imgAttribution: 'http://www.flicker.com',
        nickNames: ['Iron', 'Bots', 'Juk']
    }];

var Cat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observableArray(data.nickNames);
    
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
    var that = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(cat){
       that.catList.push(new Cat(cat));
    });

    this.currentCat = ko.observable(this.catList()[1]);
    this.incrementCounter = function () {
        that.currentCat().clickCount(that.currentCat().clickCount() + 1);
    };

    this.clickCat = function(cat){
        that.currentCat(cat);
    };
};
ko.applyBindings(new ViewModel());