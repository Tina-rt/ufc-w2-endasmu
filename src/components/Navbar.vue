<template>
    <div class="nav">
        <div class="nav-brand">EnDasmu</div>
        <div class="nav-items">
            <div class="nav-item"><a href="#collection">Collection</a></div>
            <div class="nav-item"><a href="#marketplace">MarketPlace</a></div>
            <div class="nav-item"><a href="#marketplace">Community</a></div>
            <div class="nav-item"><div class="btn-primary">Connect Wallet</div></div>
        </div>
    </div>
</template>

<style>
    .nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        z-index: 90;
        position: sticky;
    }

    .nav-items{
        display: flex;
        flex-direction: row;
        width: 50%;
        justify-content: space-between;
        align-items: center;
    }
    .nav-item a{
        text-decoration: none;
        color: white;
    }
    
    @media (max-width: 600px) {
        .nav{
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: start;
            font-size: 20px;
            height: 100vh;
            width: fit-content;
            float:right;
            position: fixed;
            right: 20px;
        }
        .nav-items{
            flex-direction: column;
            align-items: end;
            justify-content: space-evenly;
            height: 100%;
            width: 100%;
        }
    }

</style>