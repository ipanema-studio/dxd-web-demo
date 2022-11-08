const ACRONYM = 'ucd'
const FILE_PATH = `${process.env.BASE_URL}contents/courses/course-detail/${ACRONYM}/file/`

export default {
  title: {
    en: 'User Centered Design',
    ko: '사용자중심디자인'
  },
  '2019s': [
    [
      'Website',
      '<a href="http://hwajunghong.com/" target="_blank">http://hwajunghong.com/</a>'
    ],
    [
      'Course Staff',
      'Instructor | Hwajung Hong<br>' +
      'Email | hwajunghong@snu.ac.kr<br>' +
      'Office | 64-409<br>' +
      'Office Hours | before & after class, or email for an appointment<br>' +
      'TA | Yonghoon Park'
    ],
    [
      'Time & Location',
      'Time | 13:00 - 17:00 Tue<br>' +
      'Location | 64-302'
    ],
    [
      'Overview',
      'This course introduces basic concepts, methods and procedures of information design with focus on the visual representation of data. Students will be introduced to the bright world of information visualization where the intersection of text and image, perception and cognition, beauty and function, logic and emotion enables us to create splendid visions, to reveal what hides behind the data and to address effective messages. In this class, students will explore conceptual and visual solutions, and on the creative process of organizing, visualizing and communicating information.'
    ],
    [
      'Example',
      `<img src="${FILE_PATH}sample.jpg" alt="example">
      Sleeparrot (잠무샠)`
    ],
    [
      'Learning Objectives',
      'The main objective of this course is to <span style="font-weight: bold; text-decoration: underline;">transform raw data into meaningful information through a combination of statistics, technology, research, and design.</span><br><br>' +
      'Specifically, you will learn:<br>' +
      '<ul>' +
      '<li>How to analyze and critique infographics and visualizations in newspapers, books, TV, etc., and how to propose alternatives that would improve them.</li>' +
      '<li>How to plan for data-based storytelling through charts, maps, and diagrams.</li>' +
      '<li>How to design infographics that are not just attractive but, above all, informative, deep, and accurate.</li>' +
      '</ul>'
    ],
    [
      'Schedule',
      '<table>' +
      '<tr>' +
      '<th>Week</th>' +
      '<th>Content</th>' +
      '<th>Assignment</th>' +
      '</tr>' +

      '<tr>' +
      '<td>1</td>' +
      '<td>Overview of Information Design</td>' +
      '<td></td>' +
      '</tr>' +

      '<tr>' +
      '<td>2</td>' +
      '<td>Infographics: Introduction</td>' +
      '<td></td>' +
      '</tr>' +
      '</table>'
    ],
    [
      'Assignments',
      {
        content: 'Unless specified by the instructor, assignments must be completed independently. Assignments are due by the beginning of class on their due date.',
        body: [
          [
            'Overview',
            'Unless specified by the instructor, assignments must be completed independently. Assignments are due by the beginning of class on their due date.'
          ],
          [
            '<span id="late-assignments">Late Assignments</span>',
            'If you need to miss a deadline, you should inform the instructor as soon as possible, indicating when you will submit your work. The instructor will try to accommodate your needs. You should use this cause only for extraordinary personal reasons (e.g., personal illness, etc.).'
          ]
        ]
      }
    ]
  ],
  '2018s': [
    [
      'Website',
      '<a href="http://hwajunghong.com/" target="_blank">http://hwajunghong.com/</a>'
    ],
    [
      'Course Staff',
      'Instructor | Hwajung Hong<br>' +
      'Email | hwajunghong@snu.ac.kr<br>' +
      'Office | 64-409<br>' +
      'Office Hours | before & after class, or email for an appointment<br>' +
      'TA | Yonghoon Park'
    ],
    [
      'Time & Location',
      'Time | 13:00 - 17:00 Tue<br>' +
      'Location | 64-302'
    ],
    [
      'Overview',
      'This course introduces basic concepts, methods and procedures of information design with focus on the visual representation of data. Students will be introduced to the bright world of information visualization where the intersection of text and image, perception and cognition, beauty and function, logic and emotion enables us to create splendid visions, to reveal what hides behind the data and to address effective messages. In this class, students will explore conceptual and visual solutions, and on the creative process of organizing, visualizing and communicating information.'
    ],
    [
      'Example',
      `<img src="${FILE_PATH}sample.jpg" alt="example">
      Sleeparrot (잠무샠)`
    ],
    [
      'Learning Objectives',
      'The main objective of this course is to <span style="font-weight: bold; text-decoration: underline;">transform raw data into meaningful information through a combination of statistics, technology, research, and design.</span><br><br>' +
      'Specifically, you will learn:<br>' +
      '<ul>' +
      '<li>How to analyze and critique infographics and visualizations in newspapers, books, TV, etc., and how to propose alternatives that would improve them.</li>' +
      '<li>How to plan for data-based storytelling through charts, maps, and diagrams.</li>' +
      '<li>How to design infographics that are not just attractive but, above all, informative, deep, and accurate.</li>' +
      '</ul>'
    ],
    [
      'Schedule',
      '<table>' +
      '<tr>' +
      '<th>Week</th>' +
      '<th>Content</th>' +
      '<th>Assignment</th>' +
      '</tr>' +

      '<tr>' +
      '<td>1</td>' +
      '<td>Overview of Information Design</td>' +
      '<td></td>' +
      '</tr>' +

      '<tr>' +
      '<td>2</td>' +
      '<td>Infographics: Introduction</td>' +
      '<td></td>' +
      '</tr>' +
      '</table>'
    ],
    [
      'Assignments',
      {
        content: 'Unless specified by the instructor, assignments must be completed independently. Assignments are due by the beginning of class on their due date.',
        body: [
          [
            'Overview',
            'Unless specified by the instructor, assignments must be completed independently. Assignments are due by the beginning of class on their due date.'
          ],
          [
            '<span id="late-assignments">Late Assignments</span>',
            'If you need to miss a deadline, you should inform the instructor as soon as possible, indicating when you will submit your work. The instructor will try to accommodate your needs. You should use this cause only for extraordinary personal reasons (e.g., personal illness, etc.).'
          ]
        ]
      }
    ]
  ]
}
