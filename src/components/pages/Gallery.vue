<template>

    <h1>aaaaaaa</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">email</th>
      <th scope="col">departament</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="employee in employees" :key="employee.id">
      <th scope="row">{{employee.id}}</th>
      <td>{{employee.firstName}}</td>
      <td>{{employee.lastName}}</td>
      <td>{{employee.email}}</td>
      <td>{{employee.department}}</td>
    </tr>
  </tbody>
</table>
</template>
<script>
export default {
  name: 'EmployeeTable',
  data(){
    return {
      employees: [],
      employeeApi: "http://localhost/aula/vue-03/rest/api/V1/employee.php"
    }
  },
  methods: {
    async getEmployees(){
        try{
            let response = await fetch(this.employeeApi);
            this.employees = await response.json();
        }catch(error){
            console.log(error);
        }
    }
  },
  created(){
    this.getEmployees();
  }
}
</script>