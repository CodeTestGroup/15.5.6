const syncNotes = async () => {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const restoredText = localStorage.getItem('note')
        document.getElementById('note').value = restoredText
        updateWordCount(restoredText)
    }
}

window.onload = async () => {
    syncNotes()
    document.getElementById('note').addEventListener('input', (e) => {
        localStorage.setItem('note', e.target.value)
    })
}
  // Function that display value
        function dis(val) {
            document.getElementById("result").value += val
        }

        function myFunction(event) {
            if (event.key == '0' || event.key == '1'
                || event.key == '2' || event.key == '3'
                || event.key == '4' || event.key == '5'
                || event.key == '6' || event.key == '7'
                || event.key == '8' || event.key == '9'
                || event.key == '+' || event.key == '-'
                || event.key == '*' || event.key == '/')
                document.getElementById("result").value += event.key;
        }

        var cal = document.getElementById("calcu");
        cal.onkeyup = function (event) {
            if (event.keyCode === 13) {
                console.log("Enter");
                let x = document.getElementById("result").value
                console.log(x);
                solve();
            }
        }
//startcords
        // Function that evaluates the digit and return result
        function solve() {
            let x = document.getElementById("result").value
            let y = math.evaluate(x)
            document.getElementById("result").value = y
        }

        // Function that clear the display
        function clr() {
            document.getElementById("result").value = ""
        }
var x= document.getElementById("location");
    function getlocation() {
    	if(navigator.geolocation){
    		navigator.geolocation.getCurrentPosition(showPosition)
    	  }
    	else
    	{
             alert("Sorry! your browser is not supporting")
         } }

     function showPosition(position){
       var x = "Your current location is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " +    position.coords.longitude + ")";
                document.getElementById("location").innerHTML = x;
     }
     //endcords
     // initialize the Calendar component
        var calendar = new ej.calendars.Calendar();

        // Render the initialized button.
        calendar.appendTo('#element')
       }
