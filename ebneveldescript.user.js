// ==UserScript==
// @name         EbneveldeScript
// @namespace    http://tampermonkey.net/
// @version      1.4.1
// @description  Segít automatikusan ellátni a kutyákat ebneveldén, mivel baromi uncsi végig kattintgatni mindent. :)
// @author       boglarkla
// @match        *://www.ebnevelde.hu/dogs/zoom/?id=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(

    function AutoClicker() {
    'use strict';
    let url = window.location.href;

    // we are on the main page    
    if(!url.includes("&")){
        // if food is not full
        if(document.body.innerHTML.search("10 napra elég") == -1)
        {
            // click on feed button
           document.getElementsByClassName("big_button")[1].click();
        }

        // load the 0th disabled button's text
        var button = document.getElementsByClassName("big_disabled")[0];
        // if said button does not exist
        if(button === undefined){
            // click on teach button
            document.getElementsByClassName("big_button")[2].click();
        }
        // there is indeed a disabled button
        else{
            var i = 0;
            if(button.innerHTML == "Előző"){
                i = 1;
            }
            
            // check if the 0th disabled button is for teaching
            if(button.innerHTML != "Tanítás"){
               document.getElementsByClassName("big_button")[2].click();
            }

            button = document.getElementsByClassName("big_disabled")[1+i];
            if(button === undefined){
                document.getElementsByClassName("big_button")[3].click();
            }
            else{
                // check if the 1st disabled button is for playing
                if(button.innerHTML != "Játék"){
                    document.getElementsByClassName("big_button")[3].click();
                }

                button = document.getElementsByClassName("big_disabled")[2+i];
                if(button === undefined){
                    document.getElementsByClassName("big_button")[4].click();
                }
                else{
                    // check if the 2nd disabled button is for walking
                    if(button.innerHTML != "Séta"){
                        document.getElementsByClassName("big_button")[4].click();
                    }

                    button = document.getElementsByClassName("big_disabled")[3+i];
                    if(button === undefined){
                        document.getElementsByClassName("big_button")[5].click();
                    }
                    else{
                        // check if the 3rd disabled button is for bath
                        if(button.innerHTML != "Fürdetés"){
                           document.getElementsByClassName("big_button")[5].click();
                        }                       
                        else{
                            document.getElementsByClassName("big_button")[6].click();
                        }
                    }
                }
            }
            document.getElementsByClassName("big_button")[5].click();
        }
    }
    else if(url.includes("&etel")){
         document.getElementsByClassName("button")[0].click();     
    }
    else if(url.includes("&tanit")){
        document.getElementsByClassName("button")[0].click();
    }
    else if(url.includes("&jatek")){
        document.getElementsByClassName("button")[0].click();
    }
    else if(url.includes("&furdet")){
        document.getElementsByClassName("button")[0].click();
    }  
        
    /* if(url.includes("&etel")){
        document.getElementsByClassName("button")[0].click();
    }

    if(url.includes("&tanit")){
        document.getElementsByClassName("button")[0].click();
    }

    if(url.includes("&jatek")){
        document.getElementsByClassName("button")[0].click();
    }

    if(url.includes("&furdet")){
        document.getElementsByClassName("button")[0].click();
    }
    */
}
)();

