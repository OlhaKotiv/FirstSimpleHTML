

var globalArticleMainImageFileNameToUpload = null;


//====================== see the picture ===========================//

function uploadMainArticleImg(file){

    //------- put the file in global variable
    globalArticleMainImageFileNameToUpload = file;

    //------- if file was chosed put it in FileReader
    if (file != undefined){
        if (!file.type.match('image.*')) {
            showError('File type should be an image', 'popup');
            return;
        }

        var reader = new FileReader();
        reader.onload = (function(file){

            return function(e){

                //------- show file in .imgarticle
                if ($('.logo-holder.imgarticle img').length){

                    $('.logo-holder.imgarticle img').fadeOut('fast', function(){
                        $('.logo-holder.imgarticle').append('<img src="' + e.target.result + '">');
                        $(this).remove();
                    });
                } else {
                    $('.logo-holder.imgarticle').append('<img src="' + e.target.result + '">');
                }
            };
        })(file);
        reader.readAsDataURL(file);
    }
}


$(document).ready(function(){

    //------- click on he button that choose the img
    $('body').on('click', '#main-article-img', function(){
        $('#imgarticle').click();
    });

    //------- choose img by input with type file
    $('body').on('change', '#imgarticle', function(f){

        var files = f.target.files;
        var file = files[0];

        uploadMainArticleImg(file);

    });

    //====================== delete image ===========================//

    $('#del-main-img').on('click', function(){

        //-------check are we have smth to delete 
        if ($('.logo-holder img').length && ($('.logo-holder img').attr('src').indexOf('noimage') == -1)){

            $('.logo-holder img').fadeOut('fast', function(){

                globalArticleMainImageFileNameToUpload = null;
                //------- add class for button edit-article,mark that old img must be deleted
                $('#edit-article').addClass('todelete');
                $(this).remove();
            });

            $('.logo-holder').append('<img src="../img/no_image.png" alt="noimage" />');
        }
    });
});