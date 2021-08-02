<template>
  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Passenger Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email"
        width="250">
      </el-table-column>
      <el-table-column
        prop="number"
        label="Mobile Number">
      </el-table-column>
      <el-table-column
        prop="from"
        label="From">
      </el-table-column>
       <el-table-column
        prop="to"
        label="To">
      </el-table-column>
      <el-table-column
        prop="date"
        label="Date">
      </el-table-column>
    </el-table>
</template>
<script>
import { defineComponent, ref, onMounted, reactive, toRefs } from "vue";
import BookingDataService from "../services/bookings";
export default defineComponent({
  setup() {
    const bookings = ref([]);
   
    const state = reactive({
      tableData: [],
      columns: [
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
    });
    onMounted(async () => {
      let data = await BookingDataService.productList();
      state.tableData = data.data;
      console.log(state.tableData, "ssiddd");
    });
    return { bookings, ...toRefs(state) };
  },
});
</script>
