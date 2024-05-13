const STATUS = {
    available: 'available',
    reserved: 'reserved',
    sold: 'sold',
};

const data = [
    {
        lot: 1,
        pieces: "4.5 + JH",
        etage: "Rez-de-Jardin",
        hab: 113.5,
        balcon: 23.3,
        terrasse: 72.2,
        statut: STATUS.reserved,
    },

    {
        lot: 2,
        pieces: "3.5",
        etage: "Rez-de-Jardin",
        hab: 86.9,
        balcon: 19.0,
        terrasse: 44.2,
        statut: STATUS.available,
    },

    {
        lot: 3,
        pieces: "4.5 + JH",
        etage: "Rez-de-Jardin",
        hab: 113.7,
        balcon: 23.3,
        terrasse: 72.2,
        statut: STATUS.available,
    },

    {
        lot: 4,
        pieces: "4.5 + JH",
        etage: "Attique",
        hab: 108.9,
        balcon: 35.8,
        terrasse: '',
        statut: STATUS.available,
    },

    {
        lot: 5,
        pieces: "3.5 + JH",
        etage: "Attique",
        hab: 84.4,
        balcon: 32.8,
        terrasse: '',
        statut: STATUS.sold,
    },

    {
        lot: 6,
        pieces: "4.5 + JH",
        etage: "Attique",
        hab: 109.1,
        balcon: 35.8,
        terrasse: '',
        statut: STATUS.available,
    },
];

function handleHeaderOnScroll() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    });
}

function initializeSlider() {
    $('.slider').slick({
        slidesToShow: 1.8,
        slidesToScroll: 1,
        infinite: false,
        autoplaySpeed: 2000,
    });
}

function fillTableWithData(data) {
    const tbody = $('#table tbody');
    data.forEach(rowData => {
        const row = $('<tr></tr>').addClass(rowData.statut);
        Object.entries(rowData).forEach(([key, value]) => {
            const unit = (key === 'hab' || key === 'balcon' || key === 'terrasse') ? 'm<sup>2</sup>' : '';
            row.append(`<td>${value} ${value ? unit : ''}</td>`);
        });
        applyStatusClassToLot(rowData);
        tbody.append(row);
    });
}

function applyStatusClassToLot(rowData) {
    const lotNumber = rowData.lot;
    const status = rowData.statut;
    $(`.lot-${lotNumber}`).addClass(status);
}

function handleTableHover() {
    $('#table tbody tr').hover(function() {
        const lotNumber = $(this).find('td:first-child').text();
        $(`.lot-${lotNumber}`).addClass('hover');
    }, function() {
        $('.facade__img svg path').removeClass('hover');
    });
}

function handleSvgPathHover() {
    $('.facade__img svg path').hover(function() {
        const lotNumber = $(this).data('lot');
        $(`#table tbody tr:nth-child(${lotNumber})`).addClass('hover');
    }, function() {
        const lotNumber = $(this).data('lot');
        $(`#table tbody tr:nth-child(${lotNumber})`).removeClass('hover');
    });
}

function handleOpenModal() {
    $(`.facade__img svg path:not('.${STATUS.sold}')`).click(function() {
        $('.extra-box').addClass('open');
    });

    $(`#table tbody tr:not('.${STATUS.sold}')`).click(function() {
        $('.extra-box').addClass('open');
    })


}

function handleCloseModal() {
    $('.layer, .modal__close').click(function() {
        $('.extra-box').removeClass('open');
    });
}

$(document).ready(function() {
    handleHeaderOnScroll();
    initializeSlider();
    fillTableWithData(data);
    handleTableHover();
    handleSvgPathHover();
    handleOpenModal();
    handleCloseModal();
});
