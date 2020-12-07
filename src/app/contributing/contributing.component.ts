import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributing',
  templateUrl: './contributing.component.html',
  styleUrls: ['./contributing.component.scss']
})
export class ContributingComponent {
  public html = `<pre><code [highlight]="code"></code></pre>`;

  public code = `public code = \`
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
  });\``;
}
