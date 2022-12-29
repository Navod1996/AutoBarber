import { Component} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage  {

  constructor() { }

  option = {
    slidesPreView:1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    //autoplay: true,

  }

}
