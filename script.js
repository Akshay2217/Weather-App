const API_key=WEATHER_API_KEY
const getWeatherData = async(city) =>{ 
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
  const response = await fetch(URL);
  console.log(response.status);
  let statusCode = response.status;
  if (statusCode != 200) {

    getWeatherData("New Delhi");
  }
  else {
    const myJson = await response.json();
    console.log(myJson);
    console.log()

    document.querySelector(".City").innerHTML = `${myJson.name}`;
    document.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${myJson.weather[0].icon}@2x.png" alt="">`;
    document.querySelector(".desc").innerHTML = ` ${myJson.weather[0].description}`;
    document.querySelector(".temp").innerHTML = `  ${myJson.main.temp}`;
    let weather = myJson.weather[0].main;

    if (weather == "Rain") {
      document.body.style.backgroundImage =
        "url('https://user-images.githubusercontent.com/108625645/184850507-c8d4386e-7440-4a74-8ecc-3d50ede08440.jpg')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    } else if (weather == "Clouds") {
      document.body.style.backgroundImage =
        "url(https://user-images.githubusercontent.com/108625645/184843121-0bc80198-72f5-46db-86f6-1249fed1f543.jpg)"; // give proper url for the image or gif here
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    } else if (weather == "Clear") {
      document.body.style.backgroundImage =
        "url('https://user-images.githubusercontent.com/108625645/184848728-1a06c3d3-3795-4b8a-8516-3ab0a55c3a35.jpg')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    } else if (weather == "Drizzle") {
      document.body.style.backgroundImage =
        "url('https://user-images.githubusercontent.com/108625645/184848225-43b3626d-c4be-40ed-869b-64469c40db31.jpg')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    } else if (weather == "Thunderstorm") {
      document.body.style.backgroundImage =
        "url('https://user-images.githubusercontent.com/108625645/184847165-c7f7f8d0-7d97-44ff-a62c-4b48a11128a3.jpg')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    } else if (weather == "Haze") {
      document.body.style.backgroundImage =
        "url('https://user-images.githubusercontent.com/108625645/184846802-501b8d9c-90f4-4cd5-8b09-46977a2d9ff0.jpg')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    } else {
      document.body.style.backgroundImage =
        "url(https://user-images.githubusercontent.com/108625645/184851495-1fe89a25-fabd-4dad-8f89-a71de5aec8bc.jpg)";
    }
  }
}

const getValueInput = () => {
  let inputValueCity = document.getElementById("city").value;

  console.log(inputValueCity);
  getWeatherData(inputValueCity);
};
getWeatherData("New Delhi");
