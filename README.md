Sample survey API
------------

On the back-end,
- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)

Survey Model
- _id (auto-generated ObjectID by mongoDB ORM) 
- questions [Array of]
  - question (string)
  - yes (number) [default 0 ]
  - no (number) [default 0]

Example:
  ```
Base API URL : https://samplesurvey.glitch.me/api/

1. Create a survey 
POST to /

Request Body ->
{
    "questions": [
        {
            "question": "do you like your name?",
            "yes": 0,
            "no": 1
        },
        {
            "question": "do you hate this survey?",
            "yes": 0,
            "no": 2
        }
    ]
}

2. Get results of survey
/GET to /{surveyId}

Ex: https://samplesurvey.glitch.me/api/5e3039c8f53f3807dd08f985

3. Take survey
/PUT to /{surveyId}

Request Body ->
{
    "questions": [
        {
            "question": "do you like your name?",
            "yes": 1,
            "no": 2
        },
        {
            "question": "do you hate this survey?",
            "yes": 1,
            "no": 2
        }
    ]
}

```


