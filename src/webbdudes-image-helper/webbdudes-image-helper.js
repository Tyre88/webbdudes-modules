/*
 Created by: Victor �hrstr�m
 Email: victor@webbdudes.se
 Website: http://webbdudes.se
 Version: 0.1
 */

(function(angular) {
    angular.module('webbdudes-image-helper', []);
    angular.module('webbdudes-image-helper').directive('fallbackSrc', fallbackSrc);
    angular.module('webbdudes-image-helper').directive('fitImage', fitImage);

    function fallbackSrc() {
        var directive = {
            restrict: "A",
            link: linkFunction
        };
        function linkFunction(scope, element, attrs) {
            element.bind('error', function () {
                angular.element(this).attr('src', attrs.fallbackSrc);
            });
        }
        return directive;
    }

    function fitImage() {
        var directive = {
            restrict: "A",
            link: linkFunction
        };
        return directive;
        function linkFunction(scope, element, attrs) {
            $(element).find("img").on('load', function () {
                var limit = 100;
                if (attrs.fitImage != "")
                    limit = ~~attrs.fitImage;
                if (this.width == this.height) {
                    this.width = limit;
                    this.height = limit;
                }
                else if (this.width > this.height) {
                    this.height = limit;
                }
                else if (this.height > this.width) {
                    this.width = limit;
                }
            });
        }
    }
}(window.angular));