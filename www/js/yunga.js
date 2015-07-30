Yunga = {

    API: {

        ip: 'http://ip.jsontest.com/'

    },

    show: function (page) {

        $('[page]:visible').hide();
        $('[page="' + page + '"]').show();

    },

    call: function (options) {

        $.ajax({

            type: options.type,
            url: options.url,
            dataType: 'json',
            data: typeof options.data != 'undefined' ? options.data : null,
            beforeSend: function () {
                if (typeof options.beforeSend != 'undefined') {
                    options.beforeSend();
                }
            },
            success: function (data) {
                options.success(data);
            },
            complete: function () {
                if (typeof options.complete != 'undefined') {
                    options.complete();
                }
            },
            error: function () {
                alert('Error inesperado');
            }

        });

    },

    mostrarIP: function (page) {

        Yunga.call({

            type: 'get',
            url: Yunga.API.ip,
            beforeSend: function () {
                Yunga.alert();
            },
            success: function (data) {
                $('[page="secondary"] #ip').text(data.ip);
                Yunga.show(page);
            },
            complete: function () {
                Yunga.alertClose();
            }

        });

    },

    alert: function () {

        if (!$('#alert').is(':visible')) {
            $('#alert').fadeIn(125);
        }

    },

    alertClose: function () {

        $('#alert').fadeOut(125);

    }

};
