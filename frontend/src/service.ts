export const fetchAPI = async (): Promise<string> => {
    const response = await fetch (`http://localhost:8080/hello`);
    if(!response.ok) {
        throw new Error('Falha ao buscar');
    }
    return await response.text();
}