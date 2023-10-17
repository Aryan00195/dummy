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
  import userMixins from "@/mixins/userMixins"
  export default {
    name: 'RegistrationComponent',
    mixins: [userMixins],
    data: () => ({
    }),

    methods: {
      submit () {
        const valid = this.$refs.formValues.validate();
        if(valid){
          console.log(this.formValues);
        }
      },
    },
  }
</script>
