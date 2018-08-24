import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ServicioListasService extends DataSource<Object> {
  /** Stream of data that is provided to the table. */
  data: BehaviorSubject<Object[]>;
  constructor(public listaData: any) {
    super();
    this.data = new BehaviorSubject<Object[]>(listaData);
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Object[]> {
    return this.data;
  }
  addRow(element: any) {
    this.data.next(element);
  }
  disconnect() {}
}
