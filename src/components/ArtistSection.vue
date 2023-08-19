<script>
import ArtistCard from './ArtistCard.vue';

export default{
    components:{
        ArtistCard
    },
    data(){
        return {
            list_artist: [
                {
                    name: 'Johnny Five',
                    image_pdp: './images/2.jpeg',
                    image_art: './images/art1.png'
                },{
                    name: 'Lucinta Luna',
                    image_pdp: './images/1.webp',
                    image_art: './images/art2.png'
                }
            ]
        }
    },
}

</script>

<template>
    <div class="artist-section">
        <div class="aside-artist-section">
            <div class="title-section">Artiste</div>
            <div class="big-title-section">Top List Artist.</div>
            <div class="article-section">
                We have dozens of artists who contribute to create amazing works
            </div>
        </div>
        <div class="artist-list">
            <div v-for="(artist, index) in list_artist" :key="index">
                <ArtistCard :name="artist.name" :image_art="artist.image_art" :image_artist="artist.image_pdp" ></ArtistCard>
            </div>
        </div>
    </div>
</template>

<style scoped>
.artist-section {
    z-index: 12;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.aside-artist-section{
    z-index: 12;
}

.artist-list{
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 90%;
    flex-wrap: wrap;
}

.artist-list *{
    margin: 5px;
}
</style>