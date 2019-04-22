function Local(){
}
Local.prototype.getData  = function(){
    var data = localStorage.getItem("car");
    if(data !==null){
        return JSON.parse(data);
    }else{
        return []
    }
};
Local.prototype.saveData = function(data){
    localStorage.setItem("car",JSON.stringify(data))
}
Local.prototype.delDate = function(id){
    var data = this.getData();
    var index = null;
    for(var i=0;i<data.length;i++){
        if(data.id==id){
            index = id;
            break;
        }
    }
    data.splice(index,1);
    this.saveData(data);
}
