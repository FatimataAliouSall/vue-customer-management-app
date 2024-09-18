<template>
  <div class="container my-4">
    <h1 class="mb-4">List of Products</h1>
    <div class="text-end mb-3 mx-3">
      <button class="btn btn-primary" @click="addProduct">Add New Product</button>
    </div>

    <div class="table-responsive mx-3">
      <table class="table table-striped">
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
              <button @click="showProductDetails(product)" class="btn btn-info btn-sm me-2" data-bs-toggle="modal" data-bs-target="#viewModal">
                <i class="fas fa-eye"></i>
              </button>
              
              <button @click="editProduct(product)" class="btn btn-warning btn-sm me-2" data-bs-toggle="modal" data-bs-target="#editModal">
                <i class="fas fa-edit"></i>
              </button>
              
              <button @click="setProductToDelete(product)" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewModalLabel">Product Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><strong>Product Name:</strong> {{ selectedProduct.product_name }}</p>
            <p><strong>Description:</strong> {{ selectedProduct.description }}</p>
            <p><strong>Price:</strong> {{ selectedProduct.price }}</p>
            <p><strong>Stock:</strong> {{ selectedProduct.stock }}</p>
            <p><strong>Category:</strong> {{ selectedProduct.category }}</p>
            <p><strong>Status:</strong> {{ selectedProduct.status }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">Edit Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProduct">
              <div class="mb-3">
                <label for="editProductName" class="form-label">Product Name</label>
                <input type="text" v-model="selectedProduct.product_name" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editDescription" class="form-label">Description</label>
                <input type="text" v-model="selectedProduct.description" class="form-control" required>
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
              <button type="submit" class="btn btn-success">Update Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const products = ref([
  { id: 1, product_name: "Product 001", description: "High-quality product.", price: 100, stock: 200, category: "Electronics", barcode: "1234567890", status: "Actif" },
  { id: 2, product_name: "Product 002", description: "Affordable product.", price: 50, stock: 100, category: "Home Appliances", barcode: "1234567890", status: "Inactif" },
  { id: 3, product_name: "Product 003", description: "Durable product.", price: 75, stock: 50, category: "Sports", barcode: "1234567890", status: "Actif" },
])

const selectedProduct = ref({})

const showProductDetails = (product) => {
  selectedProduct.value = { ...product }
}

const editProduct = (product) => {
  selectedProduct.value = { ...product }
}

const updateProduct = () => {
  console.log('Product updated:', selectedProduct.value)
}

const setProductToDelete = (product) => {
  selectedProduct.value = { ...product }
}

const deleteProduct = (id) => {
  products.value = products.value.filter(product => product.id !== id)
}
</script>
