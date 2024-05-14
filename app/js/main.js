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
    $(window).scroll(() => {
        $(".header").toggleClass("fixed", $(window).scrollTop() > 0);
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
            const unit = (['hab', 'balcon', 'terrasse'].includes(key)) ? 'm<sup>2</sup>' : '';
            row.append(`<td>${value} ${value ? unit : ''}</td>`);
        });
        applyStatusClassToLot(rowData);
        tbody.append(row);
    });
}

function applyStatusClassToLot(rowData) {
    $(`.lot-${rowData.lot}`).addClass(rowData.statut);
}

function handleTableHover() {
    $('#table tbody tr').hover(function () {
        const lotNumber = $(this).find('td:first-child').text();
        $(`.lot-${lotNumber}`).addClass('hover');
    }, () => {
        $('.facade__img svg path').removeClass('hover');
    });
}

function handleSvgPathHover() {
    $('.facade__img svg path').hover(function () {
        const lotNumber = $(this).data('lot');
        $(`#table tbody tr:nth-child(${lotNumber})`).addClass('hover');
    }, function () {
        const lotNumber = $(this).data('lot');
        $(`#table tbody tr:nth-child(${lotNumber})`).removeClass('hover');
    });
}

function handleOpenModal() {
    $('.facade__img svg path, #table tbody tr').not(`.${STATUS.sold}`).click(function () {
        const lotNumber = $(this).data().lot || $(this).find('td:first-child').text().trim();
        $('.extra-box').addClass('open');
        $('.modal__header').text(`Lot ${lotNumber}`);
        $('.modal__img').html(`<img src="./images/plans/residence-lot-${lotNumber}.png" alt="lot"/>`);
    });
}

function handleCloseModal() {
    $('.layer, .modal__close').click(() => {
        $('.extra-box').removeClass('open');
    });
}

function downloadFile() {
    $('.download').click(() => {
        const lotNumber = $('.modal__header').text().slice(-1);
        $('.download').attr({href: `./images/plans/residence-lot-${lotNumber}.pdf`});
    });
}

$(document).ready(() => {
    handleHeaderOnScroll();
    initializeSlider();
    fillTableWithData(data);
    handleTableHover();
    handleSvgPathHover();
    handleOpenModal();
    handleCloseModal();
    downloadFile();
});
