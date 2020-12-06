# Angular Fire Testing

The goal of this project is to build a library that makes it easy to provide mock Angular Fire services with minimal setup and configuration and no dependencies on a real or emulated Firebase project.

The library will be published to **@ngextend/fire-testing**

The project will be managed via Github Project Boards in this repo using a GitFlow style process.

Whilst it is an open source project and absolutely for the community, I am very opinionated and passionate about practicing TDD and producing high quality code, so strict standards and conventions will be enforced and I will retain the final say on whether a pull request is accepted and merged into the **develop** branch.

If you don't want to get involved in development but want to drive the future of the project please take a look at the feature stories [here](https://github.com/ngxtend/fire-testing/issues) and add your own or get involved in the discussions.


If you are interested in contributing as a developer please contact me directly and we can have a discussion.  Before you do you should read the [Contributing Guide](https://ngxtend.github.com/fire-testing/contributing) consider whether you would be prepared to:

* Practice TDD, not just write tests after the fact, but properly apply TDD rules as originally defined by Kent Beck.  Writing a test that justifies the existence of implementation code before you create the implementation
* Strictly adhere to the coding standards and guidelines as enforced through linting
* Maintain documentation for any change you make
* Add to the demo app to provide usage examples for multiple testing frameworks (Jasmine, Moch, Jest etc.)
* Use an editor that automatically builds and lints code as it is written (VS Code is strongly recommended)

To see the state of the project and monitor progress keep an eye on the [Development Project Board](https://github.com/ngxtend/fire-testing/projects/1)

## Justification
So why do we need this library?

I chose Angular as my preferred front end framework a long time ago because testability was built in from the beginning and the framework matches my development philosophy of always applying TDD, SOLID Principles and Clean Code standards.  I use Firebase frequently, it is a great platform for web and mobile apps.  Having a native Angular module for working with Firebase is great but sadly it wasn't developed with the same testability standards and support as other core Angular modules.  For example we have HttpTestingModule, RouterTestingModule and NoopAnimationsModule specifically designed for testing components without having to polute our tests with configuration or setup.

In my experience the biggest obstacle to getting developers to apply TDD is the tedium of repeatedly having to setup and configure the same thing before writing a test.

This is the case for AngularFire it requires a real Firebase app be initialised in tests to avoid errors.  In some cases you can get away with injecting a service without an app and using spies to avoid the errors, but I shouldn't have to use spies in this way.  I want to be able to write clean readable code in my tests, code that is expressive and a developer friendly form of documentation for fellow developers.  Something like this:

```typescript
import { provideAngularFireAuthMock } from '@ngxtend/fire-testing';

describe('AuthService', () => {
    let service: AuthService;
    let afa: AngularFireAuth;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AngularFireTestingModule],
            providers: [AuthService]
            });
            service = TestBed.inject(AuthService);
            afa = TestBed.inject(AngularFireAuth);
    });

    it('provides state of current user', () => {
        let actual: any;
        const expected = { uuid: '12345' };

        service.currentUser$.subscribe(n => actual = n);

        afa.emitUserUpdate(expected);

        expect(actual).toEqual(expected);
    });
});
```

In this example AuthService depends on the user$ property of the AngularFireAuth service and exposes it as currentUser$.  I want to know that if the user state is updated by Firebase (e.g. when the user signs out) that my AuthService is going to propogate that state change up to any subscribers in the app.  My test has very few lines of code, I don't want to bloat it with setting up a spy, I want my testing library to take care of that and let me simply and easily provide the fake with the user state to be emitted with something like the *emitUserUpdate* method. This is what I propose this library should enable and support.

### Demo and Documentation App
The Angular app within this repo is published as the GitHub Pages site for this repo and acts as both a demo and documentation for using the libary you can find [here](https://ngxtend.github.io/fire-testing/)
