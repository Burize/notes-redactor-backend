# Rest server for [notes redactor](https://github.com/Burize/notes-redactor) 

### Used features:
 * [KoaJS](https://github.com/koajs/koa) as rest framework
 * TypeScript
 * MongoDB

### Restore and start DataBase

```bash
# create local folder for data base 
mkdir dataBase

# run mongo at created folder
mongod --port 27017 --dbpath=./dataBase

# restore data from backup
mongorestore backup


```

### Start server

```bash
npm i
npm run dev
```


### TODO

At that moment there is no relations between users and notes: all users work with all notes. Need make separate notes by user (auth, cookie and etc). 
