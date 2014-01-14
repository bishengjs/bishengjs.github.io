var json = {
    "name": "flare",
    "children": [{
        "name": "AngularJS",
        "size": 18786
    }, {
        "name": "Rivets.js",
        "size": 1283
    }, {
        "name": "nytimes/backbone.stickit",
        "size": 885
    }, {
        "name": "Epoxy.js",
        "size": 275
    }, {
        "name": "Ember.js",
        "size": 9063
    }, {
        "name": "RubyLouvre/avalon",
        "size": 364
    }, {
        "name": "Knockout",
        "size": 4501
    }, {
        "name": "backbone.modelbinding",
        "size": 729
    }, {
        "name": "BiSheng.js",
        "size": 6
    }]
}
json.children.sort(function(a, b) {
    return a.size - b.size
})
for (var index = 0; index < json.children.length; index++) {
    json.children[index].size = index
}
var w = $('#chart').width(),
    h = 150;

function color() {
    return Random.brandColors[
        Random.pick(
            Random.brands()
        )
    ]
}
color.index = 0

// d3.scale.category20c();
var treemap = d3.layout.treemap()
    .size([w, h])
    .sticky(true)
    .value(function(d) {
        return d.size;
    });
var div = d3.select("#chart").append("div")
    .style("position", "relative")
    .style("width", w + "px")
    .style("height", h + "px");

div.data([json]).selectAll("div")
    .data(treemap.nodes)
    .enter().append("div")
    .attr("class", "cell")
    .style("background", function(d) {
        return d.children ? null : color(d.name);
    })
    .call(cell)
    .text(function(d) {
        return d.children ? null : d.name;
    });

function cell() {
    this
        .style("left", function(d) {
            return d.x + "px";
        })
        .style("top", function(d) {
            return d.y + "px";
        })
        .style("width", function(d) {
            return d.dx - 1 + "px";
        })
        .style("height", function(d) {
            return d.dy - 1 + "px";
        })
        .style("line-height", function(d) {
            return d.dy - 1 + "px";
        })
}