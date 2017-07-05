# Stock Sicker
> A stock ticker is a report of the price for certain securities, updated continuously throughout the trading session by the various stock exchanges. A "tick" is any change in price, whether that movement is up or down.

## What It Does
The stock ticker displays a list of favorite stocks with their current value and daily change in percentages and value.

Stocks can be added or removed from the list. Their order in the list can be changed. The list can be filtered by some conditions.

The selected symbols should be saved locally.

The Stocks data should be updated periodically (every 5 minutes) or when triggerred by the user.

There are two screens needs to be implemented - "Stocks List" and "Add Stocks".

## Stocks List Page
### Header
The header should have a logo, an edit button and refresh button.
When clicking on the referesh button, the stocks should be updated.

The edit button should toggle Edit/View mode (more below).

### List of Stocks
This is a a table where each line represents a stock.
Each line should look like this:

```
Symbol (Name) | Price | Daily Change
```

The `Daily Change` should be changed on click:
- Change in percentage (+0.15%)
- Change in value (+0.01)

in `Edit` mode, the following should be added
- X button to remove a stock.
- Up/Down arrows to decide the order of the displayed stock.

### Filtering
By default, this section is collapsed and opens on click.
It allows filtering the stocks by the following criterias:
- By Symbol/Name: a single input that filters on both symbol and name (at least one must be satisfied to disply the stock).
- By Trend: A select box, selecting between All/Losing/Gaining.
- By Price Range: From __ To __. (TODO - not defined well enough).

Filters will be reflected by clicking the Apply button.

### Footer
A single Add Stocks button to move to Add Stocks page

## Add Stocks Page
### Header
The header should include a serch input and a search button. The search is based on the stock Symbol only.

Display an empty view if didn't search a stock yet and an error message if search didn't match any stock.

### Possible Stocks
A list of possible stocks (by their symbol). Each line represnets a stock should look like this:
```
Symbol (Name) | Type | Exchange Name
```

`Type` is either "Stock" or "Futures".

Once results apper, the user can select multiple stocks and click the `Add` button. Clicking will navigate back to the stocks list screen.

The cancel button will navigate to the stocks list screen without adding stocks.

## Retrieving Data
### Static Mocked Data
As a first step, use the data structures below.

1. Stocks Symbol List. Defines which stocks needs to be displayed and their order
```json
[
  "WIX",
  "MSFT",
  "YHOO"
]
```

2. Stocks Data. Data per each symbol.
```json
[
  {
    "Symbol": "WIX",
    "Name": "Wix.com Ltd.",
    "Change": "0.750000",
    "PercentChange": "+1.51%",
    "LastTradePriceOnly": "76.099998"
  },
  {
    "Symbol": "MSFT",
    "Name": "Microsoft Corporation",
    "PercentChange": "-2.09%",
    "Change": "-0.850006",
    "LastTradePriceOnly": "69.620003"
  },
  {
    "Symbol": "YHOO",
    "Name": "Yahoo! Inc.",
    "Change": "0.279999",
    "PercentChange": "+1.11%",
    "LastTradePriceOnly": "50.599998"
  }
]
```

3. Stocks Symbol Data. When searching for partial Yahoo symbol, for example `YHO` (instead of `YHOO`), this it the data that returns:

```json
[
  {
    "exchange": "NMS",
    "exchange_name": "NASDAQ",
    "name": "Yahoo! Inc.",
    "symbol": "YHOO",
    "type": "Stock"
  },
  {
    "exchange": "MUN",
    "exchange_name": "Munich",
    "name": "YAHOO INC.  DL-,001",
    "symbol": "YHO.MU",
    "type": "Stock"
  },
  {
    "exchange": "EBS",
    "exchange_name": "Swiss",
    "name": "Yahoo! Inc.",
    "symbol": "YHOO.SW",
    "type": "Stock"
  },
  {
    "exchange": "SGO",
    "exchange_name": "Santiago Stock Exchange ",
    "name": "Yahoo! Inc.",
    "symbol": "YHOO.SN",
    "type": "Stock"
  },
  {
    "exchange": "PNK",
    "exchange_name": "OTC Markets",
    "name": "Yellowhead Mining Inc.",
    "symbol": "YHMGF",
    "type": "Stock"
  }
]
```

#### Stokr-Server

To get the required information about symbols and stock, we use the Yahoo finance platform. We've created a Node Express server that simplifies Yahoo's API.

Install the server

```
npm i -g stokr-server
```

Run the server (will run on `http://localhost:7000`)

```
stokr-server
```

#### API

##### Search Symbol
Search a quote (stock) symbol by company name or any free text

* **URL** /search
* **Method:** `GET`
*  **URL Params**
   **Required:**
   `q=[string]` - search query
* **Success Response:**
  * **Code:** 200 <br />
  * **Content:**
  ```JSON
  {"ResultSet":{"Query":"GOOG","Result":[{"symbol":"GOOG","name":"Alphabet Inc.","exch":"NMS","type":"S","exchDisp":"NASDAQ","typeDisp":"Equity"},{"symbol":"GOOGL","name":"Alphabet Inc.","exch":"NAS","type":"S","exchDisp":"NASDAQ","typeDisp":"Equity"},{"symbol":"GOOGL-USD.SW","name":"Alphabet","exch":"EBS","type":"S","exchDisp":"Swiss","typeDisp":"Equity"},{"symbol":"GOOGL170609C01000000","name":"GOOGL Jun 2017 call 1000.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"GOOG190118C01000000","name":"GOOG Jan 2019 call 1000.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"GOOG170609C00985000","name":"GOOG Jun 2017 call 985.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"GOOG170609C00980000","name":"GOOG Jun 2017 call 980.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"GOOG170609C00982500","name":"GOOG Jun 2017 call 982.500","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"GOOG170609P00960000","name":"GOOG Jun 2017 put 960.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"GOOGL.SN","name":"Alphabet Inc.","exch":"SGO","type":"S","exchDisp":"Santiago Stock Exchange","typeDisp":"Equity"}]}}
  ```
* **Sample Call:** `/search?q=google`

##### Get quote (stock) details by symbol
Get quotes information by symbol

* **URL** /quotes
* **Method:** `GET`
*  **URL Params**
   **Required:**
   `q=[string]` - Comma seperated symbols
* **Success Response:**
  * **Code:** 200 <br />
  * **Content:**
  ```JSON
  {"query":{"count":2,"created":"2017-06-07T15:19:22Z","lang":"en-US","diagnostics":{"publiclyCallable":"true","url":{"execution-start-time":"8","execution-stop-time":"16","execution-time":"8","content":"http://api.finance.yahoo.com:4080/v1/quote/symbol/GOOG%2CWIX?view=detail&format=xml"},"javascript":{"execution-start-time":"5","execution-stop-time":"19","execution-time":"14","instructions-used":"2502","table-name":"pm.finance"},"user-time":"20","service-time":"8","build-version":"2.0.137"},"results":{"quote":[{"symbol":"GOOG","Name":"Alphabet Inc.","Symbol":"GOOG","Open":"979.649963","DaysHigh":"984.140015","DaysLow":"977.260010","MarketCapitalization":"683.555B","YearHigh":"988.250000","YearLow":"663.284000","Volume":"511997","AverageDailyVolume":"-","PERatio":"33.063560","LastTradePriceOnly":"978.450012","Change":"1.880005","realtime_price":"978.450012","realtime_change":"1.880005","realtime_chg_percent":"0.192511","eps_curr_year":"29.593000","realtime_ts":"6 07 2017 15:19:00 GMT","ts":"6 07 2017 15:19:00 GMT"},{"symbol":"WIX","Name":"Wix.com Ltd.","Symbol":"WIX","Open":"77.750000","DaysHigh":"79.500000","DaysLow":"77.449997","MarketCapitalization":"3.591B","YearHigh":"86.150000","YearLow":"26.310000","Volume":"411468","AverageDailyVolume":"-","PERatio":null,"LastTradePriceOnly":"79.000000","Change":"1.250000","realtime_price":"79.000000","realtime_change":"1.250000","realtime_chg_percent":"1.607717","eps_curr_year":"-1.110000","realtime_ts":"6 07 2017 15:18:01 GMT","ts":"6 07 2017 15:18:01 GMT"}]}}}
  ```
* **Sample Call:** `/quotes?q=GOOG,WIX`

### Storing data
You should use the `LocalStorage` mechanism to save your favorite stocks and their order.
When the app start - use the data from the `LocalStorage`. If there isn't data there, use the "Stocks Symbol List" data defined previously.


## Bonus Section
### Animations
* When moving between screens.
* When list items appear.

### Stocks List
* Filter the stocks in the Stocks List screen without clicking on the apply button (on-the-fly filtering)

### Add Stocks Page
* Search for stocks withouth clicking on the search button (on-the-fly filtering). Beware from making multiple HTTP requests.

### Store the data on the server
Save the portfolio symbols on the server instead of `Local Storage`

##### List Saved Symbols
Lists the saved symbols (notice: the server is not persistent so the list will be lost when you restart it)

* **URL** /symbol
* **Method:** `GET`
* **Success Response:**
  * **Code:** 200 <br />
  * **Content:**
  ```JSON
  ["MSFT","AAPL","GOOG","CSCO","ORCL","INTC","WIX","AMZN","EBAY","DELL","QCOM","YHOO"]
  ```
* **Sample Call:** `/symbol`


##### Save Symbol
Save a new symbol

* **URL** /symbol/:symbol
* **Method:** `POST`
*  **URL Params**
   **Required:**
   `:symbol` - The symbol to save
* **Success Response:**
  * **Code:** 200 <br />
  * **Content:**
  ```JSON
  true
  ```
* **Error Response:**
  * i.e. cannot add the same symbol twice (case insensitive)
  * **Code:** 500 <br />
* **Sample Call:** `/symbol/WIX`


##### Remove a Symbol
Removes the symbol from the server memory

* **URL** /symbol/:symbol
* **Method:** `DELETE`
*  **URL Params**
   **Required:**
   `:symbol` - The symbol to remove
* **Success Response:**
  * **Code:** 200 <br />
  * **Content:**
  ```JSON
  true
  ```
* **Error Response:**
  * i.e. the symbol to remove was not found
  * **Code:** 500 <br />
* **Sample Call:** `/symbol/GOOG`

### Stock Detail Page (Bonus)
This screen is up to you to implement. It should display additional data of a specific stock.
For example, latest news about the stack / more numerical data / change graph, etc... Go wild!
