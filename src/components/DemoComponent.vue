<template>
    <div class="home">  
        <!-- <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>
        
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>
        
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form> -->
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="(user, index) in users" :key="index"> -->
                <tr>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <v-btn  @click="viewUser(user)"
                      >view</v-btn
                    >
                    <v-btn size="small" class="mr-3" @click="editUser(user) "
                      >edit</v-btn
                    ><v-btn size="small" @click="deleteUser(index)">delete</v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <dialog-component @get="get()"></dialog-component>
      <!-- <v-row justify="center">
          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-title class="text-h5">{{ modalTitle }}</v-card-title>
              <v-card-text>
                <form-component></form-component
              
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
        </v-row> -->
      </div>
        </template>
        <script>
      const formData = {
      _id: null,
      name: "",
      email: "",
    };
    import DialogComponent from "@/components/DialogComponent.vue"
    export default {
      name: "UserView",
      components: {}, DialogComponent,
      data: function () {
        return {
          user: [],
          isEdit: false,
          formField: formData,
        };
      },
    //   rules:{
    //       nameRule: [
    //         v => !!v || 'Name is required',
    //         v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    //       ],
    //       emailRule: [
    //         v => !!v || 'E-mail is required',
    //         v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    //       ],
    //       passwordRule: [
    //         v => !!v || 'Password is required',
    //         v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(v) || 'Enter a valid password',
    //       ],
    //       confirmPasswordRule: [
    //         v => !!v || 'Confirmation is required',
    //         () => this.formField.password === this.formField.confirmpassword || 'Enter a valid password',
    //       ],
    //       },
       computed: {
        modalTitle: function () {
          return (this.isEdit ? "Update" : "Add") + " User";
        },
      },
      mounted() {
        this.getUsers();
      },
      methods: {
        editUser(user) {
        //   this.isEdit = true;
          this.formField = JSON.parse(JSON.stringify(user));
        },
        get(){
            
        }
      }
    }
    </script>
    <!-- <script>
      export default {
        data: () => ({
          valid: false,
          firstname: '',
          lastname: '',
          nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
          ],
          email: '',
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
          ],
        }),
      }
    </script> -->