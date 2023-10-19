var ChannelName = document.querySelector(".titleclass");
var SubCount = document.querySelector(".subscribercount");
var congratsnote = document.querySelector(".congratsnote");
console.log(ChannelName, SubCount, congratsnote)


let count = 1;

// subscriber counter
setInterval(()=> {
    if (count < 1000) {
        count++;
        SubCount.innerHTML = count;
    }
},1)

console.log("subscriber counter done")

// Congrats.....! Text
setTimeout(()=>{
    congratsnote.innerHTML = `Yahoo...! you have got ${SubCount.innerHTML} Subscribers`
}, 6000)
console.log("Congrats done")

// Computed

const getInnerHTMLName = (item) => {
    return item.innerHTML
}

// Iterate and log
setTimeout(() => {
    for (const eachitem of [ChannelName,SubCount,congratsnote]){
        console.log("----")
        console.log(eachitem.innerHTML)
    }
}, 7000);

