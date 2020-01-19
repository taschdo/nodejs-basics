const http = require('http')

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        res.end(`
            
        `)
    }
})

server.listen(3000, () => {
    console.log('Server in running...')
})