 let HORIZONTAL_TARGET;
            let VERTICAL_TARGET;
​
            let horizontalBar = document.getElementById("horizontal_bar");
            let horizontalMenus = document.querySelectorAll("nav:first-child a");
​
            let verticalBar = document.getElementById("vertical_bar");
            let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");
​
            window.onload = ()=>{
                document.getElementById("horizontal_default").click();
                document.getElementById("vertical_default").click();
            }
​
            window.onresize = function () {
                HORIZONTAL_TARGET.click();
                VERTICAL_TARGET.click();
            };
​
            horizontalMenus.forEach(
                (item) => item.addEventListener("click", (e) => horizontalIndicator(e))
            );
​
            verticalMenus.forEach(
                (item) => item.addEventListener("click", (e) => verticalIndicator(e))
            );
​
            function horizontalIndicator(e) {
                horizontalBar.style.left = e.target.offsetLeft + "px";
                horizontalBar.style.width = e.target.offsetWidth + "px";
                horizontalBar.style.top = e.target.offsetTop + e.target.offsetHeight + "px";
                HORIZONTAL_TARGET = e.target;       
            };
​
            function verticalIndicator(e) {
                verticalBar.style.left = e.target.offsetLeft + "px";
                verticalBar.style.width = e.target.offsetWidth + "px";
                verticalBar.style.top = e.target.offsetTop + e.target.offsetHeight + "px";
                VERTICAL_TARGET = e.target; 
            }