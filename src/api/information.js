import service from "@/unilt/requit"

export function getUser(data){
    return service.request({
        url:'/getCode/',
        method:'post',
        data
    })

}
