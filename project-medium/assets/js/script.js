let scrollTopBar = 450;

window.onscroll = function () {

    if (window.scrollY > scrollTopBar || window.pageYOffset > scrollTopBar) {
        document.querySelector('.top-bar').classList.add('white');
        document.querySelector('.top-bar-btn').classList.add('green');
    }

    else {
        document.querySelector('.top-bar').classList.remove('white');
        document.querySelector('.top-bar-btn').classList.remove('green');
    }
};


