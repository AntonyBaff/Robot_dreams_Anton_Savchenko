import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import axios from 'axios';
import { expect } from 'chai';
import * as path from 'path';
const { like } = MatchersV3;

describe('PetStore API Contract Test', () => {
    const provider = new PactV3({
        consumer: 'PetStoreConsumer-v3',
        provider: 'PetStoreProvider-v3'
    });

    const petResponseExample = {
        category: {
            id: 0,
            name: 'string'
        },
        id: 9223372036854741000,
        name: 'doggie',
        photoUrls: ['string'],
        status: 'available',
        tags: [
            {
                id: 0,
                name: 'string'
            }
        ]
    };

    const EXPECTED_BODY = like(petResponseExample);

    describe('GET, pet/petId', () => {
        it('should return a pet by ID', async () => {
            provider
                .given('Pet with ID 9223372036854741000 exists')
                .uponReceiving('a request for pet by ID')
                .withRequest({
                    method: 'GET',
                    path: '/v2/pet/9223372036854741000'
                    //headers: {
                    //'Content-Type': 'application/json'
                    //Accept: 'application/json'
                    //}
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: EXPECTED_BODY
                });

            return provider.executeTest(async (mockServer) => {
                const response = await axios.get(`${mockServer.url}/v2/pet/9223372036854741000`);

                expect(response.status).to.equal(200);

                // expect(response.data[0]).to.contain.keys('id', 'name', 'photoUrls', 'category', 'tags');
                // expect(response.data[0].id).to.be.a('number');
                // expect(response.data[0].name).to.be.a('string');
                // expect(response.data[0].status).to.be.a('string');
                // expect(response.data[0].category).to.be.an('object');
                // expect(response.data[0].category.id).to.be.a('number');
                // expect(response.data[0].category.name).to.be.a('string');
                // expect(response.data[0].tags).to.be.an('array');
                // expect(response.data[0].tags[0]).to.include.all.keys('id', 'name');
                // expect(response.data[0].tags[0].id).to.be.a('number');
                // expect(response.data[0].tags[0].name).to.be.a('string');
            });
        });
    });
    describe('Pact V3 verification', () => {
        it('verify provider', () => {
            return new Verifier({
                providerBaseUrl: 'https://petstore.swagger.io',
                pactUrls: [path.resolve(process.cwd(), './pacts/PetStoreConsumer-v3-PetStoreProvider-v3.json')]
            })
                .verifyProvider()
                .then(() => {
                    console.log('Pact Verification Complete!');
                });
        });
    });
});
