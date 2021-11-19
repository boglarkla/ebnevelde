// ==UserScript==
// @name         EbneveldeScript
// @namespace    http://tampermonkey.net/
// @version      1.1
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

    if(!url.includes("&")){

        if(document.body.innerHTML.search("10 napra elég") == -1)
        {
           document.getElementsByClassName("big_button")[1].click();
        }

        var button = document.getElementsByClassName("big_disabled")[0];
        if(button === undefined){
         document.getElementsByClassName("big_button")[2].click();
        }
        else{
            // check if the 0th disabled button is for teaching
            if(button.innerHTML != "Tanítás"){
               document.getElementsByClassName("big_button")[2].click();
            }

            button = document.getElementsByClassName("big_disabled")[1];
            if(button === undefined){
                document.getElementsByClassName("big_button")[3].click();
            }
            else{
                // check if the 1st disabled button is for playing
                if(button.innerHTML != "Játék"){
                    document.getElementsByClassName("big_button")[3].click();
                }

                button = document.getElementsByClassName("big_disabled")[2];
                if(button === undefined){
                    document.getElementsByClassName("big_button")[4].click();
                }
                else{
                    // check if the 2nd disabled button is for walking
                    if(button.innerHTML != "Séta"){
                        document.getElementsByClassName("big_button")[4].click();
                    }

                    button = document.getElementsByClassName("big_disabled")[3];
                    if(button === undefined){
                        document.getElementsByClassName("big_button")[5].click();
                    }
                    else{
                        // check if the 3rd disabled button is for bath
                        //if(button.innerHTML != "Fürdetés"){
                        //   document.getElementsByClassName("big_button")[5].click();
                        //}
                        document.getElementsByClassName("big_button")[6].click();
                    }
                }
            }
        }
    }

    if(url.includes("&etel")){
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
}
)();

