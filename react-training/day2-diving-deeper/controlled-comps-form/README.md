# Controlled Form Components

## Task Overview
Create a React Component that represents a (HTML) Form for a shipping address.

__The form needs to contain the following:__
  * First Name (text input)
  * Last Name (text input)
  * Country (select input - where the first option is blank)
  * City (text input)
  * Street Address (text input)
  * ZIP Code (text input)
  * E-mail address (email input)

The submit button of the Form should be enabled only if all details were filled.

Submitting the Form should log the Form details to the console, and clear the Form’s data.

### Screenshots:

Browser:
![](https://static.wixstatic.com/media/32d4ec_700e99915d7c4f4f94cb3d033980dfa5~mv2.png/v1/fill/w_958,h_289,al_c,lg_1/32d4ec_700e99915d7c4f4f94cb3d033980dfa5~mv2.png)

Console:
![](https://static.wixstatic.com/media/32d4ec_e160ddc6f0ee418ab4af3fcc67cd1af4~mv2.png/v1/fill/w_1200,h_362,al_c,usm_0.66_1.00_0.01/32d4ec_e160ddc6f0ee418ab4af3fcc67cd1af4~mv2.png)



### Bonus
  * Display appropriate message to the user if e-mail address is invalid (dont use "email" type in input)
  * Display the missing or invalid fields of the form to the user.
  * Change the “City” input to a “select” input as well and make it context dependent on the Country. (e.g. - if “Israel” is selected from the list, show only cities in Israel like “Jerusalem”, “Tel Aviv”, “Qiryat Shmona”, “Sderot”). 
  Add countries like Israel, USA, UK, India & Japan
