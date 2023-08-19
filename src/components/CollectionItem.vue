<script>
import {Cursor} from "../animation/cursor_handling";
export default {
    props: {
        img: '',
        bg: ''
    },
    mounted() {

    },
    data() {
        const cursor = new Cursor()
        return {
            cursor
        }
    },
    methods: {
        hover_item(){
            // let cursor = document.getElementById('cursor')
            // cursor.style.zIndex = 4
        },
        
    },
}
</script>

<template>
    <div class="collectionitem" @mouseenter="this.cursor.hover" @mouseleave="this.cursor.leave">
        <div class="bg-img">
            <img :src="img" alt="Collection image">
        </div>
    </div>
</template>

<style scoped>
.collectionitem {
    width: 270px;
    height: 200px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
}

.collectionitem::before{
    background-color: rgba(0, 0, 0, 0.575);
    backdrop-filter: blur(20px);
}

.bg-img {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* background-color: #363a2973; */
    box-shadow: 1px 1px 59px -7px rgba(0, 0, 0, 0.64);
    -webkit-box-shadow: 1px 1px 59px -7px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 1px 1px 59px -7px rgba(0, 0, 0, 0.64);
    border-radius: 30px;
    position: relative;
    height: 80%;
    transition: all 0.4s;
}

.bg-img:hover{
    height: 70%;
}

.bg-img:hover ~ .collectionitem {
    transform: scale(2);
}

.collectionitem img {
    position: absolute;
    bottom: 0;
    height: 200px;

}

@media (max-width: 500px) {
    .collectionitem{}
    /* .collectionitem */
}
</style>
