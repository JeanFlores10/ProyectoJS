$(document).ready(function () {
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }

    if (window.location.href.indexOf('index') > -1) {

        var posts = [
            {
                title: 'Prueba de titulo',
                date: 'Publicado el día: ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil similique maximereprehenderit molestiae magni tempore animi eligendi, ex sed neque, porro eos, sequi nullaculpa! Cumque repudiandae officiis facilis. Lorem ipsum dolor sit amet consectetur adipisicingelit. Cupiditate, at ut quaerat aliquid laborum blanditiis beatae repellat tempora enim suscipit architecto libero, expedita delectus maiores? Earum hic soluta in enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, voluptatibus nemo tempore praesentium eius veritatis ut ipsam laboriosam sapiente facilis voluptatum repellendus amet quidem voluptate illum facere accusantium hic sequi.'

            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el día: ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil similique maximereprehenderit molestiae magni tempore animi eligendi, ex sed neque, porro eos, sequi nullaculpa! Cumque repudiandae officiis facilis. Lorem ipsum dolor sit amet consectetur adipisicingelit. Cupiditate, at ut quaerat aliquid laborum blanditiis beatae repellat tempora enim suscipit architecto libero, expedita delectus maiores? Earum hic soluta in enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, voluptatibus nemo tempore praesentium eius veritatis ut ipsam laboriosam sapiente facilis voluptatum repellendus amet quidem voluptate illum facere accusantium hic sequi.'

            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el día: ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil similique maximereprehenderit molestiae magni tempore animi eligendi, ex sed neque, porro eos, sequi nullaculpa! Cumque repudiandae officiis facilis. Lorem ipsum dolor sit amet consectetur adipisicingelit. Cupiditate, at ut quaerat aliquid laborum blanditiis beatae repellat tempora enim suscipit architecto libero, expedita delectus maiores? Earum hic soluta in enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, voluptatibus nemo tempore praesentium eius veritatis ut ipsam laboriosam sapiente facilis voluptatum repellendus amet quidem voluptate illum facere accusantium hic sequi.'

            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el día: ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil similique maximereprehenderit molestiae magni tempore animi eligendi, ex sed neque, porro eos, sequi nullaculpa! Cumque repudiandae officiis facilis. Lorem ipsum dolor sit amet consectetur adipisicingelit. Cupiditate, at ut quaerat aliquid laborum blanditiis beatae repellat tempora enim suscipit architecto libero, expedita delectus maiores? Earum hic soluta in enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, voluptatibus nemo tempore praesentium eius veritatis ut ipsam laboriosam sapiente facilis voluptatum repellendus amet quidem voluptate illum facere accusantium hic sequi.'

            },
            {
                title: 'Prueba de titulo 5',
                date: new Date(),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil similique maximereprehenderit molestiae magni tempore animi eligendi, ex sed neque, porro eos, sequi nullaculpa! Cumque repudiandae officiis facilis. Lorem ipsum dolor sit amet consectetur adipisicingelit. Cupiditate, at ut quaerat aliquid laborum blanditiis beatae repellat tempora enim suscipit architecto libero, expedita delectus maiores? Earum hic soluta in enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, voluptatibus nemo tempore praesentium eius veritatis ut ipsam laboriosam sapiente facilis voluptatum repellendus amet quidem voluptate illum facere accusantium hic sequi.'

            },
            {
                title: 'Prueba de titulo 6',
                date: new Date(),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil similique maximereprehenderit molestiae magni tempore animi eligendi, ex sed neque, porro eos, sequi nullaculpa! Cumque repudiandae officiis facilis. Lorem ipsum dolor sit amet consectetur adipisicingelit. Cupiditate, at ut quaerat aliquid laborum blanditiis beatae repellat tempora enim suscipit architecto libero, expedita delectus maiores? Earum hic soluta in enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, voluptatibus nemo tempore praesentium eius veritatis ut ipsam laboriosam sapiente facilis voluptatum repellendus amet quidem voluptate illum facere accusantium hic sequi.'

            },

        ];



        posts.forEach((item, index) => {

            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
        `;

            $('#posts').append(post);
        });

    }

    //SELECTOR DE TEMA
    var theme = $('#theme');

    $('#to-green').click(function () {

        theme.attr('href', "css/green.css");
    });
    $('#to-red').click(function () {

        theme.attr('href', "css/red.css");
    });
    $('#to-blue').click(function () {

        theme.attr('href', "css/blue.css");
    });

    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 250);
        return false;
    })

    //Login Falso

    $('#login form').submit(function () {
        var form_name = $('#form_name').val();
        localStorage.setItem("form_name", form_name);
    });
    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != 'undefined') {
        var about_parrafo = $('#about p');

        about_parrafo.html("<br> <strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion </a>");
        $('#login').hide();

        $('#logout').click(function () {
            localStorage.clear();
            location.reload();
        });
    }


    //ACORDEON
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }


    //RELOJ
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(() => {
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);

    }


    //VALIDACION
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });


        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});