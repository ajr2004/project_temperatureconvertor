
    function convertToFar() {
      var celsiusInput = document.getElementById("celsius");
      var fahrenheitOutput = document.getElementById("fahrenheit");
      
      if (celsiusInput.value === "") {
        alert("Please enter a temperature in Celsius.");
        return;
      }
      
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9/5) + 32;
      
      fahrenheitOutput.value = fahrenheit.toFixed(2);
    }

    function convertToCel() {
      var fahrenheitInput = document.getElementById("fahrenheit");
      var celsiusOutput = document.getElementById("celsius");
      
      if (fahrenheitInput.value === "") {
        alert("Please enter a temperature in Fahrenheit.");
        return;
      }
      
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5/9;
      
      celsiusOutput.value = celsius.toFixed(2);
    }

    function convertToKel() {
      var celsiusInput = document.getElementById("celsius");
      var kelvinOutput = document.getElementById("kelvin");
      
      if (celsiusInput.value === "") {
        alert("Please enter a temperature in Celsius.");
        return;
      }
      
      var celsius = parseFloat(celsiusInput.value);
      var kelvin = celsius + 273.15;
      
      kelvinOutput.value = kelvin.toFixed(2);
    }

    function convertToRank() {
      var celsiusInput = document.getElementById("celsius");
      var rankineOutput = document.getElementById("rankine");
      
      if (celsiusInput.value === "") {
        alert("Please enter a temperature in Celsius.");
        return;
      }
      
      var celsius = parseFloat(celsiusInput.value);
      var rankine = (celsius + 273.15) * 9/5;
      
      rankineOutput.value = rankine.toFixed(2);
    }

    function convertToKelFar() {
      var fahrenheitInput = document.getElementById("fahrenheit");
      var kelvinOutput = document.getElementById("kelvin");
      
      if (fahrenheitInput.value === "") {
        alert("Please enter a temperature in Fahrenheit.");
        return;
      }
      
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var kelvin = (fahrenheit + 459.67) * 5/9;
      
      kelvinOutput.value = kelvin.toFixed(2);
    }

    function convertToRankFar() {
      var fahrenheitInput = document.getElementById("fahrenheit");
      var rankineOutput = document.getElementById("rankine");
      
      if (fahrenheitInput.value === "") {
        alert("Please enter a temperature in Fahrenheit.");
        return;
      }
      
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var rankine = fahrenheit + 459.67;
      
      rankineOutput.value = rankine.toFixed(2);
    }

    function convertToCelKel() {
      var kelvinInput = document.getElementById("kelvin");
      var celsiusOutput = document.getElementById("celsius");
      
      if (kelvinInput.value === "") {
        alert("Please enter a temperature in Kelvin.");
        return;
      }
      
      var kelvin = parseFloat(kelvinInput.value);
      var celsius = kelvin - 273.15;
      
      celsiusOutput.value = celsius.toFixed(2);
    }

    function convertToFahKel() {
      var kelvinInput = document.getElementById("kelvin");
      var fahrenheitOutput = document.getElementById("fahrenheit");
      
      if (kelvinInput.value === "") {
        alert("Please enter a temperature in Kelvin.");
        return;
      }
      
      var kelvin = parseFloat(kelvinInput.value);
      var fahrenheit = (kelvin * 9/5) - 459.67;
      
      fahrenheitOutput.value = fahrenheit.toFixed(2);
    }

    function convertToRankKel() {
      var kelvinInput = document.getElementById("kelvin");
      var rankineOutput = document.getElementById("rankine");
      
      if (kelvinInput.value === "") {
        alert("Please enter a temperature in Kelvin.");
        return;
      }
      
      var kelvin = parseFloat(kelvinInput.value);
      var rankine = kelvin * 9/5;
      
      rankineOutput.value = rankine.toFixed(2);
    }

    function convertToCelRank() {
      var rankineInput = document.getElementById("rankine");
      var celsiusOutput = document.getElementById("celsius");
      
      if (rankineInput.value === "") {
        alert("Please enter a temperature in Rankine.");
        return;
      }
      
      var rankine = parseFloat(rankineInput.value);
      var celsius = (rankine - 491.67) * 5/9;
      
      celsiusOutput.value = celsius.toFixed(2);
    }

    function convertToFahRank() {
      var rankineInput = document.getElementById("rankine");
      var fahrenheitOutput = document.getElementById("fahrenheit");
      
      if (rankineInput.value === "") {
        alert("Please enter a temperature in Rankine.");
        return;
      }
      
      var rankine = parseFloat(rankineInput.value);
      var fahrenheit = rankine - 459.67;
      
      fahrenheitOutput.value = fahrenheit.toFixed(2);
    }

    function convertToKelRank() {
      var rankineInput = document.getElementById("rankine");
      var kelvinOutput = document.getElementById("kelvin");
      
      if (rankineInput.value === "") {
        alert("Please enter a temperature in Rankine.");
        return;
      }
      
      var rankine = parseFloat(rankineInput.value);
      var kelvin = rankine * 5/9;
      
      kelvinOutput.value = kelvin.toFixed(2);
    }
  