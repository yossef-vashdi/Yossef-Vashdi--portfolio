 
   // task 5: Footer exercise !
        
        let footerExe = "This page was build using: " ;
        const  langCode = [ "HTML", "CSS", "JavaScript"];

        for (let l=0; l<langCode.length ; l++){
            
            footerExe += langCode[l];
            if ( l< langCode.length-2 ){
                footerExe += " ,"
            }
            else { if ( langCode.length-2==l){
                footerExe += " and "}
                else 
                  footerExe +=".";
            };
        }
        
        const changing = document.getElementById('pfooter')
        changing.innerHTML = footerExe;
       

       
    





                




      


     
