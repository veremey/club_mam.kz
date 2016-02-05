
ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [38.580671, 68.786211],
            zoom: 17,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Таджикистан, Душанбе, пр. Рудаки 83'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [34, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).

    }, {
      balloonShadow: false
    });
    myMap.geoObjects.add(myPlacemark);
     myMap.behaviors
         .disable(['scrollZoom']);

});