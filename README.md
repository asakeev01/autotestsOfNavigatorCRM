# autotestsOfNavigatorCRM

After cloning the project you should run npm install in order to download all dependencies. Next step is to set up paths depending on the Operating System.
Last step is to change name of running js file to desired in wdio and write npm run wdio in console.

Scenario: Admin login
Given site http://167.114.201.175:5000/login
When I enter valid admin credentials
And I click on the 'Login' button
Then I should be redirected to the dashboard page
Scenario: Create client
Given site http://167.114.201.175:5000/clients
When I login as an admin user And I navigate to the 'Create Client' button
And I enter client information:
Parameter           Value
Фамилия *           Асакеев
Имя *                   Айдар
Пол *		     Муж.
E-mail *	    aidar@mail.ru 
Телефон *	   996707910551
Дата рождения *   08/30/2001

And I click on the 'Сохранить' button
Then the new client should be created successfully

LOGS:
[chrome 111.0.5563.110 mac os x #0-0] Running: chrome (v111.0.5563.110) on mac os x
[chrome 111.0.5563.110 mac os x #0-0] Session ID: 02539923b89ba2d7c65fca313e00035c
[chrome 111.0.5563.110 mac os x #0-0]
[chrome 111.0.5563.110 mac os x #0-0] » /test/specs/client.spec.js
[chrome 111.0.5563.110 mac os x #0-0] Client Suit
[chrome 111.0.5563.110 mac os x #0-0]    ✓ Create client
[chrome 111.0.5563.110 mac os x #0-0]
[chrome 111.0.5563.110 mac os x #0-0] 1 passing (48.5s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:51 

2023-03-24T11:57:04.050Z INFO @wdio/local-runner: Shutting down spawned worker
2023-03-24T11:57:04.301Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2023-03-24T11:57:04.302Z INFO @wdio/local-runner: shutting down



Scenario: View client
Given site http://167.114.201.175:5000/clients

When I log in as an admin user I get the clients list on the first page
And I click on a client from the list
Then I should see the details of the selected client

LOGS:
[chrome 111.0.5563.110 mac os x #0-0] Running: chrome (v111.0.5563.110) on mac os x
[chrome 111.0.5563.110 mac os x #0-0] Session ID: 1385317305dd5b7ae48fcbe94d323f21
[chrome 111.0.5563.110 mac os x #0-0]
[chrome 111.0.5563.110 mac os x #0-0] » /test/specs/client.view.js
[chrome 111.0.5563.110 mac os x #0-0] Client Suit
[chrome 111.0.5563.110 mac os x #0-0]    ✓ Update and view client
[chrome 111.0.5563.110 mac os x #0-0]
[chrome 111.0.5563.110 mac os x #0-0] 1 passing (38.5s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:41 

2023-03-24T12:17:39.499Z INFO @wdio/local-runner: Shutting down spawned worker
2023-03-24T12:17:39.752Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2023-03-24T12:17:39.753Z INFO @wdio/local-runner: shutting down

Scenario: Update client
Given site http://167.114.201.175:5000/clients/id

When I log in as an admin user I get the clients list on the first page
And I click on a client from the list
Then I should see the details of the selected client
Afterwards, I should change the name of the user from “Aidar” to “AidarDakansa”

LOGS:
[chrome 111.0.5563.110 mac os x #0-0] Running: chrome (v111.0.5563.110) on mac os x
[chrome 111.0.5563.110 mac os x #0-0] Session ID: 1385317305dd5b7ae48fcbe94d323f21
[chrome 111.0.5563.110 mac os x #0-0]
[chrome 111.0.5563.110 mac os x #0-0] » /test/specs/client.view.js
[chrome 111.0.5563.110 mac os x #0-0] Client Suit
[chrome 111.0.5563.110 mac os x #0-0]    ✓ Update and view client
[chrome 111.0.5563.110 mac os x #0-0]
[chrome 111.0.5563.110 mac os x #0-0] 1 passing (38.5s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:41 

2023-03-24T12:17:39.499Z INFO @wdio/local-runner: Shutting down spawned worker
2023-03-24T12:17:39.752Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2023-03-24T12:17:39.753Z INFO @wdio/local-runner: shutting down

Scenario: Update company
Given site http://167.114.201.175:5000/clients/id

When I log in as an admin user I get the bar on the top in which I should click “Юр.лица”
And I click on a company from the list
Then I should see the details of the selected company
Afterwards, I should change the name of the company from “BirKompania” to “BirKompanias”
LOGS:

[chrome 111.0.5563.110 mac os x #0-0] Running: chrome (v111.0.5563.110) on mac os x
[chrome 111.0.5563.110 mac os x #0-0] Session ID: 22e9db17d73c1b7cb541b6d7f2854ed2
[chrome 111.0.5563.110 mac os x #0-0]
[chrome 111.0.5563.110 mac os x #0-0] » /test/specs/company.spec.js
[chrome 111.0.5563.110 mac os x #0-0] Company Suit
[chrome 111.0.5563.110 mac os x #0-0]    ✓ Update company
[chrome 111.0.5563.110 mac os x #0-0]
[chrome 111.0.5563.110 mac os x #0-0] 1 passing (39.8s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:42 

2023-03-24T12:27:42.110Z INFO @wdio/local-runner: Shutting down spawned worker
2023-03-24T12:27:42.362Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2023-03-24T12:27:42.363Z INFO @wdio/local-runner: shutting down

