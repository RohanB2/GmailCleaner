function myFunction() 
{
  //Special me parameter indicates my email address.
  const userId = 'me';

  //Change this to the email address you want to delete all emails from
  //var delAdd1 = "noreply@robinhood.com";

  var delAdd1 = prompt("Input the first address you want to search for: ")
  var delAdd2 = "rewards@c.pxsmail.com"

  //Takes multiple user inputted addresses and puts it into a options builder so I don't need to hardcode here.
  options = optionsBuilder(delAdd1, delAdd2);

  const response = Gmail.Users.Messages.list(userId, options);

  if(response.messages && response.messages.length > 0)
  {
    for(let i = 0; i < response.messages.length; i++)
    {
      var message = Gmail.Users.Messages.get(userId, response.messages[i].id)
      Logger.log(message.snippet);
      //Gmail.Users.Messages.trash(userId, response.messages[i].id)
    }
  }  
}

function optionsBuilder(delAdd1, delAdd2)
{
  address1 = "from:" + delAdd1
  address2 = "from:" + delAdd2

  var options = {q: address1 + " OR " + address2}

  return options;
}