var x, y;
var bool = (x > y);
var notAnumb = x * "string";
var z = null;
var m1 = [33, "hello", bool, z, undef, notAnumb,["arr1", "arr2"], {} ];
function massOut() {
    var p = document.getElementById('out');
    var str = '';
    for (var i=0; i<m1.length; i++) {
        str += m1[i] + '...' + typeof(m1[i]) + '<br>';
    } 
    p.innerHTML = str;
    
}
massOut();

var undef = (x < y) ;

function p1() {
    var i1 = document.getElementById('i1').value;
    m1.push(i1);
    massOut();
}

function p2() {
    var i1 = document.getElementById('i1').value;
    m1.pop(i1);
    massOut();
}