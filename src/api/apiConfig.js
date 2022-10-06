const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2072de16219a5d8319d0c5bd869d31ea',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;