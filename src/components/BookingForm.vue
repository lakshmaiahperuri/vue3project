<template>
 
      <div class="columns">
      <div class="column is-4">
        <div class="card">
       <p className="card-header-title is-centered"> Booking Details</p>
       <div class="card-content">
        <label class="label">Passenger Name:</label>
        <input class="input" placeholder="Name" type="text"  v-model="booking.name" required>
        <label class="label" >Date Of Journey</label>
        <input id="searchBox" placeholder="Date" type="date" class="input" v-model="booking.date" required>
          <label class="label">Mobile Number</label>
        <input class="input" placeholder="Mobile Number" type="number" v-model="booking.number" required>
          <label class="label">Email Id</label>
        <input class="input"  placeholder="Email" type="text" v-model="booking.email" required>
         <label class="label">From </label>
        <input class="input" placeholder="From" type="text" v-model="booking.from" required>
        <label class="label">To</label>
        <input class="input" placeholder="To" type="text" v-model="booking.to" required>
        </div>
        <div class="box">
         <button @click="createBooking" class="button is-primary"  >Confirm Booking</button>
        </div>
       </div>
        </div>
        </div>
</template>
<script>
import { reactive } from 'vue'
import BookingDataService from '../services/bookings'
export default ({
 setup(){
  const booking = reactive({name:'',date:'',email:'',number:'',from:'',to:''})
  const createBooking= async()=>{
    if(booking.name||booking.email||booking.number||booking.date||booking.from||booking.to===""){
        alert("please enter all the details");
    }
    else{
    await BookingDataService.create(booking);
     alert("booking confirmed");
    window.location.reload();
     console.log(booking,"lakshmaiah");
    }
  }
return{booking,createBooking}
  }
})
</script>
<style scoped>
.card{
    height: 520px;
    width: 500px;
    margin: 450px;
    display: inline-block;
    border-radius: 10px;
}
.header{
  text-align: center;
  font-size: 200%;
  background-color: aquamarine;
}
.card{
  margin-top: 0mm;
}
</style>
