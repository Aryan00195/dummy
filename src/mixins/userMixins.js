export default {
    data: () => ({
      valid: false,
      formField:{
      name:'',
      email: '',
      password:'',
    },
      rule:{
      NameRules:[
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      EmailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      PasswordRules: [
        v => !!v || 'Password is required',
        v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(v) || 'Enter a valid password',
      ],
    }
  }
    )
}
    
