module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  try {
    const rb = req.body;

    if (rb.id && rb.username && rb.messageBody) {
      context.res = {
        status: 201 /* Defaults to 200 */,
        body: {
          id: rb.id,
          username: rb.username,
          messageBody: rb.messageBody,
        },
      };
    } else {
      context.res = {
        status: 400 /* Defaults to 200 */,
      };
    }
  } catch (error) {
    context.res = {
      status: 500,
    };
  }
};
