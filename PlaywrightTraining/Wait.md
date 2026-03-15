Playwright 
1. Auto wait
2. Explicitly implement wait
   a. watifortimeout: Script to wait for some time and then proceed
   b.   await page.waitForLoadState(): On the web page 
         state :
           1. load
               a. DOM Tree should created
               b. HTML page is visible
               c. all the resources are loaded
           2. domcontentloaded
               a. DOM Tree should created
               b. HTML page is visible
               b. Images , css , fonts may be loading (resources)
           3. networkIdle
              a. Wait till there are no more network calls
   c. waitfor : This method is used on the locator
      1. "attached" : The Element is attached to DOM
      2. "detached" : The Element is remove from the DOM
      3. "visible" : Visible on the HTML Page
      4. "hidden" : The element is not visible on the html page.