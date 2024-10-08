<template>
  <div class="container my-4">
    <h1 class="mb-4">List of Orders</h1>
    <div class="text-end mb-3">
      <button @click="navigateToOrderForm" class="btn btn-primary">
        Add New Order
      </button>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer</th>
            <th>Delivery Address</th>
            <th>Track Number</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.date }}</td>
            <td>{{ order.customer }}</td>
            <td>{{ order.delivery_address }}</td>
            <td>{{ order.track_number }}</td>
            <td>{{ order.status }}</td>
            <td>
              <router-link :to="`/orders/${order.id}/preview`" class="btn btn-info btn-sm me-2">
                <i class="fas fa-eye"></i> 
              </router-link>

              <router-link :to="`/orders/${order.id}/edit`" class="btn btn-warning btn-sm me-2">
                <i class="fas fa-edit"></i> 
              </router-link>

              <button @click="setOrderToDelete(order)" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this order?
            <p><strong>{{ selectedOrder?.customer }}</strong>'s order with tracking number <strong>{{ selectedOrder?.track_number }}</strong> will be permanently deleted.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" @click="deleteOrder" data-bs-dismiss="modal">Delete</button>
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

const orders = ref([
  { id: 1, date: "2024-07-26", customer: "John Doe", delivery_address: "4123 Main St, New York, NY", track_number: "TN001", status: "Delivered" },
  { id: 2, date: "2023-02-22", customer: "Jane Smith", delivery_address: "456 Oak St, Los Angeles, CA", track_number: "TN002", status: "Shipped" },
  { id: 3, date: "2022-04-27", customer: "Alice Martin", delivery_address: "789 Pine St, Chicago, IL", track_number: "TN003", status: "Processing" }
])

const selectedOrder = ref(null)

const navigateToOrderForm = () => {
  router.push({ name: 'orderNew' }); 
}
const setOrderToDelete = (order) => {
  selectedOrder.value = { ...order }
}

const deleteOrder = () => {
  orders.value = orders.value.filter(order => order.id !== selectedOrder.value.id)
  console.log('Order deleted:', selectedOrder.value)
}
</script>
