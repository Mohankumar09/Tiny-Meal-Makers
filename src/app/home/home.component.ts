// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';

interface Plan {
  type: string;
  name: string;
  description: string;
  image: string;
  items: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  plans: Plan[] = [
    {
      type: 'South Indian',
      name: 'South Indian',
      description: 'Description of the package',
      image: '/assets/monthly-package.jpg',
      items: ['Chicken Briyani', 'Mutton Soup', 'Chicken Tikka']
    },
    {
      type: 'North Indian',
      name: 'Karnataka Kaaram',
      description: 'Special Karnataka Kaaram package for spice lovers',
      image: '/assets/weekly-package.jpg',
      items: ['Idly', 'Dosa', 'Mutton Soup']
    },
    {
      type: 'Chinese',
      name: 'Chinese Food',
      description: 'Description of the package',
      image: '/assets/daily-package.jpg',
      items: ['Chicken Briyani', 'Vegetable Korma']
    }
    // Add more plans as needed
  ];

  filteredPlans: Plan[] = [];

  ngOnInit() {
    this.filteredPlans = this.plans; // Show all plans by default
    this.showSlides(0); // Start slideshow with the first slide
  }

  filterPlans(type: string) {
    if (type === 'All') {
      this.filteredPlans = this.plans;
    } else {
      this.filteredPlans = this.plans.filter(plan => plan.type === type);
    }
  }

  // Slideshow functionality
  showSlides(slideIndex: number) {
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot");

    // Hide all slides and remove active dot class
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    // Increment slideIndex and reset to 1 if reached the end
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Display current slide and set active dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Call showSlides() recursively after 3 seconds
    setTimeout(() => this.showSlides(slideIndex), 3000);
  }
}
