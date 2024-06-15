$(document).ready(function() {
    const services = {
        branding: `
            <h6 class="subtitle">SERVICES</h6>
            <h2 class="title">Branding Design</h2>
            <div class="desc">
                <p>Branding content goes here.</p>
            </div>
            <h3 class="title">Services Process</h3>
            <div class="desc">
                <p>Branding process content goes here.</p>
            </div>
            <ul>
                <li>Reinvent Your Business to Better</li>
                <li>Pioneering the Internet's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
            </ul>
        `,
        web: `
            <h6 class="subtitle">SERVICES</h6>
            <h2 class="title">Web Design</h2>
            <div class="desc">
                <p>Web design content goes here.</p>
            </div>
            <h3 class="title">Services Process</h3>
            <div class="desc">
                <p>Web design process content goes here.</p>
            </div>
            <ul>
                <li>Reinvent Your Business to Better</li>
                <li>Pioneering the Internet's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
            </ul>
        `,
        uiux: `
            <h6 class="subtitle">SERVICES</h6>
            <h2 class="title">UI/UX Design</h2>
            <div class="desc">
                <p>Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a load of old tosh is cracking goal blow off telling brown.</p>
                <p>Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old mucker starkers Queen’s English dropped a clanger bite your arm spiffing good time burke Why chancer. Hotpot bum bag cracking goal young delinquent naff bugger cup of chars bender loo it’s all gone to pot the nancy cheeky.</p>
                <p>At public school cras bog some dodgy chav Richard Why argy bargy vagabon William bender matie boy, off his nut chancer Jeffrey up the kyver say mufty you mug ummm telling pear shaped Oxford owt to do with me do one so said are you taking his.</p>
            </div>
            <h3 class="title">Services Process</h3>
            <div class="desc">
                <p>Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a load of old tosh is cracking goal blow off telling brown.</p>
            </div>
            <ul>
                <li>Reinvent Your Business to Better</li>
                <li>Pioneering the Internet's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
            </ul>
        `,
        graphics: `
            <h6 class="subtitle">SERVICES</h6>
            <h2 class="title">Graphics Design</h2>
            <div class="desc">
                <p>Graphics design content goes here.</p>
            </div>
            <h3 class="title">Services Process</h3>
            <div class="desc">
                <p>Graphics design process content goes here.</p>
            </div>
            <ul>
                <li>Reinvent Your Business to Better</li>
                <li>Pioneering the Internet's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
            </ul>
        `
    };

    $('.service-btn').on('click', function() {
        const serviceType = $(this).data('service');

        switch (serviceType) {
            case 'branding':
                imagePath = "./assets/img/images/quality_service/branding_design.jpg";
                break;
            case 'web':
                imagePath = "./assets/img/images/quality_service/web.jpg";
                break;
            case 'uiux':
                imagePath = "./assets/img/images/quality_service/ui_ux.jpg";
                break;
            case 'graphics':
                imagePath = "./assets/img/images/quality_service/graphic_design.jpg";
                break;
        }

        $('#service_quality_image').attr('src', imagePath);

        $('li').removeClass('active');

        // Find the corresponding <li> based on the data attribute
        const correspondingLi = $('li').find('[data-service="' + serviceType + '"]').closest('li');

        // Add 'active' class to the corresponding <li> element
        if (correspondingLi.length) {
            correspondingLi.addClass('active');
        }

        $('#serviceContent').html(services[serviceType]);
    });

    $('.modal-popup').magnificPopup({
        items: {
            src: '#serviceModal'
        },
        type: 'inline',
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
});
