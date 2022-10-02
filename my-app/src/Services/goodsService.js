const baseGoodsURL = "http://localhost:8080";
const commonHeaders = {
  "Content-Type": "application/json"
};

export const requestGoods = () => {
  return perfomRequest({path: "goods", method: "GET"});
};

export const perfomRequest = async ({path, method = "GET", body}) => {
  try{
    console.log(path);
    const bodyString = body ? JSON.stringify(body) : undefined;
    const response = await fetch([baseGoodsURL, path].join("/"),{
      method,
      headers: commonHeaders,
      body: bodyString,
    });
    if(response.ok){
      const responseJson = await response.json();
      console.log("response:", responseJson);
      return {success: true,responseJson};
    }
    return {success: false ,error : ("Something Went Wrong")};
    
  }catch(error){
    console.log(error);
    return { success: false, error: ("Something Went Wrong")};
  }
  
};


export const createItem = (item) => {
  return perfomRequest({path: "goods", method: "POST", body: item}); 
};

export const removeItem = (itemId) => {
  return perfomRequest({path: "goods/" + itemId, method: "DELETE"});
};

export const editItem = (item) => {
  return perfomRequest({path: "goods/"+ item.id, method: "PUT", body: item });
};