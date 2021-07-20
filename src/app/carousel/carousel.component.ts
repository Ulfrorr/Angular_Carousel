import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

 currentSlideIndex = 1;

  ngOnInit(): void {
    

    this.showSlides(this.currentSlideIndex);

  }
  showPrev(this: any): void {
    this.showSlides(this.currentSlideIndex += -1);
  }
  
  showNext(this: any): void {
    this.showSlides(this.currentSlideIndex += 1);
  }
  
  showSlides(this: any, slideToShowIndex: number) {
    var i;
    var slides = document.getElementsByClassName("slide") as HTMLCollectionOf<HTMLDivElement>;
    var point = document.getElementsByClassName("point") as HTMLCollectionOf<HTMLDivElement>;
  
    if (slideToShowIndex > slides.length) {this.currentSlideIndex = 1}
    if (slideToShowIndex < 1) {this.currentSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < point.length; i++) {
        point[i].className = point[i].className.replace(" active", "");
    }
    slides[this.currentSlideIndex-1].style.display = "block";
    point[this.currentSlideIndex-1].className += " active";
}
}
