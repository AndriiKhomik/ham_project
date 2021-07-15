window.addEventListener('DOMContentLoaded', () => {
    //tabs-services
    const tabsContent = document.querySelectorAll('.service-tab');
    const tabsButtonsList = document.getElementById('services-tabs');
    const tabsButton = document.querySelectorAll('.service-tab-item');

    function hideTabsContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hidden');
            item.classList.remove('shown');
        });

        tabsButton.forEach((item) => {
            item.classList.remove('services-active-tab');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('shown');
        tabsContent[i].classList.remove('hidden');
        tabsButton[i].classList.add('services-active-tab');
    }
    hideTabsContent();
    showTabContent();

    tabsButtonsList.addEventListener('click', (event) => {
        event = event.target;
        if (event.classList.contains('service-tab-item')) {
            tabsButton.forEach((item, i) => {
                if (event === item) {
                    hideTabsContent();
                    showTabContent(i);
                }
            })
        }
    });

    //filter - works section
    const filterItems = document.querySelectorAll('.works-item');
    const buttonsContainer = document.querySelector('.works-tabs');
    const filterButtons = document.querySelectorAll('.works-tab-btn');

    function hideActiveButton() {
        filterButtons.forEach(item => {
            item.classList.remove('works-active-tab')
        })
    }

    function showCurrentTab(i = 4) {
        filterButtons[i].classList.add('works-active-tab');
        filterItems.forEach(item => {
            if (!item.classList.contains('wordpress')) {
                item.classList.add('hide');
            }
        })
    }
    showCurrentTab();

    buttonsContainer.addEventListener('click', event => {
        if (event.target.tagName !== 'BUTTON') return false;

        showSpinner();
        setTimeout(hideSpinner, 500);
        loadMoreButton.classList.remove('hide');
        count = 0;

        let filterClass = event.target.dataset['filter'];
        hideActiveButton();

        event.target.classList.add('works-active-tab');

        filterItems.forEach(item => {
            item.classList.remove('hide');
            if (!item.classList.contains(filterClass) && filterClass !== 'all') {
                item.classList.add('hide');
            } else if (filterClass === 'all') {
                hideExtraImg(extraItems);
                hideExtraImg(extraItemsSecond);
            }
        })
    });

    // load more - button
    const loadMoreButton = document.querySelector('.works-btn');
    const extraItems = document.querySelectorAll('.works-items:nth-child(2) .works-item');
    const extraItemsSecond = document.querySelectorAll('.works-items:nth-child(3) .works-item');
    let count = 0;

    loadMoreButton.addEventListener('dblclick', () => {
        showSpinner();
        setTimeout(hideSpinner, 500);
        count++;
        if (count === 1) {
            showExtraImg(extraItems);
        } if (count === 2) {
            showExtraImg(extraItemsSecond);
        loadMoreButton.classList.add('hide');
        }
    });

    function showExtraImg(itemsList) {
        itemsList.forEach(item => {
            item.classList.remove('hide-extra-img');
            item.classList.remove('hide');
        })
    }

    function hideExtraImg(itemsList) {
        itemsList.forEach(item => {
            item.classList.add('hide-extra-img');
        })
    }

    // spinner
    const spinner = document.querySelector('.spinner-wrapper');

    function showSpinner() {
        spinner.classList.remove('hide');
    }
    function hideSpinner() {
        spinner.classList.add('hide');
        spinner.classList.remove('shown')
    }

    // slider
    let viewport = document.getElementById('viewport').offsetWidth;
    let btnNext = document.getElementById('next');
    let btnPrev = document.getElementById('prev');
    let slider = document.querySelector('div.slider');
    let viewSliders = document.querySelectorAll('.viewSlide');
    const sliderControls = document.getElementById('viewSlider');
    let viewSlide = 0;

    viewSliders[0].classList.add('margin-bottom');

    btnNext.addEventListener('click', function () {
        deleteClass();

        if (viewSlide < 3) {
            viewSlide++;
        } else {
            viewSlide = 0;
        }
        viewSliders[viewSlide].classList.add('margin-bottom');
        slider.style.left = -viewSlide * viewport + 'px';
    });

    btnPrev.addEventListener('click', function () {
        deleteClass();

        if (viewSlide > 0) {
            viewSlide--;
        } else {
            viewSlide = 3;
        }
        viewSliders[viewSlide].classList.add('margin-bottom');
        slider.style.left = -viewSlide * viewport + 'px';
    });

    function deleteClass() {
        viewSliders.forEach(item => {
            item.classList.remove('margin-bottom');
        });
    }

    sliderControls.addEventListener('click', event => {
        deleteClass();

        if (event.target.dataset['name'] === 'sandra') {
            slider.style.left = '0px';
            event.target.classList.add('margin-bottom');
        } else if (event.target.dataset['name'] === 'alfred') {
            slider.style.left = '-1573px';
            event.target.classList.add('margin-bottom');
        } else if (event.target.dataset['name'] === 'hasan') {
            slider.style.left = '-3146px';
            event.target.classList.add('margin-bottom');
        } else if (event.target.dataset['name'] === 'angelica') {
            slider.style.left = '-4719px';
            event.target.classList.add('margin-bottom');
        }
    });

    // scroll to top
    function scrollToTop() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    }
      
    document.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;

        if (scrolled > 400) {
          showScrollToTopBtn();
        } else {
          hideScrollToTopBtn();
        }
    });

    function showScrollToTopBtn() {
        document.getElementById('toTop').classList.add('active');
    }

    function hideScrollToTopBtn() {
        document.getElementById('toTop').classList.remove('active');
    }

    document.getElementById('toTop').addEventListener('click', scrollToTop);

    // search panel
    const searchIcon = document.querySelector('.fa-search');
    const searchInput = document.querySelector('.nav-input');

    searchIcon.addEventListener('click', () => {
        searchIcon.classList.add('hide');
        searchInput.classList.add('active');
    });

    window.addEventListener('click', event => {
        if (event.target !== searchInput && event.target !== searchIcon) {
            searchIcon.classList.remove('hide');
            searchInput.classList.remove('active');
        }
    });

    // load more - gallery
    const hideElements = document.querySelectorAll('.flex-item');
    const galleryButton = document.getElementById('galleryBtn');


        galleryButton.addEventListener('click', () => {
            showSpinner();
             setTimeout(hideSpinner, 500);
            hideElements.forEach(item => {
                item.classList.remove('hide')
            })
        });
});





      



