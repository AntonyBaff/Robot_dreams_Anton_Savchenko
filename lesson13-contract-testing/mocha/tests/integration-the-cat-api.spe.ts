import axios from 'axios';
import { expect } from 'chai';

const API_KEY = 'live_G9n3kq1kBYLrQPxPiEcER3l6MbYMMkDiMjaZuxOysFRnqsIaKJJDEb9fEfD3wcxI';
const BASE_URL = 'https://api.thecatapi.com/v1';
const HEADERS = { 'x-api-key': API_KEY };

describe('TheCatAPI Integration Tests', () => {
    let imageId: string;
    let imageUrl: string;
    let voteId: number;
    let favoriteId: number;
    const subId = 'my-user-1234';

    it('should fetch a random image', async () => {
        const response = await axios.get(`${BASE_URL}/images/search`, { headers: HEADERS });
        expect(response.status).to.equal(200);
        expect(response.data).to.be.not.empty;
        imageId = response.data[0].id;
        imageUrl = response.data[0].url;
        console.log('Image ID: ', imageId);
        console.log('Image URL: ', imageUrl);
    });

    it('should add a vote to the image', async () => {
        const response = await axios.post(`${BASE_URL}/votes`, { image_id: imageId, value: 7, sub_id: subId }, { headers: HEADERS });
        voteId = response.data.id;
        const response2 = await axios.get(`${BASE_URL}/votes/${voteId}`, { headers: HEADERS });
        expect(response.status).to.equal(201);
        expect(response2.data.image.url).to.equal(imageUrl);
        voteId = response.data.id;
        console.log('Vote ID: ', voteId);
    });

    it('should add the image to favorites', async () => {
        const response = await axios.post(`${BASE_URL}/favourites`, { image_id: imageId, sub_id: subId }, { headers: HEADERS });
        favoriteId = response.data.id;
        const response2 = await axios.get(`${BASE_URL}/favourites/${favoriteId}`, { headers: HEADERS });
        expect(response.status).to.equal(200);
        expect(response2.data.image.url).to.equal(imageUrl);
    });

    it('should delete the vote', async () => {
        const responseDelete = await axios.delete(`${BASE_URL}/votes/${voteId}`, { headers: HEADERS });
        const responseGet = await axios.get(`${BASE_URL}/votes/`, { headers: HEADERS });
        expect(responseDelete.status).to.equal(200);
        expect(responseGet).to.not.deep.include({ id: `${voteId}` });
    });

    it('should delete the favourite', async () => {
        const response = await axios.delete(`${BASE_URL}/favourites/${favoriteId}`, { headers: HEADERS });
        const responseGet = await axios.get(`${BASE_URL}/favourites`, { headers: HEADERS });
        expect(response.status).to.equal(200);
        expect(responseGet).to.not.deep.include({ id: `${favoriteId}` });
    });
});
