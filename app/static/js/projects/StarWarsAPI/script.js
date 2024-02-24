const dict = {};


$(document).ready(function() {
    console.log("jQuery Ready");
    display();
    storeDict();

    $(document).on("click","#randomize",function(){
        let id = 1;
        do{
        id = Math.floor(Math.random()*(88-1)+1)
        }while(id==17);
        console.log(id);
        clearScreen();
        display(id);
    })

    $(document).on("keyup","#searchBox",function(){
        let search = $("#searchBox").val().toLowerCase();
        console.log(search);
        let index = [];
        index = searchResult(search);
        if(index.length == 0){
            $(".characters").empty().html('<h1 style="text-align: center; color: black; margin-top: 40vh;">No Characters Found</h1>');
        } 
        else{
            clearScreen();
            for(let id of index){
                display(id);
            }
        }
    })

    $(document).on("submit", "form", function(event) {
        event.preventDefault();
        var search = $("#searchBox").val().toLowerCase();
        console.log(search);
        let index = [];
        index = searchResult(search);
        if(index.length == 0){
            $(".characters").empty().html('<h1 style="text-align: center; color: black; margin-top: 40vh;">No Characters Found</h1>');
        } 
        else{
            clearScreen();
            for(let id of index){
                display(id);
            }
        }
    
        
    });

})

function searchResult(search){
    let id = [];
    for(let name in dict){
        if(name.includes(search)){
            id.push(dict[name]);
        }
    }

    return id;
}

function storeDict(){
    for(let i=1;i<=88; i++){
        if(i===17) continue;
        $.get(`https://akabab.github.io/starwars-api/api/id/${i}.json`)
        .done(function(data){
            dict[data["name"].toLowerCase()] = i;
        })
        .fail(function(){
            console.log("id no: ", i," failed");
        })
    
    }

}

function clearScreen(){
    $(".characters").empty();
}

function display(id=1){
    $.get(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
    .done(function(data){
        let info = "";
        for(let key in data){
            if(key!="name"&&key!="image"&&key!="wiki"&&key!="id"){
                if(data[key]=="") continue;
                info += `<p class="card-text" style="text-transform:capitalize">${key} : ${data[key]}</p>`
            }
        }

        let card = `
        <div class="card mb-3 border border-2 m-auto mt-5 w-50" style="align-self: center;" data-bs-theme="dark">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${data["image"]}" title="${data["name"]}" style="text-align: center;" class="text-center img-fluid rounded-start" alt="Img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title mb-3" style="text-decoration: underline; text-underline-offset: 5px; font-size: 1.7rem;">${data["name"]}</h5>
                    <div class="info">
                        ${info}
                    </div>
                    <p class="card-text mt-3"><small class="text-body-secondary">Source: <a target="_blank" href="${data["wiki"]}">${data["wiki"]}</a> </small></p>
                </div>
                </div>
            </div>
        </div>        

        `
        
        $(".characters").append(card);
    })
    .fail(function(){
        $(".characters").empty().html('<h1 style="text-align: center; color: black; margin-top: 40vh;">No Characters Found</h1>');
    })
}