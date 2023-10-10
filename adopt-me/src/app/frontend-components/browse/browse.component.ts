import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  petProfiles: any[]; // You should define your pet data model here

  constructor() {
    // Initialize petProfiles with sample data
    this.petProfiles = [
      {
        name: 'Fluffy',
        image: 'assets/fluffy.jpg',
        description: 'A cute fluffy pet.'
      },
      {
        name: 'Rex',
        image: 'assets/rex.jpg',
        description: 'A playful pet named Rex.'
      },
      // Add more pet profiles as needed
    ];
  }

  ngOnInit(): void {
  }

  onScroll() {
    // Implement scroll event handling if needed
    // For example, you can load more pet profiles as the user scrolls
  }
}
