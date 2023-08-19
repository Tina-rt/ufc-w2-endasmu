<script>
import CollectionItem from './CollectionItem.vue';

export default {
    components: {
        CollectionItem
    }
}
</script>

<template>
    <div class="main-collection align-center ">
        <div class="row wrap-invert">
            <div class="collection-list">
                <CollectionItem img="./images/black men.png" />
                <CollectionItem img="./images/woman pony tails.png" />
                <CollectionItem img="./images/black woman turban.png" />
                <CollectionItem img="./images/white woman.png" />
            </div>
            <div class="aside-collection">
                <div class="title-section">
                    Popular Item
                </div>
                <div class="big-title-section">
                    Hot Trending On This Week.
                </div>
                <div class="article-section">
                    Various kinds of NFTs that are blending the trend will be reset every week. Don't miss out on the best
                    NFTs
                    every week
                </div>
                <div class="">
                    <div class="btn-thirdly">Learn more</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-collection {
    height: 100%;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    /* justify-content: space-; */
    flex-wrap: wrap-reverse;
    width: 100%;
    z-index: 10;

}

.collection-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    justify-items: center;

    width: 50%;
    height: fit-content;
}

.collection-list * {
    margin: 20px;
}

.aside-collection {
    padding: 0 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
}


@media (max-width: 500px) {
    
    .collection-list{
        width: 70%;
    }
    .aside-collection{
        width: auto;
        padding: 40px 0;
    }
}



</style>