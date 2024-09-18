<template>
    <div class="container my-4">
      <h2>{{ isEditing ? "Edit Product" : "Add New Product" }}</h2>
      <form @submit.prevent="saveProduct" class="mx-auto" style="max-width: 600px;">
        <div class="mb-3">
          <label for="productName" class="form-label">Product Name</label>
          <input type="text" id="productName" v-model="product.product_name" class="form-control w-75" required />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input type="text" id="description" v-model="product.description" class="form-control w-75" required />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input type="number" id="price" v-model="product.price" class="form-control w-50" required />
        </div>
        <div class="mb-3">
          <label for="stock" class="form-label">Stock</label>
          <input type="number" id="stock" v-model="product.stock" class="form-control w-50" required />
        </div>
        <div class="mb-3">
          <label for="category" class="form-label">Category</label>
          <input type="text" id="category" v-model="product.category" class="form-control w-75" required />
        </div>
        <div class="mb-3">
          <label for="barcode" class="form-label">Barcode</label>
          <input type="text" id="barcode" v-model="product.barcode" class="form-control w-75" required />
        </div>
        <div class="mb-3">
          <label for="status" class="form-label">Status</label>
          <select id="status" v-model="product.status" class="form-control w-50" required>
            <option value="Actif">Actif</option>
            <option value="Inactif">Inactif</option>
          </select>
        </div>
        <button type="submit" class="btn btn-success">{{ isEditing ? "Update" : "Add" }} Product</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  
  const router = useRouter()
  const route = useRoute()
  
  const product = ref({
    product_name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    barcode: '',
    status: 'Actif'
  })
  
  const isEditing = ref(false)
  
  const products = ref([
    { id: 1, product_name: "Product 001", description: "High-quality product.", price: 100, stock: 200, category: "Electronics", barcode: "1234567890", status: "Actif" },
    { id: 2, product_name: "Product 002", description: "Affordable product.", price: 50, stock: 100, category: "Home Appliances", barcode: "1234567890", status: "Inactif" },
    { id: 3, product_name: "Product 003", description: "Durable product.", price: 75, stock: 50, category: "Sports", barcode: "1234567890", status: "Actif" },
  ])
  
  onMounted(() => {
    const id = route.params.id
    if (id) {
      const existingProduct = products.value.find(p => p.id === parseInt(id))
      if (existingProduct) {
        product.value = { ...existingProduct }
        isEditing.value = true
      }
    }
  })
  
  const saveProduct = () => {
    if (isEditing.value) {
      console.log('Updating product:', product.value)
    } else {
      product.value.id = products.value.length + 1
      products.value.push({ ...product.value })
      console.log('Adding new product:', product.value)
    }
    router.push('/products')
  }
  </script>
  