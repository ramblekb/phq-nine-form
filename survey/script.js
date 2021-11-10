Formio.createForm(document.getElementById('formio'), {
   components: [
      {
         type: 'radio',
         label: 'Little interest or pleasure in doing things?',
         class: 'form-check-input row1',
         key: "input",
         input: true,
         inline: true,
         values: [
            {
               label: "Not at all",
               value: 0,
            },
            {
               label: "Several days",
               value: 1,
            },
            {
               label: "More than half the days",
               value: 2,
            },
            {
               label: "Nearly every day",
               value: 3,
            }
         ],
      },
      {
         type: 'radio',
         label: 'Feeling down, depressed, or hopeless?',
         class: 'form-check-input row1',
         key: "input",
         input: true,
         inline: true,
         values: [
            {
               label: "Not at all",
               value: 0,
            },
            {
               label: "Several days",
               value: 1,
            },
            {
               label: "More than half the days",
               value: 2,
            },
            {
               label: "Nearly every day",
               value: 3,
            }
         ],
      },
      {
         type: 'radio',
         label: 'Feeling tired or having little energy?',
         class: 'form-check-input row2',
         key: "input",
         input: true,
         key: "radio2",
         inline: true,
         values: [
            {
               label: "Not at all",
               value: 0,
            },
            {
               label: "Several days",
               value: 1,
            },
            {
               label: "More than half the days",
               value: 2,
            },
            {
               label: "Nearly every day",
               value: 3,
            }
         ],
      },
      {
         type: 'radio',
         label: 'Poor appetite or overeating?',
         class: 'form-check-input row2',
         key: "input",
         input: true,
         key: "radio2",
         inline: true,
         values: [
            {
               label: "Not at all",
               value: 0,
            },
            {
               label: "Several days",
               value: 1,
            },
            {
               label: "More than half the days",
               value: 2,
            },
            {
               label: "Nearly every day",
               value: 3,
            }
         ],
      },
      {
         type: 'radio',
         label: 'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
         class: 'form-check-input row1',
         key: "input",
         input: true,
         inline: true,
         values: [
            {
               label: "Not at all",
               value: 0,
            },
            {
               label: "Several days",
               value: 1,
            },
            {
               label: "More than half the days",
               value: 2,
            },
            {
               label: "Nearly every day",
               value: 3,
            }
         ],
      },
      {
         type: 'radio',
         label: 'Trouble concentrating on things, such as reading the newspaper or watching television?',
         class: 'form-check-input row1',
         key: "input",
         input: true,
         inline: true,
         values: [
            {
               label: "Not at all",
               value: 0,
            },
            {
               label: "Several days",
               value: 1,
            },
            {
               label: "More than half the days",
               value: 2,
            },
            {
               label: "Nearly every day",
               value: 3,
            }
         ],
      },
      {
         type: 'radio',
         label: 'Moving or speaking so slowly that other people could have noticed?',
         class: 'form-check-input row2',
         key: "input",
         input: true,
         key: "radio2",
         inline: true,
         values: [
            {
               label: "Not at all",
               value: 0,
            },
            {
               label: "Several days",
               value: 1,
            },
            {
               label: "More than half the days",
               value: 2,
            },
            {
               label: "Nearly every day",
               value: 3,
            }
         ],
      },
      {
         type: 'radio',
         label: 'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?',
         class: 'form-check-input row2',
         key: "input",
         input: true,
         key: "radio2",
         inline: true,
         values: [
            {
               label: "Not at all",
               value: 0,
            },
            {
               label: "Several days",
               value: 1,
            },
            {
               label: "More than half the days",
               value: 2,
            },
            {
               label: "Nearly every day",
               value: 3,
            }
         ],
      },
      {
         type: 'radio',
         label: 'Thoughts that you would be better off dead, or of hurting yourself in some way?',
         class: 'form-check-input row1',
         key: "input",
         input: true,
         inline: true,
         values: [
            {
               label: "Not at all",
               value: 0,
            },
            {
               label: "Several days",
               value: 1,
            },
            {
               label: "More than half the days",
               value: 2,
            },
            {
               label: "Nearly every day",
               value: 3,
            }
         ],
      },
   ]
})
   .then(function (form) {
      // form.on('change', function (result) {
      //    document.querySelector('#subJson').innerHTML = "result: " + JSON.stringify(result.data) + "values: " + JSON.stringify(result.data);
      // });

      form.on('submitDone', function (submission) {
         window.location = '/app/thanks.html';
      });


   });