module.exports = async function (context, req) {
  context.log("Creating Entry - start");

  // Try reading the body
  try {
    const rb = req.body;

    if (rb.id && rb.username && rb.messageBody) {
      context.res = {
        status: 201, // Success
        body: {
          id: rb.id,
          username: rb.username,
          messageBody: rb.messageBody,
        },
      };
      context.log("Status: 201 Success");
    } else {
      context.res = {
        status: 400, // Bad Request
      };
      context.log("Status: 400 Bad Request");
    }

    // Catch Errors
  } catch (error) {
    context.res = {
      status: 500, // Internal Server Error
    };
    context.log("Status: 500 Internal Server Error");
  }

  context.done();
  context.log("Creating Entry - finished");
};
