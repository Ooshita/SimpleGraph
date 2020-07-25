var s = Snap(800,600,"#svg");
var rectArr = new Array();
var t= new Array();
var t2;
var flag = false;
var selectObj = 0;
var index = -1;
var t_index = -1;
var btn = s.circle(600, 100, 40).attr({fill: '#ff0', stroke: '#000'});
var dragged = false;
var cx1 = 0;
var cy1 = 0;
var index0 = 0;
var pairArr = new Array();

var onmove = function(dx,dy) {
    this.attr({
        transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
    });
    for (var i = 0; i < pairArr.length; i++) {
        t[i].attr({x1 : rectArr[pairArr[i][0]].getBBox().cx, y1 : rectArr[pairArr[i][0]].getBBox().cy + 25, x2 : rectArr[pairArr[i][1]].getBBox().cx, y2 : rectArr[pairArr[i][1]].getBBox().cy -25});
    };
}

var onstart = function() {
    dragged = true;
    this.data('origTransform', this.transform().local );
}

var onend = function() {
    dragged = false;
    console.log('finished dragging');
}

var clickFunc = function () {
    index = index + 1;
    rectArr[index] = s.rect(100, 100, 150, 50).drag(onmove, onstart, onend).attr({fill: '#d0eef5', stroke: '#000'});
    rectArr[index].dblclick(clickFunc3);
    // インデックス情報をエレメントにセットする
    rectArr[index].data("index", index);
};

var clickFunc2 = function () {
    var t = s.line(rectArr[index].getBBox().cx, rectArr[index].getBBox().cy, rectArr[index-1].getBBox().cx, rectArr[index-1].getBBox().cy);
    t.attr({fill: '#none', stroke: '#000', strokeWidth: 2});
};

var clickFunc3 = function () {
    console.log('clickFunc3');
    if (dragged == false) {
        selectObj = selectObj + 1;
        this.attr({fill: '#f05'});
        // インデックス情報をコンソールに表示
        console.log(this.data("index"));
        if (selectObj==1) {
            cx1 = this.getBBox().cx;
            cy1 = this.getBBox().cy;
            index0 = this.data("index");
        } else if (selectObj==2) {
            t_index = t_index + 1
            t[t_index] = s.line(cx1, cy1 + 25, this.getBBox().cx, this.getBBox().cy - 25).attr({fill: '#none', stroke: '#000', strokeWidth: 2});
            pairArr.push([index0, this.data("index")]);
            selectObj = 0;
            for (var i = 0; i < rectArr.length; i++) {
                rectArr[i].attr({fill: '#d0eef5'});
            }
        };
    };
};

btn.dblclick(clickFunc);
