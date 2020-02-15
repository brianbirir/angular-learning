import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnChanges,
} from '@angular/core';

@Component({
    selector: 'app-stock-status',
    template: `
        <input type="number" [(ngModel)]="updatedStockValue" /><button
            class="btn btn-primary"
            [style.background]="color"
            (click)="stockValueChanged()"
        >
            Change Stock Value
        </button>
    `,
    styleUrls: ['./stock-status.component.scss'],
})
export class StockStatusComponent implements OnChanges {
    @Input()
    stock: number;
    @Input()
    productId: number;
    @Output()
    stockValueChange = new EventEmitter();
    color = '';
    updatedStockValue: number;

    constructor() {}

    ngOnInit() {}

    stockValueChanged() {
        this.stockValueChange.emit({
            id: this.productId,
            updatedStockValue: this.updatedStockValue,
        });
        this.updatedStockValue = null;
    }

    ngOnChanges() {
        this.color = this.stock > 10 ? 'green' : 'red';
    }
}
