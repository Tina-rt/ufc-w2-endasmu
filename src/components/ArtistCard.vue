<script>
import { Cursor } from '../animation/cursor_handling';
import Avatar from './Avatar.vue';

export default{
    props:{
        image_artist: "",
        name: "",
        address: "",
        image_art: ""
    },
    components:{
        Avatar
    },
    data() {
        let cursor = new Cursor()
        return {
            cursor
        }
    },
    methods:{
        
    }
}

</script>

<template>
    <div class="main-artist-card" @mouseenter="this.cursor.hover()" @mouseleave="this.cursor.leave">
        <Avatar class="avatar-artist" :image="image_artist" size="90"/>
        <div class="avatar-profile" >
            <div class="quote">"</div>
            <div class="artist-name">{{ name }}</div>
            <div class="artist-address">Lorem ipsum dolor, March 21</div>
            <div class="artist-art">
                <img :src="image_art" alt="">
                <div class="img-desc">Art 1</div>
            </div>
        </div>

    </div>
</template>

<style scoped>



.main-artist-card{
    width: 300px;
    height: 350px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.avatar-artist{
    
    z-index: 13;
}
.avatar-profile{
    
    width: 300px;
    border-radius: 30px;
    height: 90%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    position: absolute;
    bottom: 0;
    z-index: 12;

    box-shadow: 1px 1px 59px -7px rgba(0, 0, 0, 0.64);
    -webkit-box-shadow: 1px 1px 59px -7px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 1px 1px 59px -7px rgba(0, 0, 0, 0.64);
}

.avatar-profile *{
    z-index: 12;
}
.avatar-profile::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #242526;
    backdrop-filter: blur(20px);
    width: 100%;
    height: 100%;
}

.quote{
    font-size: 30px;
    margin-top: 10px;

    color: var(--color-secondary);
}

.artist-name{
    font-weight: bold;
    font-size: 1.2em;

}

.artist-address{
    margin-bottom: 20px;
}

.artist-art{
    width: 300px;
    height: 100%;
    /* overflow: hidden; */
    border-radius: 30px;
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.artist-art img{
    width: 100%;
    height: 100%;

    object-position: 0 -30px;
    object-fit: cover;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    border-radius: 30px;
    transition: all 0.4s ease-in-out;
    position: absolute;
    bottom: 0;
}
.artist-art :hover{
    height: 180%;
    
}
.img-desc{
    position: absolute;
    bottom: 0;
    padding: 10px;
    background-color: #2425267c;
    width: 100%;
    text-align: center;
    /* opacity: 0; */
    transform: translateY(100%);
    transition: all 0.2ms;
}




</style>