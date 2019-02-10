import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: any = [
    { name: "HSBC" },
    { name: "Nubank" },
    { name: "Banco do Brasil" },
    { name: "Deutsche Bank" },
    { name: "Santander" }
  ];

  itemsWithOrder: any;

  ngOnInit() {
    // only for not stay empty on init
    this.itemsWithOrder = this.items
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      this.viewOrder();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // copy array of items to other and add order property
  viewOrder() {
    this.itemsWithOrder = [];
    this.items.map((item, index) => {
      item = { ...item, order: index };
      this.itemsWithOrder.push(item);
    });
  }

}
