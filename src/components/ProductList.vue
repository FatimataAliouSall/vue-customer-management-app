<template>
  <div class="container my-4">
    <h1 class="mb-4">List of Products</h1>
    <div class="text-end mb-3 mx-3">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">Add New Product</button>
    </div>

    <div class="table-responsive mx-3">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Barcode</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.product_name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.barcode }}</td>
            <td>{{ product.status }}</td>
            <td>
              <button @click="showProductDetails(product)" class="btn btn-info btn-sm me-2" data-bs-toggle="modal" data-bs-target="#viewProductModal">
                <i class="fas fa-eye"></i>
              </button>

              <button @click="editProduct(product)" class="btn btn-warning btn-sm me-2" data-bs-toggle="modal" data-bs-target="#editProductModal">
                <i class="fas fa-edit"></i>
              </button>

              <button @click="setProductToDelete(product)" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteProductModal">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- View Product Modal -->
<div class="modal fade" id="viewProductModal" tabindex="-1" aria-labelledby="viewProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="viewProductModalLabel">Product Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="classe">
          <div class="mb-3">
            <label for="viewProductName" class="form-label">Product Name</label>
            <input type="text" v-model="selectedProduct.product_name" class="form-control" disabled>
          </div>
          <div class="mb-3">
            <label for="viewPrice" class="form-label">Price</label>
            <input type="number" v-model="selectedProduct.price" class="form-control" disabled>
          </div>
          <div class="mb-3">
            <label for="viewStock" class="form-label">Stock</label>
            <input type="number" v-model="selectedProduct.stock" class="form-control" disabled>
          </div>
          <div class="mb-3">
            <label for="viewCategory" class="form-label">Category</label>
            <input type="text" v-model="selectedProduct.category" class="form-control" disabled>
          </div>
          <div class="mb-3">
            <label for="viewBarcode" class="form-label">Barcode</label>
            <input type="text" v-model="selectedProduct.barcode" class="form-control" disabled>
          </div>
          <div class="mb-3">
            <label for="viewStatus" class="form-label">Status</label>
            <input type="text" v-model="selectedProduct.status" class="form-control" disabled>
          </div>
        </div>
        <div class="mb-3">
          <label for="viewDescription" class="form-label">Description</label>
          <textarea v-model="selectedProduct.description" class="form-control" disabled></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    
    <!-- Edit Product Modal -->
<div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="updateProduct">
          <div class="classe">
            <div class="mb-3">
              <label for="editProductName" class="form-label">Product Name</label>
              <input type="text" v-model="selectedProduct.product_name" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="editPrice" class="form-label">Price</label>
              <input type="number" v-model="selectedProduct.price" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="editStock" class="form-label">Stock</label>
              <input type="number" v-model="selectedProduct.stock" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="editCategory" class="form-label">Category</label>
              <input type="text" v-model="selectedProduct.category" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="editBarcode" class="form-label">Barcode</label>
              <input type="text" v-model="selectedProduct.barcode" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="editStatus" class="form-label">Status</label>
              <select v-model="selectedProduct.status" class="form-select" required>
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
              </select>
            </div>
          </div>
          <div class="mb-3">
            <label for="editDescription" class="form-label">Description</label>
            <textarea v-model="selectedProduct.description" class="form-control" required></textarea>
          </div>
          <button type="submit" class="btn btn-success">Update Product</button>
        </form>
      </div>
    </div>
  </div>
</div>

    <!-- Delete Product Modal -->
    <div class="modal fade" id="deleteProductModal" tabindex="-1" aria-labelledby="deleteProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteProductModalLabel">Confirm Deletion</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete <strong>{{ selectedProduct.product_name }}</strong>?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" @click="deleteProduct(selectedProduct.id)" data-bs-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Product Modal -->
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">Add New Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
           

            
            <form @submit.prevent="addNewProduct">
               <div class="classe">
              <div class="mb-3">
                <label for="newProductName" class="form-label">Product Name</label>
                <input type="text" v-model="newProduct.product_name" class="form-control" required>
              </div>
              
              <div class="mb-3">
                <label for="newPrice" class="form-label">Price</label>
                <input type="number" v-model="newProduct.price" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="newStock" class="form-label">Stock</label>
                <input type="number" v-model="newProduct.stock" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="newCategory" class="form-label">Category</label>
                <input type="text" v-model="newProduct.category" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="newBarcode" class="form-label">Barcode</label>
                <input type="text" v-model="newProduct.barcode" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="newStatus" class="form-label">Status</label>
                <select v-model="newProduct.status" class="form-select" required>
                  <option value="Actif">Actif</option>
                  <option value="Inactif">Inactif</option>
                </select>
              </div>
                </div>
                <div class="mb-3">
                <label for="newDescription" class="form-label">Description</label>
                <textarea type="text" v-model="newProduct.description" class="form-control" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Add Product</button>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    product_name: 'Product 1',
    description: 'Description of product 1',
    price: 100,
    stock: 10,
    category: 'Category A',
    barcode: '1234567890',
    status: 'Actif'
  },
  {
    id: 2,
    product_name: 'Product 2',
    description: 'Description of product 2',
    price: 150,
    stock: 5,
    category: 'Category B',
    barcode: '0987654321',
    status: 'Inactif'
  }
])

const selectedProduct = ref({})
const newProduct = ref({
  product_name: '',
  description: '',
  price: 0,
  stock: 0,
  category: '',
  barcode: '',
  status: 'Actif' 
})

const showProductDetails = (product) => {
  selectedProduct.value = { ...product }
}

const editProduct = (product) => {
  selectedProduct.value = { ...product }
}

const updateProduct = () => {
  const index = products.value.findIndex(p => p.id === selectedProduct.value.id)
  if (index !== -1) {
    products.value[index] = { ...selectedProduct.value }
  }
}

const setProductToDelete = (product) => {
  selectedProduct.value = { ...product }
}

const deleteProduct = (id) => {
  products.value = products.value.filter(product => product.id !== id)
}

const addNewProduct = () => {
  const newId = products.value.length ? Math.max(...products.value.map(p => p.id)) + 1 : 1;
  newProduct.value.id = newId;
  products.value.push({ ...newProduct.value });
  newProduct.value = {
    product_name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    barcode: '',
    status: 'Actif' 
  }
}
</script>


<style scoped>
.classe{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 20px;
}
</style>
