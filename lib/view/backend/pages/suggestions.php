<style>
	@media screen and (max-width: 2299px) and (min-width: 1600px) {
		#the-list {
		display: flex;
		flex-wrap: wrap;
		}
		.plugin-card {
		margin: 8px !important;
		width: calc(50% - 4px - 16px)!important;
		}
	}
	</style>

	<div class="wrap" style="
		position: relative;
		margin: 25px 40px 0 20px;
		max-width: 1200px;"> 
	<form id="plugin-filter" method="post" class="importer-item">
		<?php $wp_list_table->display(); ?>
	</form>
</div>
