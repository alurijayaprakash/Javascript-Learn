// Functions

const getBrand = function (brand){
    console.log(brand)
    return {
        brand : brand,
        website : `www.${brand}.com`
    }
}

console.log(getBrand("Nike"))
console.log("_____")
console.log(JSON.stringify(getBrand("Adidas"),0 , 4))