import { showAlarm } from "./alarm.js";
import { showDigitalClock } from "./digital.js";
import { intervalBox, breakBox } from "./set-time.js";

var timer;

export function startTimer(setTime){
    timer = new Timer();
    
        
    timer.start({countdown: true, startValues: {minutes: setTime}});
    console.log(timer.getTimeValues());
    console.log(intervalBox)
 
;   timer.addEventListener('targetAchieved', function (e) {
    if(intervalBox == true) {
        timer.stop();
        startTimer(setTime);
    } else if (breakBox == true) {
        timer.stop();
        //paus-overlay med 5min timer nånstans här
        setTimeout(() => {
            startTimer(setTime)
        }, 10000); //<--ska vara 5 min
    }
        /* function to times up view*/
       else {
        showAlarm()
       }
        
    });
    
    showDigitalClock(timer);
}

export {timer};