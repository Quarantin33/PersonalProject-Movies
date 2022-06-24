const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3426c23cf83bbd4d5e7ddeafa3a36e95',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;