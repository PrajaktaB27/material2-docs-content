import { DataSource } from '@angular/cdk/collections';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Material Popover Edit on a flex Material data-table
 */
export declare class PopoverEditMatTableFlexExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource;
    readonly preservedNameValues: WeakMap<PeriodicElement, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement, any>;
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer);
    onSubmitName(element: PeriodicElement, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement, f: NgForm): void;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export declare class ExampleDataSource extends DataSource<PeriodicElement> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement[]>;
    disconnect(): void;
}
