import { MatchersV3, PactV3 } from '@pact-foundation/pact';
import axios from 'axios';
import { expect } from 'chai';

describe('PetStore API Contract Test', () => {
    const provider = new PactV3({
        consumer: 'PetStoreConsumer-v3',
        provider: 'PetStoreProvider-v3'
    });

    const petResponseExample = [
        {
            id: 9223372036854742000,
            category: {
                id: 0,
                name: 'string'
            },
            name: 'doggie',
            photoUrls: ['string'],
            tags: [
                {
                    id: 0,
                    name: 'string'
                }
            ],
            status: 'string'
        }
    ];

    const expectedBody = MatchersV3.like(petResponseExample);

    describe('GET, pet/petId', () => {
        it('should return a pet by ID', async () => {
            provider
                .given('Pet with ID 9223372036854742000 exists')
                .uponReceiving('a request for pet by ID')
                .withRequest({
                    method: 'GET',
                    path: '/v2/pet/9223372036854771000'
                    //headers: { Accept: 'application/json' }
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: expectedBody
                });

            return provider.executeTest(async (mockServer) => {
                const response = await axios.get(`${mockServer.url}/v2/pet/9223372036854771000`);

                expect(response.status).to.equal(200);

                expect(response.data[0]).to.contain.keys('id', 'name', 'status', 'category', 'tags');
                expect(response.data[0].id).to.be.a('number');
                expect(response.data[0].name).to.be.a('string');
                expect(response.data[0].status).to.be.a('string');
                expect(response.data[0].category).to.be.an('object');
                expect(response.data[0].category.id).to.be.a('number');
                expect(response.data[0].category.name).to.be.a('string');
                expect(response.data[0].tags).to.be.an('array');
                expect(response.data[0].tags[0]).to.include.all.keys('id', 'name');
                expect(response.data[0].tags[0].id).to.be.a('number');
                expect(response.data[0].tags[0].name).to.be.a('string');
            });
        });
    });
});
