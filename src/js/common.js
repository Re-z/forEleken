var headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', function(){
    var headerNav = document.querySelector('.header__nav');
    headerNav.classList.toggle('is-visible');
})


//change selects at header top
var selectBox = document.querySelector('.header__top-right');
selectBox.addEventListener('click',function(ev){
    var target = ev.target;
    if(target.tagName == "SELECT"){
        target.addEventListener('change', function(){
            var selectedOpt = target.options[target.selectedIndex].text;
            var displayedResult = target.previousElementSibling;
            displayedResult.innerHTML = selectedOpt;
        })
    }
});

//change filters
var catalogFilterBar = document.querySelector('.catalog__top ul');
catalogFilterBar.addEventListener('click', function(ev){
    //add/remove active class from target
    var target = ev.target;
    if(target.tagName == "LI"){
        var children = target.parentElement.children;
        for(var i = 0; i<children.length; i++){
            children[i].classList.remove('is-active');
        }
        target.classList.add('is-active');
        //show/hide blocks
        var targetType = target.getAttribute('data-filter');
        var allItems = document.querySelectorAll('.catalog__box .item');

        allItems.forEach(function(item){
            item.style.display = 'none';
            var itemType = item.getAttribute('data-type');
            if(targetType == itemType){
                item.style.display = 'block'
            }
            else if(targetType == "all") {
                item.style.display = "block"
            }
        })
    }

});