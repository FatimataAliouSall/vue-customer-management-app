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
                <button @click="viewProduct(product)" class="btn btn-info btn-sm me-2"><i class="fas fa-eye"></i></button>
                <button @click="editProduct(product)" class="btn btn-warning btn-sm me-2"><i class="fas fa-edit"></i></button>
                <button @click="deleteProduct(product.id)" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
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
  
  const addProduct = () => {
    router.push('/products/new')
  }
  
  const viewProduct = (product) => {
    router.push(`/products/${product.id}`)
  }
  
  const editProduct = (product) => {
    router.push(`/products/${product.id}/edit`)
  }
  
  const deleteProduct = (id) => {
    products.value = products.value.filter(product => product.id !== id)
  }
  </script>
  