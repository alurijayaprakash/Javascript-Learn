var centerbox = document.querySelector(".center-box");
var redbox = document.querySelector(".red-box");
var greenbox = document.querySelector(".green-box");
var orangebox = document.querySelector(".orange-box");
// var redbox_color = window.getComputedStyle(redbox).backgroundColor;
// console.log(redbox_color);

// send element which you got from querySelector to get color
function getAnyColor(box){
    return window.getComputedStyle(box).backgroundColor
}


function runEventListener(actualColorbox, DestinationColorBox ){
    actualColorbox.addEventListener('mouseenter',()=>{
        var PreviousCol = getAnyColor(DestinationColorBox)
        // set color here
        DestinationColorBox.style.backgroundColor = getAnyColor(actualColorbox);
        console.log(`this ${PreviousCol} is Changed to ${getAnyColor(actualColorbox)} Color`)
        
        // Set Background Random Color on any box
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#"+randomColor;
        console.log("Random Color", randomColor)
    });
}


//
// // firstbox
// redbox.addEventListener('click',()=>{
//     console.log("Fired")
//     centerbox.style.backgroundColor = redbox_color;
// });

// 
runEventListener(redbox,centerbox)
runEventListener(greenbox,centerbox)
runEventListener(orangebox,centerbox)