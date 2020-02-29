# Tech Talk - "A brief introduction to image recognition"

Here are some examples of code that I used to explore my tech talk topic "A brief introduction to image recognition"

The python code was used to explore examples of feature recognition techniques.

The vision folder contains a very simple react app which features pictures which on clicking will make a call to the google vision API
service and will get back the results.

If you would like to use the vision example, you will need to create a google cloud account and generate an API key for google vision.

Once you have done that, add it to the area outlined in src/config/environment.js

Lastly, to get some images to display, create a new image bucket on google api and add each image link to src/config/app.js in the
image array on line 15.

Some resources to help you get started:
https://cloud.google.com/vision/docs/quickstart

Tutorials used for ResNet and using CNNs
https://colab.research.google.com/github/SalChem/Fastai-iNotes-iTutorials/blob/master/Image_Recognition_Basics.ipynb#scrollTo=xHtBFQBLNFie
