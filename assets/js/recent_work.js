const portfolioData = [
    {
        category: 'branding',
        imageSrc: 'assets/img/images/recent_work/DStudio.jpg',
        title: 'DStudio',
        description: 'Project was about precision and information.',
        modalContent: {
            mainImage: './assets/img/images/recent_work/modal/DStudio.jpg',
            gallery: [
                './assets/img/images/recent_work/modal/slider/DStudio_1.jpg',
                './assets/img/images/recent_work/modal/slider/DStudio_2.jpg',
                './assets/img/images/recent_work/modal/slider/DStudio_3.jpg',
                './assets/img/images/recent_work/modal/slider/DStudio_4.jpg'
            ],
            projectDetails: {
                category: 'Web Design',
                client: 'Artboard Studio',
                startDate: 'August 20, 2023',
                designer: 'ThemeJunction'
            },
            description: `The goal is there are many variations of passages of Lorem Ipsum available, but the majority
                         have suffered alteration in some form, by injected humour, or randomised words which don't look
                         even slightly believable.`,
            story: `There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't look even
                    slightly believable.`,
            approach: `There are many variations of passages of Lorem Ipsum available, but the majority have
                       suffered alteration in some form, by injected humour, or randomised words which don't look even
                       slightly believable.`
        }
    },
    {
        category: 'uxui',
        imageSrc: 'assets/img/images/recent_work/new_age.jpg',
        title: 'New Age',
        description: 'Project was about precision and information.',
        modalContent: {
            mainImage: 'assets/img/images/recent_work/modal/new_age.jpg',
            gallery: [
                './assets/img/images/recent_work/modal/slider/ui_1.jpg',
                './assets/img/images/recent_work/modal/slider/ui_2.jpg',
                './assets/img/images/recent_work/modal/slider/ui_3.jpg',
                './assets/img/images/recent_work/modal/slider/ui_4.jpg',
            ],
            projectDetails: {
                category: 'UX/UI',
                client: 'Artboard Studio',
                startDate: 'September 15, 2023',
                designer: 'ThemeJunction'
            },
            description: `The goal is there are many variations of passages of Lorem Ipsum available, but the majority
                         have suffered alteration in some form, by injected humour, or randomised words which don't look
                         even slightly believable.`,
            story: `There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't look even
                    slightly believable.`,
            approach: `There are many variations of passages of Lorem Ipsum available, but the majority have
                       suffered alteration in some form, by injected humour, or randomised words which don't look even
                       slightly believable.`
        }
    },
    {
        category: 'mobile-app',
        imageSrc: 'assets/img/images/recent_work/subastion.jpg',
        title: 'Sebastian',
        description: 'Project was about precision and information.',
        modalContent: {
            mainImage: './assets/img/images/recent_work/modal/suba.jpg',
            gallery: [
                './assets/img/images/recent_work/modal/slider/sub.jpg',
                './assets/img/images/recent_work/modal/slider/sub.jpg',
                './assets/img/images/recent_work/modal/slider/sub.jpg',
                './assets/img/images/recent_work/modal/slider/sub.jpg',
            ],
            projectDetails: {
                category: 'Mobile App',
                client: 'App Studio',
                startDate: 'October 10, 2023',
                designer: 'ThemeJunction'
            },
            description: `The goal is there are many variations of passages of Lorem Ipsum available, but the majority
                         have suffered alteration in some form, by injected humour, or randomised words which don't look
                         even slightly believable.`,
            story: `There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't look even
                    slightly believable.`,
            approach: `There are many variations of passages of Lorem Ipsum available, but the majority have
                       suffered alteration in some form, by injected humour, or randomised words which don't look even
                       slightly believable.`
        }
    },
    {
        category: 'branding',
        imageSrc: 'assets/img/images/recent_work/cosmo.jpg',
        title: 'Cosmo',
        description: 'Project was about precision and information.',
        modalContent: {
            mainImage: './assets/img/images/recent_work/modal/cosmo.jpg',
            gallery: [
                './assets/img/images/recent_work/modal/slider/cosmo_1.jpg',
                './assets/img/images/recent_work/modal/slider/cosmo_2.jpg',
                './assets/img/images/recent_work/modal/slider/cosmo_3.jpg',
                './assets/img/images/recent_work/modal/slider/cosmo_4.jpg'

            ],
            projectDetails: {
                category: 'Branding',
                client: 'Cosmo Corp',
                startDate: 'November 25, 2023',
                designer: 'ThemeJunction'
            },
            description: `The goal is there are many variations of passages of Lorem Ipsum available, but the majority
                         have suffered alteration in some form, by injected humour, or randomised words which don't look
                         even slightly believable.`,
            story: `There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't look even
                    slightly believable.`,
            approach: `There are many variations of passages of Lorem Ipsum available, but the majority have
                       suffered alteration in some form, by injected humour, or randomised words which don't look even
                       slightly believable.`
        }
    }
];

$(document).ready(function() {
    const portfolioContainer = $('.portfolio-box');
    const modalContainer = $('body');

    portfolioData.forEach((item, index) => {
        const portfolioItem = `
            <div class="portfolio-item ${item.category}">
                <div class="image-box">
                    <img src="${item.imageSrc}" alt="${item.title}">
                </div>
                <div class="content-box">
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p>${item.description}</p>
                    <i class="flaticon-up-right-arrow"></i>
                    <button data-mfp-src="#portfolio-wrapper-${index}"
                        class="portfolio-link modal-popup"></button>
                </div>
            </div>
        `;
        portfolioContainer.append(portfolioItem);

        const modalContent = `
            <div id="portfolio-wrapper-${index}" class="popup_content_area zoom-anim-dialog mfp-hide">
                <div class="popup_modal_img">
                    <img src="${item.modalContent.mainImage}" alt="">
                </div>
                <div class="popup_modal_content">
                    <div class="portfolio_info">
                        <div class="portfolio_info_text">
                            <h2 class="title">${item.title}</h2>
                            <div class="desc">
                                <p>${item.modalContent.description}</p>
                            </div>
                            <a href="#" class="btn tj-btn-primary">live preview <i class="fal fa-arrow-right"></i></a>
                        </div>
                        <div class="portfolio_info_items">
                            <div class="info_item">
                                <div class="key">Category</div>
                                <div class="value">${item.modalContent.projectDetails.category}</div>
                            </div>
                            <div class="info_item">
                                <div class="key">Client</div>
                                <div class="value">${item.modalContent.projectDetails.client}</div>
                            </div>
                            <div class="info_item">
                                <div class="key">Start Date</div>
                                <div class="value">${item.modalContent.projectDetails.startDate}</div>
                            </div>
                            <div class="info_item">
                                <div class="key">Designer</div>
                                <div class="value"><a href="#">${item.modalContent.projectDetails.designer}</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio_gallery owl-carousel">
                        ${item.modalContent.gallery.map(image => `
                            <div class="gallery_item">
                                <img src="${image}" alt="">
                            </div>
                        `).join('')}
                    </div>
                    <div class="portfolio_description">
                        <h2 class="title">Project Description</h2>
                        <div class="desc">
                            <p>${item.modalContent.description}</p>
                        </div>
                    </div>
                    <div class="portfolio_story_approach">
                        <div class="portfolio_story">
                            <div class="story_title">
                                <h4 class="title">The story</h4>
                            </div>
                            <div class="story_content">
                                <p>${item.modalContent.story}</p>
                            </div>
                        </div>
                        <div class="portfolio_approach">
                            <div class="approach_title">
                                <h4 class="title">OUR APPROACH</h4>
                            </div>
                            <div class="approach_content">
                                <p>${item.modalContent.approach}</p>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio_navigation">
<!--                        <div class="navigation_item prev-project">-->
<!--                            <a href="#" class="project">-->
<!--                                <i class="fal fa-arrow-left"></i>-->
<!--                                <div class="nav_project">-->
<!--                                    <div class="label">Previous Project</div>-->
<!--                                    <h3 class="title">Sebastian</h3>-->
<!--                                </div>-->
<!--                            </a>-->
<!--                        </div>-->
                        <div class="navigation_item next-project">
<!--                            <a href="#" class="project">-->
<!--                                <div class="nav_project">-->
<!--                                    <div class="label">Next Project</div>-->
<!--                                    <h3 class="title">Qwillo</h3>-->
<!--                                </div>-->
<!--                                <i class="fal fa-arrow-right"></i>-->
<!--                            </a>-->
                        </div>
                    </div>
                </div>
            </div>
        `;
        modalContainer.append(modalContent);
    });

    // Initialize animations
    new WOW().init();

    // Initialize Isotope for filtering
    var $portfolioBox = $('.portfolio-box').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        percentPosition: true,
        masonry: {
            columnWidth: '.portfolio-sizer',
            gutter: '.gutter-sizer'
        }
    });

    // Filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $portfolioBox.isotope({ filter: filterValue });
    });

    // Initialize Magnific Popup for modal popups
    $('.portfolio-link').magnificPopup({
        type: 'inline',
        midClick: true
    });
});
