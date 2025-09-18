const canvas = document.getElementById("c")

const hex_code = "#B7B0E6"
const sorted_hex_code = "red"
let deffault_number = 100
let deffault_delay = 50
let chart
let sort_num = 1
let sort = false


function radix_sort_chart_array(num){
    let chart_array = chart.data.datasets[0].data

    function zero_addition_num(num,max_l){
        let zeros = ""
        for (let i=num.toString().length;i<max_l;i++ ){
            zeros += "0"
        } 
        return zeros + num.toString()
    }    

    console.log(chart_array)
    let max = Math.max(...chart_array)
    let max_length = max.toString().length
    let dict_nums = {"0":[],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]}

    let ar 

    for (let i=0;i<chart_array.length;i++){
        let el = zero_addition_num(chart_array[i],max_length)
        console.log(max_length-num,max_length,max)
        dict_nums[el[max_length-(num)]].push(chart_array[i])
    }
    ar = []

    for (let el of Object.keys(dict_nums)){
        for (let num of dict_nums[el]){ar.push(num)}
    }
    chart_array = ar

    update_chart_array({"r":chart_array,"l":"none"})

    if (sort_num == max_length){
        chart.data.datasets[0].backgroundColor = sorted_hex_code
        chart.options.animation.duration = 500
        chart.data.datasets[0].borderColor = "red"

        chart.update()

        sort = false
    }
}

function make_random_array_labels(num){
    let result = []
    let labels = []
    let original = []

    for (let i = 0;i<num;i++){
        labels.push(i.toString())
        result.push(i)
        
    }
    original = result
    result.sort(() => Math.random() - 0.5);
    return {"r":result,"l":labels,"o":original}
}


function create_chart(array){    
    let array_info = array

    const my_chart = new Chart(canvas.getContext("2d"),
        {type:"bar",
        data:{
            labels:array_info["l"],
            datasets:[{
                data:array_info["r"],
                backgroundColor:hex_code,
                borderColor:hex_code
            }
        ]
        },options:{
            display:true,
            responsive:false,
            maintainAspectRatio:false,
            plugins: {
                legend: {
                  display: false
                }
            }
        
        }

        })
    

    chart = my_chart
    return my_chart
}

function update_chart_array(array){
    chart.data.datasets[0].data = array["r"]
    if (array["l"] != "none"){chart.data.labels = array["l"]}
    

    chart.update()
}


function set_slider_number(){
    deffault_number = document.getElementById("lst_range").value
}

document.getElementById("randomize_btn").onclick = function(){    
    set_slider_number()

    if (chart.data.datasets[0].backgroundColor == sorted_hex_code){chart.data.datasets[0].backgroundColor = hex_code;chart.update()}

    update_chart_array(make_random_array_labels(deffault_number))
    sort = false

    let style = document.getElementById("select_el").value
    let select = style
    if (select == "connect_line"){select="line"}
    chart.config.type = select

    if (style == "polarArea" || style == "line" || style == "bar"){
        chart.data.datasets[0].borderWidth =0
    }
    if (style == "connect_line"){
        chart.data.datasets[0].borderWidth = 2
    }
    chart.data.datasets[0].borderColor = hex_code
    chart.update()
}

document.getElementById("sort_btn").onclick = function(){
    sort =  !sort
}

//sliderc
const change_animation = [
    {transform:"rotate(1deg)"},
    {transform:"rotate(-1deg)"}
]

const timing_change ={
    "iterations":1,
    "duration":200
}

function change_max_slide(){
    document.getElementById("sorting_label").innerText = "Sorting:"+{true:"True",false:"False"}[sort]
    let v2 = document.getElementById("lst_range").value
    document.getElementById("lst_items").innerText = "Items: "+v2

    //document.getElementById("lst_items").animate(change_animation,timing_change)
    console.log(1)
}

function sort_array_classic_bubble(array){
    let start = new Date()
    for (let _ of array){
        for (let i = 0;i<array.length;i++){
            let el = array[i]
            let next_el = array[i+1]
            if (el > next_el){
                array[i] = next_el
                array[i+1] = el
            }
        }
    }
    console.log(array)
    let end = new Date()
    return end-start
}

function check_loop(){
    if (sort){
        let animation_time = 400

        chart.options.animation.duration = animation_time
        radix_sort_chart_array(sort_num)
        sort_num++
    }
    else {chart.options.animation.duration = 450
    sort_num = 1}
}


chart = create_chart(make_random_array_labels(deffault_number))

chart.config.type = "radar"
chart.update()
chart.config.type = "bar"
chart.labels = []
chart.options.scales.r.pointLabels.font.size = 0


chart.update()

document.getElementById("lst_range").value = deffault_number

setInterval(change_max_slide,)

setInterval(check_loop,800)
