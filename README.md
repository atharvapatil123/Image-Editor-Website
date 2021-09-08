<h1>Members:</h1>
<h3>1) Atharva Patil</h3>
<!-- <br> -->
<h3>2) Sahil Kedare</h3>


<h1>ABOUT PROJECT:</h1>

Our project topic is an IMAGE EDITOR WEBSITE and we have named it CHITRAKALA . This image editor website consists of 3 different section to which we can navigate with the help of navbar. The three different pages are Home section, About Us section and Contact section.

<h3>1. Home :</h3>

The home section starts with a button displaying “Get Started”,  which will direct the user to the Image editor section. After that we have three cards which display the process of image editing.
Then there is a section which describes all the editing features that we have used in our image editor like grayscale, contrast, saturate and many more. We have used image transition to show how the specific editing feature works and have provided a short description for it as well.
After that comes the main editor. Here we have a Canvas in which a user can upload the image he wants to edit with the help of choose button. On the left, there are various sliders and buttons which the user can use to edit the image. After applying the desired editing filters, the user can click on the Download button to download a copy of the edited image and save it.
If the user wants to revert back to the original image then he/she can click on the Reset button and if the user wants to upload a new image on the canvas he/she can click on the Clear Canvas button which will clear the canvas, after that he/she can click on the choose button to select new image.

<h3>2. About Us :</h3>

Here we have some information about the contributors to this project i.e about Atharva and Sahil with our photos and details.

<h3>3. Contact Us: </h3>

In this section we have a contact form. The user can contact us via this form and if they have any valuable feedback for us, they can provide us with the help of this form.
To the left we have provided the basic details like email, phone number and address.
At the end of each page there are icons which are linked to our social media accounts of Instagram, facebook , linkedIn and Github.


<h3>4. Outcome :</h3>

This website enables the user to add multiple combinations of different filters provided in the editor section, to the images they upload and then download the same.




<h1>TOOLS USED :</h2>

We have used HTML, CSS AND JAVASCRIPT for making this website. We have implemented all the editing features and the logic used for implementing these features like saturate, contrast, invert etc  using java-script only. Also, we have used simple image library for drawing the image to canvas.
For the frontend part, we have implemented everything using simple HTML, CSS and JS, involving different sets of animation used, transitions given to particular blocks, fixed navbar and many more.
For the backend part, we have a contact form in the contact section, which is linked to a google form, and any response recorded will be stored automatically in an excel sheet via this form. So, we have all the necessary information and valuable feedbacks of the users who fill this form.



<h1>FLOW OF PROJECT:</h1>

At the top there is a navbar with which user can navigate to home, about us and contact us pages. The “Get Started”  button at the top of the home page takes the user to the editor section.


<h1>Functions used:</h1>

_**We have tried to explain the functions in simple and easy-to-understand language : 
What is RGB ?**_
>	The RGB color model is an additive color model in which red, green, and blue light are added together in various combinations  to reproduce a broad array of colors. Their values range from 0 to 255 respectively. 
>	When 100% of each color is mixed together, it creates white light. When 0% of each color is combined, no light is generated, creating black color.
>	This provides 28, or 256 possible values for red, green, and blue. 256 x 256 x 256 = 16,777,216 total possible colors.

    
Picture depicting each block of the above image as one pixel. Ideally, there are millions of pixels in a single image.

<h3>1. Choose :</h3>
This button is provided in the editor section just top of the canvas, it is used for choosing an image by the user, so that it can be uploaded to the canvas.

<h3>2. Upload :</h3>
This function enables to let the input be first accepted by the user,  then the ID of Canvas is chosen and then the image is drawn on it.

<h3>3. Download :</h3>
This is another button provided in the editor section, just close to the choose button, it is used to download the edited image from the canvas

<h3>4. Reset :</h3>
This button is present to the bottom of canvas and the function is used to reset the image to its original form. When the image is chosen, it’s  two copies are created, so that when we have to revert back to the original image; the RGB value of the original image is set to the editor image which we want to reset.

<h3>5. Clear Canvas :</h3>
It is used for clearing the Canvas so that a new image can be uploaded for editing. Present image is cleared on clicking this button, available to the bottom of canvas, close to the reset button.

<h3>6. Grayscale :</h3>
Grayscale image, a kind of black-and-white or gray monochrome, are composed exclusively of shades of gray. The contrast ranges from black at the weakest intensity to white at the strongest. 
In this function each pixel of the image is traversed and its present r, g, b values are taken .Then the r, g, b value is set to the average of the previous r, g, b values which results in grayscale effect.
Example : 
 	Avg=pixel(red)+ pixel(blue)+ pixel(green)/3
	New Pixel(red)=avg , New Pixel(red)=avg, New Pixel(red)=avg

<h3>7. Warm :</h3>
This filter increases the red intensity of image. The present red value of the pixel is taken as input and is in incremented to achieve this effect.

<h3>8. Cool :</h3>
This filter increases the blue intensity of image. The present blue value of the pixel is taken as input and is in incremented to achieve this effect.

<h3>9. Emerald :</h3>
This filter increases the green intensity of image. The present green value of the pixel is taken as input and is in incremented to achieve this effect.

<h3>10. Contrast :</h3>
Contrast is determined by the difference in the colour and brightness of the object and other objects within the same field of view. It is the difference in luminance or colour that makes an object distinguishable.
Here the RGB value of each pixel is taken as an input and it is incremented by a factor called as contrast factor which results in contrast effect. 
Example:	
Contrast factor = (259 * (contrast + 255)) / (255 * (259 - contrast))

<h3>11. Saturate :</h3>
Color saturation is the intensity and purity of a color as displayed in an image. The higher the saturation of a color, the more vivid and intense it is. The lower is color saturation, the closer it is to pure gray on the grayscale.

<h3>12. Invert :</h3>
This utility takes an image of any format and inverts the colors in it. Black becomes white, and white becomes black, and so for all the colors. Naturally, running the process twice on an image results back to the original image.
Here the RGB value of each pixel is taken as input and it is set to its opposite i.e it is subtracted from 255 which results in invert effect.

<h3>13. Brightness :</h3>
It is used to change the brightness of an image. It takes the pixels of the input image and increases or decreases the Red, Green, Blue values significantly which results in increase or decrease in brightness.
<br>
<br>

<h1>SNAPSHOTS OF OUR WEBSITE :</h1>

<h3>1. Home Page:</h3>

![GitHub Logo](/images/Project/Home-1.jpg)
<br>
<br>

<h3>2. About Project Section:</h3>

![GitHub Logo](/images/Project/Info-1.jpg)
<br>
<br>
<br>
![GitHub Logo](/images/Project/Info-2.jpg)
<br>
<br>

<h3>3. Editor Section :</h3>

![GitHub Logo](/images/Project/Editor.jpg)
<br>
<br>

<h3>4. About Us Page :</h3>

![GitHub Logo](/images/Project/Team1.jpg)
<br>
<br>

<h3>5. Contact Us Page :</h3>

![GitHub Logo](/images/Project/Contact.jpg)
<br>
<br>

<h1>Thank You:grinning:
 





 

 











 





 

 

