const addTodb =(id)=>{
    const products = getItems()
    const quantity = products[id]
    if(!quantity){
        products[id] =1
    }
    else{
        let newQuantity = quantity+1
        products[id] = newQuantity
    }
    localStorage.setItem("shopping-cart", JSON.stringify(products))
}
const getItems=()=>{
    const items = JSON.parse(localStorage.getItem("shopping-cart")) || {}
    return items;
}
export {addTodb,getItems}