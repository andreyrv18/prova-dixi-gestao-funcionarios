export const fetchAPI = async (): Promise<string> => {
    const response = await fetch (`http://localhost:8080/hello`);
    return await response.text();
}