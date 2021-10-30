https://currency-portfolio.netlify.app/

1. When the user opens the page for the first time, he encounters the login page. If there is no account, we redirect to the registration page. Here we ask for the name and surname and save it to the local storage. Then we direct the user to the attached screen. The user's initial balance will be $10,000. The balance and total portfolio value of the user at any point will be kept in the local storage and will be updated in the local storage according to the transactions made.
2. We put an icon and/or application name in the upper left corner of this screen.
3. In the upper right corner of this screen, we put the user's name in localStorage with a profile picture. 4. In the middle of the screen, we create a search box where users can search for currencies, and a table with the received currencies at the bottom.
4. We send a request to the address “https://v6.exchangerate-api.com/v6/YOUR-API-KEY/codes” to search for currencies.
5. We show the abbreviations and names of the data from here (example: AED - UAE Dirham).
6. If the user clicks on one of the results here, we open a purchase mode using the data we get from ”https://v6.exchangerate-api.com/v6/ YOUR API-KEY /latest/TRY”. We get the selected exchange rate from the data received in the modal we opened. Here we show dry.
7. We get the amount of foreign currency that the user wants to convert from here. After the transaction, the user's balance should change. Rotation with a value of 0 should not be allowed and a warning should be given. Likewise, if the user does not have enough cash, they should not be allowed to buy foreign currency.
8. If the user has bought more than one exchange rate, we change our data accordingly by asking which rate he wants to change in the next purchases and repeat the process in point 7.
9. We add a table showing the received currencies under the search bar. Here we create a selection button next to the currencies we have listed.
10. At the same time, we create 2 more buttons for the buying and selling transactions of these currencies and we design these buttons to be active if the currencies are selected.
11. If any one of the buttons is clicked, we open the modal and ask the user to know how many pieces will be bought or sold. The user balance should change after the transaction. The user should not be allowed to sell more currency than he has or to buy foreign currency without enough money. These situations should be indicated as a warning to the user.
12. The prices of the currencies in the user's portfolio should be updated every two minutes and the update time should be displayed at the bottom of the application.
