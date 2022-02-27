
function menuOpen() {
    var menu = document.getElementById("menu");
    var cross = document.getElementById("cross");
    var menu_mobile = document.getElementById("menu_mobile");
    var search_mobile = document.getElementById("search_mobile");

    var menu_search = document.getElementById("menu_search");
    var cross_search = document.getElementById("cross_search");

    menu.classList.toggle("open");
    cross.classList.toggle("open")
    menu_mobile.classList.toggle("open");
    search_mobile.classList.remove("open-search")

    menu_search.classList.add("open");
    cross_search.classList.remove("open")
} 

function searchOpen() {
    var search_mobile = document.getElementById("search_mobile");
    var menu_mobile = document.getElementById("menu_mobile");
    var menu_search = document.getElementById("menu_search");
    var cross_search = document.getElementById("cross_search");

    var menu = document.getElementById("menu");
    var cross = document.getElementById("cross");

    menu_search.classList.toggle("open");
    cross_search.classList.toggle("open")
    search_mobile.classList.toggle("open-search");
    menu_mobile.classList.remove("open")

    menu.classList.add("open");
    cross.classList.remove("open")
    
}

function expandMenu1() {
    var expanding_menu_1_1 = document.getElementById("expanding_menu-1-1");
    var expanding_menu_1_2 = document.getElementById("expanding_menu-1-2");
    var expanding_menu_1_3 = document.getElementById("expanding_menu-1-3");

    expanding_menu_1_1.classList.toggle("open");
    expanding_menu_1_2.classList.toggle("open");
    expanding_menu_1_3.classList.toggle("open");
}

function expandMenu2() {
    var expanding_menu_2_1 = document.getElementById("expanding_menu-2-1");
    var expanding_menu_2_2 = document.getElementById("expanding_menu-2-2");
    var expanding_menu_2_3 = document.getElementById("expanding_menu-2-3");

    expanding_menu_2_1.classList.toggle("open");
    expanding_menu_2_2.classList.toggle("open");
    expanding_menu_2_3.classList.toggle("open");
}

function expandMenu3() {
    var expanding_menu_3_1 = document.getElementById("expanding_menu-3-1");
    var expanding_menu_3_2 = document.getElementById("expanding_menu-3-2");
    var expanding_menu_3_3 = document.getElementById("expanding_menu-3-3");

    expanding_menu_3_1.classList.toggle("open");
    expanding_menu_3_2.classList.toggle("open");
    expanding_menu_3_3.classList.toggle("open");
}

function expandMenu4() {
    var expanding_menu_4_1 = document.getElementById("expanding_menu-4-1");
    var expanding_menu_4_2 = document.getElementById("expanding_menu-4-2");
    var expanding_menu_4_3 = document.getElementById("expanding_menu-4-3");

    expanding_menu_4_1.classList.toggle("open");
    expanding_menu_4_2.classList.toggle("open");
    expanding_menu_4_3.classList.toggle("open");
}


