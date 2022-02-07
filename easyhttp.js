function easyHttp() {
  this.http = new XMLHttpRequest();
}

easyHttp.prototype.getHttp = function (url, callback) {
  this.http.open("GET", url, true);

  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback(`error.. ${this.http.status}`);
    }
  };
  this.http.send();
};
easyHttp.prototype.postHttp = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("content-type", "application/json");
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

easyHttp.prototype.putHttp=function(url,data,callback){
    this.http.open("PUT",url,true);
    this.http.setRequestHeader("content-type","application/json");
    this.http.onload=() =>{
        callback(null,this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

easyHttp.prototype.deleteHttp=function(url,callback){
    this.http.open("DELETE",url,true);
    this.http.onload=() =>{
        if(this.http.status===200){
            callback(null,"successfully deleted");
        }
        else{
            callback(`error ${this.http.statusText}`);
        }

    }
    this.http.send();
}
