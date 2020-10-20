$(document).ready(function(){

    $('#submit').click(function(){

        var city = $('#city').val();

        if(city != ''){

            $.ajax({

                url: "http://api.openweathermap.org/data/2.5/find?q=" + city + "&units=imperial" + "&APPID=a35dfc04904724a33f92bb9a5d159a73",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget = show(data);

                    $("#show").html(widget);
                    
                    $("#city").val('');


                }

            });

        }else{
            $("#error").html("Field cannot be empty");
        }
    });

});

function show(data) {
    return "<h2><Strong>City</strong>: "+data.list[0].name +"</h2>" +
    "<h3><strong>Weather</strong>: "+ data.list[0].main.temp +"</h3>" +
    "<h3>Humidity: "+ data.list[0].main.humidity +"</h3>" +
    "<h3>Wind Speed: "+ data.list[0].main.wind +"</h3>" +
    "<h3>UV Index: </h3>" ;
};