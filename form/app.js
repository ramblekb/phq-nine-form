Formio.createForm(document.getElementById('formio'), {
   components: [
      {
         type: 'radio',
         label: 'QuestionOne',
         class: 'form-check-input row1',
         key: "input",
         input: true,
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
         label: 'QuestionTwo',
         class: 'form-check-input row2',
         key: "input",
         input: true,
         key: "radio2",
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
      // {
      //    type: 'button',
      //    action: 'submit',
      //    label: 'Submit',
      //    theme: 'primary'
      // },
      // {
      //    type: 'textfield',
      //    label: 'Total',
      //    key: "subJson",
      //    input: true,
      //    inputType: 'text',
      //    disabled: false,

      // }
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