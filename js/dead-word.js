//随机获取json文件中的一条数据
function getDeadWords(){
    $.getJSON("/dead-words.json",function(data){
        var index = Math.floor(Math.random()*(data.length));
        console.log(index);
        $("#deadwords").html("&nbsp; &nbsp; " + data[index].Words); 
        $("#deadman").html("—— " + data[index].Man);
        $("#deadwordsorigin").html("&nbsp; &nbsp; " + data[index].Wordsorigin);
        if(data[index].Wordsorigin==""){
            $("#deadwordsorigin").hide();
        }
    })  
}
getDeadWords();
