**1.	INTRODUCTION:**

        Our website is an interactive travel package booking site that allows passengers to research 
        packages and book travel with itinerary, where the passengers 
        can add a list of activities of his choice available at each destination.
        Based on the subscription (standard, gold, premium) taken by the passenger, he has 
        a cash balance which is used for registration of activities available at each destination. 
        The set of offers provided by us are listed below

        •	A premium passenger can sign up for all the activities at free of cost.
        •	A gold passenger can avail 10% discount on selected activities.
        •	A standard passenger gets no discount

**1.1.	INITIAL SETUP:**

        To create the database on the system local storage to maintain various data objects we need to make a few changes to code.

        a.	Create a user on the user login page as mentioned in the sections below
        b.	Go to home.js in the parent folder
        c.	Go to line number 546
        d.	You can see that some code is commented from 546 - 553 (purposefully – do not delete). Remove the comment tag.
        e.	Add comments tag to the code lines 555 – 581
        f.	Now run the program as explained in the sections below once (till booking and payment).
        g.	This will create required fields to maintain data on the localstorage.
        h.	Undo the steps E and D
        i.	Now you can run the code smoothly



**2.	HOME PAGE:**

          Below is the home page of our website with Bootstrap navigation bar which can extend or collapse, 
          depending on the screen size. Based on the screen size the menu would be either in Hamburger layout
          or extended layout. In the navigation bar we are providing the following options:

              •	Login which allows the passenger to logon or Register. Post successful login, the cash balance
                of the passenger is maintained throughout the website which would be updated based on the activities
                selected by the user at selected package itinerary.
              •	Contact Us section there is scope to add various mainstream social media addresses with which
                the passenger can communicate with the firm.
              •	Logout to log out of the website. 

          The home page also contains the list of available travel packages with capacity it can accommodate.
          Here the passenger can go through the package details and itinerary of any of the available packages 
          by clicking on View Details Button.

**3.	LOGIN OR SIGNUP PAGE:**

          The website contains the login and register pages where the user can input his credentials to access various 
          pages of website or he can register with necessary details as follows:
          •	A proper email id and user name.
          •	A password- must be of at least 6 characters which must contain a lowercase letter, an uppercase letter, a number or special character.
          •	The subscription type in order to avail the offers provided by the website.

         After the completion of successful registration, the passenger would be able to logon to website and can logout on any page throughout the website.


**4.	PACKAGE DETAILS PAGE:**

       This page contains a navigation bar at top of the page which would allow the passenger to navigate 
       across the website.   Based on the selected package in home page it displays the list of destinations
       under that package dynamically. And upon clicking View Activities button under each destination, 
       the passenger would be able to see the list of activities available with capacity and fares 
       applicable for it. He can register for either zero or more activities of his choice at each 
       destination based on the available capacity using Add button and can remove the activity 
       from his cart using Remove button. If the activity capacity has reached to maximum limit, 
       then the Add button won’t be available for selection for passenger to add activities to cart.

       After choosing the activities he can go for a checkout by clicking Proceed to Checkout button
       and if there is no current user login session then proceed to checkout button won’t be visible for further action.


**5.	CHECKOUT PAGE:**

      This page contains a navigation bar at top of the page which would allow the passenger to navigate 
      across the website. It contains the selected activities of the passenger and the final fares 
      applicable based on the subscription taken by the passenger. The passenger can proceed to payment 
      by clicking on Pay button. 

      •	A premium passenger can sign up for all the
            activities at free of cost based on the activity’s capacity.

      • A gold passenger can proceed for payment if he has a sufficient balance 
        and also can avail 10% discount on registered activities. The final fare 
        after discount will be deducted from his cash balance.

      • A standard passenger can proceed for payment if he has a sufficient balance 
        and his cash balance will be updated.


**6.	CONTACT US PAGE:**

        This section is purely representational and doesn’t hold any functionality nor does it affect the
        website in anyway. But there is scope to add various mainstream social media addresses with which 
        the passenger can communicate with the firm.

 

