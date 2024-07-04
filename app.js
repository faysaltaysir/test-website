let trans = document.querySelector(".transition");

let content = [
    "Web Development   ",
    "App Development   ",
    "Robotics   ",
    "Electronics   ",
    "UI-UX Design   "
]

let i=0,j=0;
// for(let i=0;i<"Hello".length;i++){
setInterval(()=>{
        trans.innerText = content[j].slice(0,i);
        i++;
        if(i>content[j].length) {
            i=0;
            j++;
            if(j>=content.length){
                j=0;
                console.log(content.length);
            }
        }
        // console.log(content.length);
    },100);
// };