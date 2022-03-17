import { showDigitalClock } from "./digital.js";

export function startTimer(setTime){
    
    var timer = new Timer();
        showDigitalClock(timer, setTime);
        
        timer.start({countdown: true, startValues: {minutes: setTime}});
        
        
        

        timer.addEventListener('targetAchieved', function (e) {
           /* function to times up */
        });
}
