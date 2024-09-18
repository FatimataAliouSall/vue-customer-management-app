<template>
  <div class="container my-4">
    <h1 class="mb-4">List of Customers</h1>
    <div class="text-end mb-3 mx-3">
      <button class="btn btn-primary" @click="addCustomer">Add New Customer</button>
    </div>

    <div class="table-responsive mx-3">
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
              <button @click="showCustomerDetails(customer)" class="btn btn-info btn-sm me-2" data-bs-toggle="modal" data-bs-target="#viewModal">
                <i class="fas fa-eye"></i>
              </button>
              
              <button @click="editCustomer(customer)" class="btn btn-warning btn-sm me-2" data-bs-toggle="modal" data-bs-target="#editModal">
                <i class="fas fa-edit"></i>
              </button>
              
              <button @click="setCustomerToDelete(customer)" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- View Customer Modal -->
    <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewModalLabel">Customer Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><strong>Name:</strong> {{ selectedCustomer.name }}</p>
            <p><strong>Address:</strong> {{ selectedCustomer.address }}</p>
            <p><strong>Email:</strong> {{ selectedCustomer.email }}</p>
            <p><strong>Phone:</strong> {{ selectedCustomer.phone }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Customer Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">Edit Customer</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateCustomer">
              <div class="mb-3">
                <label for="editCustomerName" class="form-label">Name</label>
                <input type="text" v-model="selectedCustomer.name" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editAddress" class="form-label">Address</label>
                <input type="text" v-model="selectedCustomer.address" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editEmail" class="form-label">Email</label>
                <input type="email" v-model="selectedCustomer.email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editPhone" class="form-label">Phone</label>
                <input type="text" v-model="selectedCustomer.phone" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-success">Update Customer</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Customer Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete <strong>{{ selectedCustomer.name }}</strong>?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" @click="deleteCustomer(selectedCustomer.id)" data-bs-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const customers = ref([
  { id: 1, name: "John Doe", address: "123 Main St", email: "johndoe@example.com", phone: "123-456-7890" },
  { id: 2, name: "Fatimata", address: "124 Main", email: "sal@gmail.com", phone: "233-349-7656" },
  { id: 3, name: "Thilo", address: "56 City", email: "seme@gmail.com", phone: "877-935-126" },
])

const selectedCustomer = ref({})

const showCustomerDetails = (customer) => {
  selectedCustomer.value = { ...customer }
}

const editCustomer = (customer) => {
  selectedCustomer.value = { ...customer }
}

const updateCustomer = () => {
  console.log('Customer updated:', selectedCustomer.value)
}

const setCustomerToDelete = (customer) => {
  selectedCustomer.value = { ...customer }
}

const deleteCustomer = (id) => {
  customers.value = customers.value.filter(customer => customer.id !== id)
}
</script>
