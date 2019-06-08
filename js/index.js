$(function() {
    const $pass = $("#pass");
    const $confirm = $("#confirm");
    
    $confirm.on("click", function() {
        $.ajax({
            url: $pass.val() + ".html"
        }).then(html => {
            $("body").html(html);
        }).catch(() => {
            alert("パスワード認証に失敗しました");
            $pass.val("");
        });
    })
    $pass.on("keydown", function(e) {
        if(e.keyCode === 13) $confirm.trigger("click");
    });
});