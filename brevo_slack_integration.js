// Description: This Google Apps Script sends data received from Brevo to a Slack channel.

function sendToSlack(data) {
    // URL of the Slack webhook
    var slackWebhookUrl = "YOUR_SLACK_WEBHOOK_URL_HERE";
  
    // Creating the message to send to Slack
    var message = "###NEW EVENT FROM BREVO###\n" +
                  "Email: " + data.email + "\n" +
                  "Event: " + data.event + "\n" +
                  "Subject: " + data.subject + "\n" +
                  "Link: " + data.link + "\n" +
                  "Sender Email: " + data.sender_email;
  
    // Sending the POST request to the Slack webhook URL
    var payload = {
      "text": message
    };
  
    var options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload)
    };
    
    UrlFetchApp.fetch(slackWebhookUrl, options);
  }
  
  // Main function to process received data and send it to Slack
  function doPost(e) {
    var data = JSON.parse(e.postData.contents);
  
    // Sending relevant data to Slack
    sendToSlack(data);
  }
