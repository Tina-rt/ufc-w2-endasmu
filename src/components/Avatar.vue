<script>

export default{
    props:{
        image: '',
        size: 0,
    }
}
</script>


<template>
    <div class="main-avatar" :style="{width: size?size+'px':70+'px',height: size?size+'px':70+'px' }">
        <img :src="image" alt="avatar">
    </div>
</template>

<style scoped>
.main-avatar{
    width: 70px;
    height: 70px;
}

.main-avatar img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
</style>