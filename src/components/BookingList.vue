<template>
  <o-table :data="tableData" :columns="columns">
  </o-table>
</template>
<script>
import { defineComponent, ref, onMounted, reactive, toRefs } from "vue";
import BookingDataService from "../services/bookings";
export default defineComponent({
  setup() {
    const bookings = ref([]);
    const columns = [
      {
        field: 'name',
        label: 'Passenger Name',
        width:'22%'
      },
      {
        field: 'email',
        label: 'Email',
        position: 'centered',
        width:'22%'
      },
      {
        field: 'number',
        label: 'Number',
        width:'22%'
      },
      {
        field: 'from',
        label: 'From',
        width:'22%'
      },
      {
        field: "to",
        label: "To",
        width:'22%'
      },
      {
        field: "date",
        label: "Date",
        width:'22%'
      },
    ]
    const state = reactive({
      tableData: [],
    });
    onMounted(async () => {
      let data = await BookingDataService.productList();
      state.tableData = data.data;
      console.log(state.tableData, "ssiddd");
    });
    return {columns, bookings, ...toRefs(state) };
  },
});
</script>
