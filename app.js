(function ($) {

    function init() {
        var $pages = $('.page');
        var $buttonBookCab = $('#button-book-cab');
        var $buttonConfirm = $('#button-confirm');

        function goToPage(selector) {
            return function () {
                $pages.hide();
                $('.page' + selector).show();
            };
        }
        $buttonBookCab.on('click', goToPage('.plan'));
        $buttonConfirm.on('click', goToPage('.confirm'));
    }

    $(document).ready(init);

}($));