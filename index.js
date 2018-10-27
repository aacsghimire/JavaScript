
// Hour 
// If Hour is between 6 AM and 12 PM: Good Morning!
// If hr is btwn 12Pm to 6pm: Good Afternoon;
// otherwise: Good Evening!


let hour=19;


if(hour>=6 && hour<12) {
    console.log('Good morning');
}

else if (hour>=12 && hour<18) {
    console.log('Good Afternoon');
}

else{
   console.log('Good Evening');
}