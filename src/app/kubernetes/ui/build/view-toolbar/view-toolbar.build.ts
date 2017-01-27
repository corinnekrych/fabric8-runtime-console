import {Component, Input} from "@angular/core";
import {Build} from "../../../model/build.model";

@Component({
  selector: 'fabric8-build-view-toolbar',
  templateUrl: './view-toolbar.build.html',
  styleUrls: ['./view-toolbar.build.scss'],
})
export class BuildViewToolbarComponent {

  @Input() build: Build;

}
