
    
    
    // task 2: the fetch profile exercise
    
        
    const githuburl = 'https://api.github.com/users/yossef-vashdi';
    fetch(githuburl)
        .then(response => response.json())
                .then(data => { 
                
                document.getElementById('imga').src = data.avatar_url;  
                document.getElementById('hh').innerHTML = data.name;
                        
                })

    // css task: Animation exercise

    let limitAnimation = 0;
    document.getElementById("card").addEventListener("mouseover", cardFun);
    document.getElementById("card").addEventListener("mouseout", cardnoFun);
    

    function cardFun(){
        document.getElementsByTagName("body")[0].classList.add("funAnimation");
    }
    function cardnoFun(){
        if (limitAnimation < 50){
            limitAnimation++;
            document.getElementsByTagName("body")[0].classList.remove("funAnimation");
        }
    }