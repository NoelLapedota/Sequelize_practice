Test Sequelize: Migrations and Composite Primary Key

Scenario:
Let's suppose you're working for an e-learning startup. Your current platform needs a system to manage courses, instructors, students, and their enrollments in courses.

Part 1: Model and Migration

1.1. 'Course' Model:

    Define a 'Course' model with the following attributes:
        courseId: Course ID (a unique identifier).
        title: Course title.
        description: Brief course description.
        startDate: Course start date.
        endDate: Course end date.

1.2. 'Instructor' Model:

    Define an 'Instructor' model with these attributes:
        instructorId: Instructor ID (a unique identifier).
        firstName: Instructor's first name.
        lastName: Instructor's last name.
        email: Instructor's email (ensure it's unique).

1.3. 'Student' Model:

    Create a 'Student' model with these attributes:
        studentId: Student ID (a unique identifier).
        firstName: Student's first name.
        lastName: Student's last name.
        email: Student's email.
        points: Points accumulated by the student for completing courses or other activities.

1.4. 'Enrollment' Model:

    This model represents student enrollments in courses. It should have:
        studentId: Student ID.
        courseId: Course ID.
        The combination of studentId and courseId should form a composite primary key.

1.5. Relationships:

    A course can have many students, and a student can enroll in many courses. Use the 'Enrollment' model to manage this many-to-many relationship.
    A course has only one instructor, but an instructor can teach multiple courses. Manage this relationship.

1.6. Migrations:

    Create a migration that implements the above models and relationships in the database.

1.7. Adding a New Field:

    Now, the platform wants to track the 'level' of each course (e.g., beginner, intermediate, advanced). Add a column to the 'Course' model named 'level' and create a migration to implement this change in the database.

1.8. Student Table Seeding:

    Create a seeder for students; assign a random value to the 'points' column ranging from 30 to 970.

1.9. Creating a Ranking Route:

    Implement a route with the path /api/v1/ranking that, when called, returns a list of up to 2 students with a score (value in the 'points' column) greater than 50 and less than 450. The response should be in JSON format. You should handle cases where there are no users with the desired score or there is a generic error in the controller.

Evaluation:

    Ensure all migrations run without errors.
    Model relationships should be correctly implemented, including the composite primary key in the 'Enrollment' model.
    Seeders should populate the database with meaningful data.
    The route code should be structured to properly separate business logic from routing.
    Save the code in a Git repository, splitting the 9 actions proposed above into different commits.