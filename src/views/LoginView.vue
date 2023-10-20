<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>
      <v-btn
        @click="submit"
      >
        Submit
      </v-btn>
    </v-form>
  </v-container>
  </template> 
  <script>
  import userMixins from "@/mixins/userMixins.js"
  export default {
    name: 'RegistrationComponent',
    mixins: [userMixins],
    data: () => ({
    
    }),

    methods: {
      submit () {
        const valid = this.$refs.form.validate();
        if(valid){
          console.log(this.email,this.password);
          localStorage.setItem('isLogin', 1);
          this.$router.go();
        }
      },
    },
  }
</script>
