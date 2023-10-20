<template>
<v-row justify="center">
      <v-dialog v-model="dialog" max-width="290" >
        <v-card>
          <v-card-title class="text-h5">{{ modalTitle }}</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleSubmit()" ref="formField">
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
</v-card-text>
  </v-card>
      </v-dialog>
    </v-row>
</template>
<script>
 export default {
    data(){
      return{
      valid: false,
      dialog:true,
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
    // methods: {
    //   close() {
    //     this.$emit('closed');
    //   },
    // }
 }
    //   saveData(){
    //     const valid= this.$refs.myLoginForm.validate();
    //     if(valid){
    //         console.log(this.formfield);
    //     }
    // },
    // editUser(user) {
    //   this.isEdit = true;
    // //   this.userForm = JSON.parse(JSON.stringify(user));
    //   this.dialog = true;
    // },
    // },
</script>