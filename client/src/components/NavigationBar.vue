<template>
    <nav class="navbar">
        <img class="logo" src="../assets/logo_hmae.png" >
        <div class='spacer'></div>
        <div>
            <div>
                <p>Página Principal</p>
            </div>
            <div>
                <p>Sobre</p>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavigationBar",
}
</script>


<style>
nav{
    max-height: 60px;
    height: 100%;
    width:100%;
}
nav> * {
    max-height: inherit;
    padding: 8px;
}
.navbar >div >div{
    margin: 8px;
}
.spacer{
    flex-grow: 1;
}
</style>>
