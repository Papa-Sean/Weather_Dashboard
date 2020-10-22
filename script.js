$(document).ready(function(){

    $('#submit').click(function(){

        var city = $('#city').val();
        var cityHist = $('#city').val()
        localStorage.setItem('city', JSON.stringify(cityHist));
        
       
        
        


        if(city != ''){

            $.ajax({

                url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&APPID=a35dfc04904724a33f92bb9a5d159a73",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget = fshow(data);

                    $("#fiveDay").html(widget);
                    $("#city").val('');
                }
            })
            
            $.ajax({

                url: "https://api.openweathermap.org/data/2.5/find?q=" + city + "&units=imperial" + "&APPID=a35dfc04904724a33f92bb9a5d159a73",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget = show(data);

                    $("#show").html(widget);
                    
                    $("#city").val('');


                }

            })


        }else{
            $("#error").html('<div class="alert alert-warning alert-dismissible" role="alert">You should enter a City.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        }
    });

});

function show(data) {
    return "<h2><strong>Local Weather For</strong>:<br> " + data.list[0].name + ", " + data.list[0].sys.country + "</h2>" +
    "<h3><strong>Weather</strong>: " + data.list[0].main.temp + " &deg;F<img src='https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png'></h3>" +
    "<h4><strong>Humidity</strong>: " + data.list[0].main.humidity + "%</h4>" +
    "<h4><strong>Wind Speed</strong>: " + data.list[0].wind.speed + "mph</h4>" ;
};

function fshow(data) {
    return "<h5><strong>Current</strong>:<br> <img src='https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png'><br><strong>High</strong>:" + data.list[0].main.temp_max + " &deg;F<br><strong>Low</strong>:" + data.list[0].main.temp_min + " &deg;F  </h5>" +
    "<h5><strong>2-Day</strong>:<br> <img src='https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png'><br><strong>High</strong>:" + data.list[1].main.temp_max + " &deg;F<br><strong>Low</strong>:" + data.list[1].main.temp_min + " &deg;F  </h5>" +
    "<h5><strong>3-Day</strong>:<br> <img src='https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png'><br><strong>High</strong>:" + data.list[2].main.temp_max + " &deg;F<br><strong>Low</strong>:" + data.list[2].main.temp_min + " &deg;F  </h5>" +
    "<h5><strong>4-Day</strong>:<br> <img src='https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png'><br><strong>High</strong>:" + data.list[3].main.temp_max + " &deg;F<br><strong>Low</strong>:" + data.list[3].main.temp_min + " &deg;F  </h5>" +
    "<h5><strong>5-Day</strong>:<br> <img src='https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png'><br><strong>High</strong>:" + data.list[4].main.temp_max + " &deg;F<br><strong>Low</strong>:" + data.list[4].main.temp_min + " &deg;F  </h5>" ;
};

fuction 