Yunga.visited = ['index'];

function backbuttonHandler(e) {

    e.preventDefault();

    if (Yunga.visited.length >= 2) {
        Yunga.visited.pop();
        var next = Yunga.visited[Yunga.visited.length - 1];
        Yunga.show(next);
    } else {
        navigator.app.exitApp();
    }

}

$(function() {

    $('[page="index"]').show();

    $('body').on('click', '[nav]', function(e) {

        e.preventDefault();

        var clicked = $(this);

        var actual = $('[page]:visible').attr('page');
        var next = $(this).attr('nav');

        if (next != actual) {
            Yunga.visited.push(next);
            if (typeof clicked.attr('before') != 'undefined') {
                var func = clicked.attr('before') + "('" + next + "');";
                eval(func);
            } else {
                Yunga.show(next);
            }
        }

    });

});

document.addEventListener("backbutton", backbuttonHandler, false);
