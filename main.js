function toggleDetail(element) {
    const target = $(element.target)
    const item = $(target).parents("#about-detail-exp")
    const detail = $(item).children("p")

    $(detail).slideToggle()

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
}