window.onload = fill_table()



function fill_it(){

    table = document.getElementById("hiragana_table").getElementsByTagName("tbody")[0]
    for(let i = 0; i<len(window.esp);i++){
        table.append(i)
    }
}
function fill_table(){
    Papa.parse(("../kanas/hiragana.csv"),{download:true, headers: false, 
        delimiter: ',',skipEmptyLines: true, errors: function(err){
            console.log(err)
            return false
        },
        complete: function(results, error){
        console.log(error)
        console.log(results.data)
        window.hiragana = results.data} })
        
}



