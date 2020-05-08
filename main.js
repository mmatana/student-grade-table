$.post("https://sgt.lfzprototypes.com/api/users",
    {
      "firstName": "Joe8",
      "lastName": "Bishop8",
      "cohort": "c01.21"
    },
    function (data, status) {
      console.log("Data: " + data.apiKey + "\nStatus: " + status);
    });
