// Custom Scripts
function resizing() {
    $(".SideMenu").css("background-color", "black")
    $(".SideMenu").css("width", "100%")
    $(".SideMenu").css("height", "0px")
    $(".MenuText").css("opacity", "0")
    $(".hamburger").css("margin-top", "30px")


    $(".navWrapper, .Language").css("transform", "translateX(0px)");

    $(".navWrapper, .Language, .NavNav, .MenuText").css("transform", "translateY(-1000px)")
    $(".navWrapper, .Language").css("opacity", "1");
}

$(document).ready(function () {
    $(".RootSideMenu").append("<div class=\"SideMenu\">\n" +
        "         <button class=\"hamburger\">\n" +
        "                <span class=\"less_po\"></span>\n" +
        "                <span class=\"main_po\"></span>\n" +
        "                <span class=\"main_poo\"></span>\n" +
        "                <span class=\"less_po_last\"></span>\n" +
        "         </button>\n" +
        "         <p class=\"MenuText\">\n" +
        "             menu\n" +
        "         </p>\n" +
        "         <nav class=\"NavNav\">\n" +
        "             <div class=\"navWrapper\">\n" +
        "                 <a class=\"navText\" href=\"/\">IZOWELD GROUP</a>\n" +
        "                 <span></span>\n" +
        "                 <a class=\"navText\" href=\"/about.html\">ABOUT US</a>\n" +
        "                 <span></span>\n" +
        "                 <a class=\"navText\" href=\"/gallery.html\">GALLERY</a>\n" +
        "                 <span></span>\n" +
        "                 <a class=\"navText\" href=\"/contacts.html\">CONTACTS</a>\n" +
        "             </div>\n" +
        "         </nav>\n" +
        "         <div class=\"Language\">\n" +
        "             <button class=\"translate\" id=\"en\">EN</button>\n" +
        "             <button class=\"translate\" id=\"cz\">CZ</button>\n" +
        "             <button>DE</button>\n" +
        "         </div>\n" +
        "     </div>")

    if (window.matchMedia('(max-width: 1200px)').matches) {
        resizing()
    }
    $(window).resize(function () {
        if (window.matchMedia('(max-width: 1200px)').matches) {

            $(".SideMenu").css("background-color", "black")
            $(".SideMenu").css("width", "100%")
            $(".SideMenu").css("height", "0px")
            $(".MenuText").css("opacity", "0")
            $(".hamburger").css("margin-top", "30px")


            $(".navWrapper, .Language").css("transform", "translateX(0px)");

            $(".navWrapper, .Language, .NavNav, .MenuText").css("transform", "translateY(-1000px)")
            $(".navWrapper, .Language").css("opacity", "1");

        }
        if (window.matchMedia('(min-width: 1201px)').matches) {
            $(".SideMenu").css("width", "90px")
            $(".SideMenu").css("height", "100vh")
            $(".MenuText").css("opacity", "1")
            $(".hamburger").css("margin-top", "50px")

            $(".navWrapper, .Language, .NavNav, .MenuText").css("transform", "translateY(0px)")
            $(".navWrapper, .Language").css("transform", "translateX(-1000px)");
            $(".navWrapper, .Language").css("opacity", "0");

        }
    });



    $(".hamburger").hover(function () {
        $(".hamburger").css("border", "1px solid #00e8fe")
        $(".hamburger span").css("background-color", "#00e8fe")
        $(".MenuText").css("color", "#00e8fe")
    }, function () {
        $(".hamburger").css("border", "1px solid #7c7c7c")
        $(".hamburger span").css("background-color", "white")
        $(".MenuText").css("color", "white")
    })

    $(".hamburger").click(function () {
        if ($(".SideMenu").css("width") === "90px" && $(window).width() > 1200) {
            $(".navWrapper").css("transform", "translateX(0px)");
            $(".Language").css("transform", "translateX(0px)");
            $(".MenuText").animate({
                opacity: 0
            }, 500, function () {
                // $(".MenuText").css("display", "none")
            })

            $(".SideMenu").animate({
                width: "300px"
            }, 600, function () {
                $(".navWrapper, .Language").animate({
                    opacity: 1
                }, 250)
            })

            $(".main_po").animate({
                opacity: 0
            }, 300, function () {
                $(".main_po").css("transform", "rotate(-45deg)")
                $(".main_po").animate({
                    opacity: 1
                }, 300)
                $(".main_poo").animate({
                    opacity: 1
                }, 300)
            })
            $(".less_po").animate({
                opacity: 0
            }, 300)
            $(".less_po_last").animate({
                opacity: 0
            }, 300)


        }

        if ($(".SideMenu").css("height") === "400px" && $(window).width() <= 1200) {
            $(".SideMenu").animate({
                height: 0
            }, 400)
            $(".navWrapper, .Language, .NavNav, .MenuText").css("transform", "translateY(-1000px)")
        }

        if ($(".SideMenu").css("width") === "300px" && $(window).width() > 1200) {
            $(".navWrapper, .Language").animate({
                opacity: 0
            }, 250, function () {
                $(".navWrapper").css("transform", "translateX(-1000px)");
                $(".Language").css("transform", "translateX(-1000px)");
                $(".SideMenu").animate({
                    width: "90px"
                }, 600, function () {
                    // $(".MenuText").css("display", "block")
                    $(".MenuText").animate({
                        opacity: 1
                    }, 500)
                })
                $(".main_poo").animate({
                    opacity: 0
                }, 300)
                $(".main_po").animate({
                    opacity: 0
                }, 300, function () {
                    $(".main_po").css("transform", "rotate(0)")
                    $(".less_po").animate({
                        opacity: 1
                    }, 300)
                    $(".less_po_last").animate({
                        opacity: 1
                    }, 300)
                    $(".main_po").animate({
                        opacity: 1
                    }, 300)
                })

            })
        }

        if ($(".SideMenu").css("height") === "0px" && $(window).width() <= 1200) {
            $(".SideMenu").animate({
                height: 400
            }, 400)
            $(".navWrapper, .Language, .NavNav, .MenuText").css("transform", "translateY(0px)")

        }
    })
})


$(function () {
    $(".RootFeedBackForm").append("" +
        "<section class=\"InviteToSendRequest\">\n" +
        "        <div class=\"InviteToSendRequest-divGrid\">\n" +
        "            <div class=\"InviteToSendRequest-divGrid-left\">\n" +
        "                <p class=\"lang\" key=\"list\">\n" +
        "                If you are interested in a price list for welding work, please contact us by phone or via the feedback form and indicate what work needs to be done. Our manager will inform you the most up-to-date information on the cost and timing of the order.\n" +
        "                </p>\n" +
        "            </div>\n" +
        "            <div class=\"InviteToSendRequest-divGrid-right\">\n" +
        "                <button class=\"FeedBackForm-OpenBTN\">\n" +
        "                    <span class=\"lang\" key=\"send\">Send request</span>\n" +
        "                </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </section>\n" +
        "    <section class=\"FeedBackForm\">\n" +
        "        <div class=\"FeedBackForm-wrapper\">\n" +
        "            <h1>SEND A REQUEST FOR A PROJECT</h1>\n" +
        "            <form>\n" +
        "                <input class=\"FeedBackForm-input\" name=\"ip\" placeholder=\"YOUR NAME\">\n" +
        "                <input class=\"FeedBackForm-input\"name=\"ip\" placeholder=\"YOUR E-MAIL\">\n" +
        "                <input class=\"FeedBackForm-input\" name=\"ip\" placeholder=\"YOUR PHONE NUMBER\">\n" +
        "                <textarea class=\"FeedBackForm-input message\" name=\"ip\" placeholder=\"MESSAGE\"></textarea>\n" +
        "                <button class=\"FeedBackForm-btn\">Send Request</button>\n" +
        "            </form>\n" +
        "            <button class=\"FeedBackForm-closeBTN\">close</button>\n" +
        "        </div>\n" +
        "        <button class=\"underX\">X</button>\n" +
        "    </section>")
})


$(document).ready(function () {
    $(".FeedBackForm-closeBTN, .underX").click(function () {
        $(".FeedBackForm").css("transform", "translateX(-1000px)")
    })
    $(".FeedBackForm-OpenBTN").click(function () {
        $(".FeedBackForm").css("transform", "translateX(0px)")
    })
})

$(document).ready(function () {
    let j = 1;
    while (j < 9) {
        $(".GALLERY__content-wrapper").append("<div class=\"GALLERY__content-item\"><img class=\"minimized\"src=\"./img/gallery/board/" + j + ".jpg\" alt=\"sdfdsf\"></div>")
        j++;
    }

    $("#glrBTN1").click(function () {

        $("#glrBTN1").addClass("activeBTN")
        $("#glrBTN2").removeClass("activeBTN")
        $("#glrBTN3").removeClass("activeBTN")
        $("#glrBTN4").removeClass("activeBTN")
        $(".GALLERY__content-wrapper").empty()
        let i = 1;
        while (i < 9) {
            $(".GALLERY__content-wrapper").append("" +
                "<div class=\"GALLERY__content-item\">" +
                "<img class=\"minimized\" src=\"../img/gallery/board/" + i + ".JPG\" alt=\"sdfdsf\">" +
                "</div>")
            i++;
        }
    })
    $("#glrBTN2").click(function () {
        $("#glrBTN2").addClass("activeBTN")
        $("#glrBTN1").removeClass("activeBTN")
        $("#glrBTN3").removeClass("activeBTN")
        $("#glrBTN4").removeClass("activeBTN")
        $(".GALLERY__content-wrapper").empty()
        let i = 1;
        while (i < 10) {
            $(".GALLERY__content-wrapper").append("" +
                "<div class=\"GALLERY__content-item\">" +
                "<img class=\"minimized\" src=\"../img/gallery/foodIndustry/" + i + ".JPG\" alt=\"sdfdsf\">" +
                "</div>")
            i++;
        }
    })
    $("#glrBTN3").click(function () {
        $("#glrBTN3").addClass("activeBTN")
        $("#glrBTN2").removeClass("activeBTN")
        $("#glrBTN1").removeClass("activeBTN")
        $("#glrBTN4").removeClass("activeBTN")
        $(".GALLERY__content-wrapper").empty()
        let i = 1;
        while (i < 12) {
            $(".GALLERY__content-wrapper").append("" +
                "<div class=\"GALLERY__content-item\">" +
                "<img class=\"minimized\" src=\"../img/gallery/biogas/" + i + ".JPG\" alt=\"sdfdsf\">" +
                "</div>")
            i++;
        }
    })

    $("#glrBTN4").click(function () {
        $("#glrBTN4").addClass("activeBTN")
        $("#glrBTN3").removeClass("activeBTN")
        $("#glrBTN2").removeClass("activeBTN")
        $("#glrBTN1").removeClass("activeBTN")
        $(".GALLERY__content-wrapper").empty()
        let i = 1;
        while (i < 9) {
            $(".GALLERY__content-wrapper").append("" +
                "<div class=\"GALLERY__content-item\">" +
                "<img class=\"minimized\" src=\"../img/gallery/worksop/" + i + ".JPEG\" alt=\"sdfdsf\">" +
                "</div>")
            i++;
        }
    })




    $(function () {
        $(".GALLERY__content-wrapper").on('click', ".minimized", function (event) {

            var i_path = $(this).attr('src');
            $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
            $('#magnify').css({
                left: ($(document).width() - $('#magnify').outerWidth()) / 2,
                // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016

                top: ($(window).height() - $('#magnify').outerHeight()) / 2
            });
            $('#overlay, #magnify').fadeIn('fast');
        });

        $('body').on('click', '#close-popup, #overlay', function (event) {
            event.preventDefault();
            $('#overlay, #magnify').fadeOut('fast', function () {
                $('#close-popup, #magnify, #overlay').remove();
            });
        });
    });
})


var arrLang = {
    'en': {
        'about': 'About Us',
        'offer': 'We offer industrial metal welding services.',
        'ready': 'We are ready to fulfill welding orders',
        'tig': 'TIG welding requires quality and precision in work.Not everyone succeeds, but we manage without problems!',
        'exp': 'The experience of our masters allows us to perform welding work of any complexity.',
        'use': 'We use our own equipment and materials for welding.',
        'work': 'All work is carried out by certified specialists in full compliance with current regulatory requirements.',
        'plus': 'Our work is Tig plus welding, isometry, piping work) We offer industrial metal welding services. We accept orders for Tig plus welding, isometry and special piping work.',
        'accept': 'Our experienced craftsmen accept orders of any complexity. We use our own welding equipment and our welding equipment. All work is performed by certified experts in accordance with all applicable regulations',
        'interest': 'If you are interested in our services, do not hesitate to contact us by phone or via the feedback form. Please indicate in it what type of service you are interested in. Based on the form, our manager will inform you of the construction time as well as the final price.',
        'space': 'The space for the implementation of our services is not limited to the Czech Republic, our team is able to cooperate with foreign partners throughout Europe',
        'require': 'TIG welding requires precision work that no one can offer. WE DO. We offer you the high quality of our services !!',
        'comb': "The combination of our knowledge, experience, state-of-the-art technology from the world's leading manufacturers of welding technology will guarantee you a quality solution to your wishes and requirements.",
        'complete': 'COMPLETED PROJECTS IN 5 COUNTRIES',
        'geo': 'The geography of services is not limited to the Czech Republic: we work with all of Europe, and are ready to consider options for cooperation with new customers.',
        'watch': 'WATCH US AT WORK',
        'send': 'Send request',
        'list': 'If you are interested in a price list for welding work, please contact us by phone or via the feedback form and indicate what work needs to be done. Our manager will inform you the most up-to-date information on the cost and timing of the order.',
        'years': 'years on the market',
        'metal': 'We offer industrial metal welding services.',
        'nothing': 'Nothing is impossible for us,the word "NO" does not exist',
        'contact': 'Contact us',
        'view': 'View projects',
        'modern': 'Our experience and knowledge, modern equipment of world leaders in the production of welding equipment - this is the guarantee of a successful solution of your production tasks!',
        'learn': 'Learn more about us',
        'shipyard': 'shipyard',
        'food': 'food industry',
        'biogas': 'biogas',
        'Workshop': 'Workshop',
        'GALLERY': 'GALLERY',

    },
    'cz': {
        'about': 'o nás',
        'offer': 'Nabízíme služby průmyslového svařování kovů.',
        'ready': 'Jsme připraveni plnit svářečské zakázky',
        'tig': 'TIG svařování vyžaduje kvalitu a přesnost práce.Ne každému se to podaří, ale zvládáme to bez problémů!',
        'exp': 'Zkušenosti našich mistrů nám umožňují provádět svářečské práce jakékoli složitosti.',
        'use': 'Pro svařování používáme vlastní zařízení a materiály.',
        'work': 'Veškeré práce provádějí certifikovaní specialisté plně v souladu s aktuálními regulačními požadavky.',
        'plus': 'Naše práce je svařování metodou Tig plus, izometrie, potrubářské práce) Nabízíme služby průmyslového sváření kovů. Přijímáme objednávky na svařování metodou Tig plus, izometrie a speciální práce s potrubím.',
        'accept': 'Naši zkušení řemeslníci přijímají zakázky jakékoliv náročnosti. Používáme vlastní svařovací techniku i své svářečské vybavení. Veškeré práce provádí certifikovaní odborníci v souladu se všemi platnými předpis',
        'interest': 'V případě zájmu o naše služby, nás neváhejte kontaktovat telefonicky anebo prostřednictvím formuláře pro zpětnou vazbu. V něm prosím uveďte, o jaký typ služby máte zájem. Na základě formuláře vám náš manager sdělí dobu zhotovení a také konečnou cenu',
        'space': 'Prostor pro realizaci našich služeb není omezen pouze na území České republiky, náš tým je schopen spolupracovat i se zahraničními partnery po celé Evropě.',
        'require': 'Sváření pomocí metody TIG vyžaduje precizní práci, kterou nemůže nabídnout jen tak někdo. MY ANO. Nabízíme vám vysokou kvalitu našich služeb!!',
        'comb': "Kombinace našich znalostí, zkušeností, nejmodernější techniky od předních světových výrobců svářecí techniky Vám zaručí kvalitní řešení vašich přání a požadavk.",
        'complete': 'DOKONČENÉ PROJEKTY V 5 ZEMÍCH',
        'geo': 'Geografie služeb se neomezuje pouze na Českou republiku: spolupracujeme s celou Evropou a jsme připraveni zvážit možnosti spolupráce s novými zákazníky..',
        'watch': 'SLEDUJTE NÁS V PRÁCI',
        'send': 'Poslat žádost',
        'list': 'V případě zájmu o ceník svářečských prací nás prosím kontaktujte telefonicky nebo prostřednictvím formuláře zpětné vazby a uveďte, jaké práce je potřeba provést. Náš manažer vás bude informovat o nejaktuálnějších informacích o ceně a načasování objednávky.',
        'years': 'let na trhu',
        'metal': 'Nabízíme služby průmyslového svařování kovů.',
        'nothing': 'Nic pro nás není nemožné, slovo „NE“ neexistuje Kontaktujte nás',
        'contact': 'Kontaktujte nás',
        'view': 'Zobrazit projekty',
        'modern': 'Naše zkušenosti a znalosti, moderní vybavení světových lídrů ve výrobě svařovací techniky - to je záruka úspěšného řešení vašich výrobních úkolů!',
        'learn': 'Zjistěte o nás více',
        'shipyard': 'loděnice',
        'food': 'potravinářský průmysl',
        'biogas': 'bioplyn',
        'Workshop': 'Dílna',
        'GALLERY': 'GALERIE',

    }
}

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});
