/********search*********/

(function ( $ ) {
    $.fn.autoSearch = function() {
        var request = '';
        var input = this;
        input.wrap('<div class="searchHolder"></div>');
        input.parent().append('<div class="autoFillBar"></div>');
        var autoFillBar = input.next();
        input.on('focus', function(){
            searchCheck();
        });
        input.on('keyup', function(e){
            if (e.keyCode == 40){
                if (autoFillBar.find('.active').length == 0){
                    autoFillBar.find('.item:first').addClass('active');
                } else {
                    autoFillBar.find('.active').removeClass('active').next().addClass('active');
                }
                var val = autoFillBar.find('.active').text();
                input.val(val);
            } else if (e.keyCode == 38) {
                if (autoFillBar.find('.active').length == 0){
                    autoFillBar.find('.item:last').addClass('active');
                } else {
                    autoFillBar.find('.active').removeClass('active').prev().addClass('active');
                }
                var val = autoFillBar.find('.active').text();
                input.val(val);
            } else if (e.keyCode == 13) {
                //тут можно сделать переход на страницу статьи или все что пожелаешь
            } else {
                searchCheck();
            }
        });
        autoFillBar.on('click', '.item', function(){
            //тут можно сделать переход на страницу статьи или все что пожелаешь
            input.val( $(this).text() );
            return false;
        });
        $('html').on('click', function(e){
            if ((!$(e.target).hasClass('autoFillBar')) && (!$(e.target).parent().hasClass('autoFillBar')) && (!$(e.target).parent().hasClass('searchHolder'))) {
                autoFillBar.slideUp('fast', function(){
                    autoFillBar.children().remove();
                });
            }
        });
        function searchCheck(){
            if (input.val().length >= 2){
                // тут нужно будет описать ajax-запрос к бэкэнду, который вернет результаты поиска
                var data = {};
                data.action = 'search';
                data.request = input.val();
                // ajax-запрос на сервер, откомментируй, когда будет куда отсылать POST
  //                        $.ajax({
  //                            url: '/',
  //                            type: 'POST',
  //                            dataType: 'json',
  //                            data: data
  //                        }).done(function(data){
                            autoFillBar.children().remove();
                            // следующая строчка читает результат ajax-запроса, откомментируй ее, когда будет готов бэкэнд
                            // var articlesArray = data.result;
                            // Здесь я описываю фейковый поиск, чтобы продемонстрировать работу плагина
                            // строки 241 - 262 можно выпилить несчадно
                            // поиск ведется только по одному слову, но твоя база точно может лучше ;)
                            var articlesArray = [];
                            var dbArticles = [
                                {title: "HTML"},
                                {title: "JS"},
                                {title: "JAVASCRIPT"},
                                {title: "CSS"},
                                {title: "GRID"},
                                {title: "BABEL"},
                                {title: "ANGULAR"}
                            ];
                            for (var j=0; j<dbArticles.length; j++){
                                var searchRequestStart = new RegExp('^' + input.val() + '.*', 'i');
                                var searchRequestMiddle = new RegExp(' ' + input.val() + '.*', 'i');
                                if ( (searchRequestStart.test(dbArticles[j].title)) || (searchRequestMiddle.test(dbArticles[j].title)) ) {
                                    articlesArray.push(dbArticles[j]);
                                }
                            }
                            // Здесь фейк заканчивается и начинаются чудеса
                            for (var i=0; i <= articlesArray.length - 1; i++){
                                var name = articlesArray[i].title;
                                var regex = input.val();
                                if (regex.indexOf(' ') == -1){
                                    var searchMask = regex;
                                    var regEx = new RegExp(searchMask, "ig");
                                    var num = name.toLowerCase().indexOf(regex.toLowerCase());
                                    var strname = name.substr(num, regex.length);
                                    var replaceMask = '<b class="highlighted">' + strname + '</b>';
                                    name = name.replace(regEx, replaceMask);
                                } else {
                                    var regexArr = regex.split(' ');
                                    for(var n=0; n<regexArr.length; n++){
                                        if (regexArr[n].length > 0){
                                            var searchMask = regexArr[n];
                                            var regEx = new RegExp(searchMask, "ig");
                                            var num = name.toLowerCase().indexOf(regexArr[n].toLowerCase());
                                            var strname = name.substr(num, regexArr[n].length);
                                            var replaceMask = '<b class="highlighted">' + strname + '</b>';
                                            var stopWords = '<b class="highlighted"></b>';
                                            if (stopWords.indexOf(strname.toLowerCase()) == -1){
                                                name = name.replace(regEx, replaceMask);
                                            }
                                        }
                                    }
                                }
                                autoFillBar.append('<div class="item">' +
                                        '<span>' + name + '</span>' +
                                        '</div>');
                            }
                            autoFillBar.slideDown('fast');
                          // конец ajax-запроса, ты знаешь, что делать ;)
  //                                })
            }
        }
        return input;
    };
    $(document).ready(function(){
        $('#superSearch').autoSearch();
    });
  }( jQuery ));