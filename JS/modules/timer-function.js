import { showDigitalClock } from "./digital.js";

var timer = new Timer();

export function startTimer(setTime){
    
    
        
    timer.start({countdown: true, startValues: {minutes: setTime}});
    console.log(timer.getTimeValues());
 
;   timer.addEventListener('targetAchieved', function (e) {
        /* function to times up view*/
        
    });
    
    showDigitalClock(timer);
}

export {timer};