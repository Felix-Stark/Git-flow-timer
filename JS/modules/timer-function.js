import { showAlarm } from "./alarm.js";
import { showDigitalClock } from "./digital.js";
import { intervalBox, breakBox } from "./set-time.js";
import { showPauseOverlay } from "./pause-overlay.js";

var timer;

export function startTimer(setTime){
    timer = new Timer();
   
        
    timer.start({countdown: true, startValues: {seconds: setTime}});
    console.log(timer.getTimeValues());

 
   timer.addEventListener('targetAchieved', function (e) {
    if(intervalBox.checked == true) {
        timer.stop();
        startTimer(setTime);
    } else if (breakBox.checked == true) {
        timer.stop();
        showPauseOverlay()
        //paus-overlay FUNKTION med 5min timer nånstans här
        // startPauseTimer();

        // setTimeout(() => {
        //     startTimer(setTime)
        // }, 50000); //<--ska vara 5 min. Nu är den 5 :)
    }
        /* function to times up view*/
       else {
        showAlarm()
       }
        
    });
    
    showDigitalClock(timer);
}

export { timer };