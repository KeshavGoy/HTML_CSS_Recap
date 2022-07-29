function Fun1(name){
    console.log(name);
}
function Fun2(name, fun){
    fun(name);
}
Fun2("Keshav",Fun1);