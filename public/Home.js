axios.post('http://localhost:80/weather', {
    sessionId: Cookies.get("SessionID"),
})
.then ((response) => {
    const resp = response.data;
    console.log(resp);
}, (error) => {
    console.log(error);
})
