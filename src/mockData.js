export const mockAccordionData = [
  {
    title: "Accordion Item #1",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #2",
    body: "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #3",
    body: "This is the third item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];

export const commentsDetails = [
  {
    username: "Amit Roy",
    comment: "this is some random comment1",
    replies: [
      {
        username: "Bibhuti Bhushan",
        comment: "1st reply on comment 1",
        replies: [
          {
            username: "John Doe",
            comment: "1st reply on comment 1",
            replies: [
              {
                username: "Rakesh Ghosh",
                comment: "1st nested reply on comment 1",
                replies: [
                  {
                    username: "Rakesh Ghosh",
                    comment: "1st nested reply on comment 1",
                  },
                  {
                    username: "Sujoy dey",
                    comment: "2nd nested reply on comment 1",
                  },
                ],
              },
              {
                username: "Sujoy dey",
                comment: "2nd nested reply on comment 1",
              },
            ],
          },
          { username: "Tulika das", comment: "2nd reply on comment 1" },
        ],
      },
      { username: "Jewel Dey", comment: "2nd reply on comment 1" },
    ],
  },
  {
    username: "Johnny Braistow",
    comment: "this is some random comment2",
    replies: [
      {
        username: "Bibhuti Bhushan",
        comment: "1st reply on comment 2",
        replies: [
          { username: "Bibhuti Bhushan", comment: "1st reply on comment 2" },
          { username: "Tulika das", comment: "2nd reply on comment 2" },
        ],
      },
      {
        username: "Tulika das",
        comment: "2nd reply on comment 2",
        replies: [
          {
            username: "Bibhuti Bhushan",
            comment: "1st reply on comment 2",
            replies: [
              {
                username: "Bibhuti Bhushan",
                comment: "1st reply on comment 2",
              },
              {
                username: "Tulika das",
                comment: "2nd reply on comment 2",
                replies: [
                  {
                    username: "Bibhuti Bhushan",
                    comment: "1st reply on comment 2",
                  },
                  { username: "Tulika das", comment: "2nd reply on comment 2" },
                ],
              },
            ],
          },
          { username: "Tulika das", comment: "2nd reply on comment 2" },
        ],
      },
    ],
  },
  {
    username: "Brain Lara",
    comment: "this is some random comment3",
    replies: [
      { username: "Bibhuti Bhushan", comment: "1st reply on comment 3" },
      { username: "Tulika das", comment: "2nd reply on comment 3" },
    ],
  },
  {
    username: "Abhinabh Majahn",
    comment: "this is some random comment4",
    replies: [
      { username: "Bibhuti Bhushan", comment: "1st reply on comment 4" },
      { username: "Tulika das", comment: "2nd reply on comment 4" },
    ],
  },
];
