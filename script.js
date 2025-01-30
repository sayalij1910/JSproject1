 const products = [
    { name: "Chair", price: 800, stock: 5, category: "Furniture" },
    { name: "Sofa", price: 1800, stock: 10, category: "Furniture" },
    { name: "Table", price:150, stock: 3, category: "Furniture" },
    { name: "Bed", price: 6000, stock: 3, category: "Furniture" }
];

document.getElementById("showProd").addEventListener("click", () => {
    const tableBody = document.getElementById("prodTable");
    tableBody.innerHTML = "";
    
    products.forEach(product => {
        const row = `<tr>
                        <td>${product.name}</td>
                        <td>₹${product.price}</td>
                        <td>${product.stock}</td>
                        <td>${product.category}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
    updateStatistics();
});
function updateStatistics() {
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
  const avgPrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
  const highestProduct = products.reduce((max, product) => (product.price > max.price ? product : max), products[0]);
  
  document.getElementById("totalStock").innerText = totalStock;
  document.getElementById("avgPrice").innerText = `₹${avgPrice.toFixed(2)}`;
  document.getElementById("highestPrice").innerText = `${highestProduct.name} (${highestProduct.category}) - ₹${highestProduct.price}`;
}
function myFunction() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  

document.getElementById("addProductForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("productName").value.trim();
    const price = parseFloat(document.getElementById("productPrice").value);
    const stock = parseInt(document.getElementById("productStock").value);
    const category = document.getElementById("productCategory").value;

    if (name && price > 0 && stock > 0 && category) {
        const newProduct = { name, price, stock, category };
        products.push(newProduct);  // Add product to array
        console.log("Product Added:", newProduct);  // Log for testing
        document.getElementById("addProductForm").reset();  // Clear form inputs
        alert("Product added successfully!");
    } else {
        alert("Please enter valid product details.");
    }
});