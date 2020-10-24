//this call and places the temp wind humidity
function show(data) {
    return "<h2><strong>Local Weather For</strong>:<br> " + data.list[0].name + ", " + data.list[0].sys.country + "</h2>" +
    "<h3><strong>Weather</strong>: " + data.list[0].main.temp + " &deg;F<img src='https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png'></h3>" +
    "<h4><strong>Humidity</strong>: " + data.list[0].main.humidity + "%</h4>" +
    "<h4><strong>Wind Speed</strong>: " + data.list[0].wind.speed + "mph</h4>" ;
};
//this call and places the 5 day forecast
function fshow(data) {
    return  "<h5><strong>Current</strong>:<br> <img src='https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png'><br><strong>High</strong>:" + data.list[0].main.temp_max + " &deg;F<br><strong>Low</strong>:" + data.list[0].main.temp_min + " &deg;F  </h5>" +
    "<h5><strong>2-Day</strong>:<br> <img src='https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png'><br><strong>High</strong>:" + data.list[1].main.temp_max + " &deg;F<br><strong>Low</strong>:" + data.list[1].main.temp_min + " &deg;F  </h5>" +
    "<h5><strong>3-Day</strong>:<br> <img src='https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png'><br><strong>High</strong>:" + data.list[2].main.temp_max + " &deg;F<br><strong>Low</strong>:" + data.list[2].main.temp_min + " &deg;F  </h5>" +
    "<h5><strong>4-Day</strong>:<br> <img src='https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png'><br><strong>High</strong>:" + data.list[3].main.temp_max + " &deg;F<br><strong>Low</strong>:" + data.list[3].main.temp_min + " &deg;F  </h5>" +
    "<h5><strong>5-Day</strong>:<br> <img src='https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png'><br><strong>High</strong>:" + data.list[4].main.temp_max + " &deg;F<br><strong>Low</strong>:" + data.list[4].main.temp_min + " &deg;F  </h5>" ;
};

//linked to html to get city name

    $('#submit').click(function(){
        event.preventDefault(); 
        $(document).ready(function(){
        
    

        
        

        var city = $('#city').val();


        
        
        
       
        
       //api call for forecast this is the data called in the second function 


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

//api call for data in the first info screen this is the data called for the second function

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
    
//i was losing one of the two data sets above, I used this to reload css after javascript and it stopped happening
});
(function(){
    let links = document.getElementsByTagName('link');
        for (let i = 0; i < links.length; i++) {
            if (links[i].getAttribute('rel') == 'stylesheet') {
          let href = links[i].getAttribute('href').split('?')[0];
                let newHref = href + '?version=' 
                             + new Date().getMilliseconds();
                console.log(newHref)
                links[i].setAttribute('href', newHref);
            }
        }
  })();
//everytime i tried to console log or store to local storage I started to lose work.  I know how to finish this page but I was running into a time crunch and things stopped working.  I had to get to a point of functionality before midnight