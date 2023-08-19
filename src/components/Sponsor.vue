<template>
    <div class="sponsor-list">
        <div class="img-sponsor">
            <img src="/images/logos/megascan.png" alt="Megascan logo">
        </div>
        <div class="img-sponsor">
            <img src="/images/logos/Unreal_Engine_Logo.png" alt="Unreal Engine logo">
        </div>
        <div class="img-sponsor">
            <img src="/images/logos/MetaMask-Logo.png" alt="Metamask logo">
        </div>
        <div class="img-sponsor">
            <img src="/images/logos/oculus.png" alt="Oculus logo">
        </div>
        <div class="img-sponsor">
            <img src="/images/logos/binance.png" alt="Binance logo">
        </div>
    </div>

</template>

<style scoped>
.sponsor-list{
    z-index: 14;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.img-sponsor{
    width: 200px;
}
.img-sponsor img{
    width: 100%;
}
</style>