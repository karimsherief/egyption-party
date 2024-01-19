$('.open-sidebar').on('click', function () {
    $('aside').addClass('aside--open')
    $(this).addClass('open-sidebar--hide')
})

$('.close-sidebar').on('click', function () {
    $('aside').removeClass('aside--open')
    $('.open-sidebar').removeClass('open-sidebar--hide')
})

$('.singer__name').on('click', function () {
    let details = $(this).parent().children('.singer__details');
    let siblings = $(this).parent().siblings().children('.singer__details')

    $(this).css('pointer-events', 'none')

    details.slideToggle(500,
        () => $(this).css('pointer-events', 'unset')
    )
    
    siblings.slideUp(500)
})


$('form').on('submit', function () {
    return false
})

$('textarea').on('input', function (e) {
    let characters = $(this).val().length
    let remainCharacters = $('.remain__characters')
    if (characters > 100) {
        $(this).val($(this).val().slice(0, 100))
        return false
    }
    remainCharacters.css('opacity', +(characters < 100))
    remainCharacters.text(`${100 - characters}`)
})

const countDown = setInterval(() => {
    const countDownDate = new Date("2024-3-25").getTime();

    const now = new Date().getTime();

    const remain = countDownDate - now;

    if (remain <= 0) {
        clearInterval(countDown);
        $('.count__date__btn').css('display', 'block')
        return;
    }

    setTime(...getTime(remain))

}, 1000)

function getTime(remain) {
    let days = Math.floor(remain / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remain % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds]
}
function setTime(days, hours, minutes, seconds) {
    $('.count__date__days').text(`${days >= 10 ? days : `0${days}`} D`)
    $('.count__date__hours').text(`${hours >= 10 ? hours : `0${hours}`} H`)
    $('.count__date__minutes').text(`${minutes >= 10 ? minutes : `0${minutes}`} M`)
    $('.count__date__seconds').text(`${seconds >= 10 ? seconds : `0${seconds}`} S`)
}