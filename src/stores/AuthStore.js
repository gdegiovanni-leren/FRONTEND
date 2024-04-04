import { defineStore } from 'pinia'
import router from '../router'
import axios from "axios"
import { ref } from 'vue'

export const useAuthStore = defineStore('auth',  {
 state: () =>({
   error: false,
   recovery_sended: false,
   recovery_token : null,
   message: ref(""),
    token: "",
    user: {
        username: "",
        role: ""
    }
 }),
 persist: {
   paths: ["token", "user.username", "user.role"]
 },
 actions:{

    async login(temp_username, password){

      const URL = `${import.meta.env.VITE_BASE_URL}login`
      try{
         const res = await axios.post(URL,{
         username: temp_username,
         password: password
         })

         console.log(res);
         const {message, username, role} = res.data
         this.token = message
         this.user.username = username
         this.user.role = role

         localStorage.setItem('token', this.token)

         router.push("/")
      }catch(err){
         this.error = true
       }

    },
    async register(temp_username, password, confirmPassword){

      const URL = `${import.meta.env.VITE_BASE_URL}register`
      try{
         const res = await axios.post(URL,{
            username: temp_username,
            password: password,
            confirmPassword: confirmPassword
         })
         const {token, username, role} = res.data
         this.token = token
         this.user.username = username
         this.user.role = role
         localStorage.setItem('token', this.token)
         router.push("/")
      }catch(err){
         this.error = true
         this.message = err.response.data.message
      }
    },


    async onRecoveryPassword(){

      console.log(this.user.username)

      const URL = `${import.meta.env.VITE_BASE_URL}login/recovery_request`
      try{
         const res = await axios.post(URL,{
            username:  this.user.username,
         })
         console.log(res.data.message)
         if(res.status == 200){
            console.log(res.data.message)
            //this.message = res.data.message
            //this.recovery_status = true
         }

      }catch(err){
         console.log(err)
         //this.error = true
         //this.message = err.response.data.message
      }
    },



    async recovery(email){

      const URL = `${import.meta.env.VITE_BASE_URL}login/password_recovery`
      try{
         const res = await axios.post(URL,{
            email: email
         })

         if(res.status == 200){
            //console.log(res.data.message)
            this.message = res.data.message
            this.recovery_sended = true
            Swal.fire({
               title: "Enter your code received in your email",
               input: "text",
               inputAttributes: {
                 autocapitalize: "off"
               },
               showCancelButton: false,
               confirmButtonText: "CONFIRM",
               showLoaderOnConfirm: true,
               preConfirm: async (recovery_code) => {
                console.log('recovery_code?',recovery_code)

                 try{
                  const URL = `${import.meta.env.VITE_BASE_URL}login/recovery_request`

                     const res = await axios.post(URL,{
                        username: email,
                        recovery_code: recovery_code
                     })
                     if(res.status == 200){
                        console.log('res status ok, recovery token added')
                        console.log('recovery token ?',res.data.recovery_token)
                        this.recovery_token = res.data.recovery_token
                     }else{
                        console.log('res status not ok, unknown error')
                     }
                 }catch(error){
                  console.log(error.response.status)
                  //only catch error for expired code and redirect
                  if(error.response.status == 410){
                     console.log('EXPIRED CODE')
                     //expired date
                     Swal.fire({
                        icon: "error",
                        text: "EXPIRED CODE",
                        allowOutsideClick: () => false
                      }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                           window.location.href = '/recovery_password'
                        }
                      });
                  }
                  this.recovery_token = null
                  if(error.response.data?.message){
                     Swal.showValidationMessage(`Error: ${error.response.data.message}`);
                  }else{
                     Swal.showValidationMessage(`Error: Unknown Error. Try again later`);
                  }
                 }
               },
               allowOutsideClick: () => false
             }).then((result) => {
               if (result.isConfirmed) {
                 /******** UPDATE PASSWORD **********/
                 Swal.fire({
                  title: "Enter your new password",
                  input: "text",
                  inputAttributes: {
                    autocapitalize: "off"
                  },
                  showCancelButton: false,
                  confirmButtonText: "CONFIRM",
                  showLoaderOnConfirm: true,
                  preConfirm: async (new_password) => {
                   console.log('new password?',new_password)

                    try{
                     const URL = `${import.meta.env.VITE_BASE_URL}login/update_password`

                        const res = await axios.post(URL,{
                           username: email,
                           new_password : new_password,
                           recovery_token: this.recovery_token
                        })
                        if(res.status == 200){
                           console.log('res status ok update passwows!!!!')
                           this.recovery_token = null
                           return true
                           //this.recovery_token = res.data.recovery_token
                        }else{
                           console.log('res status not ok update password, unknown error')
                        }
                    }catch(error){
                     //TODO : ADD RECOVERY TOKEN TO NULL
                     //this.recovery_token = null
                     if(error.response.data?.message){
                        Swal.showValidationMessage(`Error: ${error.response.data.message}`);
                     }else{
                        Swal.showValidationMessage(`Error: Unknown Error. Try again later`);
                     }
                    }
                  },
                  allowOutsideClick: () => false
                }).then((result) => {
                  if (result.isConfirmed) {
                     Swal.fire({
                        icon: "success",
                        text: "PASSWORD UPDATED!",
                        allowOutsideClick: () => false
                      }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                           window.location.href = '/'
                        }
                      });
                    //REDIRECT

                  }
                });
                 /********************************* */
               }
             });
         }else{
            console.log('status not 200')
         }

      }catch(err){
         console.log(err)
         this.error = true
         Swal.fire({
            title: 'Error!',
            text: err.response.data.message ? err.response.data.message : 'Unknown error sending recovery email, please try again later.',
            icon: 'error',
            confirmButtonText: 'OK'
            });

      }

    },

    async logout(){
       await router.push("/login")
       localStorage.removeItem('auth')
       localStorage.removeItem('token')
       //localStorage.removeItem('cart_id')
    }

 }
})
