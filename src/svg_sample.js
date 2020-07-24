var s = Snap(800,600,"#svg");
var rectArr = new Array();
var index = -1;

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
    index = index + 1;
    rectArr[index] = s.rect(400, 100, 150, 50);
    rectArr[index].drag(onmove, onstart, onend);
    rectArr[index].attr({fill: '#d0eef5', stroke: '#000'});
    rectArr[index].click(clickFunc2);
};

var clickFunc2 = function () {
    var t = s.line(rectArr[index].getBBox().cx, rectArr[index].getBBox().cy, rectArr[index-1].getBBox().cx, rectArr[index-1].getBBox().cy);
    t.attr({fill: '#none', stroke: '#000', strokeWidth: 2});
};

s.dblclick(clickFunc);
