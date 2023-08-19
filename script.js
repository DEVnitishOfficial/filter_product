

/*

10. Filter by Category.

Write a function that 
takes an array of products and
returns a function
that filters the array by a given product category.
The function must filter an eCommerce products array by a specific category. The closure filters products using the filter() method. Finally, it returns a new array containing only the products with the same category as the input.


*/


const output = document.getElementById('opScreen');
const Button = document.getElementById('btn');

Button.addEventListener('click',()=>{
    const selectedProduct = document.getElementById('productSelection').value

    function filterProducts(ProductArr){
        return function(category){
            return ProductArr.filter(product => product.category === category)
        }
    }
    
    const clothingProduct = filterProducts(ProductArr)
    if(selectedProduct !== 'Select Category'){
        const ecomProduct = clothingProduct(selectedProduct)
        const productInfo = ecomProduct.map(product => `Name: ${product.name}, Category: ${product.category}`).join('\n');
    output.innerText = productInfo;
    }else{
        alert('please select following category !!!!!')
    }
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ADDING PRODUCT TO THE ARRAY
const addProductButton = document.getElementById('btn2');
const productNameInput = document.getElementById('productName');
const productCategoryInput = document.getElementById('productCategory');
const productSelection = document.getElementById('productSelection');


addProductButton.addEventListener('click', () => {
    const productName = productNameInput.value;
    const productCategory = productCategoryInput.value;

    if (productName && productCategory !== '') {
        ProductArr.push({ name: productName, category: productCategory });
        console.log("added product ",ProductArr);
        
        // Clear input fields
        productNameInput.value = '';
        productCategoryInput.value = '';

        updateCategoryOptions();
        alert(`Congrats you have added a new products 🎉🎉🎉🎉 !!!`)
    }else{
        alert('Please entre Product and Category name !!!!!')
    }
});

function updateCategoryOptions() {
    const categories = [...new Set(ProductArr.map(product => product.category))];

    productSelection.innerHTML = `<option value="Select Category">Select Category</option>`;
    categories.forEach(category => {
        productSelection.innerHTML += `<option value="${category}">${category}</option>`;
    });
}

let  ProductArr = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
  ];






// let  ProductArr = [
//     { name: "Shirt", category: "Clothing" },
//     { name: "Pants", category: "Clothing" },
//     { name: "Hat", category: "Accessories" },
//     { name: "Sunglasses", category: "Accessories" },
//   ];
// function filterProducts(ProductArr){
//     return function(category){
//         return ProductArr.filter(product => product.category === category)
//     }
// }

// const clothingProduct = filterProducts(ProductArr)
// const ecomProduct = clothingProduct("Accessories")
// console.log(ecomProduct);
