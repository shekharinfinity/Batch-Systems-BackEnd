const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const tagRoutes = require('./routes/tagRoutes');
const sequelize = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/posts', postRoutes);
app.use('/tags', tagRoutes);

sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Unable to sync database:', error);
});
