import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template:`<h2></h2> 
  <input type = "text" value = Sahil>
 
  <input [disabled] = "isDisabled" id = "{{myId}}" type = "text" value = "This Block Is Disabled">`,
  
  
  
  styles: [
    'div{color:red;}'
    

    
  ]

  
})
export class TestComponent implements OnInit {

  public name = "Sahil";
public myId = "testid";
public isDisabled = "true";
  constructor() { }

  ngOnInit(): void {
  }

}

var city = prompt("Please enter you city");
    
if (city != null) {
    alert( city );
}