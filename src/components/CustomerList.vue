<template>
            <div>
            <h1>List of Customers</h1>
            <div class="text-end">
        <button class="btn btn-primary mb-3" @click="addCustomer">Add New Customer</button>
        </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{ customer.name }}</td>
            <td>{{ customer.address }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td>
            <td>
                <button @click="viewCustomer(customer)" class="btn btn-info btn-sm"><i class="fas fa-eye"></i></button>
                <button @click="editCustomer(customer)" class="btn btn-warning btn-sm ms-2"><i class="fas fa-edit"></i></button>
                <button @click="deleteCustomer(customer.id)" class="btn btn-danger btn-sm ms-2"><i class="fas fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const customers = ref([
    { id: 1, name: "John Doe", address: "123 Main St", email: "johndoe@example.com", phone: "123-456-7890" },
    { id: 2, name: "Fatimata", address: "124 Main", email: "sal@gmail.com", phone: "233-349-7656"},
    { id: 3, name: "Thilo", address: "56 City", email: "seme@gmail.com", phone: "877-935-126"},
    
  ])
  const addCustomer = () => {
    router.push('/customers/new')
  }
  const viewCustomer = (customer) => {
    router.push(`/customers/${customer.id}`)
  }
  const editCustomer = (customer) => {
    router.push(`/customers/${customer.id}/edit`)
  }
  const deleteCustomer = (id) => {
    customers.value = customers.value.filter(customer => customer.id !== id)
  }
  </script>
  
  