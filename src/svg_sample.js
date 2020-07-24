var s = Snap(800,600,"#svg");
var rect = s.rect(100, 100, 150, 50);
var rect2;
rect.attr({fill: '#d0eef5', stroke: '#000'})

var onmove = function(dx,dy) {
    this.attr({
                transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
            });
}

var onstart = function() {
    this.data('origTransform', this.transform().local );
}
var onend = function() {
    console.log('finished dragging');
}

var clickFunc = function () {
    
    rect2 = s.rect(400, 100, 150, 50);
    rect2.drag(onmove, onstart, onend);
    rect2.attr({fill: '#d0eef5', stroke: '#000'});
};

var clickFunc2 = function () {
    var t = s.line(rect.getBBox().cx, rect.getBBox().cy, rect2.getBBox().cx, rect2.getBBox().cy);
    t.attr({fill: '#none', stroke: '#000', strokeWidth: 2});
};

rect.drag(onmove, onstart, onend);
s.dblclick(clickFunc);
rect.click(clickFunc2);