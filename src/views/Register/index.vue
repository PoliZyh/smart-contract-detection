<template>
    <div class="r-page">
        <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>

      <div class="input-container ic1">
        <input placeholder="" type="text" class="input" id="firstname">
        <div class="cut"></div>
        <label class="iLabel" for="firstname">Username</label>
      </div>

      <div class="input-container ic2">
        <input placeholder="" type="text" class="input" id="lastname">
        <div class="cut"></div>
        <label class="iLabel" for="lastname">Password</label>
      </div>
      <div class="input-container ic2">
        <input placeholder="" type="text" class="input" id="email">
        <div class="cut cut-short"></div>
        <label class="iLabel" for="email">CheckPassword</label>
      </div>
      <button class="submit" type="text">submit</button>
    </div>
    </div>
</template>


<script setup>

</script>


<style scoped lang="scss">
.r-page {
    display: flex;
    height: calc(100vh - 70px);
    justify-content: center;
    align-items: center;
    .form {
        margin-top: -10vh;
        border: 1px solid white;
        background-color: #15172b;
        border-radius: 20px;
        box-sizing: border-box;
        height: 500px;
        padding: 20px 70px;
        width: 420px;
    }

    .title {
        color: #eee;
        font-family: sans-serif;
        font-size: 36px;
        font-weight: 600;
        margin-top: 30px;
    }

    .subtitle {
        color: #eee;
        font-family: sans-serif;
        font-size: 16px;
        font-weight: 600;
        margin-top: 10px;
    }

    .input-container {
        height: 50px;
        position: relative;
        width: 100%;
    }

    .ic1 {
        margin-top: 40px;
    }

    .ic2 {
        margin-top: 30px;
    }

    .input {
        background-color: #303245;
        border-radius: 12px;
        border: 0;
        box-sizing: border-box;
        color: #eee;
        font-size: 18px;
        height: 100%;
        outline: 0;
        padding: 4px 20px 0;
        width: 100%;
    }

    .cut {
        background-color: #15172b;
        border-radius: 10px;
        height: 20px;
        left: 20px;
        position: absolute;
        top: -20px;
        transform: translateY(0);
        transition: transform 200ms;
        width: 76px;
    }

    .cut-short {
        width: 50px;
    }

    .iLabel {
        color: #65657b;
        font-family: sans-serif;
        left: 20px;
        line-height: 14px;
        pointer-events: none;
        position: absolute;
        transform-origin: 0 50%;
        transition: transform 200ms, color 200ms;
        top: 20px;
    }

    .input:focus~.cut {
        transform: translateY(8px);
    }

    .input:focus~.iLabel {
        transform: translateY(-30px) translateX(10px) scale(0.75);
    }

    .input:not(:focus)~.iLabel {
        color: #808097;
    }

    .input:focus~.iLabel {
        color: #dc2f55;
    }

    .submit {
        background-color: #08d;
        border-radius: 12px;
        border: 0;
        box-sizing: border-box;
        color: #eee;
        cursor: pointer;
        font-size: 18px;
        height: 50px;
        margin-top: 38px;
        text-align: center;
        width: 100%;
    }

    .submit:active {
        background-color: #06b;
    }
}
</style>