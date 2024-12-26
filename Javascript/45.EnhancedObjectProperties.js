// Enhanced Object Properties

const calc = (brand, price) => ({
    brand : brand,
    price : price
})

const dellX = calc("dell", 30)
console.log(dellX)

// -----------------

// reduce redundency
const calc2 = (brand, price) => ({
    brand,
    price
})

const dellX2 = calc2("dell", 30)
console.log(dellX2)
// Same o/p

// ---------------------

const brandProp = "BNAME"
const mycalc = (brand, price) => ({
    [brandProp.toLowerCase()] : brand,
    price,
    get30Discount : function() {
        return this.price - (this.price * .3)
    },
    get50Discount(){
        return this.price - (this.price * .5)
    }
})

const sonyX = mycalc("sony", 200)
console.log(sonyX)
console.log(sonyX.get30Discount())
console.log(sonyX.get50Discount())
