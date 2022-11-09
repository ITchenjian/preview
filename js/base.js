(function(){
    function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;
        
        
        var b = r.getBoundingClientRect().height;
        var ul=$("ul");

        if (a > 750 ){
            a = 750;
        }else if(a>b){
            a=b/1.7778;
        } 
        console.log(a,b)
        ul.css({
                width:a,
                height:1.7778*a
            });
        
        //750/w = 100/font-size
        rem = a / 7.5;
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300);
    }, false);
})();
