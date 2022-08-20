function PTB2() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Chưa nhập đúng!");
        return false;
    }
    var x1, x2, kq;
    if (a == 0)
        if (b == 0)
            if (c == 0)
                kq = "PT vô số nghiệm";
            else
                kq = "PT vô nghiệm";
    else {
        x1 = -c / b;
        kq = "PT có 1 nghiệm duy nhất: " + x1.toFixed(2);
    } else {
        var denta = b * b - 4 * a * c;
        if (denta == 0) {
            x1 = (-b) / (2 * a);
            kq = "PT có nghiệm kép là " + x1.toFixed(2);
        } else if (denta < 0)
            kq = "PT vô số nghiệm";
        else {
            x1 = (-b + Math.sqrt(denta)) / (2 * a);
            x2 = (-b - Math.sqrt(denta)) / (2 * a);
            kq = "PT có 2 nghiệm:<br>" +
                "+x1: " + x1.toFixed(2) + "<br>" +
                "+x2: " + x2.toFixed(2);
        }
    }
    document.getElementById("kq").innerHTML = kq;
}

function xoa() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("kq").innerHTML = "";
}