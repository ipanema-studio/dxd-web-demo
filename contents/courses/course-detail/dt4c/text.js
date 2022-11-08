const ACRONYM = 'dt4c'
const FILE_PATH = `${process.env.BASE_URL}contents/courses/course-detail/${ACRONYM}/file/`

export default {
  title: {
    en: 'Design Thinking for Communication',
    ko: '디자인 사고와 커뮤니케이션'
  },
  '2020s': [
    [
      `<table class="table-style-1">
        <tr>
          <td class="title">Instructor</td>
          <td class="content"><a href="http://hwajunghong.com/" target="_blank">Hwajung Hong</a></td>
        </tr>
        <tr>
          <td class="title">Email</td>
          <td class="content">hwajunghong at snu</td>
        </tr>
        <tr>
          <td class="title">Office</td>
          <td class="content">64-409</td>
        </tr>
        <tr>
          <td class="title">Office Hours</td>
          <td class="content">Before and after class, or email for an appointment.</td>
        </tr>
        <tr>
          <td class="space"></td>
        </tr>
        <tr>
          <td class="title">Location</td>
          <td class="content">64, 302</td>
        </tr>
        <tr>
          <td class="title">Time</td>
          <td class="content">Tuesday 13:00 - 16:50pm</td>
        </tr>
        <tr>
          <td class="space"></td>
        </tr>
        <tr>
          <td class="title">TA</td>
          <td class="content">고예나</td>
        </tr>
        <tr>
          <td class="title">Email</td>
          <td class="content">kfree08 at snu</td>
        </tr>
        <tr>
          <td class="title">Office Hours</td>
          <td class="content"> email for an appointment</td>
        </tr>
        <tr>
          <td class="space"></td>
        </tr>
      </table>
      <a href="https://docs.google.com/document/d/1LOWpHBZmrMXXq-0RQ1e05QltOXl2Dp5cIrwuLUF1fY0/edit?usp=sharing" target="_blank">* Update: Introduce yourself *</a>`
    ],
    [
      'Overview',
      'This course introduces basic concepts, methods and procedures of information design with focus on the visual representation of data. Students will be introduced to the bright world of information visualization where the intersection of text and image, perception and cognition, beauty and function, logic and emotion enables us to create splendid visions, to reveal what hides behind the data and to address effective messages. In this class, students will explore conceptual and visual solutions, and on the creative process of organizing, visualizing and communicating information.'
    ],
    [
      'Learning Objectives',
      `The main objective of this course is to transform raw data into meaningful information through a combination of statistics, technology, research, and design. In this class you will learn how to design successful charts, diagrams, and maps, how to arrange them to compose cohesive storytelling pieces, and how to choose the most appropriate tools in order to present those stories. We will also learn how the principles of graphic design and of interface and interaction design apply to the visualization of information. The course will have a theoretical component, as we will cover the main rules of the discipline, and also a practical one: to design basic infographics and (big) data visualizations.
      <br><br>
      At the completion of this course, you will learn:
      <br><br>
      <ul>
        <li>The basic principles of graphic design, applied to infographics and visualizations</li>
        <li>How to analyze and critique infographics and visualizations in newspapers, books, TV, etc., and how to propose alternatives that would improve them and how to propose alternatives that would improve them.</li>
        <li>How to plan for data-based storytelling through charts, maps, and diagrams.</li>
        <li>How to design infographics and visualizations that are not just attractive but, above all, informative, deep, and accurate.</li>
        <li>How to make visualization to representations to explore, make sense of, and communicate data.</li>
        <li>How to collect data relevant to our everyday lives and convert it as meaningful information through ‘programming’.</li>
        <li>How to use Adobe Illustrator / Photoshop for creating infographics.</li>
      </ul>
      <div class="divider"></div>
      `
    ],
    [
      'Schedule',
      {
        content:
          `Unless otherwise specified, the default pre-class activities include textbook/lecture slide reading and blog posting in advance.
          <br>
          The default post-class activities include assignments, projects, reading responses and peer-feedback.
          <div class="divider"></div>`,
        body: [
          [
            `Unless otherwise specified, the default pre-class activities include textbook/lecture slide reading and blog posting in advance.
            <br>
            The default post-class activities include assignments, projects, reading responses and peer-feedback.`
          ],
          [
            `<table class="table-style-2">
              <tr>
                <td style="text-align: center;">
                  1<br>
                  Mar&nbsp;17
                </td>
                <td>
                  Intro to class: Overview & Logistics<br>
                  <a href="${FILE_PATH}2020dt4c_Week1(Overview).pdf" target="_self" download>[lecture slide]</a>
                </td>
                <td>
                  <span style="font-weight: bold;">Pre-class activity:</span><br>
                  Read the online syllabus thoroughly.<br>
                  Sign-up our <a href="http://2020dt4c.tumblr.com/" target="_blank">class blog</a> (passcode has been announced)</br>
                  Install <a href="http://www.adobe.com/kr/products/illustrator.html" target="_blank">Adobe Illustrator</a><br><br>
                  <span style="font-weight: bold;">Post-class activity:</span><br>
                  <a href="/courses/dt4c-2020s/Assignments#assignment-1">Assignment 1: Visual Introduction</a> out<br><br>
                  <span style="font-weight: bold;">References:</span><br>
                  <a href="https://www.youtube.com/watch?v=VF8LMQQ0rEw">Röyksopp - Remind me</a><br>
                  <a href="https://www.youtube.com/watch?v=-LF5M9nlFQs" target="_blank">Little red riding hood</a><br>
                  <a href="https://www.good.is/infographics" target="_blank">GOOD magazine inforgraphics</a><br>
                  <a href="https://www.nytimes.com/interactive/2019/12/30/us/2019-year-in-graphics.html" target="_blank">NYTimes Interactive Visualization</a><br>
                  <a href="http://www.informationisbeautiful.net/" target="_blank">Information is Beautiful</a><br>
                  <a href="http://www.informationisbeautifulawards.com/" target="_blank">Kantar Information is Beautiful Awards</a><br><br>

                </td>
              </tr>

              <tr>
                <td style="text-align: center;">
                  2<br>
                  Mar&nbsp;24
                </td>
                <td>
                  Visual Design Basics<br>
                  <a href="${FILE_PATH}2020dt4c_Week2(VDbasics).pdf" target="_self" download>[lecture slide]</a>
                  <!-- <a href="${FILE_PATH}sample.pdf" target="_self" download>[lecture slide]</a> -->
                </td>
                <td>
                  <span style="font-weight: bold;">Pre-class activity:</span><br>
                  Install <a href="http://www.adobe.com/kr/products/illustrator.html" target="_blank">Adobe Illustrator</a><br>
				  <a href="https://helpx.adobe.com/kr/illustrator/tutorials.html?promoid=599F8QXB&mv=other" target="_blank">Illustrator Tutorial</a><br><br>
                  <span style="font-weight: bold;">In-class activity:</span><br>
                  Lecture<br>
                  Illustrator Tutorial<br><br>

                  <span style="font-weight: bold;">Post-class activity:</span><br>
                  <a href="/courses/dt4c-2020s/Projects#project-1">Project 1 (My favorite things: Small multiples)</a> out<br><br>
                  <span style="font-weight: bold;">References:</span><br>
                  <a href="https://www.nytimes.com/interactive/2019/12/30/us/2019-year-in-graphics.html" target="_blank">NYT 2019: The Year in Visual Stories and Graphics</a><br>
                  <a href="https://www.scmp.com/infographic/" target="_blank">South China Morning Post Infographics</a><br>
                  <a href="https://multimedia.scmp.com/culture/article/SCMP-printed-graphics-memory/" target="_blank">SCMP Print Arcade</a><br>
                  <a href="https://www.nytimes.com/interactive/2020/03/20/us/coronavirus-model-us-outbreak.html?action=click&module=Spotlight&pgtype=Homepage" target="_blank">Coronavirus Could Overwhelm U.S. Without Urgent Action, Estimates Say</a><br>
                  <a href="https://multimedia.scmp.com/infographics/news/china/article/3047038/wuhan-virus/index.html" target="_blank">Coronavirus: the new disease Covid-19 explained</a><br>

                  <a href="http://parisvsnyc.blogspot.kr" target="_blank">Paris vs. NYC</a><br>
                  <a href="http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0000hv" target="_blank">Edward Tufte's discussion forum: Illustration of Small Multiples</a><br>
                   Visual explainations (p.105-p.119) / Edward Tufte<br>
                  Envisioning information (p.67-p.79) / Edward Tufte<br>
                  <a href="http://www.simonchild.work/" target="_blank">San Francisco Icon Set</a> by Simon Child<br>
                  <a href="http://www.mazakii.com" target="_blank">Jia Zhang Illustration<br>
                  <a href="https://calmtheham.com/" target="_blank">Calm the ham</a><br>
                  <a href="https://designschool.canva.com/blog/design-rules/" target="_blank">20 Design Rules You Should Never Break</a><br>
                  <a href="https://designschool.canva.com/blog/visual-design-composition/" target="_blank">10 Rules of Composition All Designers Live By</a><br>
                  <a href="https://designschool.canva.com/blog/visual-design-composition/" target="_blank">20 Typography Mistakes Every Beginner Makes</a><br>
                  <a href="https://designschool.canva.com/blog/combining-fonts-10-must-know-tips-from-a-designer/" target="_blank">10 Golden Rules You Should Live By When Combining Fonts</a><br>


                </td>
              </tr>

              <tr>
                <td style="text-align: center;">
                  3<br>
                  Mar&nbsp;31
                </td>
                <td>
                  Inforgraphics (1): Introduction<br>
                  <!-- <a href="${FILE_PATH}sample.pdf" target="_self" download>[lecture slide]</a> -->
                </td>
                <td>
                  <span style="font-weight: bold;">Pre-class activity:</span><br>
                  <i class="icon assignment"></i><a href="/courses/dt4c-2020s/Assignments#assignment-1">Assignment 1: Visual Introduction</a> due<br><br>

                  <span style="font-weight: bold;">In-class activity:</span><br>
                  Lecture<br>
                  Presentation: Assignment 1<br><br>

                  <span style="font-weight: bold;">Post-class activity:</span><br>
                  Collecting concept sketches, inspirational sources for P1<br><br>

                  <span style="font-weight: bold;">References:</span><br>
                  <a href="http://www.ted.com/talks/jacek_utko_asks_can_design_save_the_newspaper?language=en" target="_blank">Can design save newspapers?</a><br>
                  <a href="https://www.youtube.com/watch?v=oww7oB9rjgw" target="_blank">Steal like an artist</a><br>
                  <a href="https://youtu.be/FepHIzaXTyg" target="_blank">Remix in Disney</a><br>
                  <a href="https://creativecommons.org/licenses/" target="_blank">Creative Commons</a><br>
                  <a href="http://www.comicsanscriminal.com/" target="_blank">Comic Sans Criminal</a><br>
                  <a href="http://healthland.time.com/2013/02/20/what-makes-health-care-so-expensive/" target="_blank">What Makes Health Care So Expensive?</a><br><br>
                  <a href="http://red-dot.de/cd/en/online-exhibition/" target="_blank">Red Dot Award: Communication Design</a><br>
                <a href="http://sarapiccolomini.com" target="_blank">Freedom in Countries</a> by Sara Piccolomini<br>
                 Graphic design portfolios<br>
                 <a href="http://chasematt.com/" target="_blank">chasematt.com</a><br>
                 <a href="http://andyrementer.com/" target="_blank">andyrementer.com</a><br>
                 <a href="http://emilkozole.com/" target="_blank">emilkozole.com</a><br>
                 <a href="http://madebytung.com/emilytu/" target="_blank">Emily Tu<br>
                 <a href="http://sarapiccolomini.com"  target="_blank">sarapiccolomini.com</a><br>
                 <a href="http://calmtheham.com/collections/filmography" target="_blank">filmography series</a><br>
                 <a href="http://www.columnfivemedia.com/" target="_blank">column five media</a><br>
                 <a href="https://brunch.co.kr/@meanimize/41" target="_blank">Icon design</a> by meanimize @ Brunch<br>
                 <a href="https://brunch.co.kr/@meanimize/19" target="_blank">The art of simplicity</a> by meanimize @ Brunch<br><br>

                </td>
              </tr>

              <tr>
                <td style="text-align: center;">
                  4<br>
                  Apr&nbsp;7
                </td>
                <td>
                  Inforgraphics (2): Planning<br>
                  <!-- <a href="${FILE_PATH}sample.pdf" target="_self" download>[lecture slide]</a> -->
                </td>
                <td>
                  <span style="font-weight: bold;">Pre-class activity:</span><br>
                  <i class="icon project"></i><a href="/courses/dt4c-2020s/Projects#project-2">Project 2: Infographics: Visual Storytelling</a> out<br>
                  <i class="icon assignment"></i><a href="/courses/dt4c-2020s/Assignments#assignment-2">Assignment 2: Online Tools out</a><br><br>

                  <span style="font-weight: bold;">In-class activity:</span><br>
                  Lecture<br>
                  P1 1:1 feedback session<br><br>

                  <span style="font-weight: bold;">Post-class activity:</span><br>
                  <i class="icon reading"></i>Project 2: Infographics</a> out<br>
                  <a href="reading.html">Reading assignment 1</a> out<br><br>

                  <span style="font-weight: bold;">References:</span><br>

                </td>
              </tr>

            </table>`
          ]
        ]
      }
    ],
    [
      'Projects',
      {
        content:
          `You will perform exercises and activities to practice what you learn, attend to lectures to gain new information/perspectives, engage in projects to learn through making, conduct readings to balance theory and practice, participate in critiques to verbalize your views and consider alternate perspectives, join in discussions to develop shared understanding, give presentations to communicate your thinking, complete tutorials and learn software (Adobe Creative Suite).
          <br><br>
          Ultimately, you will create:
          <br><br>
          <ul>
            <li>Icons, diagrams, charts, and graphs</li>
            <li>Infographics</li>
            <li>Data visualizations</li>
          </ul>
          <br>
          <a href="http://hwajunghong.com/" target="_blank">Project Gallery</a>
          <div class="divider"></div>`,
        body: [
          [
            'Overview',
            `Unless specified by the instructor, assignments must be completed independently. Assignments are due by the beginning of class on their due date.`
          ],
          [
            'Late Assignments',
            `If you need to miss a deadline, you should inform the instructor as soon as possible, indicating when you will submit your work. The instructor will try to accommodate your needs. You should use this clause only for extraordinary personal reasons (e.g., personal illness, etc.).
            <br><br>
            The general policy is that late work will be deducted 20% of its total grade per calendar day, starting on the same day it is due. It is at the instructor’s discretion to accept late work and assign late penalties.
            <div class="divider"></div>`
          ],
          [
            `<span class="subsection-title" id="project-1">
              PROJECT 1: MY FAVORITE THINGS - SMALL MULTIPLES
            </span>`
          ],
          [
            `<table class="table-style-1">
              <tr>
                <td class="title">Due</td>
                <td>Oct 8 (print&presentation), Oct 10 (digital submission)</td>
              </tr>
              <tr>
                <td class="title">Format</td>
                <td>A3 print and e-copy on tumblr and web portfolio</td>
              </tr>
            </table>`
          ],
          [
            `Objective`,
            `Small multiples organize their images by means of a vareity of devices: girds, compartments, call-outs, narrative sequesnce, overlap, and integration of multiple elements into a common field. Inspired by Bonnie Scranton & Edward Tufte's work on 12 versions of a wine glass, you will:
            <br><br>
            <ul>
              <li>Define visual elements in the idea of information</li>
              <li>Create visual lists of objects, activities, narratives, and so forth</li>
              <li>Develop your own visual pattern and style through repetition and change</li>
            </ul>`
          ],
          [
            `Requirement`,
            `<ul>
              <li>Create 12 variations of visual lists (icons, illustrations, any kinds of visual representation techniques, and so forth)</li>
              <li>Bring printed paper and post e-copy (pdf, png) to our class tumblr and your web portfolio</li>
            </ul>`
          ],
          [
            `Grading Criteria`,
            `<ul>
              <li>Originality of a topic and of a graphic style</li>
              <li>Creativity in a topic</li>
              <li>Challenging in terms of a tool use</li>
              <li>Completeness in the design of each element</li>
              <li>Consistency across 12 variations</li>
              <li>Overall layout including alignment, margin, and font</li>
            </ul>`
          ],
          [
            `References`,
            `<ul>
              <li>Visual explainations (p.105-p.119) / Edward Tufte</li>
              <li>Envisioning information (p.67-p.79) / Edward Tufte</li>
              <li>Edward Tufte's discussion forum: Illustration of Small Multiples</li>
              <li>San Francisco Icon Set by Simon Child</li>
              <li>Calm the ham</li>
            </ul>`
          ]
        ]
      }
    ],
    [
      `Assignments`,
      {
        content:
          `Unless specified by the instructor, assignments must be completed independently.<br>
          Assignments are due by the beginning of class on their due date.
          <div class="divider"></div>`,
        body: [
          [
            `Overview`,
            `Unless specified by the instructor, assignments must be completed independently.<br>
            Assignments are due by the beginning of class on their due date.`,
          ],
          [
            `Late Assignments`,
            `If you need to miss a deadline, you should inform the instructor as soon as possible, indicating when you will submit your work. The instructor will try to accommodate your needs. You should use this clause only for extraordinary personal reasons (e.g., personal illness, etc.).
            <br><br>
            The general policy is that late work will be deducted 20% of its total grade per calendar day, starting on the same day it is due. It is at the instructor’s discretion to accept late work and assign late penalties.
            <div class="divider"></div>`
          ],
          [
            `<span class="subsection-title" id="assignment-1">
              ASSIGNMENT 1: VISUAL INTRODUCTION
            </span>`
          ],
          [
            `<table class="table-style-1">
              <tr>
                <td class="title">Due</td>
                <td>Mar 31 (digital submission)</td>
              </tr>
              <tr>
                <td class="title">Format</td>
                <td>pdf/png</td>
              </tr>
            </table>`
          ],
          [
            `Instruction`,
            `<ul>
              <li>Ideate interesting ways to introduce yourself “visually”</li>
              <li>You can use any tools (hand-drawing sketches, markers as well as digital tools like adobe, PPT)</li>
              <li>Prepare 20-sec speech</li>
            </ul>`
          ]
        ]
      }
    ],
    [
      'Grading',
      `<ul>
        <li>Individual projects (Interim assignments: 10%, Major projects: 60%)</li>
        <li>Reading responses: 15%</li>
        <li>Online participation: 10%</li>
        <li>Attendance: 5%</li>
      </ul>
      <br>
      <span style="font-weight: bold;">Late Policy</span>
      <br><br>
      Assignments are due at the start of class on the day they are due. Late assignments will be penalized at a rate of one grade step per day. Assignments more than two days late will not be accepted. Presentations may not be late. Reading assignments may not be late either; they serve to energize class discussion. Note that a computer's failure is not an excuse (it represents poor planning on your part).
      <div class="divider"></div>`
    ],
    [
      'Texts',
      `<ul>
        <li>(Required) Envisioning information / Edward R. Tufte [<a href="http://www.amazon.com/Envisioning-Information-Edward-R-Tufte/dp/0961392118/ref=sr_1_1?ie=UTF8&qid=1456977614&sr=8-1&keywords=Envisioning+information" target="_blank">Amazon</a>]</li>
        <li>(Required) Visual explanations : images and quantities, evidence and narrative / Edward R. Tufte [<a herf="https://www.amazon.com/Visual-Explanations-Quantities-Evidence-Narrative/dp/0961392126/ref=sr_1_1?dchild=1&keywords=Visual+explanations&qid=1584356765&sr=8-1" target="_blank">Amazon</a>]</li>
        <li>(Recommended) The information Design Bookself compiled by Karen Chang, Professor of Visual Communicaiton at UW [<a href="https://www.goodreads.com/list/show/46355.The_Information_Design_Bookshelf" target="_blank">goodread</a>]</li>
        <li>(Recommended) Infographics : the power of visual storytelling / Jason Lankow, Josh Ritchie, Ross Crooks</li>
        <li>(Recommended) 좋아 보이는 것들의 비밀, 인포그래픽: 정보로 소통하는 비주얼 스토리텔링 / 김묘영</li>
      </ul>
      <div class="divider"></div>`
    ],
    [
      'Online Tutorials',
      `<ul>
        <li>
          Adobe Illustrator
          <ul>
            <li><a href="https://helpx.adobe.com/kr/illustrator/tutorials.html?promoid=599F8QXB&mv=other" target="_blank">Adobe official site</a></li>
            <li><a href="https://www.youtube.com/watch?list=PLy4jYg91Xrc0sF4sPRUo7wuJpCWNI1A1F&v=XsLuVzHavjw&feature=emb_title" target="_blank">Youtube Illustrator Tutorial</a></li>
          </ul>
        </li>
        <li>
          Infographics / Information Design
          <ul>
            <li>Coursera Design and Make Infographics</li>
            <li>Coursera Information Design</li>
          </ul>
        </li>
        <li>
          Processing
          <ul>
            <li><a href="https://www.processing.org" target="_blank">Processing</a></li>
            <li><a href="https://www.youtube.com/watch?v=oRwrEd1_u4I&list=PLTqGVDX47Wec41jtO3J_aC6V7sUm3SFmr" target="_blank">비주얼 인터랙션 디자인을 위한 프로세싱 코딩 실습 by 이태일 교수 (고려대학교)</a></li>
            <li><a href="https://www.youtube.com/watch?v=2VLaIr5Ckbs&list=PLRqwX-V7Uu6ZYJC7L-r6rX6utt6wwJCyi" target=_blank">Daniel Shiffman's Hello Processing</a></li>
          </ul>
        </li>
      </ul>
      <div class="divider"></div>`
    ],
    [
      'Honor Code',
      `This class abides by the SNU Honor Code. All assigned work is expected to be individual, except as an approved part of group projects. You are encouraged to discuss the assignments with your classmates; however, what you hand in should be your own work.`
    ]
  ],
  '2018f': [
    [
      'Syllabus',
      `<a href="${FILE_PATH}sample.pdf" target="_self" download>2020 DT4C Syllabus</a>`
    ],
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
      `<img src="${FILE_PATH}sample.png" alt="example">
      P1: Small Multiples`
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
      'Honor Code',
      'This <a href="/courses/dt4c-2020s/Assignments#late-assignments">class</a> abides by the SNU Honor Code. All assigned work is expected to be individual, except as an approved part of group projects. You are encouraged to discuss the assignments with your classmates; however, what you hand in should be your own work.'
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
