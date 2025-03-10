import { PactV3 } from '@pact-foundation/pact'; // Імпортуємо Pact V3
import axios from 'axios'; // Імпортуємо axios для виконання HTTP-запитів
import { expect } from 'chai'; // Імпортуємо Chai для перевірок

// Налаштовуємо Pact V3 для провайдера API PetStore
const provider = new PactV3({
    consumer: 'PetStoreConsumer', // Ім'я споживача
    provider: 'PetStoreAPI' // Ім'я надавача API
});

// Опис тестів
describe('PetStore API Contract Tests', () => {
    it('should fetch a pet by ID', () =>
        provider.executeTest(async (mockServer) => {
            const petId = 9223372036854771000;

            await provider.addInteraction({
                states: [{ description: 'pet with ID 9223372036854771000 exists' }],
                uponReceiving: 'a request to fetch a pet by ID',
                withRequest: {
                    method: 'GET',
                    path: `/v2/pet/${petId}`
                },
                willRespondWith: {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: {
                        id: petId,
                        name: 'Fluffy',
                        status: 'available',
                        category: { id: 1, name: 'Dogs' },
                        tags: [{ id: 101, name: 'friendly' }]
                    }
                }
            });

            // Виконуємо HTTP-запит до мок-сервера Pact
            const petResponse = await axios.get(`${mockServer.url}/v2/pet/${petId}`);

            // Перевіряємо, що відповідь має статус 200
            expect(petResponse.status).to.equal(200);

            // Перевіряємо, що структура відповіді відповідає очікуваній
            expect(petResponse.data).to.include.all.keys('id', 'name', 'status', 'category', 'tags');
            expect(petResponse.data.id).to.equal(petId);
            expect(petResponse.data.name).to.be.a('string');
            expect(petResponse.data.status).to.be.a('string');
            expect(petResponse.data.category).to.be.an('object');
            expect(petResponse.data.category.id).to.be.a('number');
            expect(petResponse.data.category.name).to.be.a('string');
            expect(petResponse.data.tags).to.be.an('array');
            expect(petResponse.data.tags[0]).to.include.all.keys('id', 'name');
            expect(petResponse.data.tags[0].id).to.be.a('number');
            expect(petResponse.data.tags[0].name).to.be.a('string');
        })
    );
});
