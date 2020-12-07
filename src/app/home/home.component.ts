import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public code = `
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
  });`;

}
