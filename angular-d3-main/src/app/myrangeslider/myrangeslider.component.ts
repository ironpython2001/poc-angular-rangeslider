import { Component, OnInit } from '@angular/core';
//declare var myfunction: Function;
declare var MyRangeSlider: Function;

@Component({
  selector: 'app-myrangeslider',
  templateUrl: './myrangeslider.component.html',
  styleUrls: ['./myrangeslider.component.scss']
})
export class MyrangesliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //myfunction('test1', 'test2');
    //https://seydahatipoglu.wordpress.com/2016/11/11/calling-native-javascript-functions-from-angular-components/
    //https://stackoverflow.com/questions/44817349/how-do-i-include-a-javascript-script-file-in-angular-and-call-a-function-from-th
    //https://stackoverflow.com/questions/51834966/unable-to-call-javascript-function-from-typescript-in-angular-6/51837595
    //https://stackoverflow.com/questions/49526681/how-to-call-javascript-functions-from-typescript-in-angular-5
    //https://www.truecodex.com/course/angular-6/how-to-use-external-js-files-and-javascript-code-in-angular
    //https://www.edureka.co/community/67336/how-to-load-external-scripts-dynamically-in-angular
    MyRangeSlider("this is a test message");
  }

}
