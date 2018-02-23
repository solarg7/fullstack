// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
    {
    "name":"Ahmed",
    "photo":"https://goo.gl/images/ZvqH1t",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
        ]
    },
    {
    "name": "kiss",
    "photo": "https://static.pexels.com/photos/324658/pexels-photo-324658.jpeg",
    "scores": [
    "2",
    "3",
    "2",
    "2",
    "2",
    "2",
    "1",
    "1",
    "1"
    ]
    },
    {
    "name": "manowar",
    "photo": "https://www.pexels.com/photo/man-young-happy-smiling-91227/",
    "scores": [
    "2",
    "3",
    "2",
    "2",
    "2",
    "4",
    "3",
    "1",
    "1"
    ]
    }

  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = tableArray;