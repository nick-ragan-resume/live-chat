<template>
  <div class="container">
    <NavBar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import { watch } from '@vue/runtime-core'
import NavBar from '../components/NavBar.vue'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
  components: { NavBar, NewChatForm, ChatWindow },
  setup() {
    // get user
    const { user } = getUser()
    // use the vue router
    const router = useRouter()

    // watch user
    watch(user, () => {
      console.log('watching user... ')
      if (!user.value) {
        // redirect the user to the welcome page after logout
        router.push({ name: 'Welcome' })
      }
      
    })

  }
}
</script>

<style>

</style>