function gettingJSON(){
    //Display the forecast
    document.querySelector('#forecast').style.display = 'block';

    // Your code here.
    let apikey = '0fde1a8e3212b9f432db3648867ce795'

    //Set default location if one isn't provided
    let location = 'Ann Arbor,US';

    // Your code here.
    if(document.querySelector('#location').value !== '') {
        location = document.querySelector('#location').value
    };
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    // For temperature in Fahrenheit use units=imperial
    // For temperature in Celsius use units=metric 
    let format;

    // Your code here.
    if(document.querySelector('#fahrenheit:checked')) {
        format = 'imperial'
    }
    else if(document.querySelector('#celcius:checked')) {
        format = 'metric'
    }
    else {
        format = 'imperial';
    };
    console.log("Format is " + format);

    //set the query
    // Your code here.    
    let query = 'https://api.openweathermap.org/data/2.5/weather?q='+ location +'&units='+ format +'&appid='+ apikey;
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.
    // Your code here.

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json))
        document.querySelector('#loc').innerHTML = json['name'];
        document.querySelector('#temp').innerHTML = json['main']['temp'];
        document.querySelector('#description').innerHTML = json['weather'][0]['description'];
        document.querySelector('#tempImg').src = 'http://openweathermap.org/img/wn/' + json['weather'][0]['icon'] +'.png';
        document.querySelector('#tempImg').alt = json['weather'][0]['description'];
        // document.querySelector('#tempImg').title = json
    });
}