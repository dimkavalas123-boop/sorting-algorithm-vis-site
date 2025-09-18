const timing_in = {
    "duration":600,
    "iterations":1
}

const timing_out = {
    "duration":400,
    "iterations":1
}

const animation_in = [
    {transform:"scale(0)"},
    {color:"white"},    
    {transform:"scale(1)"},
    {transform:"rotate(2deg)"},
    {transform:"rotate(-2deg)"},
    {transform:"rotate(0deg)"},

]

const animation_out = [
    {color:"white"},
    
    {transform:"rotate(2deg)"},
    {transform:"rotate(-2deg)"},
    {transform:"rotate(0deg)"},
    {scale:0},
    
]

var credit_ids = ["orfanos","kavalas","norok","alex"]
var num = -1

function animation_loop(){
    num++
    if (num == credit_ids.length){
        for (let id of credit_ids){
            document.getElementById(id).animate(animation_out,timing_out)
            document.getElementById(id).style.color = "#0C0C0C"
            document.getElementById(id).style.textShadow = "0px 0px 0px #0C0C0C"
        }
        
        num = -1
    }

    document.getElementById(credit_ids[num]).style.textShadow = "0px 0px 2px white"
    document.getElementById(credit_ids[num]).animate(animation_in,timing_in)
    document.getElementById(credit_ids[num]).style.color = "white"
    
}

// var HTML = document.getElementById("HTML")
// var CSS = document.getElementById("CSS")
// var JS = document.getElementById("JS")
var classes = ["JS","CSS","HTML"]
var lang_color = {"JS":"yellow","HTML":"#e34c26","CSS":"#264de4"}

function hover_animations(){
    for (let cls of classes){
        
        let elements = document.getElementsByClassName(cls)
        for (let el of elements){
            console.log(el)
            el.addEventListener("mouseover",function(){
                document.getElementById(cls).style.backgroundColor = lang_color[cls]
            })
            el.addEventListener("mouseout",function(){
                document.getElementById(cls).style.backgroundColor = "#0C0C0C"
            })
        }
    }
}

hover_animations()

animation_loop()
setInterval(animation_loop,timing_in["duration"]+100)