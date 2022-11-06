import { countryList } from "./countries.js";

countryList.map((item)=>{
    let Details=`My country name is ${item.name}`
    console.log(Details)
})