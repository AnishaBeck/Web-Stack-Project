console.log("Page is Ready")
var take_input=document.getElementById("createInputKey")
var take_input_key=document.getElementById("des")
var save_value=document.getElementById("save_value")
var save_s=document.getElementById("save_s")

save_s.onclick=function(){
    sessionStorage.setItem(take_input.value,take_input_key.value);
}

save_value.onclick=function(){
    localStorage.setItem(take_input.value,take_input_key.value);
}

function show()
        {
            var value=document.getElementById("demo").value;
            if(value!="Select Color")
            {
                document.bgcolor=value;
                document.cookie="color="+value+";expires=Fri,2 Feb 2022 01:00:00 UTC;";
            }
        }
        window.onload=function()
        {
            if(document.cookie.length!=0)
            {
                var a=document.cookie.split("=");
                document.getElementById("demo").value=a[1];
                document.bgColor=a[1];
            }
        }