const http=new easyHttp2;
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err))
const data={
    name:"master hermit",
    username:"masterHermit",
    email:"master@gmail.com"
}
// http.post("https://jsonplaceholder.typicode.com/users",data)
// .then(data=> console.log(data))
// .catch(err=>console.log(err))

http.put("https://jsonplaceholder.typicode.com/users/1",data)
.then(data=>console.log(data))
.catch(err=>console.log(err))

http.delete("https://jsonplaceholder.typicode.com/users/3")
.then(data=>console.log(data))
.catch(err=>console.log(err))