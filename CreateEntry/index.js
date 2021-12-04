module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  // Try reading the body
  try {
    const rb = req.body;

    if (rb.id && rb.username && rb.messageBody) {
      context.res = {
        status: 201, // Success POST Created
        body: {
          id: rb.id,
          username: rb.username,
          messageBody: rb.messageBody,
        },
      };
    } else {
      context.res = {
        status: 400, // Bad Request
      };
    }

    // Catch Errors
  } catch (error) {
    context.res = {
      status: 500, // Internal Server Error
    };
  }
};
