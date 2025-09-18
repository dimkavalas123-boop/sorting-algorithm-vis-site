let current_btn = ""

function loop_btns(){
        let ids = ["btn_bubble","btn_insertion","btn_selection","btn_radix","btn_merge","btn_boggo"]
        let ids_color = {"btn_boggo":"red","btn_bubble":"red","btn_insertion":"yellow","btn_selection":"red","btn_radix":"green","btn_merge":"green"}
        let ids_p_txt = {
            "btn_boggo":`Boggo Sort is the worst Sorting algorithm, constantly shuffling the array
            until eventually the array will be shorted by meer chance. Boggo Sort is mostly a joke
            algorithm, never actually used to sort an array, but created as an interesting side-project.`
            
            ,"btn_bubble":`A popular yet very inefficient method of sorting your arrays is Bubble Sort. 
            Bubble Sort is mostly known for its simplicity and not its efficiency.
            The name --Bubble Sort-- comes from the way the array is gradually sorted.
            The method that it uses to sort the items sorts every item from the largest
            item to the smallets`

            ,"btn_insertion":`Insertion sort is also a very inefficient sorting algorithm when it comes to big datasets.
            Otherwise if a dataset is around 32 and 64 elements it can easily outperform more sophisticated
            sorting algorithms. The method that it uses to sort it's items is familiar to Selection Sort's,
            sorting every item from the end according to all the items that have have been sorted before.`

            ,"btn_selection":`Selection Sort just like bubble sort is a very simple yet
            inefficient sorting algorithm mostly used to help beginners become familiar with 
            algorithms. The method that it uses to sort it's items is the exact opposite of bubble sort
            sorting every item from its lowest element to its largest`
            
            ,"btn_radix":`Radix Sort is a very complex and efficienct way to sort an array
            especially when it comes to arrays containing numbers bases as high as 256. Radix 
            in some cases can outperform more than double some of the more common algorithms today,
            though the onlydownside is that it is not very memory efficienct. The method that it uses,
            gradually compares each item according to the largests number length of digits.`
            
            ,"btn_merge":`Merge Sort is a fairly complicated and efficient algorithm used to sort
            all kind of arrays, both large and smaller ones. As a result merge short is one the most commonly 
            used algorithms by most of the programming community. Merge Sort uses the "Divide and conquer" strategy 
            when it comes to sorting it's elements. The method that is uses, breaks the array into smaller ones gradually
            sorting the smaller parts and once again merging the multiple parts resulting in a sorted version of the original`
        }
        let ids_ex_txt = {
            "btn_boggo":"Time Complexity: O((n-1)*n!)"
            ,"btn_bubble":"Time Complexity: O(n^2)"
            ,"btn_insertion":"Time Complexity: O(n^2)"
            ,"btn_selection":"Time Complexity: O(n^2)"
            ,"btn_radix":"Time Complexity: O(nk)"
            ,"btn_merge":"Time Complexity: O(n log n)"
        }


        let ids_hrefs = {
        "btn_boggo":"boggo_sort.html",
        "btn_bubble":"bubble_sort.html",
        "btn_insertion":"insertion_sort.html",
        "btn_selection":"selection_sort.html",
        "btn_radix":"radix_sort.html",
        "btn_merge":"merge_sort.html"}
        
        let vis_folder = "Sorting Algos/"
        let info_folder = "Sorting Info/"

        let paragraph_info = document.getElementById("short_info")
        let example_time = document.getElementById("ex_time")
        let visualise_link = document.getElementById("visualise_link")
        let info_link = document.getElementById("info_link")
        let docs =[]

        
        for (let el of ids){
            let doc = document.getElementById(el)
            docs.push(doc)
        }

        for (let doc of docs){
            if (doc.id != current_btn){
                    doc.style.backgroundColor = "white"
                    doc.style.color = "black"
            }

            doc.onclick = function(){
                    let doc_id = doc.id

                    current_btn = doc_id
                    doc.style.backgroundColor = "black"
                    doc.style.color = ids_color[doc_id]
                    
                    paragraph_info.animate(glossary_update,glossary_timing)
                    paragraph_info.innerText = ids_p_txt[doc_id]

                    example_time.style.color = ids_color[doc_id]
                    example_time.innerText = ids_ex_txt[doc_id]

                    visualise_link.onclick =function(){
                        document.location.href = vis_folder+ ids_hrefs[doc_id]
                    } 
                    info_link.onclick = function(){
                        document.location.href = info_folder+ ids_hrefs[doc_id]
                    }

            }
        }

        

}

var anim_array = [5,2,1,0,4,3]
var animation_element = document.getElementById("title_animation")
animation_element.innerText = "["+anim_array+"]"

const change_animation = [
    {transform:"rotate(1deg)"},
    {transform:"rotate(-1deg)"}
]
const timing_change ={
    "iterations":1,
    "duration":300
}

function create_title_arr(){
    var arr = []
    var arr_l = 6
    for (let i=0;i<arr_l;i++){
        arr.push(Math.round(Math.random()*((arr_l*2)-1) ))
    }

    return arr
}

function title_animation(arr){
    var count = true

    for (let i =0;i<arr.length;i++){
        var current_item = arr[i]
        var next_item = -100

        if (i<arr.length){next_item = arr[i+1]} 

        if (current_item > next_item){
            arr[i] = next_item
            if (i<arr.length)
            {arr[i+1]=current_item}
            count = false 
        }
    }


    if (count){
        animation_element.style.color = "green"
        anim_array = create_title_arr()
    }else {
        animation_element.style.color = "white"
        animation_element.animate(change_animation,timing_change)
    }

    count = 0
    animation_element.innerText = "[ "+arr+" ]"
    
}



function looper(){
    title_animation( anim_array )
}

function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial(n - 1);

}
console.log( 1/(factorial(11)-13983816),"ss")

const glossary_update = [
    {color:"black"}
    ,{color:"white"}   
]

const sort_update = [
    {color:"scale(0)"}
    ,{transform:"scale(1)"}   
]

const glossary_timing = {
    "iterations":1,
    "duration":600
}

function glossary(){
    var ids = ["glos1","glos2","glos3"]
    var ids_dict = {
        "glos1":["sorting_algo","array","unsorted_array","sorted_array"]
        ,"glos2":["time_complex","big_data"]
        ,"glos3":["data_analysis","ordered_nature"]
    }
    var glossary_meanings = {
        "sorting_algo":"A sorting algorithm is a method for reorganizing a large number of items into a specific order, such as alphabetical, highest-to-lowest value or shortest-to-longest distance."
        ,"array":"An array is a series of memory locations – or 'boxes' – each of which holds a single item of data (a number)."
        ,"unsorted_array":"Unsorted is an array that has not been manipulated by a Sorting Algorithm "
        ,"sorted_array":"Sorted is an array that has been manipulated by a Sorting Algorithm and it's elements are ordered accordingly."
        ,"big_data":"Big data (in Data Analysis) refers to data sets that are too large or complex to be dealt with by traditional data-processing application software. "
        ,"time_complex":"The Time Complexity of an Algorithm is determined by a unique Mathematical equation calculating the amount of time needed for the computer to complete the given task."
        ,"ordered_nature":"For example we know that the last element of a sorted list 'm' is equal or greater to every other element (m >= j). Programmers can take advantage of those inspections to optimise their codes effieciency."
        ,"data_analysis":"Data Analysis is a very high in demand field that takes advantage of Big Data and uses the seamingly useless information to identify patterns, and then represent them."
    }   

    

    for (let id of ids){
        for (let meaning_id of ids_dict[id]){
            let meaning_document_el = document.getElementById(meaning_id)
            let meaning = glossary_meanings[meaning_id]

            let glossary_resposnible = document.getElementById(id)

            meaning_document_el.addEventListener("mouseover",function(){
                glossary_resposnible.style.fontSize = "22px"
                glossary_resposnible.innerText = "[ "+meaning+" ]"

                glossary_resposnible.animate(glossary_update,glossary_timing)
            })

            meaning_document_el.addEventListener("mouseout",function(){
                glossary_resposnible.style.fontSize = "45px"
                glossary_resposnible.innerText = "[ Glossary???? ]"

                glossary_resposnible.animate(glossary_update,glossary_timing)
            })
        }
    }


}

glossary()

loop_btns()
setInterval(loop_btns,10)
setInterval(looper,910)
