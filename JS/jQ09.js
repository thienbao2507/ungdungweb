$(document).ready(function(){
    var arr=[];//mảng chứa các item bị xóa để phục hồi
    //click lên phần tử nào, chuỗi đố hiện lên bên khung phải
    $("ol>li").click(function(){
        $("p#view").text($(this).text());
    });
    //click lên radio id="no"
    $("#no").click(function(){
        $("#view").removeClass("shadow");
    });
    //click lên radio id="yes"
    $("#yes").click(function(){
        $("#view").addClass("shadow");
    });
    //thay đổi màu chữ
    $("#textcolor").change(function(){
        $("#view").css("color", $(this).val());
    });
    //click button xóa phần tử cuối
    $("#btDel").click(function(){
        var text = $("ol li:last").text();
        if (text == "") return;
        arr.unshift(text); //thêm chuỗi bị xóa vào đầu danh sách arr
        $("ol li:last").remove(); //xóa <li> cuối
    });
    //xử lý button phục hồi
    $("#btUndo").click(function(){
        if (arr.length == 0) return; //danh sách rỗng, không xử lý
        var item = "<li>" + arr.shift() + "</li>"; // tạo phần tử <li> với chuỗi lấy ở đầu danh sách
        $("ol").append(item); //thêm vào cuối <ol>
        $("ol").on("click", "li", function(){
            $("p#view").text($(this).text());
        })
    });
})