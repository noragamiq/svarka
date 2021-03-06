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
        'about': 'o n??s',
        'offer': 'Nab??z??me slu??by pr??myslov??ho sva??ov??n?? kov??.',
        'ready': 'Jsme p??ipraveni plnit sv????e??sk?? zak??zky',
        'tig': 'TIG sva??ov??n?? vy??aduje kvalitu a p??esnost pr??ce.Ne ka??d??mu se to poda????, ale zvl??d??me to bez probl??m??!',
        'exp': 'Zku??enosti na??ich mistr?? n??m umo????uj?? prov??d??t sv????e??sk?? pr??ce jak??koli slo??itosti.',
        'use': 'Pro sva??ov??n?? pou????v??me vlastn?? za????zen?? a materi??ly.',
        'work': 'Ve??ker?? pr??ce prov??d??j?? certifikovan?? specialist?? pln?? v souladu s aktu??ln??mi regula??n??mi po??adavky.',
        'plus': 'Na??e pr??ce je sva??ov??n?? metodou Tig plus, izometrie, potrub????sk?? pr??ce) Nab??z??me slu??by pr??myslov??ho sv????en?? kov??. P??ij??m??me objedn??vky na sva??ov??n?? metodou Tig plus, izometrie a speci??ln?? pr??ce s potrub??m.',
        'accept': 'Na??i zku??en?? ??emesln??ci p??ij??maj?? zak??zky jak??koliv n??ro??nosti. Pou????v??me vlastn?? sva??ovac?? techniku i sv?? sv????e??sk?? vybaven??. Ve??ker?? pr??ce prov??d?? certifikovan?? odborn??ci v souladu se v??emi platn??mi p??edpis',
        'interest': 'V p????pad?? z??jmu o na??e slu??by, n??s nev??hejte kontaktovat telefonicky anebo prost??ednictv??m formul????e pro zp??tnou vazbu. V n??m pros??m uve??te, o jak?? typ slu??by m??te z??jem. Na z??klad?? formul????e v??m n???? manager sd??l?? dobu zhotoven?? a tak?? kone??nou cenu',
        'space': 'Prostor pro realizaci na??ich slu??eb nen?? omezen pouze na ??zem?? ??esk?? republiky, n???? t??m je schopen spolupracovat i se zahrani??n??mi partnery po cel?? Evrop??.',
        'require': 'Sv????en?? pomoc?? metody TIG vy??aduje precizn?? pr??ci, kterou nem????e nab??dnout jen tak n??kdo. MY ANO. Nab??z??me v??m vysokou kvalitu na??ich slu??eb!!',
        'comb': "Kombinace na??ich znalost??, zku??enost??, nejmodern??j???? techniky od p??edn??ch sv??tov??ch v??robc?? sv????ec?? techniky V??m zaru???? kvalitn?? ??e??en?? va??ich p????n?? a po??adavk.",
        'complete': 'DOKON??EN?? PROJEKTY V 5 ZEM??CH',
        'geo': 'Geografie slu??eb se neomezuje pouze na ??eskou republiku: spolupracujeme s celou Evropou a jsme p??ipraveni zv????it mo??nosti spolupr??ce s nov??mi z??kazn??ky..',
        'watch': 'SLEDUJTE N??S V PR??CI',
        'send': 'Poslat ????dost',
        'list': 'V p????pad?? z??jmu o cen??k sv????e??sk??ch prac?? n??s pros??m kontaktujte telefonicky nebo prost??ednictv??m formul????e zp??tn?? vazby a uve??te, jak?? pr??ce je pot??eba prov??st. N???? mana??er v??s bude informovat o nejaktu??ln??j????ch informac??ch o cen?? a na??asov??n?? objedn??vky.',
        'years': 'let na trhu',
        'metal': 'Nab??z??me slu??by pr??myslov??ho sva??ov??n?? kov??.',
        'nothing': 'Nic pro n??s nen?? nemo??n??, slovo ???NE??? neexistuje Kontaktujte n??s',
        'contact': 'Kontaktujte n??s',
        'view': 'Zobrazit projekty',
        'modern': 'Na??e zku??enosti a znalosti, modern?? vybaven?? sv??tov??ch l??dr?? ve v??rob?? sva??ovac?? techniky - to je z??ruka ??sp????n??ho ??e??en?? va??ich v??robn??ch ??kol??!',
        'learn': 'Zjist??te o n??s v??ce',
        'shipyard': 'lod??nice',
        'food': 'potravin????sk?? pr??mysl',
        'biogas': 'bioplyn',
        'Workshop': 'D??lna',
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
