# Caleb-RestfulAPI-Tutoring-App

## CALEB API DOCUMENTATION FOR A RESTFUL TUTORING SERVER

### 1.) First of all, after cloning the REPO ensure you run NPM INSTALL

### 2.) I made use of nodemon, so after downloading the modules always use NPM START

3.) LOGIN DETAILS ALREADY CREATED BY ME

 _id: 5eb5a4f4a4cf6c634c3b070e,
  email: 'student123@gmail.com'
  password: 'studentnodejs'


_id: 5eb5a579a4cf6c634c3b070f,
  email: 'tutor123@gmail.com'
  password: 'tutor123@gmail.com'


_id: 5eb5a5aea4cf6c634c3b0710,
  email: 'admin123@gmail.com'
  password: 'admin123@gmail.com'



4.) PLEASE NOTE: 
i.) There are 3 resources namely: STUDENTS, CATEGORIES, LESSONS, USERS

ii.) In these resources there are different routes based on the Task guideline that was given

iii.) There are routes that are accessed by everyone while there are others that require a TOKEN that has to MANUALLY INPUTED FROM THE SET HEADERS SECTION in POSTMAN

iv.) Please check both the routes folder and controllers folders to confirm the above. 

v.) To confirm an authentication for either the students, tutors or admin, YOU HAVE TO LOGIN IN FIRST
vi.) Then a TOKEN would be given to you

vii.) Then to test the Various routes for a user, You SET THE HEADERS FIRST


OTHER PERTINENT DETAILS THAT ARE NEEDED

Example of a GET request passed from the Body of a Student Resource (FOR BOTH STUDENT, TUTOR, ADMIN)
After Login
SET THE HEADERS ---Please ensure you add Bearer before adding the token
1.) Content-Type -- application/json
2.) Authorization -- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnQxMjNAZ21haWwuY29tIiwidXNlcklkIjoiNWViNWE0ZjRhNGNmNmM2MzRjM2IwNzBlIiwiaWF0IjoxNTg4OTY4NDQ5LCJleHAiOjE1ODg5NzIwNDl9.7DyGWHTQnif00SbiJU6RW0EoSE1Dc8MZEWEMRUwXjdY



Example of a POST request passed from the Body of a Student Resource (FOR BOTH STUDENT, TUTOR
{
	"subjectName": "Biology",
	"subjectType": "Not General"
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnQxMjNAZ21haWwuY29tIiwidXNlcklkIjoiNWViNWE0ZjRhNGNmNmM2MzRjM2IwNzBlIiwiaWF0IjoxNTg4OTY4NDQ5LCJleHAiOjE1ODg5NzIwNDl9.7DyGWHTQnif00SbiJU6RW0EoSE1Dc8MZEWEMRUwXjdY"
}


Example of a POST request passed from the Body of a Category Resource
{
	"categoryName": "PRIMARY",
	"subjectId": "5eb5b1382693755e709e8f0d"
}

Example of a POST request passed from the Body of a Lesson Resource

[
	{"propName": "lessonTime", "value": "June 12, 2020"}
]



HEROKU LINK: 
