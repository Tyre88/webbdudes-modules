/*
Created by: Victor Öhrström
Email: victor@webbdudes.se
Website: http://webbdudes.se
Version: 0.1
 */
(function(angular){
	angular.module('webbdudes-loader', ['ng'])
		.service('loaderService', function() {

			this.Color = "";

			this.ShowLoading = function()
			{
				var count = $('webbdudes-loader').attr('attr-count');
				count++;
				$('webbdudes-loader').attr('attr-count', count);
				setTimeout(function() {
					var count = $('webbdudes-loader').attr('attr-count');
					if(count > 0)
						$('webbdudes-loader').show();
				}, 1000);
			};

			this.HideLoading = function()
			{
				var count = $('webbdudes-loader').attr('attr-count');
				count--;
				if(count <= 0)
					this.ForceHideLoading();
				else
					$('webbdudes-loader').attr('attr-count', count);
			};

			this.ForceHideLoading = function()
			{
				$('webbdudes-loader').attr('attr-count', '0');
				$('webbdudes-loader').hide();
			};

			this.ApplyColors = function()
			{
				$('#webbdudes-loader-colors').remove();
				$('body').append('<style id="webbdudes-loader-colors">.loader3:after, .loader1, .loader1:before, .loader1:after{background: ' + this.Color +'}</style>');
			}
		})
		.directive('webbdudesLoader', function() {
			return {
				restrict: "E",
				template: "<div class='loader3'></div>"
			}
		})
		.run(function() {
			$('body').append('<webbdudes-loader attr-count="0"></webbdudes-loader>');
			$('webbdudes-loader').hide();
		});
}(window.angular));