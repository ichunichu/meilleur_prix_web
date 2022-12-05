import {database} from "./appwrite";
import {ID} from "appwrite";


export function createProduct(title,description,price,currency){
    database.createDocument("638dc177b9f7dd8531e0","638e20dead07b9344007",ID.unique(),{"title":title,"desc":description,"price":price,"currency":currency}).then((res)=>{
        return res.$id;
    }).catch((error)=>{
        console.warn(error)
    })
}

export function readProduct(){

}