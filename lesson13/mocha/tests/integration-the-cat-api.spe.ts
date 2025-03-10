import axios from 'axios';
import { expect } from 'chai';

const API_KEY = 'live_G9n3kq1kBYLrQPxPiEcER3l6MbYMMkDiMjaZuxOysFRnqsIaKJJDEb9fEfD3wcxI';
const BASE_URL = 'https://api.thecatapi.com/v1';
const HEADERS = { 'x-api-key': API_KEY };

describe('TheCatAPI Integration Tests', () => {
    let imageId: string;
    let voteId: number;
    let favoriteId: number;
    const subId = 'my-user-1234';

    it('should fetch a random image', async () => {
        const response = await axios.get(`${BASE_URL}/images/search`, { headers: HEADERS });
        expect(response.status).to.equal(200);
        expect(response.data).to.be.not.empty;
        imageId = response.data[0].id;
        console.log('Image ID: ', imageId);
    });

    it('should add a vote to the image', async () => {
        const response = await axios.post(`${BASE_URL}/votes`, { image_id: imageId, value: 7, sub_id: subId }, { headers: HEADERS });
        expect(response.status).to.equal(201);
        voteId = response.data.id;
        console.log('Vote ID: ', voteId);
    });

    it('should add the image to favourites', async () => {
        const response = await axios.post(`${BASE_URL}/favourites`, { image_id: imageId, sub_id: subId }, { headers: HEADERS });
        expect(response.status).to.equal(200);
        favoriteId = response.data.id;
    });

    it('should retrieve the vote by sub_id', async () => {
        const response = await axios.get(`${BASE_URL}/votes?sub_id=${subId}`, { headers: HEADERS });
        expect(response.status).to.equal(200);
        expect(response.data.length).to.greaterThan(0);
    });

    it('should retrieve the favourite image by sub_id', async () => {
        const response = await axios.get(`${BASE_URL}/favourites?sub_id=${subId}`, { headers: HEADERS });
        expect(response.status).to.equal(200);
        expect(response.data.length).to.greaterThan(0);
    });

    it('should delete the vote', async () => {
        const response = await axios.delete(`${BASE_URL}/votes/${voteId}`, { headers: HEADERS });
        expect(response.status).to.equal(200);
    });

    it('should delete the favourite', async () => {
        const response = await axios.delete(`${BASE_URL}/favourites/${favoriteId}`, { headers: HEADERS });
        expect(response.status).to.equal(200);
    });
});
