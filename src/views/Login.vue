<template>
	<div id="main-form">
		<div class="main-container-header">
			<p>LOGIN</p>
		</div>
		<div class="main-container-body">
			ID:
			<input type="text" class="input-form id">
			PASS:
			<input type="password" class="input-form password">
		</div>
		<div class="main-container-footer">
			<button type="submit">login</button>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#main-form {
	text-align: center;
	border: 2px solid black;
	width: 40%;
	padding: 10px orange;
}
</style>