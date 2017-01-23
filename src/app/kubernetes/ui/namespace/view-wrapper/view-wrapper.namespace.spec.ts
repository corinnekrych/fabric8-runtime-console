/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MockBackend} from "@angular/http/testing";
import {RequestOptions, BaseRequestOptions, Http} from "@angular/http";
import {RestangularModule} from "ng2-restangular";
import {NamespaceViewWrapperComponent} from "./view-wrapper.namespace";
import {NamespaceViewToolbarComponent} from "../view-toolbar/view-toolbar.namespace";
import {NamespaceViewComponent} from "../view/view.namespace";
import {MomentModule} from "angular2-moment";
import {NamespaceDeleteDialog} from "../delete-dialog/delete-dialog.namespace";
import {ModalModule} from "ng2-modal";
import {FormsModule} from "@angular/forms";
import {KuberentesStoreModule} from "../../../kubernetes.store.module";
import {IPaaSCommonModule} from "../../../../common/common.module";

describe('NamespaceViewWrapperComponent', () => {
  let namespace: NamespaceViewWrapperComponent;
  let fixture: ComponentFixture<NamespaceViewWrapperComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes([]),
          IPaaSCommonModule,
          FormsModule,
          MomentModule,
          ModalModule,
          RestangularModule.forRoot(),
          KuberentesStoreModule,
        ],
        declarations: [
          NamespaceViewWrapperComponent,
          NamespaceViewToolbarComponent,
          NamespaceViewComponent,
          NamespaceDeleteDialog,
        ],
        providers: [
          MockBackend,
          { provide: RequestOptions, useClass: BaseRequestOptions },
          {
            provide: Http, useFactory: (backend, options) => {
              return new Http(backend, options);
            }, deps: [MockBackend, RequestOptions],
          },
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamespaceViewWrapperComponent);
    namespace = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(namespace).toBeTruthy(); });
});
