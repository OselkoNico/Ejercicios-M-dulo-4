const { getUsers, urlEndpoint } = require('./fetchAPI');
const axios = require('axios');

jest.mock("axios");

const mockUsers = [
    {id: 1, name: 'Juan Perez'},
    {id: 2, name: 'Laura Gomez'},
    {id: 3, name: 'Luis Dominguez'},
];

describe('Mock en Jest', () => {
    test('Petición usuarios', async () => {
        axios.get.mockResolvedValueOnce(mockUsers);
        const users = await getUsers();
        expect(users).toEqual(mockUsers);
        expect(axios.get).toHaveBeenCalledWith(urlEndpoint);
        });
    });