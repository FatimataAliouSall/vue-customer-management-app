<template>
  <div class="container my-4">

    <h1>{{ isEditing ? 'Edit Order' : 'Create New Order' }}</h1>
    
    <div class="container my-4">
      <form @submit.prevent="saveOrder">
        <div class="d-flex justify-content-end mb-3">
          <button type="button" class="btn btn-secondary me-2" @click="goHome">Orders List</button>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
  
        <div class="d-flex gap-3 bg-light p-3">
          <div class="flex-fill">
            <div class="mb-3">
              <label for="date" class="form-label">Date</label>
              <input type="date" id="date" v-model="order.date" class="form-control w-100" required />
            </div>
            <div class="mb-3">
              <label for="customer" class="form-label">Customer</label>
              <input type="text" id="customer" v-model="order.customer" class="form-control w-100" required />
            </div>
          </div>
          
          <div class="flex-fill">
            <div class="mb-3">
              <label for="delivery_address" class="form-label">Delivery Address</label>
              <input type="text" id="delivery_address" v-model="order.delivery_address" class="form-control w-100" required />
            </div>
            <div class="mb-3">
              <label for="track_number" class="form-label">Track Number</label>
              <input type="text" id="track_number" v-model="order.track_number" class="form-control w-100" required />
            </div>
            <div class="mb-3">
              <label for="status" class="form-label">Status</label>
              <select id="status" v-model="order.status" class="form-select w-100" required>
                <option value="" disabled>Select Status</option>
                <option value="Delivered">Delivered</option>
                <option value="Shipped">Shipped</option>
                <option value="Processing">Processing</option>
              </select>
            </div>

          </div>
        </div>
  
        <!-- Order Details Section -->
        <div class="my-4">
          <h3>Order Details</h3>
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(detail, index) in orderDetails" :key="index">
                <td>
                  <select v-model="detail.product" class="form-select">
                    <option>Select Product</option>
                    <option v-for="product in products" :key="product" :value="product">{{ product }}</option>
                  </select>
                </td>
                <td>
                  <input type="number" v-model="detail.quantity" class="form-control" />
                </td>
                <td>
                  <input type="number" v-model="detail.price" class="form-control" />
                </td>
                <td>
                  <button type="button" class="btn btn-danger" @click="removeDetail(index)">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="button" class="btn btn-success" @click="addDetail">Add New Detail</button>
        </div>
      </form>
    </div>

  </div>  
    
</template>
  
  
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const order = ref({
  date: '',
  customer: '',
  delivery_address: '',
  track_number: '',
  status: ''
})

const isEditing = ref(false)

const orders = ref([
  { id: 1, date: "2024-07-26", customer: "Jane Smith", delivery_address: "456 Oak St, Los Angeles, CA", track_number: "TN002", status: "Delivered" }
])

onMounted(() => {
  const id = route.params.id
  if (id) {
    const existingOrder = orders.value.find(o => o.id === parseInt(id))
    if (existingOrder) {
      order.value = { ...existingOrder }
      isEditing.value = true
    }
  }
})


const saveOrder = () => {
  if (isEditing.value) {
    console.log('Updating order:', order.value)
  } else {
    order.value.id = orders.value.length + 1
    orders.value.push({ ...order.value })
    console.log('Adding new order:', order.value)
  }
  router.push('/orders')
}

const orderDetails = ref([
  { product: '', quantity: 1, price: 0 }
])

const products = ['Product A', 'Product B', 'Product C']

const addDetail = () => {
  orderDetails.value.push({ product: '', quantity: 1, price: 0 })
}


const removeDetail = (index) => {
  if (orderDetails.value.length > 1) {
    orderDetails.value.splice(index, 1)
  } else {
    console.log('Cannot remove the last detail line.')
    alert('At least one detail line is required.')
  }
}


const goHome = () => {
  router.push('/orders')
}
</script>

  