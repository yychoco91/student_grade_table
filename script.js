/**
 * Define all global variables here
 */
    var add_student={};
    var student_array=[];
/**
 * student_array - global array to hold student objects
 * @type {Array}
 */

/**
 * inputIds - id's of the elements that are used to add students
 * @type {string[]}
 */

/**
 * addClicked - Event Handler when user clicks the add button
 */
      function addClicked(){

          var name = $("#studentName").val();
          var course = $("#course").val();
          var grade = $("#studentGrade").val();

          //add values into an object
          add_student={
              "studentName":name,
              "course":course,
              "grade":grade,
          }
          console.log(add_student);

          //store object into array
          student_array.push(add_student);

          console.log(student_array);

          //display info from array in table
          $("tbody").empty();
          for(var i=0; i<student_array.length; i++){

            $("tbody").append("<tr><td>"+ student_array[i].studentName +"</td><td>"+ student_array[i].course +"</td><td>"+ student_array[i].grade+"</td><td><button class='btn btn-danger'>Delete</button></td></tr>");

          }
          //clear values inside form element
          clearAddStudentForm();
          calculateAverage();
      }

    $(document).ready(function(){
        removeRow();
    });

/**
 * removeRow - removes row from table when delete button is clicked
 */
    function removeRow(){
        $('tbody').on('click','.btn-danger',function(){
            //console.log($(this).closest('tr').index());
            student_array.splice($(this).closest('tr').index(),1); //splices the array at row corresponding to the index of 'this'. This currently points to the button clicked.
            $(this).closest('tr').remove();
            calculateAverage();   //invoke calculateAverage to update the avg when you remove a row

        })
    }

/**
 * cancelClicked - Event Handler when user clicks the cancel button, should clear out student form
 */
  function cancelClicked(){
    $("#studentName").val("");
    $("#course").val("");
    $("#studentGrade").val("");
}

/**
 * addStudent - creates a student objects based on input fields in the form and adds the object to global student array
 *
 * @return undefined
 */


/**
 * clearAddStudentForm - clears out the form values based on inputIds variable
 *     //clear values inside form element
 */function clearAddStudentForm(){
    $("#studentName").val("");
    $("#course").val("");
    $("#studentGrade").val("");
}

/**
 * calculateAverage - loop through the global student array and calculate average grade and return that value
 * @returns {number}
 */
    function calculateAverage(){
        var sum=0;
        for(i=0; i<student_array.length;i++){
            sum+=parseInt(student_array[i].grade);
        }
        var average=Math.floor(sum/student_array.length);
        $(".avgGrade").empty();
        $(".avgGrade").append(average);
    }

/**
 * updateData - centralized function to update the average and call student list update
 */

/**
 * updateStudentList - loops through global student array and appends each objects data into the student-list-container > list-body
 */

/**
 * addStudentToDom - take in a student object, create html elements from the values and then append the elements
 * into the .student_list tbody
 * @param studentObj
 */

/**
 * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
 */


/**
 * Listen for the document to load and reset the data to the initial state
 */