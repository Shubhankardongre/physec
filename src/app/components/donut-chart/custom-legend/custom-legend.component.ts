import { Component, EventEmitter, Output, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-custom-legend',
  templateUrl: './custom-legend.component.html',
  styleUrls: ['./custom-legend.component.scss']
})
export class CustomLegendComponent {
  /** input legend data for the custom legend */
  @Input() legendData: any[] = null;

  /** legend colors for the radio buttons */
  @Input() clearText: String = '';

  /**Legend click call back used to invoke the call back function on click legend */
  @Output() legendClickCallBack = new EventEmitter<string>();

  /** Clear click call back used to invoke the callback function on click of clear  */
  @Output() clearClickCallBack = new EventEmitter();

  /** Place holder for the selected legend label */
  selectedLegLabel = '';
  private legendColors = environment.incConstants.LEGENDCOLORS;

  constructor() { }

  /**
     * Invoke the legend call back function and provide the selected legend label
     * @param selectedLabel selected legend label
  **/
  legendClick(selectedLabel) {
    this.selectedLegLabel = selectedLabel;
    this.legendClickCallBack.emit(selectedLabel);
  }

  /**
    * invoke the clear call back function and reset the seleected legend label
  **/
  clearClick() {
    this.clearClickCallBack.emit();
    this.selectedLegLabel = '';
  }

}
