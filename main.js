function toggleDetail(forEvent) {
    const target = $(forEvent.target)
    const item = $(target).parents("#about-detail-exp")
    const detail = $(item).children("p")

    $(detail).slideToggle()

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
}

function onFormSubmit(forEvent) {
    forEvent.preventDefault()

    const email =$("#input-email")
    const subject =$("#input-subject")
    const message =$("#input-message")

    if(!$(email).val()) {
        alert("Email is Required")
    } else if (!$(subject).val()) {
        alert("Subject is Required")
    } else if (!$(message).val()) {
        alert("Message is Required")
    } else {
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}