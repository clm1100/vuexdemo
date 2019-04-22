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
        if(data[i].id==id){
            index = i;
            console.log(data[i])
            break;
        }
    }
    data.splice(index,1);
    this.saveData(data);
}


Local.prototype.addDataNum = function(id){
    var data = this.getData();
    var index = null;
    for(var i=0;i<data.length;i++){
        if(data[i].id==id){
            index = i;
            console.log(data[i])
            break;
        }
    }
    data[index].num=Number(data[index].num)+1
    this.saveData(data);
}

Local.prototype.subDataNum = function(id){
    var data = this.getData();
    var index = null;
    for(var i=0;i<data.length;i++){
        if(data[i].id==id){
            index = i;
            console.log(data[i])
            break;
        }
    }
    data[index].num=Number(data[index].num)-1
    if(data[index].num<=1){
        data[index].num=1
    }
    this.saveData(data);
}


Local.prototype.initData = function(){
var arr = [
    {
        id:"133243243243242",
        name:"【5本26.8元】经典儿童文学彩图青少版八十天环游地球中学生语文教学大纲",
        src:"./upload/p1.jpg",
        price:"12.60",
        num:"1"
    },
    {
        id:"4343242343242",
        name:"【2000张贴纸】贴纸书 3-6岁 贴画儿童 贴画书全套12册 贴画 贴纸儿童 汽",
        src:"./upload/p2.jpg",
        price:"24.80",
        num:"1"
    },
    {
        id:"3434243242342342342342342",
        name:"唐诗三百首+成语故事全2册 一年级课外书 精装注音儿童版 小学生二三年级课外阅读书籍",
        src:"./upload/p3.jpg",
        price:"29.80",
        num:"1"
    }
]

var local = new Local();
local.saveData(arr);
}



