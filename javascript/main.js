function fixVideoWidth() {
    var width = $("#vid1").parent().width();
    var height = width/1.7777;
    console.log(width);
    console.log(height);
    $("#vid1").width(width);
    $("#vid1").height(height);
};
fixVideoWidth();