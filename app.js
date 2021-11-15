Formio.createForm(document.getElementById('formio'), {
   "display": "form",
   "components": [{
      "label": "PHQ-9 Form",
      "tableView": true,
      "questions": [{
         "label": "Little interest or pleasure in doing things?",
         "value": "qa",
         "key": "a",
         "valueType": "number",
         "tooltip": ""
      },
      {
         "label": "Feeling down, depressed, or hopeless?",
         "value": "qb",
         "key": "b",
         "tooltip": ""
      },
      {
         "label": "Trouble falling or staying asleep, or sleeping too much?",
         "value": "qc",
         "key": "c",
         "tooltip": ""
      },
      {
         "label": "Feeling tired or having little energy?",
         "value": "qd",
         "value": "d",
         "tooltip": ""
      },
      {
         "label": "Poor appetite or overeating?",
         "value": "qe",
         "tooltip": ""
      },
      {
         "label": "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
         "value": "qf",
         "tooltip": ""
      },
      {
         "label": "Trouble concentrating on things, such as reading the newspaper or watching television?",
         "value": "qg",
         "tooltip": ""
      },
      {
         "label": "Moving or speaking so slowly that other people could have noticed?  Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
         "value": "qh",
         "key": "c",
         "tooltip": ""
      },
      {
         "label": "Thoughts that you would be better off dead, or of hurting yourself in some way?",
         "value": "qi",
         "tooltip": ""
      }
      ],
      "key": "answerVal",
      "values": [{
         "label": "Not at all",
         "value": 0,
      },
      {
         "label": "Several days",
         "value": 1,
      },
      {
         "label": "More than half the days",
         "value": 2,
      },
      {
         "label": "Nearly every day",
         "value": 3,
      }
      ],

      "key": "survey",
      "type": "survey",
      "input": true
   },
   ]
}).then((data) => {
   console.log(stringifyJSON(data));
   window.localStorage.setItem(key, JSON.stringify(data));

});

