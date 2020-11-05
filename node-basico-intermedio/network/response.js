const statusMessages = {
   '200':'Done',
   '201':'Created',
   '400':'Invalid Format',
   '500':'Internal Error' 
}

exports.success = (req, res, message, status = 200) => {

   let statusCode = status
   let statusMessage = message

   if(!message){
      statusMessage = statusMessages[status]
   }

   res.status(statusCode).send({
      error: '',
      body: statusMessage
   })
}

exports.error = (req, res, message, status, details) => {
   console.log('[response error]' + details);
   res.status(status || 500).send({
      error: message,
      body: '',
   })
}