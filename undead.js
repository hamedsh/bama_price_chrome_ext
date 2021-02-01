var elems = document.querySelectorAll(".cost");

[].forEach.call(elems, function(el) {
    el.classList.remove("blured");
});