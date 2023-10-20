<template>
  <v-container>
    <v-form ref="myLoginForm" @submit.prevent="saveData()">
      <v-text-field
        v-model="formField.name"
        :rules="rules.nameRule"
        label="Name"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="formField.email"
        :rules="rules.emailRule"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="formField.password"
        :rules="rules.passwordRule"
        type="password"
        label="Password"
        required
      ></v-text-field>
      {{ formField.password }}
      <v-text-field
        v-model="formField.confirmpassword"
        :rules="rules.confirmPasswordRule"
        type="password"
        label="Re-enter Password"
        required
      ></v-text-field>
      <v-btn type="submit" color="green">
        Submit
      </v-btn>
      <v-btn @click="reset" color="orange">
        Reset Form
      </v-btn>
    </v-form>
  </v-container>
  </template>
  <script>
import axios from 'axios';
import Swal from 'sweetalert2';
  export default {
    data(){
      return{
      valid: false,
      formField: {
      name: '',
      email: '',
      password:'',
      confirmpassword:'',
      },
      rules:{
      nameRule: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRule: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRule: [
        v => !!v || 'Password is required',
        v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(v) || 'Enter a valid password',
      ],
      confirmPasswordRule: [
        v => !!v || 'Confirmation is required',
        () => this.formField.password === this.formField.confirmpassword || 'Enter a valid password',
      ],
      }
    }
  },
    methods: {
      saveData(){
        const valid= this.$refs.myLoginForm.validate();
        if(valid){
          // console.log('inside valid',this.formField);
          const data={
            name:this.formField.name,
            password:this.formField.password,
            email:this.formField.email,
            action :'addUser'
          }
          console.log(data);
          axios.post('index.php', data).then(({data})=>{
            Swal.fire("Success",data.message,"success");
            window.location.href="http://localhost:8080/#/login"
          })
          .catch(({response,message})=>{
            Swal.fire("Error",response && response.data?response.data.message:message,"error");
          });
        }
    },
    // reset () {
    //     this.$refs.myLoginForm.reset()
    //   },
    },
  }
</script>