// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.gallery');

function createElItem(arr) {
    return arr.map(({ description, original, preview }) => {
        const item = document.createElement('li');
        const a = document.createElement('a');
        a.href = original;
        item.append(a);
        const img = document.createElement('img');
        img.src = preview;
        img.alt = description;
        a.append(img);
        return item
    });
}
list.append(...createElItem(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
    captionType: 'attr',
  captionsData:	'alt',
  captionPosition: 'bottom',
  captionDelay: 300,
});