# Caleb-RestfulAPI-Tutoring-App

CALEB API DOCUMENTATION FOR A RESTFUL TUTORING SERVER

1.) First of all, you have to clone the REPO from the FirstBranch and not the Master Branch
An Example of cloning the specific Git Branch: git clone -b FirstBranch https://github.com/calebjesusegun/Caleb-RestfulAPI-Tutoring-App.git

2.) Ensure you run NPM INSTALL. After the download of the required modules always use NPM START to start the server.

3.) LOGIN DETAILS ALREADY CREATED BY ME

STUDENT LOGIN DETAILS
{
	"email": "johndoe@gmail.com",
	"password": "johndoe123"
}

TUTOR LOGIN DETAILS
{
	"email": "michealson@gmail.com",
	"password": "michealson123"
}

ADMIN LOGIN DETAILS
{
	"email": "calebbrown@gmail.com",
	"password": "calebbrown123"
}



4.) PLEASE NOTE: There are 5 resources in the Routes folder located in the api folder directory.
    They are: SUBJECTS, CATEGORIES, LESSONS, USER and USERTUTOR Resource.

5.) To access the different resources you have to follow this structure
i.) For Example the SUBJECT Resource -- [example.com/api/v1/subjects]

6.) USER RESOURCE(STUDENT) consist of the following Requests
i.) POST Request for Signup -- Create a student user. [example.com/api/v1/users/signup]
Example of a POST request for users signup
{
	"firstName": "John",
	"lastName": "Doe",
	"email": "johndoe@gmail.com",
	"password": "johndoe123"
}

ii.) POST Request for Login -- Login a Student User. [example.com/api/v1/subjects/login]
Example of a POST request for users login
{
	"email": "johndoe@gmail.com",
	"password": "johndoe123"
}
iii.) DELETE Request -- Remove a User by Id. REQUIRES AUTHENTICATION. [example.com/api/v1/users/:5eb5b1382693755e709e8f0d]


7.) USERTUTOR RESOURCE(TUTOR) consist of the following Requests
i.) GET Request -- Get all User Tutor Names and other details alphabetically and in an ascending order.[example.com/api/v1/users/signup-tutor]
ii.) POST Request for Signup -- Create a Tutor user. [example.com/api/v1/users/signup-tutor]
Example of a POST request for Tutor users signup
{
	"firstName": "Micheal",
	"lastName": "Son",
	"email": "michealsone@gmail.com",
	"password": "michealson123"
}

ii.) POST Request for Login -- Login a Tutor User. [example.com/api/v1/subjects/login-tutor]
Example of a POST request for users login
{
	"email": "michealson@gmail.com",
	"password": "michealson123"
}

v.) DELETE Request -- Remove a UserTutor by Id. REQUIRES AUTHENTICATION. [example.com/api/v1/subjects/:5eb5b1382693755e709e8f0d]



9.) SUBJECTS RESOURCE consist of the following Requests
i.) GET Request -- Get all subject details alphabetically and in an ascending order.[example.com/api/v1/subjects]
ii.) GET BY Id Request -- Get each subject detail by its Id [example.com/api/v1/subjects/:5eb5b1382693755e709e8f0d]
iii.) POST Request -- Create subjects by Name and Type. REQUIRES AUTHENTICATION. [example.com/api/v1/subjects]
Example of a POST request passed from the Body of a Student Resource (FOR ADMIN ONLY)
{
	"subjectName": "Biology",
	"subjectType": "Not General"
}
Note: For this to work the user has to be logged in as admin. Then
SET THE HEADERS ---Please ensure you add Bearer before adding the token
1.) Content-Type -- application/json
2.) Authorization -- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnQxMjNAZ21haWwuY29tIiwidXNlcklkIjoiNWViNWE0ZjRhNGNmNmM2MzRjM2IwNzBlIiwiaWF0IjoxNTg4OTY4NDQ5LCJleHAiOjE1ODg5NzIwNDl9.7DyGWHTQnif00SbiJU6RW0EoSE1Dc8MZEWEMRUwXjdY

iv.) PATCH Request -- Update either the subject Name or Type by Id. REQUIRES AUTHENTICATION. [example.com/api/v1/subjects/:5eb5b1382693755e709e8f0d]
Example of a PATCH request passed from the Body of a Subject Resource 
[
	{"propName": "subjectName", "value": "Biology"}
]
v.) DELETE Request -- Remove a Subject by Id. REQUIRES AUTHENTICATION. [example.com/api/v1/subjects/:5eb5b1382693755e709e8f0d]


10.) CATEGORIES RESOURCE consist of the following Requests
i.) GET Request -- Get all category of subject details.[example.com/api/v1/categories]
ii.) GET BY Id Request -- Get a the detail of a subject in a Category by its Id [example.com/api/v1/categories/:5eb5b1382693755e709e8f0d]
iii.) POST Request -- Create category by the Name and the Subject. REQUIRES AUTHENTICATION. [example.com/api/v1/categories]
Example of a POST request passed from the Body of a Category Resource. YOU NEED A STUDENT ID FOR IT TO WORK.
{
	"categoryName": "PRIMARY",
	"subjectId": "5eb5b1382693755e709e8f0d"
}
iv.) DELETE Request -- Remove a Subject by Id. REQUIRES AUTHENTICATION. [example.com/api/v1/categories/:5eb5b1382693755e709e8f0d]



11.) LESSONS RESOURCE consist of the following Requests
i.) GET Request -- Get all lessons details. REQUIRES AUTHENTICATION. [example.com/api/v1/lessons]
ii.) GET BY Id Request -- Get each lesson detail by its Id. REQUIRES AUTHENTICATION. [example.com/api/v1/lessons/:5eb5b1382693755e709e8f0d]
iii.) POST Request -- Create subjects by Name and Type. REQUIRES AUTHENTICATION
Example of a POST request passed from the Body of a Student Resource (FOR BOTH STUDENT, TUTOR
{
	"lessonName": "Biology Lesson",
	"subjectId": "5eb5b1382693755e709e8f0d",
	"lessonTime": "June 12, 2020"
}
iv.) PATCH Request -- Update either the lesson Name, Subject or Time by Id. REQUIRES AUTHENTICATION. [example.com/api/v1/lessons/:5eb5b1382693755e709e8f0d]
Example of a PATCH request passed from the Body of a Lesson Resource

[
	{"propName": "lessonTime", "value": "June 12, 2020"}
]
v.) DELETE Request -- Remove a Subject by Id. REQUIRES AUTHENTICATION. [example.com/api/v1/lessons/:5eb5b1382693755e709e8f0d]



12.) In these resources there are different routes based on the Task guideline that was given

13.) There are routes that are accessed by everyone while there are others that require a TOKEN that has to MANUALLY INPUTED FROM THE SET HEADERS SECTION in POSTMAN

14.) Please check both the routes folder and controllers folders to confirm the above. 

15.) To confirm an authentication for either the students, tutors or admin, YOU HAVE TO LOGIN IN FIRST

16.) Then a TOKEN would be given to you

17.) Then to test the Various routes for a user, You SET THE HEADERS FIRST 
SET THE HEADERS ---Please ensure you add Bearer before adding the token
1.) Content-Type -- application/json
2.) Authorization -- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnQxMjNAZ21haWwuY29tIiwidXNlcklkIjoiNWViNWE0ZjRhNGNmNmM2MzRjM2IwNzBlIiwiaWF0IjoxNTg4OTY4NDQ5LCJleHAiOjE1ODg5NzIwNDl9.7DyGWHTQnif00SbiJU6RW0EoSE1Dc8MZEWEMRUwXjdY


18.) HEROKU LINK: https://calebturtoringappserver.herokuapp.com/
