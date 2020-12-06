## Contributing Guide

If you are interested in contributing to this project and making testing of @angular/fire simple then you are in the right place.  Contributors are welcome but you must be prepared to stick rigidly to the practices, procedures and coding standards laid out in this document.

### Test Driven
This project must remain 100% test driven.  That means no line of implementation code can exist without a test that justifies the existence.  It means you absolutely must be able to express a requirement as a test and be able to automate that test, and do so first. Writing tests after the fact is not acceptable.  You might ask yourself "How will anyone know if whether I wrote the test before or after".  Let me assure you a consistent TDD practioner can tell.

Why so strict? I have been practicing TDD for a long time and I learned from the people who invented it.  I strongly believe that it is the only way to write good quality code that implements the requirements and nothing but the requirements.  I also strongly believe that the tests are the best developer documentation, we can write extra documentation for users or to help people learn what our code does, but as a developer there is no better documentation than tests that not only prove the code meets requirements but also show how it is intended to be used and work.

So before you decide to contribute to this project ask yourself.

+ Are you prepared to practice TDD religiously
+ Can you handle having pull requests delayed or rejected because we don't believe you practiced TDD
+ Are you prepared to use an editor or IDE that is capable of continuously linting, building and testing your code
+ Are you prepared to code to conventions and standards you might not agree with or that do not fit with your preferences

### Choices
If you decide you would like to contribute to the project you can do so in one of two ways.  You can contribute occasional enhancements or fixes by forking the project and submitting a Pull Request to have changes within your fork merged back to this repo.  If you want to become more involved in the project then you can become a maintainer by contacting Mike Hanson through GitHub.  As a maintainer you would be given direct access to the repo and able to push changes through a clone of the project.

### Work Flow
All ehancements or changes to the project will be implemented through a GitFlow based process.  Without exception no changes will be made or accepted by any means other than a Pull Request to merge changes into the default *develop* branch.  Release branches will be prepared, tested, tweaked and merged into the *main* branch, which will result in an automated pipeline that will publish a new version of the library to NPM and a new version of the demo app to Firebase.

All commits and pull requests must be linked to an issue id from the Development Project Board.  All Pull Requests must be for a single issue, any PR that attempts to implement multiple features or bug fixes will be rejected outright.

### Branching
As mentioned we will operte a Gitflow based process.  When creating a new branch you must use the following naming convention:

*prefix/friendly_name_id*

Where *prefix* is one of

* feature
    * Used only for new features and enchancements
* bug
    * Used only when fixing a triaged bug raised against a released feature
* fix
    * Used only when fixing an issue in a release branch that has not been released

And *id* is the issue id the branch aims to deliver or resolve.

Any PR that does not match this convention will be rejected and require you to create a properly named branch and a new PR from that branch.

Branches for features and bugs must be created from the *develop* branch and PRs will only be considered if they merge back to the same *develop* branch.

Fix branches should be created from the appropriate pending release branch (there will only ever be one) and will only be considered if they merge back to the same release branch.

### Coding Style
The rules for coding conventions are fully captured and controlled via TypeScript and TS Lint (We will move to ES Lint when the Angular team do).  We strongly urge you to use a code editor that automatically lints your code as you type.  VS Code is the recommended editor, but whatever you use you must ensure your code is linted and all issues fixed before pushing a branch and creating a PR.  Do not rely on CI builds to do your linting, anyone who consistently triggers failed builds due to linting errors will be barred from contributing to the project.

### Tests
We expect test coverage to be complete. ALWAYS write a test before anything else and make sure all tests pass before pushing a branch and creating a PR.  Any PR that does not sufficiently test even the simplest of changes will be rejected, and as mentioned experienced TDD practitioners can tell whether tests were written before or after the fact so stick to the rules.  If you don't want to practice real TDD don't even bother trying to contribute to the project.

