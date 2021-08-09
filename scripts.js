const div2 = document.querySelector('#outputDiv');
const btn = document.querySelector('#btn');

 btn.addEventListener('click', function() {

    const bish = document.querySelector('#bish').value;
    const bosh = document.querySelector('#bosh').value;
    const looptal = document.querySelector('#looptal').value;
    
    if ((bish === "") || (bosh === "") || (looptal === ""))  {
        alert("Alla fält måste fyllas i");
    }
    else{

        if ((bish < 1) || (bosh < 1) || (looptal < 1)) {            
            alert("Alla värden måste vara större än noll");
        }
        else{    
            for(let i = 1 ; i <= looptal; i++)
            {       
                if(((i % bish)===0) && ((i % bosh)===0 ))
                {                 
                    div2.innerText += 'bish bosh,\u00A0 ';  
                    continue;
                }
                if(( i % bish )===0)
                {           
                    div2.innerText += 'bish,\u00A0 '; 
                    continue;    
                }
                if((i % bosh)===0 )
                {          
                    div2.innerText += 'bosh,\u00A0 ';
                    continue;
                }    
                
                div2.innerText += `${i}, \u00A0`;
            }
        }
    }  

});

