function ajax(config){
    var xhr = createXHR();
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4){
            if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                var data = xhr.responseText;
                config.success&&config.success(data);
            }else {
                config.fail&&config.fail(xhr.status);
            }
        }else {
            config.fail&&config.fail(xhr.readyState);
        }
    }
    if(config.method.toLowerCase()=="get"){
        xhr.open('get',config.url+'?'+series(config.data),true);
        xhr.send();
    }else if(config.method.toLowerCase()=='post'){
        xhr.open('post',config.url,true);
        xhr.setRequestHeader('Content-type','application/json');
        xhr.send(JSON.stringify(config.data));
    }

    function series(obj){
        var res = '';
        for(var key in obj){
            res+=key+'='+obj[key]+'&';
        }
        res = res.substr(0,res.length-1);
        return res;
    }
    function createXHR(){
        if(typeof XMLHttpRequest!="undefined"){
            return new XMLHttpRequest();
        }else if(typeof ActiveXObject!="undefined"){
            if(typeof arguments.callee.activeXString!="string"){
                // 兼容到IE7之前的版本
                var versions=['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
                for(var i=0,len=versions.length;i<len;i++) {
                    try{
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString=versions[i];
                        break;
                    }catch(ex){
                        throw new Error();
                    }
                }
            }
            // 兼容IE
            return new ActiveXObject(arguments.callee.activeXString);
        }else {
            throw new Error("No XHR object available");
        }
    }
}
module.exports = ajax;