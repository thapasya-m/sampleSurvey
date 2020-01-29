Your Project
------------

On the back-end,
- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)

Survey Model
- _id (auto-generated ObjectID by mongoDB ORM) 
- questions [Array of]
  - question (string)
  - yes (number)
  - no (number)

Example:
  ```
POST to /api 
  {
    "questions": [
        {
            "question": "do you like your name?",
            "yes": 1,
            "no": 1
        },
        {
            "question": "do you hate this survey?",
            "yes": 0,
            "no": 2
        }
    ]
}```

/GET & /PUT /api/surveyId

https://samplesurvey.glitch.me/api/5e3039c8f53f3807dd08f985