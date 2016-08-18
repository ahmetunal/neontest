$(document).ready(function () {

    $("#bartneon").find("feGaussianBlur").animate(
            {x: 100},
            {
                duration: 1000,
                step: function (now) {
                    
                    var val = 0;
                    if(now < 10) {
                        val = (now / 100) * 50;
                    } else if(now < 30) {
                        val = (now / 100) * 50;
                    } else if(now < 50) {
                        val = (now / 100) * 100;
                    } else if(now < 70) {
                        val = (now / 100) * 50;
                    } else if(now < 90) {
                        val = (now / 100) * 100;
                    } else {
                        val = (now / 100) * 50;
                    }
                    
                    $(this).attr("stdDeviation", val);
                    console.log("now", now);
                    console.log("val", val);
                }
            },
            "easeOutBounce"
    );
});
