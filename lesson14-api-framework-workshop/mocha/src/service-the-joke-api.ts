import axios, { AxiosResponse } from 'axios';
import { Joke, JokeType } from './joke-interface';

export class JokeApiService {
    public apiUrl: string;
    public jokeId: number;
    public constructor() {
        this.apiUrl = 'https://official-joke-api.appspot.com/';
        this.jokeId = 1;
    }

    public getRandomJoke(): Promise<AxiosResponse<Joke>> {
        return axios.get(`${this.apiUrl}/random_joke`);
    }

    public getJokeTypes(): Promise<AxiosResponse<JokeType[]>> {
        return axios.get(`${this.apiUrl}/types`);
    }

    public getTenRandomJokes(): Promise<AxiosResponse<Joke[]>> {
        return axios.get(`${this.apiUrl}/random_ten`);
    }

    public getJokeById(jokeId: number): Promise<AxiosResponse<Joke>> {
        return axios.get(`${this.apiUrl}/jokes/${jokeId}`);
    }

    public getJokeByType(jokeType: string): Promise<AxiosResponse<Joke[]>> {
        return axios.get(`${this.apiUrl}/jokes/${jokeType}/random`);
    }
}
