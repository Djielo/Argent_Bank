ISSUE_TEMPLATE

---

name: "#1 Landing Page"
about: Issue for the landing page requirement
title: User can see the home page
labels: ""
assignees: ""

A user should be able to:

- [x] Navigate to the home page (`/`)
- [x] See all placeholder data from mockup

---

name: "#2 Login Requirement"
about: Issue for the login requirement
title: User can login to the system
labels: ''
assignees: ''

A user should be able to:

- [x] Navigate to the login page (`/login`)
- [x] Fill out credentials
- [x] Login to the back-end API with JWT tokens for authentication
- [x] Successfully navigate to a profile page (`/profile`)

---

name: '#3 Logout Requirement'
about: Issue for the logout requirement
title: User can logout to the system
labels: ''
assignees: ''

A user should be able to:

- [x] See the logout button when logged in
- [x] Click the logout button
- [x] Be returned to the home page (`/`)

---

name: '#4 Privacy Requirement'
about: Issue for the privacy requirement
title: User can only see their own profile
labels: ''
assignees: ''

After successfully logging in, a user should be able to:

- [x] See their profile page
- [x] See their first name on the profile page
- [x] See placeholder bank account information

---

name: '#5 Update Profile Feature'
about: Issue for the profile update requirement
title: User can update their profile
labels: ''
assignees: ''

A user should be able to:

- [x] Edit their profile (first name and last name).
- [x] This data should be persisted to the database.

---

name: '#6 Redux Requirement'
about: Issue for the Redux requirement
title: State management is done through Redux
labels: ''
assignees: ''

The React app contains an implementation of Redux for state management that:

- [x] a store to manage all of the data
- [x] action(s) for sending information
- [x] reducer(s) for handling application state changes
