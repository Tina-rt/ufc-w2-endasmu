<script>
export default{
    props:{
        image_url: ""
    }
}
</script>
<template>
    <img :src="image_url" alt="image">
</template>