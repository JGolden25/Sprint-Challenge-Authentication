<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
Sessions are use to persist data across requests. It basically allows a web application to become uniquely stateful for each user.

2. What does bcrypt do to help us store passwords in a secure manner.
bcrypt helps us hash our passwords, implements salting, and does multiple hashing rounds to better encrypt our password to be stored on the server. Instead of storing plain-text passwords on the server where hackers can directly utilize the information immediately, an unintelligible hash string can take a long time to decrypt.

3. What does bcrypt do to slow down attackers?
Using salting to add additional text to the string and having multiple hash rounds also add an extra layer that adds the time layer to our password. Hashing 12 rounds is the recommended amount and higher is recommended. The difference between 10 routes and 12 rounds is significant.

4. What are the three parts of the JSON Web Token?
The three parts of the JSON web token are: 1. the header, 2. the payload, and 3. the signature.