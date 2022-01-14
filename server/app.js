const express = require('express')
const cors = require('cors')
const { Favorite, Blacklist, User } = require('./db/models')
const app = express()
const PORT = 3001

const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = {
  store: new FileStore(), // хранилище сессий
  key: 'sid', // ключ куки
  secret: "gchjtghjkl;bjkll", // шифрование id сессии
  resave: false, // пересохранение сессии (когда что-то поменяли - false)
  saveUninitialized: false, // сохраняем пустую сессию (чтоб посмотреть)
  httpOnly: true, // нельзя изменить куки с фронта
  cookie: { expires: 24 * 60 * 60e3 },
};

app.use(session(sessionConfig))

app.use(cors({
  origin: true,
  credentials: true,
}))
app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/favorites', async (req, res) => {
  const animals = await Favorite.findAll({ raw: true })
  console.log(animals);
  res.json(animals)
})

app.get('/black', async (req, res) => {
  const allblack = await Blacklist.findAll({ raw: true })
  res.json(allblack)
})
app.post('/black', async (req, res) => {
  const newBlack = await Blacklist.create(req.body)
  res.json(newBlack)
})

app.post('/add', async (req, res) => {
  const newAnimal = await Favorite.create(req.body)
  res.json(newAnimal)
})

app.get('/favorite', async (req, res) => {
  const allAnimals = await Favorite.findAll({ raw: true })
  res.json(allAnimals)
})


app.post('/register', async (req, res) => {
  try {
    const { password, email } = req.body;
    const currentUser = await User.findOne({ raw: true, where: { email } });
    if (!currentUser) {
      const newUser = await User.create({ password, email });
      req.session.userId = newUser.id;
      req.session.userEmail = newUser.email;
      res.json(newUser)
    } else {
      res.sendStatus(333);
    }
  } catch (err) {
    console.log(err);
  }
})



app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
})
