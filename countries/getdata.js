const url = 'https://api.sampleapis.com/countries/countries';

const getData = async(url) => {
    const request = await fetch(url);
    const data = await request.json();
    return data;
};

export const data = getData(url);   
