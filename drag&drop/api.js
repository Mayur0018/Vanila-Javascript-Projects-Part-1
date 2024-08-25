const URL = "http://cat-fact.herokuapp.com/";

const getInfo = async ()=>{
    console.log("fatcing Your Api");
    try{
        let response = await fetch(URL);
        let data =await response.json();
        console.log(data[0].text);
        return;
    }catch(err){
        console.log(err);
    }
}
