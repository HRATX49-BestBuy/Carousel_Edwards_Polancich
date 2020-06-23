import React from 'react';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateComment() {
  var line1 = ['I absolutely love this', 'I did not enjoy using this', 'I enjoyed using this', 'I did not like how this was built', 'Just when I thought life could get any better, I started using this', 'If I could drown this, I would', 'It\'s alright'];
  var line2 = ['I would play with this all the time', 'I would use this wherever I go', 'I tried to use this wherever I went', 'Even though it fights back', 'It even tried to grow a third arm', 'It made a weird satanic circle on the ground', 'It would refer to me as the Creator', 'Although I would have feelings towards it that i’ve never felt before', 'It asked me out on a date', 'It proposed to me on the second use… I said Yes', 'At one point, it freaked out in the middle of the night and decided that, at that point, it was a good time to put peanut butter on its skin', 'It makes very good animal impressions, even platypus tail slaps', 'Our arm wrestling matches were very close', 'It worried me when however, when it wanted me to explain the birds and the bee’s to my toaster', 'My child says that it would fart while I was away, which is… impossible', 'Although I wouldn\'t recommend holding onto the \’on\’ button unless you want to hear some interesting sounds', 'It tried to convert me into a Velociraptor'];
  var line3 = ['I definitely recommend using this', 'I definitely do not recommend using this', 'This product opened my eyes to another world of possibilities', 'I\'m going to send this to my mom', 'I\'m going to send this to my dad', 'I\'m going to tell my friends about this'];

  var newComment = line1[getRandomInt(0, line1.length)] + '! ' + line2[getRandomInt(0, line2.length)] + '. ' + line3[getRandomInt(0, line3.length)] + '.';
  return newComment;

}

function generateCommentTitle() {
  var title1 = ['Best of the Best', 'Worst of the worst', 'Could\'ve been better', 'Could\'ve been worse', 'A Big eye opener', 'Wow!', 'This thing is cRAAAAZZZZZyy', 'My Favorite', 'Now Im Complete', 'I still dont know how...', 'I give it an A!'];

  var newTitleComment = title1[getRandomInt(0, title1.length)];
  return newTitleComment;

}
// let element = document.getElementById('CommentHeaderStars');
// function generateRandomStarCount (){
  
//   let genNum = Math.round(Math.random()*5);
//   if (genNum > 5){
//     genNum = 5;
//   }
//   if (genNum === 0){
//     genNum = 1;
//   }
//   let emptyStar = 5 - genNum;
//   console.log('Gen num is',genNum)
//   console.log('this is empty star',(emptyStar))
  
  
//   console.log(element)
//   for (var i = 0; i < emptyStar; i++){
//     let oneOffStar = document.createElement('li');
//     oneOffStar.className="fa fa-star"
//     console.log(oneOffStar)
//     console.log(element)
//     element.appendChild(oneOffStar)
//   } 

//   for (var i = 0; i < genNum; i++){
//     let oneStar = document.createElement('li');
//     oneStar.className="fa fa-star checked"
//     console.log(oneStar)
//     element.appendChild(oneStar)
//   } 
//   return;
// }

const ReviewsCommentArea = (props) => {
  return (
    <div id='ReviewMain'>
      <div id='CommentHeader'>
        <ul id='CommentHeaderStars'></ul><span id='CommentHeaderTitleText'>{generateCommentTitle()}</span>
      </div>
      
      <div id='CommentSubHeader'>
        <span>&#9745;</span><span id='VerifiedServer'>Verified Purchase  |</span><span id='CommentSubHeaderGrayText'> Posted {Math.round(Math.random() * 5)} week(s) ago. Owned for {Math.round(Math.random() * 3)} month(s) when reviewed.</span>
      </div>
      <div id='Comment'>
        <p id='CommentP'>{generateComment()}</p>
      </div>
      <div id='CommentThumbnailImage'>
        <img src={props.elprops.thisProductsData.thisProductsData[0].thumbnailImage}></img>
      </div>
      <div id='CommentButtons'>
        <button id='buttonStyleA'>Helpful ({Math.round(Math.random() * 10)})</button> <button className='buttonStyleB'>Unhelpful ({Math.round(Math.random() * 10)})</button> | <button className='buttonStyleB'>Report</button> | <button className='buttonStyleB'>Post Comment</button>
      </div>
    </div>
  )
}

export default ReviewsCommentArea;