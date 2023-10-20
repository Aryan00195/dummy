<template>
  <div class="home">
    <h3>Users</h3>
    <div v-if="users.length">
      <v-row :align="'end'" no-gutters>
        <v-col size="12" class="mr-auto" align-self='end'>
          <v-btn @click="addUser()"> Add User </v-btn>
        </v-col>
      </v-row>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Email</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td class="text-left">{{ user.name }}</td>
              <td class="text-left">{{ user.email }}</td>
              <td>
                <v-btn size="small" class="mr-3" @click="viewUser(user)"
                  >view</v-btn
                >
                <v-btn size="small" class="mr-5" color="primary" @click="editUser(user)"
                  >edit</v-btn
                ><v-btn size="small" color="error" @click="deleteUser(index)">delete</v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div v-else>
      <v-btn @click="addUser()"> Add User </v-btn>
    </div>

    <!--- User modal -->
    <v-row >
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="text-h5">{{ modalTitle }}</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleSubmit()" ref="userForm">
              <v-text-field
                v-model="userForm.name"
                :rules="rule.NameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="userForm.email"
                :rules="rule.EmailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-btn class="mr-4" type="submit" color="primary"> submit </v-btn>
              <v-btn @click="clear" color="error"> clear </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import userMixins from '@/mixins/userMixins';
const formData = {
  _id: null,
  name: "",
  email: "",
};
export default {
  name: "HomeView",
  mixins:[userMixins],
  components: {},
  data: function () {
    return {
      users: [],
      isEdit: false,
      dialog: false,
      userForm: formData,
    };
  },
  computed: {
    modalTitle: function () {
      return (this.isEdit ? "Update" : "Add") + " User";
    },
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    addUser() {
      this.dialog = true;
      this.userForm = formData;
    },
    editUser(user) {
      this.isEdit = true;
      this.userForm = JSON.parse(JSON.stringify(user));
      this.dialog = true;
    },
    deleteUser(rowNo) {
      this.$axios
        .delete(`users/${this.users[rowNo]._id}`)
        .then(() => {
          this.users.splice(rowNo, 1);
        })
        .catch((e) => {
          console.log("Error", e);
        });
    },
    saveUser() {},
    clear() {
      this.$refs.userForm.reset();
    },
    handleSubmit() {
      const isValid = this.$refs.userForm.validate();
      if (isValid) {
        const url = this.isEdit ? "users/" + this.userForm._id : "users";
        let action = "put";
        if (!this.isEdit) {
          action = "post";
        }
        delete this.userForm._id;
        this.$axios[action](url, this.userForm)
          .then(({ data }) => {
            if (!this.isEdit) {
              this.users.push(data);
            } else {
              this.getUsers();
            }
            this.clear();
          })
          .catch((e) => {
            console.log("Error", e);
            this.dialog = false;
            this.isEdit = false;
          });
      } 
    },
    getUsers() {
      this.$axios
        .get("/users")
        .then(({ data }) => {
          this.users = data;
        })
        .catch((e) => {
          console.log("Error", e);
        });
    },
    async viewUser(user) {
      // console.log(user);
      const path = `/ViewData/${user._id}`;
      console.log("user", user, path);
      await this.$router.push({ path: path });
    },
  },
};
</script>
