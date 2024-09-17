        let image1 = document.querySelector("#img1");
        let image2 = document.querySelector("#img2");
        let swaper = document.querySelector("#swap");
        let code = document.querySelector("#code");
        let container = document.querySelector(".container");

        swaper.addEventListener('click', () =>{
            if(image1.src.match('images/fruits.jpg') && image2.src.match('images/head.jpg')){
                image1.src = 'images/head.jpg';
                image2.src = 'images/fruits.jpg';
            }else{
                image1.src = 'images/fruits.jpg';
                image2.src = 'images/head.jpg';
            }
            // let num = 135;
            // let hexCode = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
            let hexCode = '#' + Math.floor(Math.random()*16588745).toString(16).padStart(6,'0');
            code.innerHTML = hexCode;
            container.style.backgroundColor = hexCode;
        })