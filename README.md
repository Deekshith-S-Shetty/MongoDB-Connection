# MongoDB Connection

This project utilizes Node.js and MongoDB to create powerful endpoints for performing CRUD operations, facilitating efficient data management
and interaction with the database. It offers a seamless integration between the Node.js backend and MongoDB, allowing developers to easily
handle data storage, retrieval, updating, and deletion. With its straightforward setup process and flexible database schema, this project
can be used to build robust applications that leverage the full potential of Node.js and MongoDB.

## Getting Started

To get started with the project, follow these steps:

1. Clone the project to your local machine.
2. Run `npm install` in the project directory to install the dependencies.
3. Create a `.env` file in the root directory of the project.
4. Add the following two entries to the `.env` file:

   ```
   URI=mongodb+srv://<username>:<password>@cluster0.i87md.mongodb.net/sample_restaurants?retryWrites=true&w=majority
   PORT=5000
   ```

   Replace `<username>` and `<password>` in the `URI` with your MongoDB username and password. The name of the database used here is `sample_restaurants`.

5. Start the server by running `npm start` or `node index.js`.

## Database Schema

The database schema used in this project is as follows:

```json
{
  "name": "string",
  "restaurant_id": "int",
  "rating": "int"
}
```

Note that MongoDB automatically generates an ID for each inserted data.

## Contributing

If you'd like to contribute to this project, we welcome your contributions! To ensure a smooth collaboration, please follow these guidelines:

1. Fork the repository on GitHub.
2. Clone the repository to your work place.
3. Create a new branch with a descriptive name for your feature or bug fix.
4. Commit your changes to the new branch.
5. Push the branch to your fork.
6. Submit a pull request to the main repository, explaining your changes.

## Bug Reporting

We appreciate your help in improving this project by reporting any bugs you encounter. When reporting a bug, please provide the following information:

1. A clear and descriptive title for the bug report.
2. Detailed steps to reproduce the bug.
3. Expected behavior and actual behavior observed.
4. Any relevant error messages or screenshots.
5. Any additional context or information that might be helpful in understanding and fixing the bug.

Thank you for your valuable contributions!

## Helpful Links

- [MongoDB](https://www.mongodb.com/docs/)
- [Node.js](https://nodejs.org/en/docs/)
- [Express.js](https://expressjs.com/en/starter/hello-world.html/)
