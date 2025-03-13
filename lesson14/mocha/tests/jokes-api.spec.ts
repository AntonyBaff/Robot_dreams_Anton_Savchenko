import { expect } from 'chai';
import { JokeApiService } from 'src/service-the-joke-api';

describe('Jokes API', () => {
    const myJokeApiService = new JokeApiService();

    it('should get a random joke', async () => {
        const randomJoke = await myJokeApiService.getRandomJoke();
        expect(randomJoke.status).to.equal(200);
        expect(randomJoke.data).to.have.property('setup');
        expect(randomJoke.data).to.have.property('punchline');
    });

    it('should get joke types', async () => {
        const jokeTypes = await myJokeApiService.getJokeTypes();
        expect(jokeTypes.status).to.equal(200);
        expect(jokeTypes.data).to.be.an('array');
        expect(jokeTypes.data).to.have.members(['general', 'knock-knock', 'programming', 'dad']);
    });

    it('should get ten random jokes', async () => {
        const tenRandomJokes = await myJokeApiService.getTenRandomJokes();
        expect(tenRandomJokes.status).to.equal(200);
        expect(tenRandomJokes.data).to.have.length(10);
    });

    it('should get a joke by ID', async () => {
        const jokeById = await myJokeApiService.getJokeById(33);
        expect(jokeById.status).to.equal(200);
        expect(jokeById.data.id).to.be.equal(33);
    });

    it('should get a joke by type "programming" ', async () => {
        const jokeByType = await myJokeApiService.getJokeByType('programming');
        expect(jokeByType.status).to.equal(200);
        expect(jokeByType.data[0]).to.have.property('type');
        expect(jokeByType.data[0].type).to.be.equal('programming');
    });

    it('should get a joke by type "knock-knock" ', async () => {
        const jokeByType = await myJokeApiService.getJokeByType('knock-knock');
        expect(jokeByType.status).to.equal(200);
        expect(jokeByType.data[0]).to.have.property('type');
        expect(jokeByType.data[0].type).to.be.equal('knock-knock');
    });

    it('should get a joke by type "general" ', async () => {
        const jokeByType = await myJokeApiService.getJokeByType('general');
        expect(jokeByType.status).to.equal(200);
        expect(jokeByType.data[0]).to.have.property('type');
        expect(jokeByType.data[0].type).to.be.equal('general');
    });

    it('should get a joke by type "dad"', async () => {
        const jokeByType = await myJokeApiService.getJokeByType('dad');
        expect(jokeByType.status).to.equal(200);
        expect(jokeByType.data[0]).to.have.property('type');
        expect(jokeByType.data[0].type).to.be.equal('dad');
    });
});
