let time;
let mvalue;
let hvalue;
let svalue;
let minutes;
let hours;
let s = document.getElementById("timert");
let inputs = document.getElementById("inputss");
let sb = document.getElementById("sbutton");
let stb = document.getElementById("stbutton");
let rb = document.getElementById("rbutton");
let resb = document.getElementById("resbutton");
let refreshIntervalId;

window.onload = hideUi();

function hideUi()
{

    s.style.display = "none";
    sb.style.display = "none";
    rb.style.display = "none";
    resb.style.display = "none";
    stb.style.position = "relative";
    stb.style.left = "35%";
    stb.style.right = "50%";

}

function startTimer()
{

    getValues();
    const contdownEl = document.getElementById("timert"); 
    contdownEl.innerHTML = `${hvalue}:${mvalue}:${svalue}`;
    refreshIntervalId = setInterval(updateCountdown, 1000);
    s.style.display = "block";
    inputs.style.display = "none";
    stb.style.display = "none";
    sb.style.display = "block";
    rb.style.display = "block";
    rb.style.position = "relative";
    rb.style.left = "35%";
    rb.style.right = "50%";
    sb.style.position = "relative";
    sb.style.left = "35%";
    sb.style.right = "50%";

}

function getValues()
{

    mvalue =  document.getElementById("minput").value;
    hvalue =  document.getElementById("hinput").value;
    svalue =  document.getElementById("sinput").value;

}

function updateCountdown() 
{

        const contdownEl = document.getElementById("timert"); 
        contdownEl.innerHTML = `${hvalue}:${mvalue}:${svalue}`;

        if(hvalue == 0 && mvalue == 0 && svalue == 0)
        {
            resetTimer();
        }
        else if(svalue != 0)
        {

            svalue = svalue - 1;

        }
        else if(svalue == 0 && mvalue >= 1)
        {

            svalue = 60;
            mvalue = mvalue - 1;
           

        }
        else if(mvalue == 0 && svalue == 0 && hvalue >= 1)
        {

            mvalue = 60;
            hvalue = hvalue - 1;   

        }
        console.log("rjg");

}
    
function stopTimer()
{

    rb.style.display = "none";
    resb.style.display = "block";
    sb.style.display = "none";
    clearInterval(refreshIntervalId);
    resb.style.position = "relative";
    resb.style.left = "35%";
    resb.style.right = "50%";

}

function resetTimer()
{

    s.style.display = "none";
    sb.style.display = "none";
    rb.style.display = "none";
    resb.style.display = "none";
    inputs.style.display = "block";
    inputs.style.position = "relative";
    inputs.style.top = "10%";
    stb.style.display = "block";
    stb.style.position = "relative";
    stb.style.left = "35%";
    stb.style.right = "50%";
    hvalue = 0;
    mvalue = 0;
    svalue = 0;
    clearInterval(refreshIntervalId);

}

function resumeTimer()
{

    sb.style.display = "block";
    rb.style.display = "block";
    resb.style.display = "none";
    refreshIntervalId = setInterval(updateCountdown, 1000);

}