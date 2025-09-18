var code_doc = document.getElementById("code")
var buttons_ids = ["bubble_sort","insertion_sort","selection_sort","merge_sort","radix_sort","boggo_sort"]
var id_code = {"bubble_sort":
`
let sort = true

function sort_array_bubble(){

    let chart_array = chart.data.datasets[0].data
    let count = true

    for (let current_indx = 0;current_indx<chart_array.length;current_indx++){
        let el = chart_array[current_indx]

        let next_el = -100
        try{next_el = chart_array[current_indx-1]} catch{}
        if (el < next_el){*
            count = false
            chart_array[current_indx] = next_el
            chart_array[current_indx-1] = el
            
        }
    }        

    if (count){
        chart.data.datasets[0].backgroundColor = sorted_hex_code
        chart.options.animation.duration = 500
        chart.update()

        console.log("count ")
        sort = false
    }

    update_chart_array({"r":chart_array,"l":"none"})

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

setInterval(check_loop,45)
`
,"selection_sort":
`
let sort = true
let sort_num = 0

function selection_sort(n){

    let chart_array = chart.data.datasets[0].data
    let cur_min = n

    for (let indx = n;indx<chart_array.length;indx++){

        if (chart_array[cur_min] > chart_array[indx]){
            cur_min = indx
        }

    }

    let el = chart_array[n]
    
    chart_array[n] = chart_array[cur_min]
    chart_array[cur_min] = el
    
    
    update_chart_array({"r":chart_array,"l":"none"})

    if (n == chart_array.length-1){

        chart.data.datasets[0].backgroundColor = sorted_hex_code
        chart.options.animation.duration = 500
        chart.update()

        sort = false

    }

}


function check_loop(){

    if (sort){
    
        let animation_time
        if (chart.data.datasets[0].data.length <= 200){animation_time = 400}
        if (chart.data.datasets[0].data.length > 200 && chart.data.datasets[0].data.length <= 400){animation_time = 300}
        if (chart.data.datasets[0].data.length > 400 && chart.data.datasets[0].data.length <= 800){animation_time = 200}
        if (chart.data.datasets[0].data.length > 800){animation_time = 75}

        chart.options.animation.duration = animation_time
        insertion_sort_classic(sort_num)
        sort_num++
    }
    
    else {chart.options.animation.duration = 400
    sort_num = 0}

}

setInterval(check_loop,45)

`
,"insertion_sort":`
let sort = true
let num = 0

function insertion_sort_classic(num){
   
    let chart_array = chart.data.datasets[0].data
    let c = 0
    let count = true

    for (let i =num;i<chart_array.length;i++){
    
        j = i
    
        while (chart_array[j] < chart_array[j-1] && j > 0){
    
            count = false
            c++
            let el = chart_array[j]
            let prv_el = chart_array[j-1]

            chart_array[j] = prv_el
            chart_array[j-1] = el 
            j--                
    
        }
        update_chart_array({"r":chart_array,"l":"none"})
        return
    
    }

    if (count){
    
        chart.data.datasets[0].backgroundColor = sorted_hex_code
        chart.options.animation.duration = 500
        chart.update()

        sort = false
    
    }

    update_chart_array({"r":chart_array,"l":"none"})
       
}


function check_loop(){
    
    if (sort){
    
        let animation_time
        if (chart.data.datasets[0].data.length <= 200){animation_time = 400}
        if (chart.data.datasets[0].data.length > 200 && chart.data.datasets[0].data.length <= 400){animation_time = 300}
        if (chart.data.datasets[0].data.length > 400 && chart.data.datasets[0].data.length <= 800){animation_time = 200}
        if (chart.data.datasets[0].data.length > 800){animation_time = 75}

        chart.options.animation.duration = animation_time
        insertion_sort_classic(sort_num)
        num++
    
    }
    
    else {
    
        chart.options.animation.duration = 400
        num = 0
    
    }

}

setInterval(check_loop,45)
`
,"merge_sort":`
let sort = true
let size = 1

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

        update_chart_array({"r":r,"l":"none"})
    
    }   
    
    if (size >= arr.length){
        
        chart.data.datasets[0].backgroundColor = sorted_hex_code
        chart.options.animation.duration = 500
        chart.update()

        sort = false
    
    }

}


function check_loop(){

    if (sort){
        
        let animation_time =400
        console.log(animation_time)

        chart.options.animation.duration = animation_time

        merge_sort(size)
        size *=2

    
    }
    
    else {
    
        chart.options.animation.duration = 400
        size = 1
    
    }

}

setInterval(check_loop,600)
`
,"radix_sort":`
let sort = true
let num = 1

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
        chart.update()

        sort = false
    
    }

}


function check_loop(){
   
    if (sort){
        
        let animation_time = 400

        chart.options.animation.duration = animation_time
        radix_sort_chart_array(num)
        num++
    
    }
    
    else {

        chart.options.animation.duration = 450
        num = 1
    
    }

}

setInterval(check_loop,800)
`
,"boggo_sort":
`
let sort = true
let combinations = []

function boggo_sort(){
    
    chart_array = chart.data.datasets[0].data
    
    let is_in_chart = combinations.includes(chart_array)
    chart_array.sort(() => Math.random() - 0.5) 

    if (combinations.includes(chart_array)){
        
        while (!combinations.includes(chart_array)){
        chart_array.sort(() => Math.random() - 0.5) 
        console.log(111)
        
        }        
    
    }

    
    let sorted = chart_array.slice().sort()

    if (sorted.every((val, index) => val === chart_array[index])){
        
        chart.data.datasets[0].backgroundColor = sorted_hex_code
        chart.options.animation.duration = 500
        chart.update()

        sort = false
    
    }else
    {
    
        combinations.push(chart_array)
    
    }

    console.log(combinations.length)
    update_chart_array({"r":chart_array,"l":"none"})

}

function check_loop(){
    
    if (sort){
        
        let animation_time = 100

        chart.options.animation.duration = animation_time
        boggo_sort()
    
    }
    
    else {
    
        chart.options.animation.duration = 450
        combinations = []
    
    }

}

setInterval(check_loop,100)
`
}

const title_update = [
    {transform:"scale(0)"}
    ,{transform:"scale(1)"}
]

const txt_update = [
    {color:"black"}
    ,{color:"white"}   
]

const txt_timing = {
    "iterations":1,
    "duration":600
}

const title = document.getElementById("title")

function optimise_buttons(){
    
    for (let id of buttons_ids){
        document.getElementById(id).onclick = function(){
            code_doc.innerText = id_code[id]
            code_doc.animate(txt_update,txt_timing)

            title.innerText = "Inspect Code: "+id.toUpperCase()
        }
    }
}


optimise_buttons()