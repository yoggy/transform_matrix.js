function button_click() {
    var trans_x = parseFloat($("#translate_x").val());
    var trans_y = parseFloat($("#translate_y").val());
    var trans_z = parseFloat($("#translate_z").val());
    var rot_x = parseFloat($("#rotate_x").val()) / 180.0 * Math.PI;
    var rot_y = parseFloat($("#rotate_y").val()) / 180.0 * Math.PI;
    var rot_z = parseFloat($("#rotate_z").val()) / 180.0 * Math.PI;

    var mt = new THREE.Matrix4();
    mt.setPosition(new THREE.Vector3(trans_x, trans_y, trans_z));

    var mx = new THREE.Matrix4();
    mx.makeRotationX(rot_x);

    var my = new THREE.Matrix4();
    my.makeRotationX(rot_y);

    var mz = new THREE.Matrix4();
    mz.makeRotationX(rot_z);

    var m = new THREE.Matrix4();
    m.identity();

    m.multiply(mx);
    m.multiply(my);
    m.multiply(mz);
    m.multiply(mt);

    for (var i = 0; i < 16; ++i) {
        var x = i % 4;
        var y = parseInt(i / 4);
        var name = "#matrix_" + x + "" + y;
        $(name).val(m.elements[i]);
    }
}

function init() {
    $("#button").click(button_click);
}

$(document).ready(init);