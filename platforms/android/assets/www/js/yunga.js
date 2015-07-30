Yunga = {

    API: {

        ip: 'http://ip.jsontest.com/'

    },

    call: function (options) {

        $.ajax({

            type: options.type,
            url: options.url,
            dataType: 'json',
            beforeSend: function () {
                if (typeof options.beforeSend != 'undefined') {
                    options.beforeSend();
                }
            },
            success: function (data) {
                options.success(data);
            },
            complete: function () {
                if (typeof options.beforeSend != 'undefined') {
                    options.complete();
                }
            },
            error: function () {
                alert('Error inesperado');
            }
        });

    },

    mostrarIP: function () {

        Yunga.call({
            type: 'get',
            url: Yunga.API.ip,
            beforeSend: function () {
                Yunga.alert();
            },
            success: function (data) {
                $('#secondary_ip').text(data.ip);
                $('[page]:visible').hide();
                $('[page="secondary"]').show();
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
