'use strict';

angular
    .module('pechakuchaAppApp')
    .factory('AjaxFactory', function ($http) {

        var apikey = 'wUoQDRVc32IyOToAIVKFzrrfNvEfLUbbdGh3VhzNntgXsW0RBN';
        var urlBase = 'http://api.tumblr.com/v2/blog/theuniverseofstyle.tumblr.com/posts/photo?api_key=' + apikey + '&limit=50&callback=JSON_CALLBACK';
        var ajaxFunctions = {};

        // Get all messages *
        ajaxFunctions.getContent = function () {
            return $http.jsonp(urlBase);
        };

        return ajaxFunctions;
    });