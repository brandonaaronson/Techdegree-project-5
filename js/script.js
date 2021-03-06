$('#srchInput').on('keyup', function() {

    const $input  = $('#srchInput').val().toUpperCase();
    const $aRef   = $('.aref');
    const $imgRef = $('.isrc');
    for ( i=0; i < $aRef.length; i += 1) {
        const caption = $($aRef[i]).attr('title').toUpperCase();
        const $attr = $($imgRef[i]).attr('alt').toUpperCase();
        if (caption.indexOf($input) > -1 || $attr.indexOf($input) > -1) {
            $aRef[i].style.display = '';
        } else {
            $aRef[i].style.display = 'none';
        }
    } console.log($aRef);
});