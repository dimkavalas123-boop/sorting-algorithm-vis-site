const canvas = document.getElementById("c")

const hex_code = "#B7B0E6"
const sorted_hex_code = "red"
let deffault_number = 100
let deffault_delay = 50
let chart
let sort = false


console.log("Pios exi anoiksi to console glou glou lgou glou glou glou")

function make_random_array_labels(num){
    let result = []
    let labels = []

    for (let i = 0;i<num;i++){
        labels.push(i.toString())
        result.push(i)
    }
    result.sort(() => Math.random() - 0.5);
    return {"r":result,"l":labels}
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
                borderColor: hex_code
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
            }}

        })
    

    chart = my_chart
    return my_chart
}

function update_chart_array(array){
    chart.data.datasets[0].data = array["r"]
    if (array["l"] != "none"){chart.data.labels = array["l"]}
    
    chart.update()
}


function sort_array_bubble(){
    let chart_array = chart.data.datasets[0].data
    let count = true

    for (let current_indx = 0;current_indx<chart_array.length;current_indx++){
        let el = chart_array[current_indx]

        let next_el = -100
        try{next_el = chart_array[current_indx-1]} catch{}
        if (el < next_el){
            count = false
            chart_array[current_indx] = next_el
            chart_array[current_indx-1] = el
            
        }
    }        

    if (count){
        chart.data.datasets[0].backgroundColor = sorted_hex_code
        chart.options.animation.duration = 500
        chart.data.datasets[0].borderColor = "red"
        chart.update()

        console.log("count ")
        sort = false
    }

    update_chart_array({"r":chart_array,"l":"none"})
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


function change_max_slide(){
    document.getElementById("sorting_label").innerText = "Sorting:"+{true:"True",false:"False"}[sort]

    let v1 = document.getElementById("lst_range").value
    document.getElementById("lst_items").innerText = "Items: "+v1

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
        let animation_time
        if (chart.data.datasets[0].data.length <= 200){animation_time = 400}
        if (chart.data.datasets[0].data.length > 200 && chart.data.datasets[0].data.length <= 400){animation_time = 300}
        if (chart.data.datasets[0].data.length > 400 && chart.data.datasets[0].data.length <= 800){animation_time = 200}
        if (chart.data.datasets[0].data.length > 800){animation_time = 75}

        chart.options.animation.duration = animation_time
        sort_array_bubble()
    }
    else {chart.options.animation.duration = 400}
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

setInterval(check_loop,45)