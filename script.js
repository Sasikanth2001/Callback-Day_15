var h1 = document.createElement('h1');
document.body.append(h1);

setTimeout(()=>{
    document.querySelector('h1').innerText = `${10}`;
    setTimeout(()=>{
        document.querySelector('h1').innerText = `${9}`;
        setTimeout(()=>{
            document.querySelector('h1').innerText = `${8}`;
            setTimeout(()=>{
                document.querySelector('h1').innerText = `${7}`;
                setTimeout(()=>{
                    document.querySelector('h1').innerText = `${6}`;
                    setTimeout(()=>{
                        document.querySelector('h1').innerText = `${5}`;
                        setTimeout(()=>{
                            document.querySelector('h1').innerText = `${4}`;
                            setTimeout(()=>{
                                document.querySelector('h1').innerText = `${3}`;
                                setTimeout(()=>{
                                    document.querySelector('h1').innerText = `${2}`;
                                    setTimeout(()=>{
                                        document.querySelector('h1').innerText = `${1}`;
                                        setTimeout(()=>{
                                            document.querySelector('h1').innerText = `${0}`;
                                        setTimeout(()=>{    
                                            document.querySelector('h1').innerText = `${"HAPPY NEW YEAR"}`;
                                            document.querySelector('h1').classList.add('happy');

                                        },1000);
                                
                                },1000);
                                
                                },1000);
                            
                            },1000);
                        
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
},1000);

h1.style.textAlign = "center";
h1.style.padding = "250px"; 
h1.style.color="white";
h1.style.fontSize="60px";
document.body.style.backgroundColor = "gray";