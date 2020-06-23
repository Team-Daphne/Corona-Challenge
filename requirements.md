# Software Requirements

## Vision

Educational website intended to engage and inform users about coronavirus safety and risk assessment. This addresses a user pain point around digestibility of dry, complex scientific information. Our website will deliver relevant information in simple-to-understand language and images to maximize retention. A game will provide interactivity and ensure a compelling user experience.

## Scope
#### Within

1. Website will take in user information (via form) to determine additional information served.
2. Website will present various scenarios requiring user decision on best response. User input will be assessed to determine final score.
3. Results page will based upon score and recall of user-provided information.
4. Additional external links will be served for relevant additional information (also dependant upon user input).
5. One page will house static "about us" information pertaining to the development team, with bios, contact information, LinkedIn profiles, and GitHub profiles.

#### Out of Scope
* Device-agnostic design
* Definitive health diagnostics for users
* Guarantees of safety

#### Minimum Viable Product
Upon page load, user will input minimal profile information then proceed through a short quiz game that highlights various scenarios. User will be given options as to how to respond, with each option corresponding a number of points. After game completion, user will be served total point count and corresponding recommendations and/or advice. Additionally, a list of external links will be provided based upon score and personal profile information.

#### Stretch Goals

* Additional (fourth) page to house a bonus round with an "I Spy"-style game wherein users would need to select a number of items to prepare for a particular scenario.
* Within user profile page, user will select an avatar that will 'follow' them throughout the site as the 'personification' of the site (think Microsoft "Clippy" paperclip)
* Animation on the quiz questions (i.e. a package rolling on to the screen, a handshake in action)
* Additional functionality dependant upon user info
* Point tally updates on each question page

## Functional Requirements

#### Data Flow
* Page loads with a brief introduction to the challenge. 
* User is then directed to an input form with personal questions.
* Upon submission of the form, user is taken to a different page with the Coronavirus Challenge.
* User will be prompted to answer a series of questions housed on discrete HTML pages.
* After each question is answered, user will receive feedback on the same HTML page (results will replace question).
* User will then have option to click to "next question" which will link to a new HTML page.
* Once all question pages have been cycled through, user will click to "Results" HTML page with point total and recommended links.
* From Results page, user can clear results, retake the quiz, and/or link to "About Me" developer team page.
* About Me page will have a link back to back to start of quiz or to results page, as well as links to individual team member profiles, etc.


***Tasks***
1. User can input specific personal information on homepage profile form
2. Each HTML question page will load with question and unique image, to be replaced by answer/feedback upon user submission
3. User can view results page that displays total points as well as recommended external links for additional information
4. User can reset results page or review their most recent results
5. User can view static "About Us" page to learn more about development team and further access their portfolios and contact information

