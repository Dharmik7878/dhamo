function loadScript(src,callback){
    var script = document.createElement("script")
    script.src = src;
    script.onload = function(){
        console.log("loaded script with SRC: " + src)
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loading with src: " + src)
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script);
}
function hallo(error, src) {
    // alert("Jay Shree Ram" + src)
    if(error){
        console.log(error)
        return
    }
} 
function hanuman(error, src){
    // alert("hanuman" +src)
    if(error){
        console.log(error)
        return
    }
}
loadScript("http://cdn.jssdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", hanuman)