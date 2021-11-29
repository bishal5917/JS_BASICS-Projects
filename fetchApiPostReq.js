console.log("Lets get started")

function postreq(){
    data='{"name":"bisshalPoudel","salary":"$9000","age":"23"}'
    url="http://dummy.restapiexample.com/api/v1/create";
    params={
        method:"post",
        body:data
    }
    fetch(url,params).then(response=>response.json())
    .then(data=>console.log(data))
}

postreq();