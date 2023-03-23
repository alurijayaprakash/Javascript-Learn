// Arrow Functions

const getBrand = brand => (
    {
        brand : brand,
        website : `www.${brand}.com`
    }
)

console.log(getBrand("Nike"))
console.log(JSON.stringify(getBrand("Adidas"),0 , 4))

// ------- Example-2

const calculate = (a, b, sign) => {
    switch(sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            // throw error
    }
}

console.log(calculate(12,2,'*'))