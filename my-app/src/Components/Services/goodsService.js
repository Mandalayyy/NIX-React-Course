const baseGoodsURL = 'http://localhost:8080';
const commonHeaders = {
    'Content-Type': 'application/json'
}

export const requestGoods = () => {
    return perfomRequest({path: 'goods', method: 'GET'})
}

export const perfomRequest = async ({path, method = 'GET'}) => {
    try{
        console.log(path);
    const response = await fetch([baseGoodsURL, path].join('/'),{
        method,
        headers: commonHeaders,
    })
    
    const responseJson = await response.json();
    return responseJson;
}catch(error){
    console.log(error)
    return Error('Something Went Wrong');
}
  
}
