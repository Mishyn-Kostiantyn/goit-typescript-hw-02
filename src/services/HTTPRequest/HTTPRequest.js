
import axios from 'axios';
const instance = axios.create ({
    baseURL: 'https://api.unsplash.com/search/photos',
    params: { 
        client_id: 'iczhnXqpujCHa7ylFBKVjHqswLYa1gorENOMQkIKGbo',
        image_type: 'photo',
        orientation: 'landscape',
        content_filter: 'high',

    }
});
export const photoPerPage = 12;
export async function requestImageGallery(query, pageNumber) {
    const { data } = await instance.get('', {
        params: {
            query: query,
            page: pageNumber,
            per_page: photoPerPage,
        }
    });
    return data;
}
           