function compute(form) {

    if (form.size.value === "small") {
        var size = parseInt(form.size.value, 1000)

    } else if (form.size.value === "medium") {
        var size = parseInt(form.size.value, 1500)
    } else if (form.size.value === "large") {
        var size = parseInt(form.size.value, 2000)
    }

    alert("your total order", size)
}