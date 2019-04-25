## Running locally

1. Start venv `python -m venv venv`
2. Activate venv `. venv/Scripts/activate`
3. Install dependencies `pip install -r requirements.txt`
4. Run flask server `export FLASK_APP=app.py && flask run`
5. Install npm dependencies `npm install`
6. Run dev server `npm start`
7. Open http://localhost:5000

## To-dos to run in production

1. Create a flask production environment that will serve JS files from /dist/bundle.js instead of `localhost:3000`
2. Create a flask route to serve static JS files from `/dist`
3. Run `npm run-script build` to create those static JS files in `/dist`
4. Start flask running in production
