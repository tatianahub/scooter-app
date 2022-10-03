import {Component, HostListener} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  priceForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    scooter: ['', Validators.required],

  })

  scootersData = [
    {
      image: "1.png",
      name: "DPuky Speed Us One",
      gear: "городской",
      discount: 5,
      places: 1
    },
    {
      image: "2.png",
      name: "Vinca Sport VSP 10",
      gear: "городской",
      discount: 10,
      places: 1
    },
    {
      image: "3.png",
      name: "DeWolf DE SPOT 100",
      gear: "городской",
      discount: 3,
      places: 2
    },
    {
      image: "4.png",
      name: "Digma Techno 5",
      gear: "городской",
      discount: 3,
      places: 1
    },
    {
      image: "5.png",
      name: "BigBro SPIN II",
      gear: "городской",
      discount: 5,
      places: 2
    },
    {
      image: "6.png",
      name: "DeWolf DE SPOT 100",
      gear: "городской",
      discount: 3,
      places: 1
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  ScrollTo(target: HTMLElement, scooter?: any) {
    target.scrollIntoView({behavior: "smooth"});
    if (scooter) {
      this.priceForm.patchValue({scooter: scooter.name});
    }
  }

  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
  }

  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
  }

  onSubmit() {
    if (this.priceForm.valid) {
      alert("Спасибо за заявку мы свяжемся с Вами в ближайшее время!");
      this.priceForm.reset();
    }
  }
}
