const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }

                    res.end(content)
                }
            )
        } else if(req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }

                    res.end(content)
                }
            )
        } else  if(req.url === '/api/users') {
            res.writeHead(200, {
                'Content-Type': 'text/json; charset=utf-8'
            })

            const users = [
                {name: 'Vladilen', age: 25},
                {name: 'Taschdo', age: 30}
            ]

            res.end(JSON.stringify(users))
        }
    }
})

server.listen(3000, () => {
    console.log('Server in running...')
})