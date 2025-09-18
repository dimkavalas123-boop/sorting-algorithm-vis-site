var loop = false
var iteration = 0

var title_doc = document.getElementById("title_array")
var txt_array = document.getElementById("txt_array")
var stop_btn = document.getElementById("stop_btn")

var txt_array_animation = [
    {color:"green"},
    {transform:"rotate(1deg)"},
    {transform:"rotate(-1deg)"}
]

var stop_btn_time = {
    "iterations":1,
    "duration":250
}
// var stop_btn_animation_start=[
//     {color:"white"}
//     ,{color:"green"}
// ]
// var stop_btn_animation_stop=[
//     {color:"white"}
//     ,{color:"red"}
// ]

var iterations_example =[
    "[] [ 3,2,5,4,1,0,6,7,9,8 ]"
    ,"[0] [3,2,5,4,1,6,7,8,9]"
    ,"[0,1] [3,2,5,4,6,7,8,9]"
    ,"[0,1,2] [3,5,4,6,7,8,9]"
    ,"[0,1,2,3] [5,4,6,7,8,9]"
    ,"[0,1,2,3,4] [5,6,7,8,9]"
    ,"[0,1,2,3,4,5] [6,7,8,9]"
    ,"[0,1,2,3,4,5,6] [7,8,9]"
    ,"[0,1,2,3,4,5,6,7] [8,9]"
    ,"[0,1,2,3,4,5,6,7,8] [9]"
    ,"[0,1,2,3,4,5,6,7,8,9] []"
    ,"[0,1,2,3,4,5,6,7,8,9]"

]


var max_iterations = iterations_example.length


function iteration_context(){
    if (loop){
        iteration++
        if (iteration == max_iterations){iteration=0}

        txt_array.innerText = iterations_example[iteration]
        txt_array.animate(txt_array_animation,stop_btn_time)
        
    }

    title_doc.innerText = "Iteration: "+iteration
}

function loop_btn(){
    stop_btn.onclick =function(){
        loop = !loop
        // let animation_on = stop_btn_animation_start
        // if (loop){
        //     animation_on = stop_btn_animation_stop
        //     stop_btn.innerText = "Stop"
        // }else{
        //     stop_btn.innerText = "Start"
        // }


        //stop_btn.animate(animation_on,stop_btn_time)
    }
}

function opacity_change(){
    if(loop){txt_array.style.opacity = 1
        stop_btn.innerText = "Stop"}
    else{txt_array.style.opacity = .5
        stop_btn.innerText = "Start"}
}

loop_btn()
setInterval(opacity_change,20)
setInterval(iteration_context,2000)