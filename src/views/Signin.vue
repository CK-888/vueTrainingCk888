<template>
	<article>
		<div class="container">
			<div class="overlay-container">
				<div class="overlay">
					<div class="overlay-left">
						<h2>Welcome Back!</h2>
						<p>Please login with your personal info</p>
						<button>Sign In</button>
					</div>
					<div class="overlay-right">
						<h2>Hello, Friend!</h2>
						<p>Please enter your personal details</p>
						<button>Sign In</button>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	.container {
		position: relative;
		width: 768px;
		height: 480px;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
								0 10px 10px rgba(0, 0, 0, .2);
		background: linear-gradient(to bottom, #efefef, #ccc);

		.overlay-container {
			position: absolute;
			top: 0;
			left: 50%;
			width: 50%;
			height: 100%;
			overflow: hidden;
			transition: transform .5s ease-in-out;
			z-index: 100;
		}

		.overlay {
			position: relative;
			left: -100%;
			height: 100%;
			width: 200%;
			background: linear-gradient(to bottom right, #7FD625, #009345);
			color: #fff;
			transform: translateX(0);
			transition: transform .5s ease-in-out;
		}

		@mixin overlays($property) {
			position: absolute;
			top: 0;
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-direction: column;
			padding: 70px 40px;
			width: calc(50% - 80px);
			height: calc(100% - 140px);
			text-align: center;
			transform: translateX($property);
			transition: transform .5s ease-in-out;
		}

		.overlay-left {
			@include overlays(-20%);
		}

		.overlay-right {
			@include overlays(0);
			right: 0;
		}
		
		h2 {
			margin: 0;
		}
		
		p {
			margin: 20px 0 30px;
		}

		button {
			border-radius: 20px;
			border: 1px solid #009345;
			background-color: #009345;
			color: #fff;
			font-size: 1rem;
			font-weight: bold;
			padding: 10px 40px;
			letter-spacing: 1px;
			text-transform: uppercase;
			transition: transform .1s ease-in;

			&:active {
				transform: scale(.9);
			}

			&:focus {
				outline: none;
			}
		}
	}
	button.invert {
		background-color: transparent;
		border-color: #fff;
	}

</style>