window.onload = function() {
    var buttons = document.getElementsByClassName("btn1")[0];

    buttons.addEventListener('click', 
        function whenclicked() {
            document.getElementsByClassName("btn1")[0].style.display = 'none'
            document.getElementsByClassName("btn2")[1].style.display = 'block'   
        });
};