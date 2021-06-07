import request from "../ajax"

const actions = {
    getlist(context){
        return request.get("/biz/queryBigCategory").then(function(res){
            console.log(res.data);
        })
    }
}
export default actions;