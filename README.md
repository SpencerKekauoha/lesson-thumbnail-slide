# lesson-thumbnail-slide

Create elements that appear to slide in from the side of the screen into position.

STEP 1: 

Create an index.html, styles.css, and animations.js.  Grab the jQuery CDN, since we will be using 
jQuery to accomplish our animations.

STEP 2: 

In your index.html file, create an image container with nested img tags.  The img tags will be animated
to appear as if they are sliding in from the left.

STEP 3:  

Style your page as to how you want it look as the final product.  After Styling, give your image
or whatever element you want to slide in a class.  If you already have a class for that element,
add this to your css in that class.

opacity: 0;
transform: translateX(-20px);

This will make the element not visilbe and move the position -20px;

STEP 4:

Now, create a new class in your css called is-showing.  This class will be applied when we use our jquery.
Later we will create a jquery function that add our is-showing class to our images.  is showing will have these 
attributes in our css:

opacity: 1;
transform: translateX(0px);
transition: all 0.3s ease-in-out;

When the jquery function executes, our opacity will return to 1 and move our images back to their 
original position.  Adding the transition improves the flow and look of the animation.

STEP 5:  

Now to add our jQuery to make it function.  Included is the function if you get lost, but feel free to 
try to use your own method.

Set your jQuery on scoll of the window and set a var called winScroll which finds the 
position of the top of the window.

Our function will find a container that we specify, in this case it is image-flow container, and find the top of the container.

When winScroll is greater than the position of the top of the container, our function will add is showing to image-flow
and add a setTimeout so each image flows in right after the other.

<!--$(window).scroll(function(){-->

<!--  var winScroll = $(this).scrollTop();-->

<!--  if(winScroll > $('.image-flow-container').offset().top - ($(window).height() / 2)) {-->
<!--      $('.image-flow').each(function(i){-->
<!--        setTimeout(function(){-->
<!--          $('.image-flow').eq(i).addClass('is-showing');-->
<!--        }, 150 * (i+1));-->
<!--      });-->
<!--    }-->

<!--    if(winScroll > $('.fill-header').offset().top - ($(window).height() / 2)) {-->
<!--        $('.image-flow').each(function(i){-->
<!--          setTimeout(function(){-->
<!--            $('.title').eq(i).addClass('is-showing');-->
<!--          }, 150 * (i+1));-->
<!--        });-->
<!--      }-->
<!--});-->
