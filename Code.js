function myFunction() 
{
  //Special me parameter indicates my email address.
  const userId = 'me';

  //Change this to the email address you want to delete all emails from
  
  var delAdd1 = "noreply@robinhood.com";
  var delAdd2 = "rewards@c.pxsmail.com"
  var delAdd3 = "no-reply@tapingo-grubhub.com"

  const emailsList = ["noreply@robinhood.com", "rewards@c.pxsmail.com", "no-reply@tapingo-grubhub.com"]

  //Takes multiple user inputted addresses and puts it into a options builder so I don't need to hardcode here.
  options = optionsBuilder(emailsList);

  const response = Gmail.Users.Messages.list(userId, options);

  if(response.messages && response.messages.length > 0)
  {
    for(let i = 0; i < response.messages.length; i++)
    {
      var message = Gmail.Users.Messages.get(userId, response.messages[i].id)
      Logger.log(message.snippet);
    }
  }  
}

function optionsBuilder(emailsList)
{
  let addressString = ""

  for(let i = 0; i < emailsList.length; i++)
  {
    addressString += "from: " + emailsList[i]

    if(i < emailsList.length)
    {
      addressString += " OR ";
    }
  }

  return { q: addressString };
}