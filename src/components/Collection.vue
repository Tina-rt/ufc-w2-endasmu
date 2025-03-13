<script>
import CollectionItem from './CollectionItem.vue';

export default {
  components: {
    CollectionItem
  }
};
</script>

<template>
  <div class="main-collection align-center">
    <div class="collection-list">
      <CollectionItem img="./images/black men2.png" />
      <CollectionItem img="./images/woman pony tails2.png" />
      <CollectionItem img="./images/black woman turban2.png" />
      <CollectionItem img="./images/white woman2.png" />
    </div>
    <div class="aside-collection">
      <div class="title-section">Popular Item</div>
      <div class="big-title-section">Hot Trending On This Week.</div>
      <div class="article-section">
        Various kinds of NFTs that are blending the trend will be reset every week. Don't miss out
        on the best NFTs every week
      </div>
      <div class="">
        <div class="btn-thirdly">Learn more</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-collection {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  /* justify-content: space-; */
  flex-wrap: wrap-reverse;
  width: 100%;
  z-index: 10;
  margin-block: 30vh;
}

.collection-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.collection-list * {
  margin: 20px;
}

.aside-collection {
  padding: 0 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
}

@media (max-width: 500px) {
  .collection-list {
    width: 70%;
  }
  .aside-collection {
    width: auto;
    padding: 40px 0;
  }
}
</style>
