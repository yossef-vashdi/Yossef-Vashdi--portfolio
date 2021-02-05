

  
        
        // task 4: Contact me exercise

       
    const form1 = [
            {full:"false", firstname: ""},
            {full:"false",  email:"",},
            {full:"false", phone:""},
            {full:"false",  msg:"" }
        ];
        
          
        function checkinput(){
        
        if (document.getElementById("fname").value.trim()=="") form1[0].full = false;
          else    form1[0].full = true;
            
        if (document.getElementById("email").value.trim()=="") form1[1].full = false;
             else    form1[1].full = true;
     
         if (document.getElementById("phone").value.trim()=="") form1[2].full = false;    
        else     form1[2].full = true;
        
        if (document.getElementById("tarea").value.trim()=="") form1[3].full = false;  
        else     form1[3].full = true;
        
        document.getElementById("myBtn").disabled = true;
        
                formrdy()
        

                if (document.getElementById("myBtn").disabled == false){
                  document.getElementById("myBtn").classList.add("enabled");
                 
                }
                 else {document.getElementById("myBtn").classList.remove("enabled");
                 }
        }



        function formrdy(){
            let vi=0;
            let m =0;
            for ( m = 0; m < form1.length; m++){
                
                if (form1[m].full == true )  vi++
               }     
            if (vi>=4) document.getElementById("myBtn").disabled = false;
            
  
        }
        
        function submitf(){
          let printcontact = `First name: ${document.getElementById("fname").value}, Last Name: ${document.getElementById("lname").value}, Email: ${document.getElementById("email").value}, Comment: ${document.getElementById("tarea").value}, phone Number: ${document.getElementById("phone").value}.`
        console.log(printcontact);
        document.getElementById("myform").reset();
        document.getElementById("myBtn").disabled = true;
        document.getElementById("myBtn").classList.remove("enabled");
        }
    
        document.getElementById("myform").addEventListener("submit", (e) => {
            e.preventDefault();
            submitf();} ) 



            // let example = document.querySelectorAll("input[required]");
            // console.log(example.length);

            // let example = document.querySelectorAll("input[required]");
            // console.log(example.length);


        






         