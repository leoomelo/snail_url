import app from './app'
import database from './database'

database.sync()
console.log('Database running at 3306')

app.listen(3000, () => {
    console.log('Listening on port 3000')
})