import { Component, EventEmitter, Input, input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // @Input({required: true}) size!: {width: string; height: string}
  // size = input.required<{width: string; height: string}>();

  //We need Input and Output to create custom 2-way binding with similar names
  // the name depends on Angular, for Angular to know that it's a 2-way binding property
  // @Output() sizeChange = new EventEmitter<{width: string; height: string}>()

  //More modern and simple alternative

  size = model.required<{width: string; height: string}>();

  onReset() {
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '100'
    // });
    this.size.set({
      width: '200',
      height: '100'
    });

  }
}
