<template>
    <div>
      <h2>{{ isEditing ? "Edit Customer" : "Add New Customer" }}</h2>
      <form @submit.prevent="saveCustomer">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" id="name" v-model="customer.name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <input type="text" id="address" v-model="customer.address" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" v-model="customer.email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input type="tel" id="phone" v-model="customer.phone" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-success">{{ isEditing ? "Update" : "Add" }} Customer</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  
  const router = useRouter()
  const route = useRoute()
  
  const customer = ref({
    name: '',
    address: '',
    email: '',
    phone: ''
  })
  
  const isEditing = ref(false)
  
  const customers = ref([
    { id: 1, name: "John Doe", address: "123 Main St", email: "john@example.com", phone: "1234567890" },
    { id: 2, name: "Fatimata", address: "124 Main", email: "sal@gmail.com", phone: "233-349-7656"},
    { id: 3, name: "Thilo", address: "56 City", email: "seme@gmail.com", phone: "877-935-126"},
    
  ])
  
  onMounted(() => {
    const id = route.params.id
    if (id) {
      const existingCustomer = customers.value.find(c => c.id === parseInt(id))
      if (existingCustomer) {
        customer.value = { ...existingCustomer }
        isEditing.value = true
      }
    }
  })
  
  const saveCustomer = () => {
    if (isEditing.value) {
      console.log('Updating customer:', customer.value)
    } else {
      customer.value.id = customers.value.length + 1 
      customers.value.push({ ...customer.value })
      console.log('Adding new customer:', customer.value)
    }
    router.push('/customers')
  }
  </script>
  
  