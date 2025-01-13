<template>
  <div>
    admin login page
    <p>
      <button @click="login">Login</button>
      <button @click="logout">Logout</button>
    </p>
  </div>
</template>


<script lang="ts" setup>
import Cookies from 'js-cookie'

const login = () => {
  Cookies.set('admin_access_token', '123')
};

const logout = () => {
  Cookies.remove('admin_access_token')
};
</script>