        // task 3:  Google map exercise


        const
        telAviv = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90312.23105815738!2d34.77089504329767!3d32.08090137057802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1609186734546!5m2!1sen!2sil",
        ramatGan = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54094.49360114383!2d34.791283933111885!3d32.071795134645015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00bf3ee717526f!2sRamat%20Gan!5e0!3m2!1sen!2sil!4v1609186612298!5m2!1sen!2sil",
        haifa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107319.13642224055!2d34.94673584052986!3d32.799602907092684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba4c750de845%3A0xc35d23982a81529a!2sHaifa!5e0!3m2!1sen!2sil!4v1609186306552!5m2!1sen!2sil";
        const srcMap = [telAviv, ramatGan, haifa];
            
      

        let map = 0;
      
        function next(){
            map++;
            document.getElementById('myImg').src = srcMap[map];
            checkButtons()}

        
        function previous(){
             map--;
             document.getElementById('myImg').src = srcMap[map];    
             checkButtons()}

        
        function checkButtons(){
                    switch(map) {
            case 0:
                document.getElementById("previous").style.visibility = "hidden";
                break;
            case 1:
                document.getElementById("previous").style.visibility =  "visible";
                document.getElementById("next").style.visibility = "visible";
                break;
            case 2:
                document.getElementById("next").style.visibility = "hidden";
                break;
            default:
                break;
            }
        }   







           