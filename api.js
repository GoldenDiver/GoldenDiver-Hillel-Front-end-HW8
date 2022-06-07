    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            for (product of data.products) {
                console.log(product.title);
            }
        })

        module.exports = {
            
        }
