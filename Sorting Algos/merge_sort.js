function merge(lst1,lst2){
    if (typeof lst1 !== typeof []){lst1 = []}
    if (typeof lst2 !== typeof []){lst2 = []}

    var lst = []
    var all_lst = [...lst1,...lst2]
    
    for (let i=0;i<lst1.length+lst2.length;i++ ){
        
        var min_el = Math.min(...all_lst)
        lst.push(min_el)
        all_lst.splice( all_lst.indexOf(min_el) ,1)
    }

    return lst
}

function merge_sort(size){
    var every_lst = []
    var arr = chart.data.datasets[0].data

    for (let el of arr){every_lst.push([el])}
 
    for (let _ of [1]){
        let lsts = [[]]
        

        let fake_lst = arr.slice()
        while (fake_lst.length != 0){
            if (lsts[lsts.length-1].length != size){
                lsts[lsts.length-1].push(fake_lst[0])
                fake_lst.splice(0,1)
            }
            else{
                lsts.push([fake_lst[0]])
                fake_lst.splice(0,1)
            }
        } 
        

        let result = []
        let merger = []
        for (let el of lsts){
            if (merger.length < 2){
              merger.push(el)  
            }else{
                result.push(merge(merger[0],merger[1]))
                merger = [el]
            }

        }
        if (merger.length != 0 ){
            result.push(merge(merger[0],merger[1]))
            merger = []
        }



        let r = []
        for (let el of result){
            if (typeof el === typeof []){r.push(...el)}
        }

        console.log(r,"result")
        update_chart_array({"r":r,"l":"none"})
    }   
    
    if (size >= arr.length){
        chart.data.datasets[0].backgroundColor = sorted_hex_code
        chart.options.animation.duration = 500
        chart.data.datasets[0].borderColor = "red"
        chart.update()

        sort = false
    }

    console.log(arr.length)
}

var size = 1

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
        {type:"line",
        data:{
            labels:array_info["l"],
            datasets:[{
                data:array_info["r"],
                backgroundColor:hex_code,
                borderColor: hex_code            }
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
        let animation_time =400
        console.log(animation_time)

        chart.options.animation.duration = animation_time

        merge_sort(size)
        size *=2

    }
    else {chart.options.animation.duration = 400
    size = 1}
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

setInterval(check_loop,600)