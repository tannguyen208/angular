import { Component, OnInit } from "@angular/core";
import { randomName } from "@core/helpers/name.helper";

export interface Person {
  id: string;
  name: string;
  age: number;
  phone: string;
  avatar: string;
  address: string;
  locationX: number;
  locationY: number;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  people: Person[] = [];

  constructor() {}

  ngOnInit(): void {
    window.setInterval(() => {
      const MAX_LENGTH = 30;
      let people: Person[] = [];

      for (let key = 0; key < Math.random() * MAX_LENGTH; key++) {
        people = [
          ...people,
          {
            id: key,
            name: randomName(),
            age: Math.floor(Math.random() * 80) + 20,
            phone: "+84 357833112",
            address: "HCM",
            avatar: "https://image.flaticon.com/icons/svg/1177/1177568.svg",
            locationX: +(Math.random() * 5000).toFixed(2),
            locationY: +(Math.random() * 5000).toFixed(2)
          }
        ] as Person[];
      }

      this.people = people;
    }, 2000);
  }

  trackBy(index: number, person: Person) {
    return person.id;
  }
}
