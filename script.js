/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

function calculateCarpet() {
  // 👇 Write your code here 👇
  //get width of rooms
  let roomOneWidth = getRoomWidth(1);
  let roomTwoWidth = getRoomWidth(2);
  //get length of rooms
  let roomOneLength = getRoomLength(1);
  let roomTwoLength = getRoomLength(2);
  //find the areas of each room
  let roomOneArea = roomOneLength * roomOneWidth;
  let roomTwoArea = roomTwoLength * roomTwoWidth;
  //add the rooms together and find the 10% extra
  let areaReq = (roomOneArea + roomTwoArea) * 1.1;
  showResult(areaReq);
}
calculateCarpetTest();

/* LEVEL UP! (optional) 
	1. Function explanations: 
  function showResult(result):
  The function showResult first checks if the input passed in the parameter 
  is a valid input. If it is, it moves on and the shortens the input number
  to two decimal points depending if it's a floating point number. Then it 
  accesses the HTML element with the ID "result" and change its text to 
  the result found.

  function getRoomLength(roomNumber):
  The function getRoomLength first checks if the input passed in the parameter 
  is a valid input. If it is, it moves on and use the input to create an ID to 
  locate the HTML element that corresponds to the room being looked for. It 
  selects that specific element that returns the value it holds as a number.


	2. Custom styles added: 
  On the calculate button on the web page, I added a hover effect to the button 
  in the style.css page. I added an effect where a mouse hovers over the button,
  the text will turn blue.

*/
