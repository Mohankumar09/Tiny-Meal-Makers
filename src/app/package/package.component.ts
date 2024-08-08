import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packages = [
    {
      name: 'Spicy Dum Briyani',
      description: 'Weekly Package',
      price: 1000,
      category: 'weekly',
      image: '/assets/weekly-package.jpg'
    },
    {
      name: 'Chilly Chicken',
      description: 'Weekly Package',
      price: 234,
      category: 'weekly',
      image: '/assets/weekly-package.jpg'
    },
    {
      name: 'Monthly Delight',
      description: 'Monthly Package',
      price: 2000,
      category: 'monthly',
      image: '/assets/monthly-package.jpg'
    },
    // Add more packages as needed
  ];

  filteredPackages = this.packages;

  constructor() {}

  ngOnInit(): void {}

  filterPackages(category: string): void {
    if (category === 'all') {
      this.filteredPackages = this.packages;
    } else {
      this.filteredPackages = this.packages.filter(pkg => pkg.category === category);
    }
  }
}
