var productsContainer = [];

if (localStorage.getItem("ourProducts") != null) {
  productsContainer = JSON.parse(localStorage.getItem("ourProducts"));
  displayProducts();
}
////////////
// else{
//   productsContainer = [] ;
// }
//////////

var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productGategoryInput = document.getElementById("productGategory");
var productDescriptionInput = document.getElementById("productDescription");

// function addProduct() {
//   var addButton = document.getElementById("addButton");

//   var product = {
//     name: productNameInput.value,
//     price: productPriceInput.value,
//     gategory: productGategoryInput.value,
//     description: productDescriptionInput.value,
//   };

//   if (
//     productNameInput.value !== "" &&
//     productPriceInput.value !== "" &&
//     productGategoryInput.value !== "" &&
//     productDescriptionInput.value !== ""
//   ) {
//     productsContainer.push(product);

//     localStorage.setItem("ourProducts", JSON.stringify(productsContainer));

//     clearForm();

//     displayProducts();

//     addButton.disabled = true;
//   } else {
//     alert("Please fill in all inputs");
//   }
// }
/////////////////////////////////////////
function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productGategoryInput.value = "";
  productDescriptionInput.value = "";
}
////////////////////////////////////////
function displayProducts() {
  var cartoona = ``;
  for (var i = 0; i < productsContainer.length; i++) {
    cartoona +=
      `<tr class="border-b border-gray-800  whitespace-nowrap m-1 ">
   <td>` +
      [i] +
      `</td>
   <td>` +
      productsContainer[i].name +
      `</td>
   <td>` +
      productsContainer[i].price +
      `</td>
 <td>` +
      productsContainer[i].gategory +
      `</td>
 <td>` +
      productsContainer[i].description +
      `</td>
      <td><button class="hover:text-blue-600 hover:text-3 border rounded-lg font-medium text-blue-900 p-2" onclick="openUpdateModal(${i})">Update</button></td>
      <td><button  class="  border  rounded-lg  font-medium  text-red-900 p-2"onclick='deleteProducts(${i})'>delete</button></td>
      </tr>`
  }
  document.getElementById("tableBody").innerHTML = cartoona;
}

//////////////////////////////////////////
function deleteProducts(index) {
  productsContainer.splice(index, 1);

  localStorage.setItem("ourProducts", JSON.stringify(productsContainer));

  displayProducts();
}
//////////////////////////////////////
var updateModal = document.getElementById("updateModal");
var updateProductIndex;
//////////////////////////////
function openUpdateModal(index) {
  updateProductIndex = index;
  var product = productsContainer[index];
  document.getElementById("updateProductName").value = product.name;
  document.getElementById("updateProductPrice").value = product.price;
  document.getElementById("updateProductCategory").value = product.gategory;
  document.getElementById("updateProductDescription").value = product.description;
  updateModal.classList.remove("hidden");
}
////////////////////////////
function updateProductOnSubmit() {
  var updatedProduct = {
    name: document.getElementById("updateProductName").value,
    price: document.getElementById("updateProductPrice").value,
    gategory: document.getElementById("updateProductCategory").value,
    description: document.getElementById("updateProductDescription").value,
  };
  productsContainer[updateProductIndex] = updatedProduct;
  localStorage.setItem("ourProducts", JSON.stringify(productsContainer));
  displayProducts();
  closeUpdateModal();
}
////////////////////////////
function closeUpdateModal() {
  document.getElementById("updateProductName").value = "";
  document.getElementById("updateProductPrice").value = "";
  document.getElementById("updateProductCategory").value = "";
  document.getElementById("updateProductDescription").value = "";
  updateModal.classList.add("hidden");
}
////////////////////////////////////////
// function searchProducts(term) {
//   for (let i = 0; i < productsContainer.length; i++) {
//     if (
//       productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) ==
//       true
//     ) {
//       console.log(i);
//     }
//   }
// }

// searchProducts("nokia");

////////////////////////////////////////////////////////

// // /////////////////////////////////////////
 var isUpdating = false;

function addProduct() {
  var addButton = document.getElementById("addButton");

  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    gategory: productGategoryInput.value,
    description: productDescriptionInput.value,
  };

  if (
    productNameInput.value !== "" &&
    productPriceInput.value !== "" &&
    productGategoryInput.value !== "" &&
    productDescriptionInput.value !== ""
  ) {

    if (isUpdating) {
      // Update existing product
      var updatedIndex = addButton.dataset.index;
      productsContainer[updatedIndex] = product;
      addButton.innerText = "Add Product";
      isUpdating = false;
    } else {
      // Add new product
      productsContainer.push(product);
    }

    localStorage.setItem("ourProducts", JSON.stringify(productsContainer));

    clearForm();

    displayProducts();
  } else {
    alert("Please fill in all inputs");
  }
}
/////////////////////////////////////////








