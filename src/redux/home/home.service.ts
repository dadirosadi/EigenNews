const getAllNews = async () => {
    const data = await fetch(`${process.env.REACT_APP_BASE_URL}/v2/everything?q=tesla&from=2021-11-24&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            return res.json()
        }).then(res => {
            return res

        })
    return data;
}

export { getAllNews }