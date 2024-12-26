// Default values to Functions

const getBrand = (brand = 'logitech') => (
    {
        brand : brand,
        website : `www.${brand}.com`
    }
)

console.log(getBrand("Nike"))
console.log(JSON.stringify(getBrand("Adidas"),0 , 4))

console.log(getBrand())
console.log(JSON.stringify(getBrand(),0 , 4))