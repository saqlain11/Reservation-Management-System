## Project 
For this reservation management system, we have reservation list which get all the upcoming reservations
so for this i have used redux teminology to main the global state throught out the components although this wouldn't needed but for scalability purpose i have used so
I have used thunk for async api calling.
I have used typeScript for type safety.
I have used jest with RTL for code coverage and to mitigate unexpected behaviour of code.

## Upcomming Reservations
For get upcoming reservations i just filter out by start and end date ISO string from db and convert that string to date with user timezone and compare it to with current date time altough we can discard time zome by using UTC but assuming that reservations is in different countries so timezone is necessary for that to get exact same date and time.
I have checkd that current date <= start or current date <=end so it will filter out the upcoming reservations also we can add extra status check if it is seated or checkedout we would not consider that resrevation but at the moment i'm displaying that and filter just by start and end date.

## Sorting Reservation
user applied sorting on no of seats, first name & last name and reservation id.

## Search by name & surname
I have applied search on table, so staff can search user on upcoming reservation

## Filter Reservation
Reservation can be filter on the basis of name and surname / date / status / shift / area, if any one can be selected i can be filter on the basis of specific filter