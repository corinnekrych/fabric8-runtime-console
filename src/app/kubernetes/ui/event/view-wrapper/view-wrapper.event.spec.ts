/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MockBackend} from "@angular/http/testing";
import {RequestOptions, BaseRequestOptions, Http} from "@angular/http";
import {RestangularModule} from "ng2-restangular";
import {EventViewWrapperComponent} from "./view-wrapper.event";
import {EventViewToolbarComponent} from "../view-toolbar/view-toolbar.event";
import {EventViewComponent} from "../view/view.event";
import {MomentModule} from "angular2-moment";
import {EventDeleteDialog} from "../delete-dialog/delete-dialog.event";
import {EventScaleDialog} from "../scale-dialog/scale-dialog.event";
import {ModalModule} from "ng2-modal";
import {FormsModule} from "@angular/forms";
import {KuberentesStoreModule} from "../../../kubernetes.store.module";
import {IPaaSCommonModule} from "../../../../common/common.module";

describe('EventViewWrapperComponent', () => {
  let event: EventViewWrapperComponent;
  let fixture: ComponentFixture<EventViewWrapperComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          IPaaSCommonModule,
          FormsModule,
          MomentModule,
          ModalModule,
          RouterTestingModule.withRoutes([]),
          RestangularModule.forRoot(),
          KuberentesStoreModule,
        ],
        declarations: [
          EventViewWrapperComponent,
          EventViewToolbarComponent,
          EventViewComponent,
          EventDeleteDialog,
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
    fixture = TestBed.createComponent(EventViewWrapperComponent);
    event = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(event).toBeTruthy(); });
});
