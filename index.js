const http=new easyHttp();
// it's like displaying or getting the object
http.getHttp("https://jsonplaceholder.typicode.com/posts/1",function(err,response){
  if(err){
    console.log(err);
  }else{
    console.log(response);
  }
})
const data={title:"one",body:"one's body"}

//it's like adding a new object
http.postHttp("https://jsonplaceholder.typicode.com/posts",data,function(err,response){
  console.log(response);
})

//it's like changing a object
http.putHttp("https://jsonplaceholder.typicode.com/posts/1",data,function(err,response){
  console.log(response);
})

//deleting object
http.deleteHttp("https://jsonplaceholder.typicode.com/posts/1",function(err,response){
  if(err){
    console.log(err);
  }else{
    console.log(response);
  }
})