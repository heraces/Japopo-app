window.onload = start()



function fill_it(){

    for(let i = 0; i<len(window.esp);i++){
        table.append(i)
    }
            
    for(let s=0; s<window.esp.length; i++){
        console.log(window.esp[s])
    }
}
function start(){
    table = document.getElementById("hiragana_table").getElementsByTagName("tbody")[0]
    Papa.parse(("../../kanas/hiragana.csv"),{download:true, headers: false, 
        delimiter: ',',skipEmptyLines: true, complete: function(results){
            for(let i = 0; i<results.data.length;i++){
                let x = document.createElement("tr")
                for(let s = 0; s<results.data[i].length;s++){
                    x.append(results.data[i][s])
                }
                table.append(x)
            }
            hiragana = results.data}
        }, )
    Papa.parse(("../../kanas/esp-kana.csv"),{download:true, headers: false, 
        delimiter: ',',skipEmptyLines: true, complete: function(results){
            window.esp = results.data}
        }, )

}



