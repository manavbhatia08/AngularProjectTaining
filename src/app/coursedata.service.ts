import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable , tap} from "rxjs";

export interface CourseDetails{
    cId : number;
    
    cImage : string ;
    cTitle : string ; 
    cCategory : string;
    cInstructor : string;
    cDifficulty : string;
  
    cDuration : number ; 
    cDescription : string;
    cOverview : string;
    cCurriculum : Array<object>;
    cReviews : Array<object>;
    cEnroll : boolean;
}

const TotalCourses : CourseDetails[] = [
    {
      cEnroll : false,
      cId : 1,
      cCategory : "Finance",
      cImage : "assets/finance.jpg",
      cTitle : "Lorem ipsum dolor sit amet." ,
      cInstructor : "Lorem, ipsum.",
      cDifficulty : "Beginner",
      cDuration : 4, 
      cDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni, nostrum qui hic placeat veniam.",
      cOverview : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat tenetur minus necessitatibus ducimus adipisci reiciendis qui facilis accusantium aliquam est delectus provident molestias sapiente quam quasi in, at rerum, pariatur commodi? Quia reprehenderit, explicabo provident corrupti molestiae amet sunt ratione consequuntur nam doloremque fugiat omnis ",
      cCurriculum : [
        {
          id : 1,
          section : "Introduction",
          content : [
            {
              id : 1,
              type: "video",
              name : "Lorem ",
              url : ""
            },
            {
              id : 2,
              type: "video",
              name : "Lorem ipsum dolor sit amet",
              url : ""
            }
          ]
        },
        {
          id : 2,
          section : "Module 2",
          content : [
            {
              id : 1,
              type: "video",
              name : "Lorem ipsum dolor sit amet",
              url : ""
            },
            {
              id : 2,
              type: "quiz",
              name : "Lorem ipsum dolor sit amet",
              url : ""
            }
          ]
        },
        {
          id : 3,
          section : "Module 3",
          content : [
            {
              id : 1,
              type: "video",
              name : "Lorem ipsum dolor sit amet",
              url : ""
            },
            {
              id : 2,
              type: "assignment",
              name : "Lorem ipsum dolor sit amet",
              url : ""
            }
          ]
        },
        {
          id : 4,
          section : "Module ",
          content : [
            {
              id : 1,
              type: "video",
              name : "Lorem ipsum dolor sit amet",
              url : ""
            },
            {
              id : 2,
              type: "video",
              name : "Lorem ipsum dolor sit amet",
              url : ""
            }
          ]
        }
      ],

        cReviews : [
          {
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
            rating : 5
          },
          {
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
            rating : 5
          },
          {
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
            rating : 5
          },
          {
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
            rating : 5
          },
          {
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
            rating : 5
          },
          {
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
            rating : 5
          },
          {
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
            rating : 5
          }
        ]
      },
      {
        cId : 2,
        cEnroll : false,
        cCategory : "Development",
        cImage : "assets/dev.jpg",
        cTitle : "Lorem ipsum dolor sit amet." ,
        cInstructor : "Lorem, ipsum.",
        cDifficulty : "Beginner",
        cDuration : 6, 
        cDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni, nostrum qui hic placeat veniam.",
        cOverview : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat tenetur minus necessitatibus ducimus adipisci reiciendis qui facilis accusantium aliquam est delectus provident molestias sapiente quam quasi in, at rerum, pariatur commodi? Quia reprehenderit, explicabo provident corrupti molestiae amet sunt ratione consequuntur nam doloremque fugiat omnis ",
        cCurriculum : [
          {
            id : 1,
            section : "Introduction",
            content : [
              {
                id : 1,
                type: "video",
                name : "Lorem ",
                url : ""
              },
              {
                id : 2,
                type: "video",
                name : "Lorem ipsum dolor sit amet",
                url : ""
              }
            ]
          },
          {
            id : 2,
            section : "Introduction",
            content : [
              {
                id : 1,
                type: "video",
                name : "Lorem ipsum dolor sit amet",
                url : ""
              },
              {
                id : 2,
                type: "quiz",
                name : "Lorem ipsum dolor sit amet",
                url : ""
              }
            ]
          },
          {
            id : 3,
            section : "Introduction",
            content : [
              {
                id : 1,
                type: "video",
                name : "Lorem ipsum dolor sit amet",
                url : ""
              },
              {
                id : 2,
                type: "assignment",
                name : "Lorem ipsum dolor sit amet",
                url : ""
              }
            ]
          },
          {
            id : 4,
            section : "Introduction",
            content : [
              {
                id : 1,
                type: "video",
                name : "Lorem ipsum dolor sit amet",
                url : ""
              },
              {
                id : 2,
                type: "video",
                name : "Lorem ipsum dolor sit amet",
                url : ""
              }
            ]
          }
        ],
  
          cReviews : [
            {
              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
              rating : 5
            },
            {
              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
              rating : 5
            },
            {
              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
              rating : 5
            },
            {
              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
              rating : 5
            },
            {
              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
              rating : 5
            },
            {
              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
              rating : 5
            },
            {
              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
              rating : 5
            }
          ]
        },
        {
          cId : 3,
          cEnroll : false,
          cCategory : "Personality",
          cImage : "assets/personality.jpg",
          cTitle : "Lorem ipsum dolor sit amet." ,
          cInstructor : "Lorem, ipsum.",
          cDifficulty : "Beginner",
          cDuration : 1, 
          cDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni, nostrum qui hic placeat veniam.",
          cOverview : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat tenetur minus necessitatibus ducimus adipisci reiciendis qui facilis accusantium aliquam est delectus provident molestias sapiente quam quasi in, at rerum, pariatur commodi? Quia reprehenderit, explicabo provident corrupti molestiae amet sunt ratione consequuntur nam doloremque fugiat omnis ",
          cCurriculum : [
            {
              id : 1,
              section : "Introduction",
              content : [
                {
                  id : 1,
                  type: "video",
                  name : "Lorem ",
                  url : ""
                },
                {
                  id : 2,
                  type: "video",
                  name : "Lorem ipsum dolor sit amet",
                  url : ""
                }
              ]
            },
            {
              id : 2,
              section : "Introduction",
              content : [
                {
                  id : 1,
                  type: "video",
                  name : "Lorem ipsum dolor sit amet",
                  url : ""
                },
                {
                  id : 2,
                  type: "quiz",
                  name : "Lorem ipsum dolor sit amet",
                  url : ""
                }
              ]
            },
            {
              id : 3,
              section : "Introduction",
              content : [
                {
                  id : 1,
                  type: "video",
                  name : "Lorem ipsum dolor sit amet",
                  url : ""
                },
                {
                  id : 2,
                  type: "assignment",
                  name : "Lorem ipsum dolor sit amet",
                  url : ""
                }
              ]
            },
            {
              id : 4,
              section : "Introduction",
              content : [
                {
                  id : 1,
                  type: "video",
                  name : "Lorem ipsum dolor sit amet",
                  url : ""
                },
                {
                  id : 2,
                  type: "video",
                  name : "Lorem ipsum dolor sit amet",
                  url : ""
                }
              ]
            }
          ],
    
            cReviews : [
              {
                text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                rating : 5
              },
              {
                text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                rating : 5
              },
              {
                text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                rating : 5
              },
              {
                text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                rating : 5
              },
              {
                text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                rating : 5
              },
              {
                text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                rating : 5
              },
              {
                text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                rating : 5
              }
            ]
          },
          {
            cId : 4,
            cEnroll : false,
            cCategory : "Finance",
            cImage : "assets/finance.jpg",
            cTitle : "Lorem ipsum dolor sit amet." ,
            cInstructor : "Lorem, ipsum.",
            cDifficulty : "Beginner",
            cDuration : 15, 
            cDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni, nostrum qui hic placeat veniam.",
            cOverview : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat tenetur minus necessitatibus ducimus adipisci reiciendis qui facilis accusantium aliquam est delectus provident molestias sapiente quam quasi in, at rerum, pariatur commodi? Quia reprehenderit, explicabo provident corrupti molestiae amet sunt ratione consequuntur nam doloremque fugiat omnis ",
            cCurriculum : [
              {
                id : 1,
                section : "Introduction",
                content : [
                  {
                    id : 1,
                    type: "video",
                    name : "Lorem ",
                    url : ""
                  },
                  {
                    id : 2,
                    type: "video",
                    name : "Lorem ipsum dolor sit amet",
                    url : ""
                  }
                ]
              },
              {
                id : 2,
                section : "Introduction",
                content : [
                  {
                    id : 1,
                    type: "video",
                    name : "Lorem ipsum dolor sit amet",
                    url : ""
                  },
                  {
                    id : 2,
                    type: "quiz",
                    name : "Lorem ipsum dolor sit amet",
                    url : ""
                  }
                ]
              },
              {
                id : 3,
                section : "Introduction",
                content : [
                  {
                    id : 1,
                    type: "video",
                    name : "Lorem ipsum dolor sit amet",
                    url : ""
                  },
                  {
                    id : 2,
                    type: "assignment",
                    name : "Lorem ipsum dolor sit amet",
                    url : ""
                  }
                ]
              },
              {
                id : 4,
                section : "Introduction",
                content : [
                  {
                    id : 1,
                    type: "video",
                    name : "Lorem ipsum dolor sit amet",
                    url : ""
                  },
                  {
                    id : 2,
                    type: "video",
                    name : "Lorem ipsum dolor sit amet",
                    url : ""
                  }
                ]
              }
            ],
      
              cReviews : [
                {
                  text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                  rating : 5
                },
                {
                  text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                  rating : 5
                },
                {
                  text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                  rating : 5
                },
                {
                  text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                  rating : 5
                },
                {
                  text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                  rating : 5
                },
                {
                  text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                  rating : 5
                },
                {
                  text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                  rating : 5
                }
              ]
            },
            {
              cId : 5,
              cEnroll : false,
              cCategory : "Personality",
              cImage : "assets/personality.jpg",
              cTitle : "Lorem ipsum dolor sit amet." ,
              cInstructor : "Lorem, ipsum.",
              cDifficulty : "Intermediate",
              cDuration : 8, 
              cDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni, nostrum qui hic placeat veniam.",
              cOverview : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat tenetur minus necessitatibus ducimus adipisci reiciendis qui facilis accusantium aliquam est delectus provident molestias sapiente quam quasi in, at rerum, pariatur commodi? Quia reprehenderit, explicabo provident corrupti molestiae amet sunt ratione consequuntur nam doloremque fugiat omnis ",
              cCurriculum : [
                {
                  id : 1,
                  section : "Introduction",
                  content : [
                    {
                      id : 1,
                      type: "video",
                      name : "Lorem ",
                      url : ""
                    },
                    {
                      id : 2,
                      type: "video",
                      name : "Lorem ipsum dolor sit amet",
                      url : ""
                    }
                  ]
                },
                {
                  id : 2,
                  section : "Introduction",
                  content : [
                    {
                      id : 1,
                      type: "video",
                      name : "Lorem ipsum dolor sit amet",
                      url : ""
                    },
                    {
                      id : 2,
                      type: "quiz",
                      name : "Lorem ipsum dolor sit amet",
                      url : ""
                    }
                  ]
                },
                {
                  id : 3,
                  section : "Introduction",
                  content : [
                    {
                      id : 1,
                      type: "video",
                      name : "Lorem ipsum dolor sit amet",
                      url : ""
                    },
                    {
                      id : 2,
                      type: "assignment",
                      name : "Lorem ipsum dolor sit amet",
                      url : ""
                    }
                  ]
                },
                {
                  id : 4,
                  section : "Introduction",
                  content : [
                    {
                      id : 1,
                      type: "video",
                      name : "Lorem ipsum dolor sit amet",
                      url : ""
                    },
                    {
                      id : 2,
                      type: "video",
                      name : "Lorem ipsum dolor sit amet",
                      url : ""
                    }
                  ]
                }
              ],
        
                cReviews : [
                  {
                    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                    rating : 5
                  },
                  {
                    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                    rating : 5
                  },
                  {
                    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                    rating : 5
                  },
                  {
                    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                    rating : 5
                  },
                  {
                    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                    rating : 5
                  },
                  {
                    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                    rating : 5
                  },
                  {
                    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                    rating : 5
                  }
                ]
              },
              {
                cId : 6,
                cEnroll : false,
                cCategory : "Development",
                cImage : "assets/dev.jpg",
                cTitle : "Lorem ipsum dolor sit amet." ,
                cInstructor : "Lorem, ipsum.",
                cDifficulty : "Intermediate",
                cDuration : 11, 
                cDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni, nostrum qui hic placeat veniam.",
                cOverview : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat tenetur minus necessitatibus ducimus adipisci reiciendis qui facilis accusantium aliquam est delectus provident molestias sapiente quam quasi in, at rerum, pariatur commodi? Quia reprehenderit, explicabo provident corrupti molestiae amet sunt ratione consequuntur nam doloremque fugiat omnis ",
                cCurriculum : [
                  {
                    id : 1,
                    section : "Introduction",
                    content : [
                      {
                        id : 1,
                        type: "video",
                        name : "Lorem ",
                        url : ""
                      },
                      {
                        id : 2,
                        type: "video",
                        name : "Lorem ipsum dolor sit amet",
                        url : ""
                      }
                    ]
                  },
                  {
                    id : 2,
                    section : "Introduction",
                    content : [
                      {
                        id : 1,
                        type: "video",
                        name : "Lorem ipsum dolor sit amet",
                        url : ""
                      },
                      {
                        id : 2,
                        type: "quiz",
                        name : "Lorem ipsum dolor sit amet",
                        url : ""
                      }
                    ]
                  },
                  {
                    id : 3,
                    section : "Introduction",
                    content : [
                      {
                        id : 1,
                        type: "video",
                        name : "Lorem ipsum dolor sit amet",
                        url : ""
                      },
                      {
                        id : 2,
                        type: "assignment",
                        name : "Lorem ipsum dolor sit amet",
                        url : ""
                      }
                    ]
                  },
                  {
                    id : 4,
                    section : "Introduction",
                    content : [
                      {
                        id : 1,
                        type: "video",
                        name : "Lorem ipsum dolor sit amet",
                        url : ""
                      },
                      {
                        id : 2,
                        type: "video",
                        name : "Lorem ipsum dolor sit amet",
                        url : ""
                      }
                    ]
                  }
                ],
          
                  cReviews : [
                    {
                      text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                      rating : 5
                    },
                    {
                      text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                      rating : 5
                    },
                    {
                      text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                      rating : 5
                    },
                    {
                      text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                      rating : 5
                    },
                    {
                      text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                      rating : 5
                    },
                    {
                      text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                      rating : 5
                    },
                    {
                      text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                      rating : 5
                    }
                  ]
                },
                {
                  cId : 7,
                  cEnroll : false,
                  cCategory : "Finance",
                  cImage : "assets/finance.jpg",
                  cTitle : "Lorem ipsum dolor sit amet." ,
                  cInstructor : "Lorem, ipsum.",
                  cDifficulty : "Intermediate",
                  cDuration : 7, 
                  cDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni, nostrum qui hic placeat veniam.",
                  cOverview : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat tenetur minus necessitatibus ducimus adipisci reiciendis qui facilis accusantium aliquam est delectus provident molestias sapiente quam quasi in, at rerum, pariatur commodi? Quia reprehenderit, explicabo provident corrupti molestiae amet sunt ratione consequuntur nam doloremque fugiat omnis ",
                  cCurriculum : [
                    {
                      id : 1,
                      section : "Introduction",
                      content : [
                        {
                          id : 1,
                          type: "video",
                          name : "Lorem ",
                          url : ""
                        },
                        {
                          id : 2,
                          type: "video",
                          name : "Lorem ipsum dolor sit amet",
                          url : ""
                        }
                      ]
                    },
                    {
                      id : 2,
                      section : "Introduction",
                      content : [
                        {
                          id : 1,
                          type: "video",
                          name : "Lorem ipsum dolor sit amet",
                          url : ""
                        },
                        {
                          id : 2,
                          type: "quiz",
                          name : "Lorem ipsum dolor sit amet",
                          url : ""
                        }
                      ]
                    },
                    {
                      id : 3,
                      section : "Introduction",
                      content : [
                        {
                          id : 1,
                          type: "video",
                          name : "Lorem ipsum dolor sit amet",
                          url : ""
                        },
                        {
                          id : 2,
                          type: "assignment",
                          name : "Lorem ipsum dolor sit amet",
                          url : ""
                        }
                      ]
                    },
                    {
                      id : 4,
                      section : "Introduction",
                      content : [
                        {
                          id : 1,
                          type: "video",
                          name : "Lorem ipsum dolor sit amet",
                          url : ""
                        },
                        {
                          id : 2,
                          type: "video",
                          name : "Lorem ipsum dolor sit amet",
                          url : ""
                        }
                      ]
                    }
                  ],
            
                    cReviews : [
                      {
                        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                        rating : 5
                      },
                      {
                        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                        rating : 5
                      },
                      {
                        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                        rating : 5
                      },
                      {
                        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                        rating : 5
                      },
                      {
                        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                        rating : 5
                      },
                      {
                        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                        rating : 5
                      },
                      {
                        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                        rating : 5
                      }
                    ]
                  },
                  {
                    cId : 8,
                    cEnroll : false,
                    cCategory : "Personality",
                    cImage : "assets/personality.jpg",
                    cTitle : "Lorem ipsum dolor sit amet." ,
                    cInstructor : "Lorem, ipsum.",
                    cDifficulty : "Intermediate",
                    cDuration : 4, 
                    cDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni, nostrum qui hic placeat veniam.",
                    cOverview : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat tenetur minus necessitatibus ducimus adipisci reiciendis qui facilis accusantium aliquam est delectus provident molestias sapiente quam quasi in, at rerum, pariatur commodi? Quia reprehenderit, explicabo provident corrupti molestiae amet sunt ratione consequuntur nam doloremque fugiat omnis ",
                    cCurriculum : [
                      {
                        id : 1,
                        section : "Introduction",
                        content : [
                          {
                            id : 1,
                            type: "video",
                            name : "Lorem ",
                            url : ""
                          },
                          {
                            id : 2,
                            type: "video",
                            name : "Lorem ipsum dolor sit amet",
                            url : ""
                          }
                        ]
                      },
                      {
                        id : 2,
                        section : "Introduction",
                        content : [
                          {
                            id : 1,
                            type: "video",
                            name : "Lorem ipsum dolor sit amet",
                            url : ""
                          },
                          {
                            id : 2,
                            type: "quiz",
                            name : "Lorem ipsum dolor sit amet",
                            url : ""
                          }
                        ]
                      },
                      {
                        id : 3,
                        section : "Introduction",
                        content : [
                          {
                            id : 1,
                            type: "video",
                            name : "Lorem ipsum dolor sit amet",
                            url : ""
                          },
                          {
                            id : 2,
                            type: "assignment",
                            name : "Lorem ipsum dolor sit amet",
                            url : ""
                          }
                        ]
                      },
                      {
                        id : 4,
                        section : "Introduction",
                        content : [
                          {
                            id : 1,
                            type: "video",
                            name : "Lorem ipsum dolor sit amet",
                            url : ""
                          },
                          {
                            id : 2,
                            type: "video",
                            name : "Lorem ipsum dolor sit amet",
                            url : ""
                          }
                        ]
                      }
                    ],
              
                      cReviews : [
                        {
                          text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                          rating : 5
                        },
                        {
                          text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                          rating : 5
                        },
                        {
                          text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                          rating : 5
                        },
                        {
                          text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                          rating : 5
                        },
                        {
                          text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                          rating : 5
                        },
                        {
                          text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                          rating : 5
                        },
                        {
                          text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                          rating : 5
                        }
                      ]
                    },
                    {
                      cId : 9,
                      cEnroll : false,
                      cCategory : "Development",
                      cImage : "assets/dev.jpg",
                      cTitle : "Lorem ipsum dolor sit amet." ,
                      cInstructor : "Lorem, ipsum.",
                      cDifficulty : "Advanced",
                      cDuration : 21, 
                      cDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni, nostrum qui hic placeat veniam.",
                      cOverview : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat tenetur minus necessitatibus ducimus adipisci reiciendis qui facilis accusantium aliquam est delectus provident molestias sapiente quam quasi in, at rerum, pariatur commodi? Quia reprehenderit, explicabo provident corrupti molestiae amet sunt ratione consequuntur nam doloremque fugiat omnis ",
                      cCurriculum : [
                        {
                          id : 1,
                          section : "Introduction",
                          content : [
                            {
                              id : 1,
                              type: "video",
                              name : "Lorem ",
                              url : ""
                            },
                            {
                              id : 2,
                              type: "video",
                              name : "Lorem ipsum dolor sit amet",
                              url : ""
                            }
                          ]
                        },
                        {
                          id : 2,
                          section : "Introduction",
                          content : [
                            {
                              id : 1,
                              type: "video",
                              name : "Lorem ipsum dolor sit amet",
                              url : ""
                            },
                            {
                              id : 2,
                              type: "quiz",
                              name : "Lorem ipsum dolor sit amet",
                              url : ""
                            }
                          ]
                        },
                        {
                          id : 3,
                          section : "Introduction",
                          content : [
                            {
                              id : 1,
                              type: "video",
                              name : "Lorem ipsum dolor sit amet",
                              url : ""
                            },
                            {
                              id : 2,
                              type: "assignment",
                              name : "Lorem ipsum dolor sit amet",
                              url : ""
                            }
                          ]
                        },
                        {
                          id : 4,
                          section : "Introduction",
                          content : [
                            {
                              id : 1,
                              type: "video",
                              name : "Lorem ipsum dolor sit amet",
                              url : ""
                            },
                            {
                              id : 2,
                              type: "video",
                              name : "Lorem ipsum dolor sit amet",
                              url : ""
                            }
                          ]
                        }
                      ],
                
                        cReviews : [
                          {
                            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                            rating : 5
                          },
                          {
                            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                            rating : 5
                          },
                          {
                            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                            rating : 5
                          },
                          {
                            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                            rating : 5
                          },
                          {
                            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                            rating : 5
                          },
                          {
                            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                            rating : 5
                          },
                          {
                            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                            rating : 5
                          }
                        ]
                      },
                      {
                        cId : 10,
                        cEnroll : false,
                        cCategory : "Finance",
                        cImage : "assets/finance.jpg",
                        cTitle : "Lorem ipsum dolor sit amet." ,
                        cInstructor : "Lorem, ipsum.",
                        cDifficulty : "Advanced",
                        cDuration : 10, 
                        cDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni, nostrum qui hic placeat veniam.",
                        cOverview : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat tenetur minus necessitatibus ducimus adipisci reiciendis qui facilis accusantium aliquam est delectus provident molestias sapiente quam quasi in, at rerum, pariatur commodi? Quia reprehenderit, explicabo provident corrupti molestiae amet sunt ratione consequuntur nam doloremque fugiat omnis ",
                        cCurriculum : [
                          {
                            id : 1,
                            section : "Introduction",
                            content : [
                              {
                                id : 1,
                                type: "video",
                                name : "Lorem ",
                                url : ""
                              },
                              {
                                id : 2,
                                type: "video",
                                name : "Lorem ipsum dolor sit amet",
                                url : ""
                              }
                            ]
                          },
                          {
                            id : 2,
                            section : "Introduction",
                            content : [
                              {
                                id : 1,
                                type: "video",
                                name : "Lorem ipsum dolor sit amet",
                                url : ""
                              },
                              {
                                id : 2,
                                type: "quiz",
                                name : "Lorem ipsum dolor sit amet",
                                url : ""
                              }
                            ]
                          },
                          {
                            id : 3,
                            section : "Introduction",
                            content : [
                              {
                                id : 1,
                                type: "video",
                                name : "Lorem ipsum dolor sit amet",
                                url : ""
                              },
                              {
                                id : 2,
                                type: "assignment",
                                name : "Lorem ipsum dolor sit amet",
                                url : ""
                              }
                            ]
                          },
                          {
                            id : 4,
                            section : "Introduction",
                            content : [
                              {
                                id : 1,
                                type: "video",
                                name : "Lorem ipsum dolor sit amet",
                                url : ""
                              },
                              {
                                id : 2,
                                type: "video",
                                name : "Lorem ipsum dolor sit amet",
                                url : ""
                              }
                            ]
                          }
                        ],
                  
                          cReviews : [
                            {
                              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                              rating : 5
                            },
                            {
                              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                              rating : 5
                            },
                            {
                              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                              rating : 5
                            },
                            {
                              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                              rating : 5
                            },
                            {
                              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                              rating : 5
                            },
                            {
                              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                              rating : 5
                            },
                            {
                              text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus ",
                              rating : 5
                            }
                          ]
                        }
    ]

        


@Injectable({
    providedIn : "root"
})

export class courseService{

    getCourse(id : number) : any {

        for( let i=0 ; i < TotalCourses.length ; ++i){
            if( TotalCourses[i].cId == id) return TotalCourses[i];
        }

      }

    getCourses() : CourseDetails[]{
        const TotalCoursess = TotalCourses;
        return TotalCoursess;
    }


    
    // private detailsUrl = 'api/details.json';

    // // getCourseDetails() : Observable<CourseDetails[]> {

    // //   return this.http.get<CourseDetails[]>(this.detailsUrl).pipe(tap(data => console.log('All', JSON.stringify(data))));
    // // }



}