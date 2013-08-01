FileOpener plugin for Phonegap
=============

Simple plugin which allows you to open popular files (PDF, WORD, EXCEL, JPG, GIF, POWERPOINT, VIDEOS, MUSIC etc.) stored locally on your device with Phonegap for Android.

Adding the Plugin to your project
-----------
    $ cordova plugin add https://github.com/don/FileOpener.git

Using the plugin
===========
The plugin creates the object  ``````window.plugins.fileOpener``````. To use, call the  ``````open()`````` method:

Sample use:
----------
```````javascript
window.plugins.fileOpener.open("file:///sdcard/Android/data/com.example.application/document.doc");
window.plugins.fileOpener.open("file:///sdcard/Android/data/com.example.application/manual.pdf");
window.plugins.fileOpener.open("file:///sdcard/Android/data/com.example.application/presentation.ppt");
window.plugins.fileOpener.open("file:///sdcard/Android/data/com.example.application/image.jpg");
```````

After you run the command above, Android device will either open the file with proper external application installed on your device or ask you which application to use, if you haven't set before which application to use to open the specific type of file. What is great, when you exit the external app, Android will return to your application.


RELEASE NOTES
-------------
Aug 1, 2013
Update for Cordova-3.0

May 21, 2013
Update for Cordova-2.7.0

January 2, 2013
Initial release

REMARKS
------------
Please have in mind, that the plugin can open any local file on your Android device, so in some cases you may have to secure the code better. For example you could store your application folder ``````file:///sdcard/Android/data/com.example.application/`````` in your ``````FileOpener.java`````` file instead of ``````fileopener.js``````. 

You may also change the way the plugin checks file extension (currently it uses simple ``````contains`````` function.

CONTRIBUTION
-------------
I wrote this plugin basing on the great VideoPlayer plugin by Macdonst (https://github.com/macdonst/VideoPlayer).
Big thanks go also to Raymond Camden whose article about Intents inspired me to write plugin (http://www.raymondcamden.com/index.cfm/2012/5/1/Example-of-Intents-with-PhoneGap). 


LICENSE
-------------
PhoneGap is available under either the terms of the modified BSD license or the MIT License (2008). As a recipient of PhonegGap, you may choose which license to receive this code under (except as noted in per-module LICENSE files). Some modules may not be the copyright of Nitobi. These modules contain explicit declarations of copyright in both the LICENSE files in the directories in which they reside and in the code itself. No external contributions are allowed under licenses which are fundamentally incompatible with the MIT or BSD licenses that PhoneGap is distributed under.

The text of the MIT and BSD licenses is reproduced below.

The "New" BSD License

Copyright (c) 2005-2011, Nitobi Software Inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of Phonegap/Nitobi nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The MIT License

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
