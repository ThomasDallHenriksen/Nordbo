<template>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
    props: {
      title: String,
      message: String
    }
  }
  </script>
  
  <style scoped>
  /* CSS styles for your component go here */
  </style>
  