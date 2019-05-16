import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import {
    grid
} from '../elements';

const gridBox = grid.self;

if (gridBox !== null) {
    const masnry = new Masonry(gridBox, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 20
    });

    imagesLoaded(gridBox).on('progress', function () {
        masnry.layout();
    });

    gridBox.addEventListener('click', function (e) {
        if (e.target.nodeName === 'IMG') {
            e.target.parentElement.classList.toggle('active');
        }
    })
}