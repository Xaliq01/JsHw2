

var topS = 0;  
var leftS = 0;  

document.onkeydown = function(e) {
    if (e.keyCode < 37 || e.keyCode > 40) {
        Swal.fire({
            title: "Используй только стрелки",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
    } else {
        console.log(e.key);
        if (e.key === 'ArrowDown') {
            topS += 10;  
            document.getElementById('Img2').style.top = topS + 'px';  
            console.log(topS);  
        }
        if (e.key === 'ArrowUp') {
            topS -= 10;  
            document.getElementById('Img2').style.top = topS + 'px';  
            console.log(topS);  
        }
        if (e.key === 'ArrowRight') {
            leftS += 10;  
            document.getElementById('Img2').style.left = leftS + 'px';  
            console.log(topS);  
        }
        if (e.key === 'ArrowLeft') {
            leftS -= 10;  
            document.getElementById('Img2').style.left = leftS + 'px';  
            console.log(topS);  
        }
    }
};
//  ArrowLeft
//  ArrowUp
//  ArrowDown
//  ArrowRight

