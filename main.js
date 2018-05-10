// module.runMain();



var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
};

apple.color = "reddish";
alert(apple.getInfo());