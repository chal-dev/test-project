<template>
  <div></div>
</template>

<script>
export default {
    methods:{
        async getUsers() {
            const test = await this.$axios.get('/api/users')
            console.log(test.data)
        }

    },
    created(){
        this.getUsers();
    }

}
</script>

<style>

</style>