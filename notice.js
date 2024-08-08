    function insertNotice(){
 				const ele = document.getElementById("main-content");
    		var notice = "<p>Our website is currently undergoing maintenance. Please call or email if you have questions about a product.</p>";
        
        
        const newPara = document.createElement("p");
        const noticeText = document.createTextNode("Our website is currently undergoing maintenance. Please call or email if you have questions about a product.");
        newPara.appendChild(noticeText);
        newPara.style.textAlign = "center";
        newPara.style.padding = "1rem";
        
        
        document.body.insertBefore(newPara, ele);
    }
    insertNotice();