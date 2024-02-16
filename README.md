# Brevo Slack Integration

This project enables integration between Brevo and Slack, allowing you to receive notifications in a Slack channel for various events happening in Brevo.

## Setting Up Slack App

1. Create a new Slack app in your Slack workspace.
2. Navigate to "Incoming Webhooks" and create a new webhook.
3. Select the channel where you want to receive notifications and copy the webhook URL.
4. Replace the `slackWebhookUrl` variable in the Google Apps Script code with your copied webhook URL.

## Setting Up Google Apps Script

1. Create a new project in Google Apps Script.
2. Copy the contents of `brevo_slack_integration.js` into your new project.
3. Replace the `slackWebhookUrl` variable in the script with your Slack webhook URL.
4. Deploy the project as a web application.
5. Copy the URL of the deployed web application.

## Setting Up Brevo Webhook

1. Sign in to your Brevo account and obtain your API key.
2. Create a new webhook in Brevo's settings.
3. Set the webhook URL to the URL of the deployed Google Apps Script web application.
4. Choose the type of events you want to receive notifications for (e.g., "hardBounce", "softBounce", "opened", "click", etc.).

## Managing Brevo Webhooks

You can use cURL requests to manage webhooks in Brevo, including retrieving and modifying existing webhooks.

### Creating a Webhook

To create a webhook in Brevo:

Example cURL request:
```bash
curl --request POST \
     --url https://api.brevo.com/v3/webhooks \
     --header 'accept: application/json' \
     --header 'api-key: your_api_key' \
     --header 'content-type: application/json' \
     --data '
{
  "type": "transactional",
  "url": "your_google_apps_script_web_app_url",
  "events": [
    "hardBounce",
    "softBounce",
    "opened",
    "click"
  ]
}
'
```

### Retrieving a Webhook

To retrieve a webhook in Brevo, make a GET request to the corresponding webhook endpoint with the webhook ID.
Replace your_webhook_id with the ID of the webhook you want to retrieve, and your_api_key with your Brevo API key

Example cURL request:
```bash
curl --request GET \
     --url https://api.brevo.com/v3/webhooks/your_webhook_id \
     --header 'accept: application/json' \
     --header 'api-key: your_api_key'
```

### Modifying a Webhook
To modify a webhook in Brevo, make a PUT request to the corresponding webhook endpoint with the updated webhook configuration.
Replace your_webhook_id with the ID of the webhook you want to modify, and your_api_key with your Brevo API key

Example cURL request
```bash
curl --request PUT \
     --url https://api.brevo.com/v3/webhooks/your_webhook_id \
     --header 'accept: application/json' \
     --header 'api-key: your_api_key' \
     --header 'content-type: application/json' \
     --data '
{
  "events": [
    "hardBounce",
    "softBounce",
    "blocked",
    "spam",
    "invalid",
    "deferred",
    "unsubscribed"
  ]
}
'
```

## Managing Brevo Webhooks

Once everything is set up, you can perform tests to ensure that notifications are being received in your Slack channel for the specified Brevo events.

Congratulations! You're all set up for Brevo and Slack integration. Happy notifying!