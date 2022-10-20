const Application = require('./fw/Application');

const userRouter = require('./src/user-router');
const parseJson = require('./fw/parseJson');
const parseUrl = require('./fw/parseURL');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(parseJson);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(userRouter);

const start = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://demuron:43215678Dima@mongodb.ft3jec6.mongodb.net/?retryWrites=true&w=majority'
        );
        app.listen(PORT, () =>
            console.log(`server was started on port=${PORT}`)
        );
    } catch (e) {
        console.log(e);
    }
};

start();
