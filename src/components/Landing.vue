<script>
import Avatar from './Avatar.vue';
import { Cursor } from '../animation/cursor_handling';

export default {
    components: {
        Avatar
    },
    data() {
        const cursor = new Cursor()
        return {
            cursor
        }
    },
    methods: {
        expand_animation() {
            let all_avatar = document.getElementsByClassName('avatar')
            for (let i = 0; i < all_avatar.length; i++) {
                const avatar = all_avatar[i];
                avatar.style.transform = `translateX(0px)`;
                avatar.style['margin-inline'] = `5px`;

            }
            this.cursor.hover()

        },
        compress_avatar() {
            let all_avatar = document.getElementsByClassName('avatar')
            let mult_ = 1;
            for (let i = 0; i < all_avatar.length; i++) {
                const avatar = all_avatar[i];
                avatar.style.transform = `translateX(-${10 * mult_}px)`
                avatar.style['margin-inline'] = `0px`;

                mult_++;

            }
            this.cursor.leave()

        }
    },
    mounted() {
        this.compress_avatar()
    }


}
</script>

<template>
    <div class="main-landing">
        <div class="col-1">
            <div class="slogan">
                Discover Digital Art and Collect NFTs.
            </div>
            <div class="sub-slogan">
                Endasmu is a shared liquidity market smart contract which is used by multible website to provide the users
                the best possible experience.
            </div>
            <div class="call-to-actions">
                <div class="btn-secondary">Get Started</div>
                <div class="btn-thirdly">Learn More </div>
            </div>
            <div class="stats row w-100 align-center ">
                <div class="row justify-space-around w-100">
                    <div class="col">
                        <div class="label">Artwork</div>
                        <div class="value">27k+</div>
                    </div>
                    <div class="col">
                        <div class="label">Auction</div>
                        <div class="value">25k+</div>
                    </div>
                    <div class="col">
                        <div class="label">Artist</div>
                        <div class="value">12k+</div>
                    </div>
                </div>
                <div class="col w-50">
                    <div class="row p-10 align-center">
                        <div class="label p-10">Art</div>
                        <div class="value">3.4 ETH</div>
                    </div>
                    <div class="avatar-section p-10" @mouseover="expand_animation" @mouseout="compress_avatar">
                        <Avatar class="avatar" image="./images/1.webp" />
                        <Avatar class="avatar" image="./images/2.jpeg" />
                        <Avatar class="avatar" image="./images/3.jpg" />
                        <Avatar class="avatar" image="./images/4.jpg" />
                        <Avatar class="avatar" image="./images/1.webp" />
                    </div>
                </div>
            </div>
        </div>

        <div class="img-woman">
            <img src="../assets/woman afro 2.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.col-1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    z-index: 10;
}

.main-landing {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    justify-content: center;
}

.slogan {
    font-size: 6em;
    line-height: 100%;
    width: 50%;
    font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.sub-slogan {
    width: 50%;
}

.call-to-actions {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.call-to-actions * {
    margin: 30px 0px;
}


.img-woman {
    position: absolute;
    top: 0;
    right: 40px;
    height: 600px;
    z-index: 9;
}

.img-woman img {
    width: 100%;
    height: 100%;
}

.stats {
    width: 100%;
    margin: 40px 0px;
    justify-content: space-between;
    padding: 50px 10px;
    position: relative;
    z-index: 10;
}

.stats::before {
    background-color: rgba(255, 255, 255, 0.034);
    border-radius: 20px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);

}



.value {
    font-weight: bold;
    font-size: 3em;
}

.stats * {
    z-index: 30;

}

.avatar-section {
    display: flex;
    flex-direction: row;
}

.avatar {
    transition: all 0.4s ease-in-out;

}

@media (max-width: 500px) {
    .main-landing{
        margin-top: 30px;
    }
    .slogan{
        font-size: 4em;
    }
}
</style>