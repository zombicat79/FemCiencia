# FEM CIÈNCIA v1.0.0

## Description

A blog-like web application intented to serve as a multidevice platform for science divulgation in Catalan language. Its purpose is to aggregate and display curated high-quality content (written articles and videos) to the general public, both on the general feed and upon access to a number of specialized sections. It features search and filtering functionalities that allow general users browse for the knowledge they are looking for.

The application also features a private backend interface, intended for creators and contributors to upload and self-manage their own content.

## Technologies

- Base language: JavaScript
- Front end libraries & frameworks: React.js, Material UI
- Back end: Node.js + Express.js,

## User stories / Features

### Anonymous users

- **Main feed:** Main component of the app. The section of the screen where all the available (and approved) content is displayed and consumed.
- **Search bar:** An input box where users can write keywords and get filtered relevant results in return.
- **Filtering toolbox:** A set of filtering options aimed at sorting the available articles and returning only the ones matching the selected prerequisites (date, author, content type, subject, field of expertise, etc).

### Private users

- **Log in:** Gateway to the backend part of the app, only for contributors and content creators. It consists of a simple form requiring username and password. The default credentials are provided by the service managers.
- **Personal settings:** A form intented for the editing of preferences and the updating of basic operational info, such as username and password.
- **Upload article:** A functionality provided for content creators and contributors to freely upload their articles / videos, without need of intervention by the service managers.
- **Edit article:** Similar to the previous one, this functionality allows content creators & contributors to self-manage their uploaded content and edit / amend possible mistakes and shortcomings.
- **Review article:** A selector and a comment input box at the bottom of every article, for content creators and contributors to approve/reject and offer divergent views on their peers work.
- **Log out:** A secure way for logged in content creators to leave the platform after they are finished with their business.

## Backlog

- **Specialized feeds:** A set of narrowed down feeds belonging to a number of different science categories. They replace the main feed if selected (critical mass of articles required before implementation).

- **User sign up & authentication:** The possibility for anonymous users to sign up as registered users and get their details stored in a database. That would allow for new features, such as serving content according to preferences or sending newsletters.

- **Questions & comments:** The possibility to post questions or add comments to any articles and their corresponding authors.

- **Suggested content:** The possibility to suggest relevant tailored content to every user, depending on their search history.

  



