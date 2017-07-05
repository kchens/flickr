To start:

1. Open up two terminal tabs
2. In one of them: `mysql -u root < schema.sql`. This creates the database
3. Run `npm start`
4. In the other tab, run: `npm run build`
5. Open up `http://localhost:3000/#/`.
6. Wait a minute for the database to update images (This is a bug that happens on the first load of the app.)
7. Reload `http://localhost:3000/#/`. You should see pictures.
